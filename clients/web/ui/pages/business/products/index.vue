<template>
    <Layout>
        <div class="row margin-bottom-20">
            <div class="col-12">
                <div class="form-row">
                    <div
                        class="col-6 col-lg-2"
                        hidden>
                        <select
                            class="form-control actionWithSelected"
                            tabindex="-1"
                            aria-hidden="true">
                            <option />
                            <option value="1">
                                Set as readed
                            </option>
                            <option value="2">
                                Remove
                            </option>
                        </select>
                    </div>
                    <div class="col-6 col-lg-4 d-none d-md-block" />
                    <div
                        class="col-6 col-lg-2"
                        hidden>
                        <select
                            class="form-control orderByStatus"
                            tabindex="-1"
                            aria-hidden="true">
                            <option />
                            <option value="1">
                                New
                            </option>
                            <option value="2">
                                Active
                            </option>
                            <option value="3">
                                Closed
                            </option>
                            <option value="3">
                                Denied
                            </option>
                        </select>
                    </div>
                    <div class="col-6 col-lg-2 d-none d-md-block" />
                </div>

                <div class="table-responsive margin-top-20 margin-bottom-0">
                    <table
                        class="table table-striped table-bordered margin-bottom-0"
                        style="min-width: 800px;">
                        <thead>
                            <tr>
                                <th width="30">
                                    <label class="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            class="custom-control-input">
                                        <span class="custom-control-label" />
                                    </label>
                                </th>
                                <th width="100">
                                    ID
                                </th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Owner</th>
                                <th hidden>
                                    Operators
                                </th>
                                <th>Price</th>
                                <th width="100">
                                    Status
                                </th>
                                <th width="100">
                                    History
                                </th>
                                <th width="30" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="product in products"
                                v-if="products"
                                :key="product.id">
                                <td>
                                    <label class="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            class="custom-control-input">
                                        <span class="custom-control-label" />
                                    </label>
                                </td>
                                <td>{{ product.id }}</td>
                                <td>
                                    <Button
                                        status="none"
                                        :to="`/business/product/${product.id}`"
                                        class="text-secondary text-bold">
                                        {{ product.name }}
                                    </Button>
                                </td>
                                <td>{{ product.meta.created }}</td>
                                <td>
                                    <div class="user user--bordered">
                                        <img src="http://via.placeholder.com/128x128">
                                        <div class="user__name">
                                            <strong>{{ product.owner ? product.owner.name : '' }}</strong>
                                        </div>
                                    </div>
                                </td>
                                <td hidden>
                                    <div class="user-group user-group--bordered">
                                        <div class="user">
                                            <img src="http://via.placeholder.com/128x128">
                                        </div>
                                        <div class="user">
                                            <img src="http://via.placeholder.com/128x128">
                                        </div>
                                        <div class="user">
                                            <img src="http://via.placeholder.com/128x128">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {{ product.price }}
                                </td>
                                <td>
                                    <!--<button class="btn btn-outline-success btn-block btn-sm">{{ product.status }}-->
                                    <!--</button>-->
                                </td>
                                <td>
                                    <nuxt-link :to="{ path: '/business/product/' + product.id + '/releases' }">
                                        View
                                    </nuxt-link>
                                </td>
                                <td>
                                    <button class="btn btn-secondary btn-icon btn-sm">
                                        <i class="fa fa-pencil" />
                                    </button>
                                </td>
                            </tr>
                            <tr v-else>
                                <td colspan="12">
                                    Nothing found.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <template slot="menu">
            <div class="row">
                <div class="col-12 text-right">
                    <Button
                        to="/business/product/new"
                        status="dark"
                        icon="plus"
                        size="lg">
                        New Product
                    </Button>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
export default {
    components: {
        'Layout': () => import('@ericmuyser/hyper-ui').then(m => m.Layout)
    },
    data() {
        return {
            loadingState: true
        }
    },
    computed: {
        products() { return this.$store.getters['products/list'] }
    },
    created() {
        this.$store.dispatch('products/find', {
            query: {
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })
    }
}
</script>

<style lang="scss" scoped>
</style>
