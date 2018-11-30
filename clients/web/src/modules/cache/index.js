import Vue from 'vue'
import { normalize } from 'normalizr'

let rawData = {
    initial: true,
    screens: {}
}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData
    }

    const normalizedData = normalize(rawData, {
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {
}

export const actions = {
    updateScreenState(store, payload) {
        store.commit('updateScreenState', payload)
    }
}

export const mutations = {
    updateScreenState(state, payload) {
        Vue.set(state.screens, payload.path, payload.state)
    }
}
