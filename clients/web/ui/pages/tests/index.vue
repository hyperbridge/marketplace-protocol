<template>
    <Layout>
        <!-- <span v-translate>{{ msg }}</span> -->
        <div
            v-if="showDiv"
            v-click-outside="clicked"
            class="div">
            Test
        </div>
        <input
            v-model.number="id"
            type="number">
        <button
            @click="$store.dispatch(
                'community/updateWishlist',
                ['product', id]
            )">
            Add to wishlist
        </button>
        <InstallerProgress :progress="88" />
    </Layout>
</template>

<script>
export default {
    components: {
        'InstallerProgress': () => import('@ericmuyser/hyper-ui').then(m => m.InstallerProgress)
    },
    data() {
        return {
            msg: 'Bonjour',
            id: 5,
            showDiv: true
        }
    },
    computed: {
        profiles() {
            return this.$store.getters['community/profiles']
        }
    },
    methods: {
        clicked(e) {
            this.showDiv = !this.showDiv
        }
    }
}
</script>

<style lang="scss" scoped>
    .divv {
        background: red;
        width: 100px;
        height: 100px;
    }
</style>

