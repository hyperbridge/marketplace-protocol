<template>
    <article>
        <section
            v-for="trx in transactions"
            :key="trx.id"
            class="trade-history">
            <span class="trade-history__date">
                {{ trx.createdAt | customDate('MMM DD YYYY, hh:mm') }}
            </span>
            <div class="trade-history__user">
                You traded with
                <nuxt-link
                    :to="`/profile/${trx.contractor.id}`"
                    class="trade-history__user-link">
                    <User :user="trx.contractor" />
                </nuxt-link>
            </div>
            <ul
                v-for="(offer, index) in ['yourOffer', 'contractorOffer']"
                :key="index"
                class="trade-history__list">
                <p class="trade-history__list-title">
                    {{ offer === 'yourOffer' ? 'Bought:' : 'Sold:' }}
                </p>
                <li
                    v-for="(asset, index) in trx[offer]"
                    :key="index"
                    class="trade-history__item"
                    :class="`trade-history__item--${offer === 'yourOffer' ? 'bought' : 'sold' }`">
                    <nuxt-link
                        class="trade-history__item-link"
                        :to="`/asset/${asset.id}`">
                        <Img
                            :src="asset.image"
                            class="trade-history__item-image" />
                        {{ asset.name }}
                    </nuxt-link>
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
export default {
    components: {
        'User': () => import('@ericmuyser/hyper-ui').then(m => m.User)
    },
    computed: {
        transactions() {
            return this.$route.params.transactions
        },
        transactionsX() {
            return
            return this.$store.getters['assets/transactionsArray']
        }
    }
}
</script>

<style lang="scss" scoped>
    .trade-history {
        background: rgba(255,255,255,.025);
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 50px;
    }
    .trade-history__date {
        color: rgba(255,255,255,.5);
    }
    .trade-history__user {
        margin: 10px 0;
        display: flex;
        align-items: center;
    }
    .trade-history__user-link {
        margin-left: 7px;
    }
    .trade-history__list {
        list-style: none;
        margin-bottom: 20px;
    }
    .trade-history__item {
        &--bought:before {
            color: rgb(65, 186, 93);
            content: "+";
            margin-right: 8px;
            font-size: 18px;
        }
        &--sold:before {
            font-size: 18px;
            color: rgb(255, 118, 118);
            content: "-";
            margin-right: 8px;
        }
    }
    .trade-history__item-image {
        width: 35px;
        padding: 3px;
        border-radius: 4px;
        margin-right: 4px;
    }
    .trade-history__list-title {
        color: rgba(255,255,255,.5);
        margin-bottom: 5px;
    }
    .trade-history__item-link {
        color: #fff;
    }
</style>

