<template>
    <div class="row">
        <div class="col-12">
            <div>
                <DiscussionItem
                    v-for="(post, index) in posts"
                    :key="index"
                    :post="post" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'DiscussionItem': () => import('@ericmuyser/hyper-ui').then(m => m.DiscussionItem)
    },
    props: ['project', 'editing'],
    data() {
        const authors = [
        ]
        const dates = [
        ]
        const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.'
        return {
            errors: [],
            posts: [
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
