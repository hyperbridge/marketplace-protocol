<template>
    <div class="layout">
        <div class="layout__topdisplay" />
        <div class="layout__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showLeftPanel: {
            type: Boolean,
            default: true
        },
        showRightPanel: {
            type: Boolean,
            default: false
        },
        title: String,
        data: Object
    },
    data() {
        return {
        }
    },
    mounted() {
        document.getElementById('startup-loader').style.display = 'none'
        document.body.classList.add('light')
    }
}
</script>

<style lang="scss" scoped>
    .layout {
        padding: 180px 30px 50px;
        margin: -30px;
        min-height: 100vh;
    }

    .layout__topdisplay {
        position: absolute;
        z-index: -1;
        top: 0;
        display: inline-block;
        width: 100vw;
        height: 1000px;
        background: url("https://bitcoin-btc.review/Apps/Site/Projects/cryptoreviews/Assets/Other/images/banner-header.png") top center no-repeat #e0e6ea;
        background-size: contain;
    }

    .layout__content {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
