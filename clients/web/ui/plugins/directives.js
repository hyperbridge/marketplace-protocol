import Vue from 'vue'

export default ({ store }) => {
    Vue.directive('focus', {
        inserted(el) {
            el.focus()
        }
    })

    Vue.directive('centralized-mode', {
        bind(el, binding, vnode, oldVnode) {
            const { value } = binding

            el.hidden = true

            if (!store.state.application.decentralizedMode) {
                el.hidden = false
            }
        }
    })

    Vue.directive('decentralized-mode', {
        bind(el, binding, vnode, oldVnode) {
            const { value } = binding

            el.hidden = true

            if (store.state.application.decentralizedMode) {
                el.hidden = false
            }
        }
    })

    Vue.directive('click-outside', {
        bind(el, binding, vnode) {
            const { expression, arg } = binding
            const clickOutside = Symbol.for('clickOutside')

            el[clickOutside] = evt => {
                if (arg && arg == 'self') {
                    vnode.context[expression](evt)
                } else if (!(el == evt.target || el.contains(evt.target))) {
                    vnode.context[expression](evt)
                }
            }

            document.body.addEventListener('click', el[clickOutside])
        },
        unbind(el) {
            document.body.removeEventListener('click', el[Symbol.for('clickOutside')])
        }
    })

    Vue.directive('debounce', {
        bind(el, binding, vnode) {
            const { arg: event, expression } = binding
            const { context } = vnode

            const delay = 250
            const timeout = null

            el.__debounce__ = e => {
                clearTimeout(timeout)
                setTimeout(() => {
                    console.log(vnode)
                    console.log(binding)
                    console.log(expression)
                    context[expression](e)
                }, delay)
            }

            vnode.componentInstance.$on('customClick', el.__debounce__)
        },
        unbind(el, { arg: event }, vnode) {
            vnode.componentInstance.$off(event, el.__debounce__)
        }
    })

    Vue.directive('translate', {
        bind(el, binding, vnode) {
            console.log(el)
            console.log(binding)
            console.log(vnode)

            const { textContent } = el
            const { language } = navigator

            el.textContent = 'Translating...'

            setTimeout(() => {
                el.textContent = 'Translated'
            }, 2000)
        }
    })
}
