import Vue from 'vue'
import { normalize } from 'normalizr'
import schema from './schema'
import * as Ethereum from '../../framework/ethereum'
import * as PeerService from '../../framework/peer-service'
import * as DesktopBridge from '@/framework/desktop-bridge'
import * as DB from '@/db'
import Token from 'hyperbridge-token'

let rawData = {}

export let state = null

const updateState = (savedData, updatedState = {}) => {
    rawData = {
        ...rawData,
        ...savedData,
        ...updatedState
    }

    const normalizedData = normalize(rawData, {
    })

    state = { ...rawData, ...normalizedData.entities }
};

export const getters = {
    privileges() {
        return [
            'edit'
        ]
    }
}

export const initDesktop = (store) => {
    if (!DesktopBridge.isConnected()) {
        return
    }
    
    // tell desktop to create an account and send it back
    const data = {
        seed: 13891737193 // derived from input data + mouse movement
    }

    DesktopBridge.sendCommand('getAccountRequest', data).then((res) => {
        console.log('ssss', res)
        store.state.account.email = res.account.email
        store.state.account.public_address = res.account.public_address
    })
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub] Network connecting...')

        updateState(DB.network.config.data[0], store.state)

        state.connection.status.code = null
        state.connection.status.message = "Establishing connection..."

        store.commit('updateState', state)

        store.dispatch('checkInternetConnection')
        store.dispatch('checkEthereumConnection')

        setInterval(() => {
            if (store.state.connection.auto) {
                store.dispatch('checkEthereumConnection')
            }
        }, 5000)
        
        initDesktop(store)
    },
    updateState(store, payload) {
        console.log('[BlockHub][Marketplace] Updating store...')

        updateState(store.state)

        store.commit('updateState', state)
    },
    async initEthereum(store, payload) {
        Token.api.ethereum.init(
            store.state.ethereum[store.state.current_ethereum_network].user_from_address,
            store.state.ethereum[store.state.current_ethereum_network].user_to_address
        )

        for (let contractName in store.state.ethereum[store.state.current_ethereum_network].contracts) {
            const contract = store.state.ethereum[store.state.current_ethereum_network].contracts[contractName]

            if (contract.address) {
                await Token.api.ethereum.setContractAddress(contractName, contract.address)
                    .catch(() => {
                        store.state.ethereum[store.state.current_ethereum_network].contracts[contractName].address = null
                        store.state.ethereum[store.state.current_ethereum_network].contracts[contractName].created_at = null

                        store.dispatch('updateState')
                    })
            } else {
                store.state.ethereum[store.state.current_ethereum_network].contracts[contractName].created_at = null
            }
        }
    },
    checkEthereumConnection(store, payload) {
        const success = () => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            store.state.connection.status.code = null
            store.state.connection.status.message = null
        }

        const failure = (err) => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            // store.state.connection.status.code = 344
            // store.state.connection.status.message = err

            // TODO: fallback to peer datasource
        }

        Ethereum.init().then(success, failure).catch(failure)
    },
    checkInternetConnection(store, payload) {
        console.log('[BlockHub] Connection status: ' + JSON.stringify(store.state.connection))

        if (!navigator.onLine) {
            store.commit('setInternetConnection', { connected: false, message: "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection." })
            return
        }

        const xhr = new XMLHttpRequest()
        const file = "/static/img/blank.png"
        const randomNum = Math.round(Math.random() * 10000)

        xhr.open('HEAD', file + "?rand=" + randomNum, true)
        xhr.send()

        function processRequest(e) {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 304) {
                    store.commit('setInternetConnection', { connected: true, message: "Connected." })
                    store.state.connection.datasource = true // TEMP
                } else {
                    store.commit('setInternetConnection', { connected: false, message: "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection." })
                }
            }
        }

        xhr.addEventListener('readystatechange', processRequest, false)
    },
    signIn(store, payload) {
        store.commit('signIn', payload)
    },
    signOut(store, payload) {
        store.commit('signOut', payload)
    },
    async deployContract(store, payload) {
        return new Promise((resolve, reject) => {
            if (!state.ethereum[state.current_ethereum_network].contracts[payload.contractName]) {
                state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = {
                    created_at: null,
                    address: null
                }
            }

            let links = []
            let params = []

            if (payload.contractName !== 'EternalStorage') {
                params = [
                    state.ethereum[state.current_ethereum_network].contracts.EternalStorage.address
                ]
            }

            if (Token.api.ethereum.state.contracts[payload.contractName].links) {
                links = Token.api.ethereum.state.contracts[payload.contractName].links

                for (let i in links) {
                    links[i].address = state.ethereum[state.current_ethereum_network].contracts[links[i].name].address
                }
            }

            Token.api.ethereum.deployContract(payload.contractName, links, params).then(async (contract) => {
                state.ethereum[state.current_ethereum_network].contracts[payload.contractName].created_at = Date.now()
                state.ethereum[state.current_ethereum_network].contracts[payload.contractName].address = contract.address

                DB.funding.config.update(state)
                DB.save()

                if (payload.contractName === 'TBD') {
                }

                store.dispatch('updateState')

                resolve(contract)
            })
        })
    },
    async deployContract(store, payload) {
        return new Promise((resolve, reject) => {
            if (!state.ethereum[state.current_ethereum_network].contracts[payload.contractName]) {
                state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = {
                    created_at: null,
                    address: null
                }
            }

            const meta = Token.Ethereum.Contracts[payload.contractName]
            const contract = new window.web3.eth.Contract(meta.abi)

            contract.deploy({
                data: meta.bytecode
            }).send({
                from: state.ethereum[state.current_ethereum_network].user_from_address,
                gas: 4500000
            }).then((res) => {
                state.ethereum[state.current_ethereum_network].contracts[payload.contractName].created_at = Date.now()
                state.ethereum[state.current_ethereum_network].contracts[payload.contractName].address = res._address

                DB.network.config.update(state)
                DB.save()
            })
        })
    }
}

export const mutations = {
    updateState(state, payload) {
        for (let x in payload) {
            Vue.set(state, x, payload[x])
        }
    },
    signIn(state, payload) {
        state.signed_in = true

        DB.network.config.update(state)
        DB.save()
    },
    signOut(state, payload) {
        state.signed_in = false

        DB.network.config.update(state)
        DB.save()
    },
    setInternetConnection(state, payload) {
        state.connection.internet = payload.connected
        state.connection_message = payload.message
    },
    beforeLoadRoute(state, payload) {
        state.loading = true
    },
    afterLoadRoute(state, payload) {
        state.loading = false
    },
    submitTransaction(state, payload) {
        const success = (id) => {
        }
    },
    activateModal(state, payload) {
        state.active_modal = payload
    },
    UPDATE_CLIENT_SETTINGS (state, property) {
        Vue.set(state.account.settings.client, property, !state.account.settings.client[property])
    }
}
