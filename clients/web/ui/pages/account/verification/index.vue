<template>
    <Layout
        navigationKey="account"
        :showLeftPanel="false"
        :showRightPanel="false">
        <div
            id="content"
            class="content login-container">
            <div class="container">
                <div class="col-12">
                    <Tabs
:tabNames="['Account Verification']"
                            styled>
                        <Tab
                            :tabId="1">
                            <div class="tab-container">
                                <div
                                    v-if="isVerified"
                                    class="tab-card padding-20">
                                    <p>Your account has been verified. You can request approval for additional profiles below.</p>

                                    <ProfilePicker :profiles="profiles" @chooseProfile="chooseProfile()" />
                                    <br>

                                    <Button @click="verifyProfile">
                                        Send Again
                                    </Button>
                                </div>
                                <div
                                    v-if="isVerifying"
                                    class="tab-card padding-20">
                                    <div class="col-12 mb-4 text-center">
                                        <h2>
                                            <img
                                                src="/img/success.png"
                                                style="max-width: 40px;"> Account Verification Requested
                                        </h2>
                                        <p>Account is undergoing verification. You can now close this browser tab.</p>
                                        <br>
                                        <p v-if="!been1hour">
                                            Something wrong? You can submit again in 1 hour
                                        </p>
                                        <p v-if="been1hour">
                                            Something wrong? <Button @click="overrideForm">
                                                Show Form
                                            </Button>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    v-if="!(isVerified || isVerifying) || been1hour || manual_override"
                                    class="tab-card padding-20">
                                    <div v-if="!verificationLink">
                                        <p>
                                            Submit proof of profile for KYC by providing your legal name, country of residence, and documentation.<br><br>
                                            KYC stands for Know Your Customer. BlockHub is required by law to collect this information so that we know the source of money and comply with anti-money laundering laws by assessing potential risks of illegal intentions. As we are handling cryptocurrencies, account holders are entirely unknown, and we want to be very safe by following strict KYC procedure. We do anticipate these procedures can be relaxed post-launch, and will work with our lawyers on that, as our token represents the same utility as many existing point systems.<br><br>
                                            Please fill in the fields below. Afterward you will be taken to our partner Veriff to complete your profile verification. You will need to use the same information as you've used here.<br><br>
                                            <strong>Disclaimer:</strong> We're working with our lawyers in multiple jurisdictions to determine which countries can purchase. As of this moment we know for certain these countries cannot participate: China, Canada. We're very sorry and hope we can extend support worldwide in the future.
                                        </p>
                                        <br><br>

                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Given Name (First + Middle)</label>
                                                    <input
                                                        v-model="firstName"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Given Name (First + Middle Name)"
                                                        name="firstName">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Family Name</label>
                                                    <input
                                                        v-model="lastName"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Family Name (Last Name)"
                                                        name="lastName">
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">E-mail</label>
                                                    <input
                                                        v-model="email"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="E-mail"
                                                        name="email">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Document Type</label>
                                                    <select
                                                        id="document_type"
                                                        v-model="document_type"
                                                        name="document_type"
                                                        class="form-control">
                                                        <option
                                                            value=""
                                                            selected>
                                                            Choose Document Type
                                                        </option>
                                                        <option value="government_id">
                                                            Government ID
                                                        </option>
                                                        <option value="passport">
                                                            Passport
                                                        </option>
                                                        <option value="drivers_license">
                                                            Drivers License
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Document Number</label>
                                                    <input
                                                        v-model="document_number"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Document Number"
                                                        name="documentNumber">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <label class="sr-only">Ethereum Public Address</label>
                                                    <input
                                                        v-model="address"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Ethereum Public Address"
                                                        name="address">
                                                </div>
                                            </div>
                                        </div>

                                        <br>
                                        <div
                                            v-if="errors.length"
                                            class="errors">
                                            <strong>Please correct the following error(s):</strong>
                                            <ul>
                                                <li
                                                    v-for="error in errors"
                                                    :key="error">
                                                    {{ error }}
                                                </li>
                                            </ul>
                                        </div>
                                        <br>

                                        <Button
                                            class="Button--lg"
                                            @click="verifyAccount()">
                                            Start Verification
                                        </Button>
                                    </div>
                                    <div v-if="verificationLink">
                                        <p>Great. We've told Veriff you're coming!</p>

                                        <Button
                                            v-if="verificationLink"
                                            class="Button--lg"
                                            :href="verificationLink">
                                            Continue to Veriff
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </Layout>
</template>


<script>
// import Veriff from '@veriff/js-sdk'

export default {
    components: {
        'UserCard': () => import('@ericmuyser/hyper-ui').then(m => m.UserCard),
        'ProfilePicker': () => import('@ericmuyser/hyper-ui').then(m => m.ProfilePicker)
    },
    data() {
        const { account } = this.$store.state.application

        let been1hour = false

        if (account.verificationTimestamp) {
            been1hour = (Math.abs(new Date() - new Date(account.verificationTimestamp)) / 36e5) > 1
        }

        return {
            errors: [],
            profiles: { ...Object.values(this.$store.state.profiles.keyedById) },
            activeProfile: null,
            manual_override: false,
            been1hour,
            document_type: '',
            document_number: '',
            email: account.email,
            firstName: account.firstName,
            lastName: account.lastName,
            address: account.address,
            account,
            isVerified: account.isVerified,
            isVerifying: account.isVerifying,
            verificationTimestamp: account.verificationTimestamp,
            verificationLink: null
        }
    },
    methods: {
        overrideForm() {
            this.manual_override = true
        },
        chooseProfile(profile) {
            if (this.activeProfile) this.activeProfile.chosen = false
            profile.chosen = true
        },
        verifyProfile() {
            // send a contract call
            // encrypt profile with the secret answer #2
            // manual override for now lol
            this.manual_override = true
        },
        verifyAccount() {
            if (
                this.firstName &&
                    this.lastName &&
                    this.email &&
                    this.document_type &&
                    this.document_number &&
                    this.address
            ) {
                const data = {
                    verification: {
                        features: ['selfid'],
                        callback: 'https://blockhub.gg/account/verification/callback',
                        person: {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            idNumber: this.document_number
                        },
                        vendorData: this.email, // JSON.stringify({ email: this.email, eth: this.address }),
                        additionalData: {
                            eth: this.address,
                            email: this.email,
                            secret: this.account.secretAnswer2,
                            profile: this.activeProfile && this.activeProfile.address
                        },
                        timestamp: (new Date()).toISOString()
                    }
                }

                this.$axios({
                    method: 'post',
                    url: 'https://magic.veriff.me/v1/sessions',
                    data,
                    headers: {
                        'x-auth-client': 'a5464742-28a4-42d0-8105-4ef414341214',
                        'Accept': 'application/json, text/plain, */*'
                    }
                })
                    .then(res => {
                        this.$store.state.application.account.isVerifying = true
                        this.$store.state.application.account.verificationTimestamp = new Date()

                        this.verificationLink = res.data.verification.url
                    })
                    .catch(err => {
                        this.errors.push(`Could not contact verification service. Please contact support with this error: ${JSON.stringify(err)}`)
                    })

                return
            }

            if (!this.firstName) {
                this.errors.push('First Name required.')
            }
            if (!this.lastName) {
                this.errors.push('Last Name required.')
            }
            if (!this.document_type) {
                this.errors.push('Document Type required.')
            }
            if (!this.document_number) {
                this.errors.push('Document Number required.')
            }
            if (!this.address) {
                this.errors.push('Ethereum Public Address required.')
            }
        }
    }
}
</script>


<style lang="scss">
    .tab-card {
        background: #383853;
        border-radius: 5px;
        padding: 8px 10px;
        border: 1px solid #373752;
        margin-bottom: 15px;
        &:last-child {
            margin: 0;
        }
        input {
            border: none;
            box-shadow: 0 0 3px rgba(0, 0, 0, .4) inset;
            background: #303049;
        }
    }
    .veriff-container {
        margin-top: 10px;

        input {
            order: none;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.4) inset;
            background: #303049;
            color: #dfdfe9;
        }
    }

    p {
        font-size: 14px;
        line-height: 18px;
    }

</style>


