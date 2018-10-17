import Vue from 'vue';
import moment from 'moment';

import transactions from '@/db/seed/asset-transactions';
import assetsData from '@/db/seed/assets';
import collectionsData from '@/db/seed/collections';

const assets = {
    namespaced: true,
    state: {
        transactions: [],
        assets: assetsData.reduce((assets, asset) => ({
            ...assets,
            [asset.id]: {
                ...asset,
                market_price: 0,
                selected: false,
                for_sale: false,
            }
        }), {}),
        collections: collectionsData.reduce((collections, collection) => ({
            ...collections,
            [collection.id]: collection
        }), {}),
        snipers: {
            1: { id: 1, asset: 4, priceMin: 31, priceMax: 59, expDate: "2018-12-15T14:29:47+02:00" },
            3: { id: 3, asset: 6, priceMin: 11, priceMax: 89, expDate: "2018-11-14T14:29:47+02:00" }
        }
    },
    mutations: {
        addAsset(state, { prop = 'assets', data }) {
            state[prop] = { ...state[prop], [data.id]: data };
        },
        create(state, { prop = 'assets', data }) {
            state[prop] = { ...state[prop], [data.id]: data };
        },
        updateAsset(state, { prop = 'assets', id, data }) {
            // Payload could be written in format => { 'id_28313': { ...payload data } }
            state[prop][id] = { ...state[prop][id], ...data };
        },
        update(state, { prop = 'assets', id, data }) {
            state[prop][id] = { ...state[prop][id], ...data };
        },
        delete(state, { prop = 'assets', id }) {
            const { [id]: value, ...values } = state[prop];
            state[prop] = values;
        },
        deleteAsset(state, { prop = 'assets', id }) {
            // delete state[prop][id];
            Vue.delete(state[prop][id]);
        },
        negateValue(state, { prop = 'assets', id, iprop }) {
            state[prop][id][iprop] = !state[prop][id][iprop];
        },
        updateAssets(state, { prop = 'assets', data, ids }) {
            if (!ids) {
                for (let id in state[prop]) {
                    state[prop][id] = { ...state[prop][id], ...data };
                }
            } else {
                for (let id of ids) {
                    const payloadData = data[id] || data;
                    state[prop][id] = { ...state[prop][id], ...payloadData };
                }
            }
        },
        loadTransactions(state, payload = transactions) {
            state.transactions = payload
                .map((transaction, index) => ({
                    ...transaction,
                    createdAt: moment().add(-1 * (index + 1), 'days').format(),
                    updatedAt: moment().add(-1 * (index + 1), 'days').format(),
                    edited: false
                }));
        },
        addTransactionAsset(state, payload) {
            const { tradeId, target, asset } = payload;
            const transactionKey = state.transactions.findIndex(trx => trx.id === tradeId);
            state.transactions[transactionKey][target].selling.push(asset);

            if (!transactions[transactionKey].edited) transaction.edited = true;
        },
        deleteTransactionAsset(state, payload) {
            const { tradeId, target, assetId } = payload;
            // const assetKey = state.transactions[]
            state.transactions[transactionKey][target].selling.splice(assetKey, 1);
        }
    },
    actions: {

    },
    getters: {
        assets: ({ assets }, getters, { marketplace: { collections }}) => Object.values(assets)
            .reduce((populated, asset) => ({
                ...populated,
                [asset.id]: {
                    ...asset,
                    offers_list: asset.offers_list.map(id => assets[id]),
                    inventory_list: asset.inventory_list.map(id => assets[id]),
                    collections: asset.collections.map(id => collections[id])
                }
            }), {}),
        array: (state, { assets }) => Object.values(assets),
        assetsArray: state => Object.values(state.assets),
        inventoryAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => !asset.for_sale),
        selectedAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => asset.selected),
        forSaleAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => asset.for_sale),
        collections: ({ assets, collections }) => Object.values(collections)
            .reduce((populated, collection) => ({
                ...populated,
                [collection.id]: {
                    ...collection,
                    assets: collection.assets.map(id => assets[id])
                }
            }), {}),
        collectionsArray: (state, { collections }) => Object.values(collections),
        snipers: ({ snipers, assets }) => Object.values(snipers)
            .reduce((populated, sniper) => ({
                ...populated,
                [sniper.id]: {
                    ...sniper,
                    asset: assets[sniper.asset]
                }
            }), {})
    }
}

export default assets;