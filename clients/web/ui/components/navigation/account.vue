<template>
    <div
        v-if="signedIn"
        class="navigation">
        <SidebarMenu
            title="ACCOUNT"
            :links="links.account" />
        <SidebarMenu
            v-access="'wallet.read'"
            subTitle="Wallets"
            :links="links.wallets" />
        <SidebarMenu
            subTitle="Profiles"
            :links="links.profiles" />
        <SidebarMenu
            subTitle="Developer"
            :links="links.developer" />
        <SidebarMenu
            subTitle="Help"
            :links="links.help" />
        <SidebarMenu
            subTitle="Legal"
            :links="links.legal" />
    </div>
</template>

<script>
export default {
    components: {
        'SidebarMenu': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu)
    },
    computed: {
        signedIn() { return this.$store.state.application.signedIn },
        links() {
            return {
                account: [
                    { to: { path: '/account' }, title: 'Overview' },
                    { to: { path: '/account/verification' }, title: 'Verification' },
                    { to: { path: '/account/backup' }, title: 'Backup' }
                ],
                wallets: [
                    { to: { path: '/account/wallets' }, title: 'Overview' },
                    { to: { path: '/account/wallets' }, title: 'New Wallet' }
                ],
                profiles: [
                    { to: { path: '/account/profiles' }, title: 'Overview' },
                    { to: { path: '/account/profiles' }, title: 'New Profile' }
                ],
                developer: this.$store.state.application.developerMode ? [{ to: { path: '/developer' }, title: 'Developer Area' }] : [{ to: { path: '/developer/apply' }, title: 'Become a Developer' }],
                help: [
                    { to: { path: '/help/topic/0/article/creating-an-account' }, title: 'Creating an account' },
                    { to: { path: '/help/topic/0/article/blockchain-gaming' }, title: 'Blockchain gaming' },
                    { to: { path: '/help/topic/0/article/blockhub-interface' }, title: 'BlockHub interface' },
                    { to: { path: '/help/topic/0/article/hbx-token' }, title: 'HBX token' },
                    { to: { path: '/help/topic/0/article/trading-assets' }, title: 'Trading assets' }
                ],
                legal: [
                    { to: { path: '/terms' }, title: 'Terms & Conditions' },
                    { to: { path: '/privacy' }, title: 'Privacy Policy' }
                ]
            }
        }
    }
}
</script>
