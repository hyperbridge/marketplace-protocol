<template>
    <Layout navigationKey="store">
        <div
            v-if="!$store.state.application.signedIn"
            class="row">
            <p>Interested in developing with BlockHub? Please contact us at developers@hyperbridge.org</p>
        </div>
        <div
            v-if="$store.state.application.signedIn"
            class="row">
            <div
                v-if="!developerMode"
                class="col-12">
                <Block
                    title="Business Manager"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true"
                    hidden>
                    <p>
                        We're still working on our Business Manager. If you want a sneak preview, <Button to="/business">
                            it's over here
                        </Button>. In the meantime, you can contact us directly at <a href="mailto:business@hyperbridge.org"><strong>business@hyperbridge.org</strong></a>
                    </p>
                </Block>

                <Block
                    title="Why Community-Driven Development?"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true"
                    hidden>
                    <p>You might initially think that community-driven feature development could lead to bad game design. And in ordinary circumstances that's correct. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, <strong>they're playing the game</strong>. That's why we need to use <strong>comparison</strong> metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. We want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.</p>
                </Block>

                <div
                    v-if="!developerMode"
                    style="text-align: center">
                    <UserCard
                        class="col-3 margin-auto"
                        :user="$store.state.application.activeProfile"
                        :previewMode="true"
                        :class="{ 'default': true }" />
                    <br>
                    <Button
                        class="underline"
                        @click="$store.commit('application/showProfileChooser', true)">
                        Choose Different Profile
                    </Button>

                    <br><br>

                    <Button
                        class="Button--lg outline-white margin-top-20"
                        @click="convertProfile">
                        Convert to Developer
                    </Button>
                </div>
            </div>
            <div
                v-if="developerMode"
                class="col-12">
                <Block
                    title="Congratulations"
                    class="margin-bottom-30"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    Your profile is all setup.

                    <br><br>

                    <Button to="/developer">
                        Go to dashboard
                    </Button>
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'UserCard': () => import('@ericmuyser/hyper-ui').then(m => m.UserCard)
    },
    data() {
        return {
            errors: []
        }
    },
    computed: {
        developerMode() {
            return this.$store.state.application.developerMode
        }
    },
    methods: {
        convertProfile() {
            const profileId = this.$store.state.application.activeProfile.id

            this.$api.service(`/profiles/:id/convert`).update(
                profileId,
                {
                    role: 'developer'
                }
            ).then(profile => {
                this.$store.state.application.activeProfile.role = profile.role
            })
        }
    }
}
</script>
