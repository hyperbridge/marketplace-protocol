<template>
    <Layout navigationKey="help">
        <div class="row page-heading">
            <div class="page-heading__container">
                <h1 class="title">
                    Support
                </h1>
                <p class="caption">
                    Let us know if you need further help.
                </p>
            </div>
            <Heading />
        </div>
        <div class="row">
            <ul>
                <li>E-mail: <a href="mailto:support@hyperbridge.zendesk.com">support@hyperbridge.zendesk.com</a></li>
                <li>Support Desk: <a href="https://hyperbridge.zendesk.com/">https://hyperbridge.zendesk.com/</a></li>
            </ul>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Support | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub support` },
                { hid: 'keywords', name: 'keywords', content: 'support, help, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
    },
    data: () => ({
    })
}
</script>

<style lang="scss" scoped>

</style>
