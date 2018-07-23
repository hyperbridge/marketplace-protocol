import { normalize } from 'normalizr'
import Vue from 'vue'
import schema from './schema'
//import FundingProtocol from 'funding-protocol'
import * as ethereum from '@/framework/ethereum'
import FundingProtocol from 'funding-protocol'
import * as db from '@/db'

let rawData = {}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
        ...db.funding.config.data[0],
        projects: db.funding ? db.funding.projects.data : []
    }

    const normalizedData = normalize(rawData, {
        projects: [schema.project],
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Funding] Initializing...")

        updateState()

        store.commit('updateState', state)
    },
    async initEthereum(store, payload) {
        FundingProtocol.api.ethereum.init(
            store.state.ethereum[store.state.current_ethereum_network].user_from_address,
            store.state.ethereum[store.state.current_ethereum_network].user_to_address
        )

        for (let contractName in store.state.ethereum[store.state.current_ethereum_network].contracts) {
            const contract = store.state.ethereum[store.state.current_ethereum_network].contracts[contractName]

            if (contract.address) {
                await FundingProtocol.api.ethereum.setContractAddress(contractName, contract.address)
                    .catch(() => {
                        store.state.ethereum[store.state.current_ethereum_network].contracts[contractName].address = null

                        store.dispatch('updateState')
                    })
            }
        }
    },
    updateState(store, payload) {
        console.log("[BlockHub][Funding] Updating store...")

        updateState()

        store.commit('updateState', state)
    },
    viewProject(id) {
        console.log('viewProject', id)
    },
    async createProject(store, payload) {
        return store.commit('createProject', payload)
    },
    async updateProject(store, payload) {
        store.commit('updateProject', payload)
    }
}

export const mutations = {
    updateState(s, payload) {
        for (let x in payload) {
            s[x] = payload[x]
        }

        db.funding.config.update(state)
        db.save()
    },
    updateProject(state, payload) {
        const project = db.funding.projects.findOne({ 'id': payload.id })

        project.name = payload.name
        state.projects[payload.id].name = payload.name

        db.save()

        return new Promise(async (resolve, reject) => {
            resolve()
        })
    },
    async createProject(state, payload) {
        const projectTitle = payload.name
        const projectDescription = payload.description
        const projectAbout = payload.content
        const projectMinContributionGoal = 1000
        const projectMaxContributionGoal = 10000
        const projectContributionPeriod = 4
        const noRefunds = false
        const noTimeline = true

        return new Promise(async (resolve, reject) => {
            const projectRegistrationContract = FundingProtocol.api.ethereum.state.contracts.ProjectRegistration.deployed

            projectRegistrationContract.ProjectCreated().watch((err, res) => {
                if (err) {
                    console.warn('[BlockHub] Error', err)

                    return reject(err)
                }

                payload.$loki = undefined
                payload.id = res.args.projectId.toNumber()

                try {
                    db.funding.projects.insert(payload)
                } catch (e) {
                    try {
                        db.funding.projects.update(payload)
                    } catch(e) {
                        reject(e)
                    }
                }

                Vue.set(state.projects, payload.id, payload)

                resolve(payload)
            })

            await projectRegistrationContract.createProject(
                projectTitle,
                projectDescription,
                projectAbout,
                projectMinContributionGoal,
                projectMaxContributionGoal,
                projectContributionPeriod,
                noRefunds,
                noTimeline
            )
        })
    },
    deployContract(state, payload) {
        if (!state.ethereum[state.current_ethereum_network].contracts[payload.contractName]) {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = {
                created_at: null,
                address: null
            }
        }

        let links = []
        let params = []

        if (payload.contractName !== 'FundingStorage') {
            params = [
                state.ethereum[state.current_ethereum_network].contracts.FundingStorage.address
            ]
        }

        if (FundingProtocol.api.ethereum.state.contracts[payload.contractName].links) {
            links = FundingProtocol.api.ethereum.state.contracts[payload.contractName].links

            for (let i in links) {
                links[i].address = state.ethereum[state.current_ethereum_network].contracts[links[i].name].address
            }
        }


        FundingProtocol.api.ethereum.deployContract(payload.contractName, links, params).then(async (contract) => {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].created_at = Date.now()
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].address = contract.address

            db.funding.config.update(state)
            db.save()

            if (payload.contractName === 'ProjectRegistration') {
                const blankAddress = 0x0000000000000000000000000000000000000000
                const projectRegistrationContract = FundingProtocol.api.ethereum.state.contracts.ProjectRegistration.deployed
                const fundingStorageContract = FundingProtocol.api.ethereum.state.contracts.FundingStorage.deployed

                await fundingStorageContract.registerContract("ProjectRegistration", blankAddress, projectRegistrationContract.address)
                await projectRegistrationContract.initialize()

                const developerContract = FundingProtocol.api.ethereum.state.contracts.Developer.deployed
                await fundingStorageContract.registerContract("Developer", blankAddress, developerContract.address)
                await developerContract.initialize()

                let developerId = null
                const developerAccount = state.ethereum[state.current_ethereum_network].user_from_address

                developerContract.DeveloperCreated().watch((err, res) => {
                    if (err) {
                        console.warn('[BlockHub] Error', err)
                    }
                    
                    developerId = res.args.developerId
                })

                await developerContract.createDeveloper("Hyperbridge", { from: developerAccount })
            }
        })

    }
}

