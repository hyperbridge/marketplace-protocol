<template>
    <div>
        <p v-if="!trx">
            Transaction with id <i>{{ id }}</i> doesn't exist
        </p>
        <Block-menu
            v-else
            :links="links">
            <router-view
                :id="id"
                :trxa="trx"
                :trx="trx" />
        </Block-menu>
    </div>
</template>

<script>
export default {
    components: {
        'Block-menu': () => import('@ericmuyser/hyper-ui').then(m => m.Block-menu)
    },
    data() {
        return {
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        links() {
            return [
                { title: 'Offer', to: `/marketplace/trade/${this.id}` },
                { title: 'Chat', to: `/marketplace/trade/${this.id}/chat` }
            ]
        },
        trx() {
            return this.$store.getters['assets/transactions'][this.id]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

