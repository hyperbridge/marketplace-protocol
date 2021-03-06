<template>
    <!-- PAGE WRAPPER -->
    <div
        id="business-app"
        class="page page--w-header page--w-container">
        <transition name="slideDown">
            <div
                class="page-top-bar draggable"
                :class="{ 'invert' : darkMode }">
                <Button
                    status="none"
                    class="logo-holder undraggable"
                    to="/">
                    <Img
                        v-if="darkMode"
                        src="/img/logo-white.svg"
                        alt="Logo" />
                    <Img
                        v-else
                        src="/img/logo.svg"
                        alt="Logo"
                        style="height: 90%; margin-top: 2%" />
                </Button>
                <nuxt-link
                    to="/business"
                    class="h2 ml-4 mb-0 pl-4 text-uppercase border-left">
                    Business Manager
                </nuxt-link>
                <div
                    class="page-top-bar__profile mb-0 float-right h5"
                    style="margin-left: auto"
                    @click="$store.commit('application/showProfileChooser', true)">
                    <div class="page-top-bar__profile-avatar">
                        <Img src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png" />
                    </div>
                    <div class="page-top-bar__profile-name">
                        {{ activeProfile.name }}
                    </div>
                </div>
            </div>
        </transition>

        <!-- PAGE LEFT PANEL -->
        <transition
            name="slideDown"
            no-ssr>
            <sidebar-menu
                width="250px"
                :menu="menu"
                :class="{ 'light-v' : !darkMode }"
                @collapse="minimized = !minimized" />
        </transition>

        <!-- PAGE CONTENT -->
        <transition name="fade">
            <div
                id="content"
                class="content"
                :class="{ 'left-sidebar': showLeftPanel, 'right-sidebar': showRightPanel, 'invert' : darkMode, 'is-minimized' : minimized }">
                <!-- PAGE HEADING -->
                <div class="page-heading">
                    <div class="page-heading__container">
                        <div>
                            <h3 class="page-heading__title p-0 m-0">
                                {{ pageTitle }}
                            </h3>
                        </div>
                        <div>
                            <slot name="action" />
                        </div>
                    </div>

                    <nav
                        aria-label="breadcrumb"
                        role="navigation">
                        <ul
                            v-if="breadcrumbLinksData.length"
                            class="breadcrumb">
                            <li
                                v-for="(link, index) in breadcrumbLinksData"
                                :key="index"
                                class="breadcrumb-item"
                                :class="{ 'active': index == breadcrumbLinksData.length-1 }">
                                <nuxt-link
                                    v-if="link.to"
                                    :to="link.to">
                                    {{ link.title }}
                                </nuxt-link>
                                <template v-else>
                                    {{ link.title }}
                                </template>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- //END PAGE HEADING -->
                <div class="content__wrapper">
                    <div class="container-fluid">
                        <slot />
                    </div>
                </div>
                <div
                    v-if="$slots['menu']"
                    class="content__bottom-menu">
                    <slot name="menu" />
                </div>
            </div>
        </transition>

        <!-- PAGE RIGHT PANEL -->
        <transition name="slideRight">
            <div
                v-if="showRightPanel"
                id="page-sidepanel"
                class="page-sidepanel text-right"
                :class="{ 'invert' : darkMode }">
                <div class="page-sidepanel__content">
                    <slot name="right" />
                </div>
            </div>
        </transition>

        <ProfileChooser
            v-if="$store.state.application.profileChooser && $store.state.application.signedIn"
            :darkMode="false" />
    </div>
</template>


<script>
import { SidebarMenu } from 'vue-sidebar-menu'

import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {
    name: 'Business',
    components: {
        SidebarMenu,
        'ProfileChooser': () => import('@ericmuyser/hyper-ui').then(m => m.ProfileChooser)
    },
    props: {
        showLeftPanel: {
            type: Boolean,
            default: true
        },
        showRightPanel: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            loadingState: true,
            darkMode: false,
            minimized: false,
            breadcrumbLinksData: [],
            pageTitle: '',
            menu: [
                {
                    title: 'Marketplace',
                    icon: 'fas fa-home',
                    child: [
                        {
                            title: 'Products',
                            // icon: 'fas fa-square-full icon-sm',
                            child: [
                                {
                                    href: '/business/products',
                                    title: 'All Products',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/product/new',
                                    title: 'New Product',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Crowdfunds',
                            child: [
                                {
                                    href: '/business/projects',
                                    title: 'All Crowdfunds',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/project/new',
                                    title: 'New Crowdfunds',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Ideas',
                            child: [
                                {
                                    href: '/business/ideas',
                                    title: 'All Ideas',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/idea/new',
                                    title: 'New Ideas',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Battle Passes',
                            child: [
                                {
                                    href: '/business/battlepasses',
                                    title: 'All Battle Passes',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/battlepass/new',
                                    title: 'New Battle Passes',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Communities',
                            child: [
                                {
                                    href: '/business/communities',
                                    title: 'All Communities',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Orders',
                            child: [
                                {
                                    href: '/business/orders',
                                    title: 'All Orders',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Tournaments',
                            child: [
                                {
                                    href: '/business/tournaments',
                                    title: 'All Tournaments',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/tournament/new',
                                    title: 'New Tournaments',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Realms',
                            child: [
                                {
                                    href: '/business/realms',
                                    title: 'All Realms',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/realm/new',
                                    title: 'New Realms',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        },
                        {
                            title: 'Licenses',
                            child: [
                                {
                                    href: '/business/licenses',
                                    title: 'All Licenses',
                                    icon: 'fas fa-square-full icon-sm'
                                },
                                {
                                    href: '/business/license/new',
                                    title: 'New Licenses',
                                    icon: 'fas fa-square-full icon-sm'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        activeProfile() {
            return this.$store.state.application.activeProfile
        }
    },
    watch: {
        '$route'(to, from) {
            if (process.client) {
                if (from.path.indexOf('/business') !== -1 && to.path.indexOf('/business') === -1) {
                    document.body.classList.remove('light')
                }
            }

            this.updateBreadcrumbLinks()
            this.pageTitle = to.meta.title || 'Dashboard'
        }
    },
    created() {
        this.updateBreadcrumbLinks()
        this.pageTitle = this.$route.meta.title || 'Dashboard'
    },
    mounted() {
        this.$nextTick(() => {
            this.loadingState = false
        })

        if (process.client) {
            document.body.classList.add('light')
        }

        this.updateBreadcrumbLinks()
    },
    beforeDestroy() {
    },
    methods: {
        updateBreadcrumbLinks() {
            // this.breadcrumbLinksData = this.$route.meta.breadcrumb || []
        }
        // initialize() {
        //     if (this.initialized) {
        //         return
        //     }

        //     this.$store.state.application.initialized = window.BlockHub.initialized = true

        //     document.getElementById('startup-loader').style.display = 'none'
        // }
    }
}
</script>


<style>
    .draggable {
        -webkit-app-region: drag;
    }

    .undraggable {
        -webkit-app-region: no-drag;
    }
</style>

<style lang="scss">
    body{
        &.light{
            background: #fff!important;
            font-size: 16px;
            line-height: 26px;
            #header-bg,
            #right-bg,
            #left-bg{
                display: none!important;
            }
            #business-app {
                ::-webkit-scrollbar-track {
                    /* background: rgba(0, 0, 0, .3);
                    border-radius: 0 4px 4px 0; */
                }

                ::-webkit-scrollbar-thumb {
                    background: #cccccc;
                    border-radius: 8px;
                    border: unset;
                }

                ::-webkit-scrollbar {
                    width: 7px;
                    height: 4px;
                }
            }
            .BasicPopup__content {
                background: #fff;
                color: #000 !important;
            }
        }
    }

    .v-sidebar-menu.light-v{
        padding-top: 70px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #f3f3f3!important;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 20;
        &.vsm-collapsed {
            padding-left: 0;
        }
        .vsm-header{
            color: #323c47!important;
        }
        .vsm-item{
            border-radius: 5px;
            overflow: hidden;

            .vsm-link{
                padding: 5px 10px;
                .vsm-icon{
                    background: none!important;
                    color: #323c47!important;
                    font-size: 20px;
                }
                .vsm-link,
                .vsm-title,
                .vsm-arrow{
                    color: #323c47!important;
                    font-size: 14px;
                }
                &:hover{
                    background: rgba(0, 0, 0, .03)!important;
                }
            }
            &.active-item{
                .vsm-link{
                    font-weight: normal;
                }
            }
        }
        .vsm-dropdown {
            .vsm-list {
                background: #f2f2f2 !important;
                padding: 0px;
            }
            .vsm-link{
                display: flex;
                align-items: center;
                .icon-sm{
                    height: 30px;
                    line-height: 30px;
                    width: 30px;
                    text-align: center;
                    font-size: 5px;
                }
                &.is-active{
                    .vsm-icon{
                        color: #f50!important;
                    }
                }
            }
        }
        .vsm-item.first-item.open-item>.vsm-link{
            background: #f2f2f2!important;
        }
        .collapse-btn{
            background: rgba(0, 0, 0, .04)!important;
            color: #323c47!important;
            border-top: 1px solid rgba(0, 0, 0, 0.07);
            &:focus{
                user-select: none!important;
                box-shadow: none!important;
                outline: none;
            }
        }
    }
</style>

<style lang="scss" scoped>
    $light_color_1: #fff;
    $dark_color_1: #30304d;
    $dark_color_2: #202133;

    .page{
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        flex-direction: unset;
    }
    .page-heading{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)!important;
        margin-bottom: 15px!important;
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-top: 5px;
        background: #fff!important;
    }
    .page-heading__container{
        align-items: center;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .page-heading__title{
        font-weight: 500;
    }
    .page-top-bar{
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 5px 25px;
        z-index: 21;
        height: 60px;
        background: #fff;
        color: #c3c3d6;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .logo-holder{
            height: 50px;
            width: auto;
            img{
                height: 50px;
            }
        }
        &.invert{
            background: $dark_color_2;
            color: #fff;
            box-shadow: unset;
        }
    }
    .page-sidepanel,
    .page-aside{
        top: 0;
        width: 250px;
        padding: 80px 10px 20px;
        display: flex;
        flex-direction: column;
        background: #fff;
        transition: all 200ms ease-in-out;
        .divider{
            opacity: .3;
        }
        &.invert{
            background: $dark_color_2;
            color: #fff;
            .text-secondary{
                color: #5D75F7!important;
            }
        }
        &.is-minimized{
            width: 60px;
        }
    }
    .page-aside .navigation,
    .page-sidepanel .navigation{
        padding: 0;
    }
    .content{
        width: 100%;
        margin-top: 60px;
        transition: all 200ms ease-in-out;
        position: relative;
        /*z-index: 10;*/
        &.left-sidebar{
            margin: 60px 0 0 250px;
        }
        &.left-sidebar.right-sidebar{
            margin: 60px 250px 0;
        }
        &.invert{
            background: $dark_color_1;
            color: #fff;
            .page-heading{
                background: transparent!important;
            }
            .widget{
                background: rgba(0, 0, 0, .1);
                color: #fff!important;
            }
            .card{
                background: rgba(0, 0, 0, .1);
            }
            .text-secondary{
                color: #5D75F7!important;
            }
        }
        &.is-minimized{
            margin-left: 50px;
        }
    }
    .left-sidebar__option{
        margin: -2px -10px 20px;
        display: flex;
        padding: 0 10px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        text-align: right;
        button{
            font-size: 15px;
            background: #f5f6f5;
            border: none;
            color: #666666;
            width: 25px;
            height: 25px;
            line-height: 20px;
            text-align: center;
            border-radius: 3px;
            padding: 0;
            margin-left: auto;
            &:active,
            &:focus{
                user-select: none;
                box-shadow: none;
                outline: none;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
    .content__wrapper{
        margin: 15px;
        background: #fff;
        padding: 15px 0;
    }
    .content__bottom-menu {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        padding: 6px 10px;
        background: #f7f7f7;
        border-top: 1px solid rgba(0, 0, 0, 0.07);
    }

    .page-top-bar__profile {
        cursor: pointer;
    }

    .page-top-bar__profile-name {
        display: inline-block;
        margin-right: 10px;
        color: #888;
    }

    .page-top-bar__profile-avatar {
        display: inline-block;
        width: 50px;
        position: relative;
        padding: 10px;
        img {
            width: 100%;
            border-radius: 100%;
        }
    }
</style>
