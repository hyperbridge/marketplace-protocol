import Vue from 'vue'
import url from 'url'
import feathersClient from '~/framework/feathers-client'
import feathersVuex, { initAuth } from 'feathers-vuex'

export default async ({ app, store, req }, bbb) => {
        const { dispatch, commit } = store
    let origin = null
    let storage = null

    let feathers = null
    let service = null
    let auth = null
console.log('zzz', app.req, bbb)
    if (process.server) {
    console.log(store, store.state)
        //feathers = feathersClient(origin, storage)


        // origin = process.env.NODE_ENV !== 'production' ? `http://localhost:9001` : 'https://api.blockhub.gg'

        // storage = {
        //     getItem() { },
        //     setItem() { },
        //     removeItem() { }
        // }

        const origin = process.env.NODE_ENV !== 'production' ? `http://localhost:9001` : 'https://api.blockhub.gg' // eslint-disable-line no-negated-condition

        const storage = {
            getItem() {
                return store.state.auth ? store.state.auth.accessToken : ''
            },
            setItem(key, value) {
                store.state.auth.accessToken = value
            },
            removeItem() {
                store.state.auth.accessToken = null
            }
        }
console.log('44444')
        feathers = feathersClient(origin, storage)

        /*
            TODO: If the user is authenticated, we can actually pass it to Sentry as part
            of the context to have a better understanding of how to reproduce an error.

            $sentry.configureScope(scope => scope.setUser({ username: 'john.doe@example.com' }))
        */

    } else {
    console.log('bbbbbbbbbb')
        feathers = feathersClient()
        
        //]

    }

    const FeathersVuex = feathersVuex(feathers, { idField: 'id', enableEvents: true })

    Vue.use(FeathersVuex)

    service = FeathersVuex.service
    auth = FeathersVuex.auth

    //plugins = [
    service('accounts', { paginate: true })(store)
    service('messages', { paginate: true })(store)
    service('profiles', { paginate: true })(store)
    service('products', { paginate: true })(store)
    service('achievements', { paginate: true })(store)
    service('assets', { paginate: true })(store)
    service('badges', { paginate: true })(store)
    service('battlepasses', { paginate: true })(store)
    service('bounties', { paginate: true })(store)
    service('collections', { paginate: true })(store)
    service('communities', { paginate: true })(store)
    service('discussions', { paginate: true })(store)
    service('events', { paginate: true })(store)
    service('files', { paginate: true })(store)
    service('leaderboards', { paginate: true })(store)
    service('licenses', { paginate: true })(store)
    service('logs', { paginate: true })(store)
    service('offers', { paginate: true })(store)
    service('ratings', { paginate: true })(store)
    service('reviews', { paginate: true })(store)
    service('realms', { paginate: true })(store)
    service('servers', { paginate: true })(store)
    service('suggestions', { paginate: true })(store)
    service('tournaments', { paginate: true })(store)
    service('projects', { paginate: true })(store)
    service('ideas', { paginate: true })(store)
    service('tags', { paginate: true })(store)
    service('votes', { paginate: true })(store)
    service('search', { paginate: true })(store)
    // service('application', { paginate: true })
    auth({
        userService: 'accounts'
    })(store)

    if (process.server) {
        const cookieToken = app.$cookies.get('feathers-jwt')
console.log('ggggg', cookieToken, app.$cookies.get)
        if (cookieToken) {
            try {
                const { accessToken } = await dispatch('auth/authenticate', {
                    strategy: 'jwt',
                    accessToken: cookieToken
                })

                dispatch('login', {
                    token: accessToken,
                    user: store.state.auth.user
                })
                
                // const { payload } = jwt.decode(accessToken, { complete: true })

                // commit('accounts/setCurrent', payload.userId)
                // commit('auth/setAccessToken', accessToken)
                // commit('auth/setPayload', payload)
                // commit('auth/setUser', getters['accounts/current'])

                await dispatch('application/authenticate')
            } catch (error) {
                console.log('[BlockHub] Error logging in', error)
                dispatch('logout')
                return
            }
        } else {
            dispatch('logout')
        }
        await initAuth({
            commit,
            dispatch,
            req: { headers: { cookie: `feathers-jwt=${app.$cookies.get('feathers-jwt')}` }},
            moduleName: 'auth',
            cookieName: 'feathers-jwt'
        })
            .catch(e => { console.log('Feathers exception', e) })
    }

    // Set feathers instance on app
    // This way we can use it in middleware and pages asyncData/fetch
    app.feathers = feathers

    const feathersPlugin = {
        install(Vue, options) {
            Vue.mixin({
                created() {
                    // access to the client anywhere
                    this.$feathers = feathers

                    // Setting up the services
                    this.$services = feathers.services
                }
            })
        }
    }

    Vue.use(feathersPlugin)
}
