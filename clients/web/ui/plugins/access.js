import Vue from 'vue'
import sdk from '../../../../sdks/node/build/src'

export default ({ app, store }) => {
    // access = access.default.access
    console.log(sdk.access, 'bbbb')

    const $access = sdk.access.validator

    const plugin = {
        install() {
            Vue.mixin({
                created() {
                    this.$access = $access
                    this.$accessConfig = sdk.access
                }
            })
        }
    }

    Vue.use(plugin)

    Vue.directive('access', {
        bind(el, binding, vnode, oldVnode) {
            const { value } = binding

            el.hidden = true

            if ($access(value)) {
                el.hidden = false
            }

            if (store.state.application.accessOverride) {
                el.hidden = false
            }
        }
    })

    app.$access = store.$access = $access
    app.$accessConfig = store.$accessConfig = sdk.access
    console.log('sssss', sdk.access)
}
