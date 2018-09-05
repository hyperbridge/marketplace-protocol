/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {withKnobs, text, boolean, number, object} from '@storybook/addon-knobs/vue'

import '../css/styles.scss'

import * as data from './components-data'

//import '!style-loader!css-loader!./styles.scss'

import SaleBox from '../ui/components/sale-box/box.vue'

storiesOf('Sale Box', module)
    .add('default', () => ({
        components: {
            'c-sale-box': SaleBox
        },
        data() {
            let title = 'test';
            return {
                sale_box: {
                    title: title
                }
            }
        },
        template: '<div class="row"><div class="col-6 p-5"><c-sale-box :sale_box="sale_box"></c-sale-box></div></div>'
    }))

import AssetsImporter from '../ui/components/asset-importer/index.vue'

storiesOf('Assets Importer', module)
    .add('default', () => ({
        components: {
            'c-assets-importer': AssetsImporter
        },
        data() {
            return {
                show_skipped: true
            }
        },
        template: '<div class="row"><div class="col-8"><c-assets-importer show_skipped="show_skipped" /></div></div>'
    }))

import Notification from '../ui/components/notification/index.vue'

storiesOf('Notifications', module)
    .add('default', () => ({
        components: {
            'c-notification': Notification
        },
        data() {
            return {
                notif: {
                    type: 'info',
                    title: 'Info message',
                    text: 'Something is changed in our policy, please view this notification.Click to view full',
                    actionOnClose: false,
                    actionOnTextClick: true
                },
                notifs: [
                    {
                        type: 'info',
                        title: 'Info message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: false,
                        actionOnTextClick: true
                    },
                    {
                        type: 'warning',
                        title: 'Warning message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: false,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'danger',
                        title: 'Danger message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: 'success',
                        title: 'Success message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    },
                    {
                        type: '',
                        title: 'Other message',
                        text: 'Something is changed in our policy, please view this notification.Click to view full',
                        showCloseBtn: true,
                        actionOnClose: '',
                        actionOnTextClick: ''
                    }
                ]
            }
        },
        template: `
            <div class="row m-0">
                <div class="col-4 pt-3 text-white">
                    Single:
                    <c-notification :notification="notif"/>
                    Multiple:
                    <c-notification v-for="(notif, index) in notifs" :key="index" :notification="notif"/>
                </div>
            </div>
        `
    }))

import Searcher from '../ui/components/searcher';

storiesOf('Searcher', module)
    .add('default', () => ({
        components: {Searcher},
        template: `<searcher />`
    }))

import RatingStars from '../ui/components/rating-stars';

storiesOf('Rating', module)
    .add('Stars', () => ({
        components: {RatingStars},
        template: '<rating-stars :number="3.5"/>'
    }));

import Author from '../ui/components/author';

storiesOf('Author', module)
    .add('Author', () => ({
        components: {Author},
        data() {
            return {
                author: {
                    name: 'SatoSan',
                    img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'
                }
            }
        },
        template: `<author :author="author"/>`
    }))

import Tags from '../ui/components/tags';

storiesOf('Tags', module)
    .add('Tags', () => ({
        components: {Tags},
        template: `<tags :tags="['RPG', 'Open-World']"/>`
    }))

import LoadingBar from '../ui/components/loading-bar';
import LoadingLogo from '../ui/components/loading-bar/logo-loader';

storiesOf('LoadingBar', module)
    .add('LoadingBar', () => ({
        components: {LoadingBar},
        template: `<loading-bar/>`
    }))
    .add('LoadingLogo', () => ({
        components: {
            'c-loading-logo': LoadingLogo
        },
        template: `<div class="p-5" style="width:300px;background: #fff"><c-loading-logo :isLoading="true"/></div>`
    }))


import NavigationAccount from '../ui/components/navigation/account';
import NavigationAsset from '../ui/components/navigation/asset';
import NavigationFunding from '../ui/components/navigation/funding';
import NavigationHelp from '../ui/components/navigation/help';
import NavigationProduct from '../ui/components/navigation/product';
import NavigationProject from '../ui/components/navigation/project';
import NavigationSettings from '../ui/components/navigation/settings';
import NavigationWallet from '../ui/components/navigation/wallet';

storiesOf('Navigation', module)
    .add('account', () => ({
        components: {NavigationAccount}, template: `<div class="col-2 py-3"><NavigationAccount /></div>`
    }))
    .add('asset', () => ({
        components: {NavigationAsset}, template: `<div class="col-2 py-3"><NavigationAsset /></div>`
    }))
    .add('funding', () => ({
        components: {NavigationFunding}, template: `<div class="col-2 py-3"><NavigationFunding /></div>`
    }))
    .add('help', () => ({
        components: {NavigationHelp}, template: `<div class="col-2 py-3"><NavigationHelp /></div>`
    }))
    .add('product', () => ({
        components: {NavigationProduct}, template: `<div class="col-2 py-3"><NavigationProduct /></div>`
    }))
    .add('project', () => ({
        components: {NavigationProject}, template: `<div class="col-2 py-3"><NavigationProject /></div>`
    }))
    .add('settings', () => ({
        components: {NavigationSettings}, template: `<div class="col-2 py-3"><NavigationSettings /></div>`
    }))
    .add('wallet', () => ({
        components: {NavigationWallet}, template: `<div class="col-2 py-3"><NavigationWallet /></div>`
    }))


import Card from '../ui/components/projects/card';

storiesOf('Projects', module)
    .add('card', () => ({
        components: {Card},
        data() {
            return {
                projects: [
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                    {
                        game: {
                            title: 'World of Warcraft',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'GBP',
                            obtained: 7613,
                            goal: 8500
                        }
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                ]
            }
        },
        template: `
            <div class="col-4">
                <card
                    v-for="(project, index) in projects"
                    :key="index"
                    :project="project"
                />
            </div>
        `
    }))

import Tabs from '../ui/components/tab/tabs.vue'
import Tab from '../ui/components/tab/tab.vue'

storiesOf('Tabs', module)
    .add('default', () => ({
        components: {
            'c-tabs': Tabs,
            'c-tab': Tab,
        },
        data() {
            return {}
        },
        template: `<div class="row m-0">
            <div class="col-8 p-4">
                <c-tabs>
                    <c-tab name="Tab 1" :selected="true" showFooter="true">
                        <p>This is first tab with footer content</p>
                         <template slot="footer">
                            <a href="#3" class="btn btn-sm btn-success float-right">Button</a>
                        </template>
                    </c-tab>
                     <c-tab name="Tab 2">
                        <p>This is second tab</p>
                    </c-tab>
                    <c-tab name="Tab 3">
                        <p>This is third tab</p>
                    </c-tab>
                </c-tabs>
            </div>
            </div>`
    }))
    .add('type-2', () => ({
        components: {
            'c-tabs': Tabs,
            'c-tab': Tab,
            'c-heading-bar-fields': BlockHeadersAddFields
        },
        data() {
            return {}
        },
        template: `<div class="row m-0">
            <div class="col-8 p-4">
                <c-tabs variant="type-2">
                    <c-tab name="Tab 1" :selected="true" :transparentBg="true" :showFooter="true">
                        <p>This is first tab with footer content</p>
                         <template slot="footer">
                            <a href="#3" class="btn btn-sm btn-success float-right">Button</a>
                        </template>
                    </c-tab>
                    <c-tab name="Tab 2" :transparentBg="true">
                        <p>This is second tab</p>
                    </c-tab>
                    <c-tab name="Tab 3" :transparentBg="true">
                        <p>This is third tab</p>
                    </c-tab>
                </c-tabs>
            </div>
            </div>`
    }))


import MilestonesLine from '../ui/components/milestones-line/index.vue'

storiesOf('Milestones Line', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))
    .add('in progress', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))
    .add('complete', () => ({
        components: {
            'c-milestones-line': MilestonesLine
        },
        data: () => object('Data', data.MilestonesLine),
        template: `<div class="row m-0">
                <div class="col-8 p-4">
                    <c-milestones-line :milestones="milestones" />
                </div>
            </div>`
    }))


import SidebarMenu from '../ui/components/sidebar-menu/index.vue'
import SidebarMenuLink from '../ui/components/sidebar-menu/menu_item'

storiesOf('Sidebar Menu', module)
    .add('Main title', () => ({
        components: {
            'c-sidebar-menu': SidebarMenu
        },
        data() {
            return {
                menu: [
                    {
                        url: '#3',
                        link_text: 'Link Text',
                        target: '_self',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text Blank target',
                        target: '_blank',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text with Icon',
                        target: '_self',
                        icon: 'fas fa-gem'
                    }
                ],
            }
        },
        template: '<div class="row m-0">' +
            '<div class="col-3 p-4">' +
            '<c-sidebar-menu title="Menu Big Title" icon="fab fa-angellist" :menu=menu />' +
            '</div>' +
            '</div>'
    }))
    .add('Sub title', () => ({
        components: {
            'c-sidebar-menu': SidebarMenu
        },
        data() {
            return {
                menu: [
                    {
                        url: '#3',
                        link_text: 'Link Text',
                        target: '_self',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text Blank target',
                        target: '_blank',
                        icon: ''
                    },
                    {
                        url: '#3',
                        link_text: 'Link Text with Icon',
                        target: '_self',
                        icon: 'fas fa-gem'
                    }
                ],
            }
        },
        template: `<div class="row m-0">
                <div class="col-3 p-4">
                    <c-sidebar-menu sub_title="This sub title" sub_icon="fas fa-info-circle" :menu="menu" />
                </div>
            </div>`
    }))
    .add('Single element', () => ({
        components: {
            'c-sidebar-menu-link': SidebarMenuLink
        },
        template: `<div class="row m-0">
                <div class="col-3 p-4">
                    <c-sidebar-menu-link
                                 url="#333"
                                 target="_self"
                                 icon="fas fa-link"
                                 link_text="Single Link">
            </c-sidebar-menu-link>
                </div>
            </div>`
    }));
;

const injectButtonTemplate = code => `
    <div class="row m-0 p-3">
        <div class="col-12">
            ${code}
        </div>
    </div>
`;

import Buttons from '../ui/components/buttons/index.vue'
import LoadMore from '../ui/components/buttons/load-more'

storiesOf('Buttons', module)
    .add('default', () => ({
        components: {'c-button': Buttons},
        methods: {
            testFunction: function () {
                console.log('BOOOOOOOOOOOM!')
            }
        },
        template: injectButtonTemplate(`
            <c-button @click="testFunction">
                default
            </c-button>
            <c-button size="md">
                default
            </c-button>
            <c-button size="lg">
                default
            </c-button>
        `)
    }))
    .add('info', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="info">info</c-button>
            <c-button status="info" size="md">info</c-button>
            <c-button status="info" size="lg">info</c-button>
        `)
    }))
    .add('success', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success">success</c-button>
            <c-button status="success" size="md">success</c-button>
            <c-button status="success" size="lg">success</c-button>
        `)
    }))
    .add('danger', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="danger">danger</c-button>
            <c-button status="danger" size="md">danger</c-button>
            <c-button status="danger" size="lg">danger</c-button>
        `)
    }))
    .add('[options] - swap order', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success" swap_order>success</c-button>
        `)
    }))
    .add('[options] - hide icon', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success" icon_hide>success</c-button>
        `)
    }))
    .add('[options] - emoji', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success">Message 👺👻👽</c-button>
        `)
    }))
    .add('[options] - custom icon', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="success" icon="anchor">success!</c-button>
        `)
    }))
    .add('[options] - button tag', () => ({
        components: {'c-button': Buttons},
        template: injectButtonTemplate(`
            <c-button status="danger" tag="button">Im button</c-button>
        `)
    }))
    .add('read more', () => ({
        components: {
            'c-load-more': LoadMore
        },
        template: `
            <div class="p-5" style="width: 400px"><c-load-more></c-load-more></div>
        `
    }))


import MoneyInfo from '../ui/components/money-info/index.vue'

storiesOf('Money Info', module)
    .add('default', () => ({
        components: {
            'c-money-info': MoneyInfo
        },
        template: `
        <div class="row m-0 p-3">
            <c-money-info label="Spent" percent="63" amount="555.999" goal="555.999" />
        </div>
        `
    }));

import Checkbox from '../ui/components/checkbox/checbox.vue'
import CheckboxGroup from '../ui/components/checkbox/checbox-group.vue'

storiesOf('Checkbox', module)
    .add('Single checkbox', () => ({
        components: {
            'c-checkbox': Checkbox
        },
        data() {
            return {
                value: true
            }
        },
        template: `
        <div class="row m-0 p-3">
            <c-checkbox id="test_check" label="This is the test checkbox" v-model="value" />
        </div>
        `
    }))
    .add('Checkbox Group', () => ({
        components: {
            'c-checkbox': Checkbox,
            'c-checkbox-group': CheckboxGroup,
        },
        template: `
        <div class="row m-0 p-3">
            <c-checkbox-group title="Group Title">
                <c-checkbox id="test_check_1" label="This is the first checkbox" v-model="value" />
                <c-checkbox id="test_check_2" label="This is the second checkbox with longer text" v-model="value" />
                <c-checkbox id="test_check_3" label="This is the checkbox" v-model="value" />
                <c-checkbox id="test_check_4" label="This is the test checkbox" v-model="value" />
            </c-checkbox-group>
        </div>
        `
    }));

import Tooltips from '@/ui/components/tooltips';
import TooltipUniversal from '@/ui/components/tooltips/universal';


storiesOf('Tooltips', module)
    .add('dark', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row">
                <div class="col-4 text-center">
                            <c-tooltips name="Hover Me(left Position)!" position="left" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Center Position)!" position="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Right Position)!" position="right" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='false' />
                </div>
            </div>
        `
    }))
    .add('light', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row">
                <div class="col-4 text-center">
                            <c-tooltips name="Hover Me(left Position)!" position="left" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='true' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Center Position)!" position="center" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='true' />
                </div>
                <div class="col-4 text-center">
                    <c-tooltips name="Hover Me(Right Position)!" position="right" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." :lightStyle='true' />
                </div>
            </div>
        `
    }))
    .add('custom content', () => ({
        components: {
            'c-tooltips': Tooltips
        },
        template: `
            <div class="row">
                <div class="col-6 text-center">
                    <c-tooltips name="Click Me(Custom content)!" type="click" position="left" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                        <a href="#3" class="btn btn-sm btn-danger mt-2">Some link</a>
                    <c-tooltips/>
                </div>
                <div class="col-6 text-center">
                    <c-tooltips name="Hover Me(Custom content)!" position="center" :lightStyle='true'>
                        <p class="p-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        <p class="p-0 m-0">Lipsum generator.</p>
                    <c-tooltips/>
                </div>
            </div>
        `
    }))
    .add('universal (Not finished)', () => ({
        components: { 'c-tooltip-universal': TooltipUniversal },
        template: `
            <div class="row col-6">
                <c-tooltip-universal>
                    12 23 23 wewewewewe
                    <template slot="tooltip">
                        <h1>909090909090909090909</h1>
                    </template>
                </c-tooltip-universal>
            </div>
        `
    }))



import ActivityChart from '../ui/components/activity-chart/index.vue'

storiesOf('Activity Chart', module)
    .add('default', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" />
            </div>
        `
    }))
    .add('medium size', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" size="md" />
            </div>
        `
    }))
    .add('small size', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" size="sm" />
            </div>
        `
    }))
    .add('extra small size', () => ({
        components: {
            'c-activity-chart': ActivityChart
        },
        data: () => data.ActivityChart,
        template: `
            <div class="col-6 py-4">
                <c-activity-chart title="Activity Chart" :years="years" size="xs" />
            </div>
        `
    }))

import PopUps from '../ui/components/popups/index.vue'

storiesOf('Popups', module)
    .add('default', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is dafault popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="default" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" title="Error" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('warning', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler() {
                this.modalActive = !this.modalActive;
            },
            close() {
                console.log('PopUp was closed!!!!!!!!!')
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is warning popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="warning" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" @close="close" ref="modal" title="Warning" type="warning" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('danger', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is danger popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="danger" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" title="Danger" type="danger" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('info', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is info popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="info" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" title="Info" type="info" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))
    .add('success', () => ({
        components: {
            'c-popup': PopUps,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            }
        },
        template: `
            <div class="col-12 p-5 text-white">
                <h3 class="text-white">This is success popup</h3>
                <c-button text="Show modal" @click="showModalHandler" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                <c-popup :activated="modalActive" ref="modal" type="success" title="Success" sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        text="Praesent nec urna non libero lobortis sagittis. Etiam quis pellentesque dolor.Aenean semper fermentum lorem, ac cursus metus mollis eget.">
                    <template slot="footer">
                        <div class="text-right w-100">
                            <c-button text="Cancel" variant="danger" icon="fas fa-times" icon_position="left" c_class="mx-1" />
                            <c-button text="Confirm" variant="success" icon="fas fa-check" icon_position="left" c_class="ml-1" />
                        </div>
                    </template>
                </c-popup>
            </div>
        `
    }))

import RangeSlider from '../ui/components/range-slider/index.vue'

storiesOf('Range Slider', module)
    .add('single range slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider label="Single slider" :min="45" />
            </div>
         </div>
        `
    }))
    .add('single step slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider label="Single step slider"
                 :min="1"
                 :max="10"
                 :step="1"
                 :gridNum="2"
                 :grid="true"/>
            </div>
         </div>
        `
    }))
    .add('double range slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider
                label="Double slider"
                :min="0"
                :from="25"
                :to="67"
                type="double" />
            </div>
         </div>
        `
    }))
    .add('double grid range slider', () => ({
        components: {
            'c-range-slider': RangeSlider
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-8">
                <c-range-slider
                label="Double slider"
                :min="0"
                :from="25"
                :to="67"
                :grid="true"
                type="double" />
            </div>
         </div>
        `
    }))

import AssetsGrid from '../ui/components/assets-grid/index.vue'

storiesOf('Assets Grid', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-assets-grid': AssetsGrid
        },
        data() {
            return object('Data', {
                assets_list: [
                    {
                        name: 'some item name',
                        price: '1.99',
                        count: '240.000',
                        main_img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        sub_img: 'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    },
                    {
                        name: 'some another item name',
                        price: '99.99',
                        count: '824.000',
                        main_img: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
                        sub_img: 'https://vignette.wikia.nocookie.net/elderscrolls/images/a/a6/FalmerSkulker.png/revision/latest?cb=20140826005240',
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-assets-grid :list="assets_list" />
         </div>
        `
    }));

import AssetsPopup from '../ui/components/asset-overview-popup/index.vue'

storiesOf('Assets Overview Popup', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-asset-popup': AssetsPopup
        },
        data() {
            return object('Data', {
                asset: {
                    metadata: [
                        {
                            "label": "type",
                            "text": "Legendary Two Handed Sword"
                        },
                        {
                            "label": "average dps",
                            "text": "2,903.6"
                        },
                        {
                            "label": "Damage Range",
                            "text": "2193-2880"
                        },
                        {
                            "label": "Attack speed",
                            "text": "1.15"
                        },
                        {
                            "label": "Bonus 1",
                            "text": "+1379-1679 Damage, +9% Damage, +1121 strenght"
                        },
                        {
                            "label": "Bonus 2",
                            "text": "Monster kills grant +151 experiance"
                        },
                        {
                            "label": "Level Requirement",
                            "text": "70"
                        },
                        {
                            "label": "Item Durability",
                            "text": "40/41"
                        }
                    ]
                }
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-popup :asset="asset" />
         </div>
        `
    }));

import Switch from '../ui/components/switch/index.vue'

storiesOf('Switch', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch label="Some text" label_position="right" label_size="22px" />
         </div>
        `
    }))
    .add('small', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch size="sm" :value=true />
         </div>
        `
    }))
    .add('large', () => ({
        components: {
            'c-switch': Switch
        },
        template: `
         <div class="row m-0 p-3">
             <c-switch size="lg" :value=true />
         </div>
        `
    }));


import AssetsList from '../ui/components/assets-list-item/featured-list.vue'
import AssetsListDetail from '../ui/components/assets-list-item/index.vue'

storiesOf('Assets List', module)
    .addDecorator(withKnobs)
    .add('type 1', () => ({
        components: {
            'c-asset-list': AssetsList
        },
        data() {
            return object('Data', {
                items: [
                    {
                        img: 'https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de',
                        title: 'Magic Plate Armor',
                        sub_title: 'Tibia MMORPG'
                    },
                    {
                        img: 'https://vignette.wikia.nocookie.net/angrybirds-fiction/images/8/8b/Toons_assets_chuck_01.png/revision/latest?cb=20150120103056&path-prefix=ru',
                        title: 'Magic Chuck',
                        sub_title: 'Angry Birds'
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-list :items="items" itemInRow="5" />
         </div>
        `
    }))
    .add('type 2', () => ({
        components: {
            'c-asset-list': AssetsListDetail
        },
        data() {
            return object('Data', {
                items: [
                    {
                        img: 'https://vignette.wikia.nocookie.net/elderscrolls2/images/0/07/Lederr%C3%BCstung2.png/revision/latest?cb=20131219143228&path-prefix=de',
                        title: 'Magic Plate Armor',
                        price: '4.99',
                        count: '350.000'
                    },
                    {
                        img: 'https://vignette.wikia.nocookie.net/angrybirds-fiction/images/8/8b/Toons_assets_chuck_01.png/revision/latest?cb=20150120103056&path-prefix=ru',
                        title: 'Magic Chuck',
                        price: '19.99',
                        count: '50.000'
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
             <c-asset-list :items="items" itemInRow="4" />
         </div>
        `
    }))


import Block from '../ui/components/block-1/index.vue'

storiesOf('Block', module)
    .add('default', () => ({
        components: {
            'c-block': Block
        },
        template: `
         <div class="row m-0 p-3">
             <c-block title="This is block title" bClass="col-8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vel arcu sit amet erat vestibulum volutpat.
                Ut volutpat enim vel augue luctus luctus</p>
                <p>Curabitur et molestie eros. Duis sodales ante velit,
                ut fringilla turpis dictum sit amet. Praesent quis lacus
                ac tellus vehicula commodo sit amet sit amet ex.</p>
            </c-block>
         </div>
        `
    }))

import CustomModal from '../ui/components/custom-modal/index'

storiesOf('Modal', module)
    .add('default', () => ({
        components: {
            'c-modal': CustomModal
        },
        template: `
         <div class="row m-0 p-3">
             <div class="col-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch modal
                </button>
            </div>
            <c-modal id="exampleModal" title="Some modal title">
                <template slot="modal_body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id rhoncus turpis.</p>
                    <p>Aliquam nec blandit mi. Integer sed neque urna.</p>
                </template>
                <template slot="modal_footer">
                    <a href="#3" class="btn btn-sm btn-success">Some Link</a>
                </template>
            </c-modal>
         </div>
        `
    }))

import Dropdown from '../ui/components/dropdown-menu/type-2'
import DropdownSmall from '../ui/components/dropdown-menu/index'

storiesOf('Dropdown', module)
    .add('default', () => ({
        components: {
            'c-dropdown': Dropdown
        },
        template: `
         <div class="row m-0 p-3">
            <c-dropdown id="test" name="Filter by Genre" :showBg="true">
                <a href="#3">RPG</a>
                <a href="#3">ACTION</a>
                <a href="#3">Cars</a>
            </c-dropdown>
         </div>
        `
    }))
    .add('small', () => ({
        components: {
            'c-dropdown': DropdownSmall
        },
        template: `
         <div class="row m-0 p-3">
             <c-dropdown />
         </div>
        `
    }))

import DropdownMenu from '../ui/components/dropdown-menu/type-2.vue'
import FTradedAssets from '../ui/components/frequently-traded-assets/index'

storiesOf('Frequently traded assets', module)
    .add('default', () => ({
        components: {
            'c-traded-assets': FTradedAssets,
            'c-dropdown': DropdownMenu
        },
        data: () => object('Data', data.TradedAssets),
        template: `
         <div class="row m-0 p-3">
             <div class="col-4">
                <c-traded-assets :items="frequently_traded_assets" assets_url="#some_url_here">
                    <template slot="filter">
                    <c-dropdown name="Most valuable" id="most_valuable">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </c-dropdown>
                    </template>
                </c-traded-assets>
            </div>
         </div>
        `
    }))

import GamePlan from '@/ui/components/game-plans/plan'

storiesOf('Game Plans', module)
    .add('default', () => ({
        components: {
            'c-game-plan': GamePlan
        },
        data() {
            return object('Data', {
                plans: [
                    {
                        "title": "Play Tibia Now",
                        "link": "#3",
                        "link_text": "Play Now"
                    },
                    {
                        "title": "1 Month Premium benefits",
                        "price": "34",
                        "link": "#4",
                        "link_text": "Buy Now"
                    },
                    {
                        "title": "2 Month Premium benefits",
                        "price": "57",
                        "link": "#4",
                        "link_text": "Buy Now"
                    }
                ]
            })
        },
        template: `
         <div class="row m-0 p-3">
            <div class="col-5">
                <c-game-plan
                    v-for="(plan, index) in plans"
                    :key="index"
                    :plan="plan"
                />
            </div>
         </div>
         `
    }))

import GamesGrid from '../ui/components/games-grid/with-description'
import GamesGridSimple from '../ui/components/games-grid/simple'

storiesOf('Games Grid', module)
    .addDecorator(withKnobs)
    .add('with description', () => ({
        components: {
            'c-games-grid': GamesGrid
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <c-games-grid
                    :showRating=false
                    :showTime=true
                    :showPrice=true
                    :itemInRow="itemInRow"
                    :items="games"
                    itemBg="transparent"
                    :hovered=true
                />
            </div>
         </div>
         `
    }))
    .add('simple', () => ({
        components: {
            'c-games-grid-simple': GamesGridSimple
        },
        data: () => object('Data', data.GamesGrid),
        template: `
         <div class="row m-0 p-3">
            <div class="col-12">
                <c-games-grid-simple
                    :itemInRow="itemInRow"
                    :items="games"
                />
            </div>
         </div>
         `
    }))

import Headers from '../ui/components/headers/basic'

storiesOf('Headers', module)
    .add('default', () => ({
        components: {
            'c-headers': Headers
        },
        template: `
            <!--<c-headers />-->
        `
    }))

import BlockHeaders from '../ui/components/heading-bar/index'
import BlockHeadersAddFields from '../ui/components/heading-bar/additional-action'

const injectHBarTemp = code => `
    <div class="row">
        <div class="col-8 p-5">
            ${code}
        </div>
    </div>
`;
storiesOf('Block Title', module)
    .add('default', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" />
        `)
    }))
    .add('with background', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" showBackground="true" />
        `)
    }))
    .add('with arrows', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" showArrows="true"  />
        `)
    }))
    .add('with more button', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title" more="#some_link"  />
        `)
    }))
    .add('with filters', () => ({
        components: {
            'c-heading-bar': BlockHeaders,
            'c-heading-bar-fields': BlockHeadersAddFields
        },
        methods: {
            upClick: function () {
                alert('It was Up click')
            },
            downClick: function () {
                alert('It was Down click')
            }
        },
        template: injectHBarTemp(`
            <c-heading-bar name="This is the Title">
                <template slot="additional-action">
                    <c-heading-bar-fields name="Reviews" icon="fas fa-trophy" @click_up="upClick"  @click_down="downClick" />
                    <c-heading-bar-fields name="Price" icon="fas fa-dollar-sign" />
                </template>
            </c-heading-bar>
        `)
    }))
    .add('with tabs', () => ({
        components: {
            'c-heading-bar': BlockHeaders
        },
        template: injectHBarTemp(`
            <c-heading-bar>
                <template slot="heading-tabs">
                    <a href="#3">First tab</a>
                    <a href="#3" class="active">Second tab</a>
                    <a href="#3">Third tab</a>
                </template>
            </c-heading-bar>
        `)
    }))

import NewsListNav from '../ui/components/news-list/navigation'
import NewsList from '../ui/components/news-list/articles'
import NewsArticle from '../ui/components/news-list/article'

storiesOf('News List', module)
    .add('default', () => ({
        components: {
            'c-news-list-navigation': NewsListNav,
            'c-news-list-articles': NewsList,
        },
        data() {
            return {
                content_news: [
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        articles: [
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2018-07-24T04:09:00.000Z'
                            }
                        ]
                    },
                    {
                        game: {
                            title: 'Diablo I',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        articles: [
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2016-09-24T04:09:00.000Z'
                            },
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2014-03-24T04:09:00.000Z'
                            }
                        ]
                    },
                    {
                        game: {
                            title: 'Diablo II',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        articles: [
                            {
                                heading: 'New class and event coming next week!',
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                                url: 'article-url',
                                date: '2017-12-24T04:09:00.000Z'
                            }
                        ]
                    }
                ]
            }
        },
        template: `
        <div class="row m-0 p-5">
            <c-news-list-navigation
                :content_news="content_news"
            />
            <c-news-list-articles
                :content_news="content_news"
            />
        </div>
        `
    }))
    .add('single article', () => ({
        components: {
            'c-news-article': NewsArticle
        },
        data() {
            return {
                article: {
                    heading: 'New class and event coming next week!',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum fringilla ante eget hendrerit. Mauris maximus, augue sit amet laoreet pretium, ipsum est eleifend tellus, vestibulum aliquet turpis lectus quis nisi.',
                    url: 'article-url',
                    date: '2018-07-24T04:09:00.000Z'
                }
            }
        },
        template: `
            <div class="row">
                <div class="col-6">
                    <c-news-article :article="article" itemInRow="1" />
                </div>
            </div>
        `
    }))

import Pagination from '@/ui/components/pagination/index';

storiesOf('Pagination', module)
    .add('default', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination :pages="15" />
            </div>
        `
    }))
    .add('Limited to 5 pages', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination :pages="15" :pages_show="5"/>
            </div>
        `
    }))
    .add('Debouncer', () => ({
        components: {
            'c-pagination': Pagination
        },
        template: `
            <div class="row m-0 p-5">
                <c-pagination :pages="15" :debounce="1000"/>
            </div>
        `
    }))

import ProductCommunity from '../ui/components/product-community/item'

storiesOf('Product Community', module)
    .add('post', () => ({
        components: {
            'c-post': ProductCommunity
        },
        data() {
            const authors = [
                {name: 'Nakatochi', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'},
                {
                    name: 'Nakatochi',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL'
                },
                {
                    name: 'SatoshiSan',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL'
                },
            ];
            const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.';
            return {
                post: {
                    title: `The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.`,
                    date: '',
                    rate: 103,
                    comments_count: 894391,
                    status: 'starred',
                    author: authors[0],
                    content: {
                        img: 'http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg',
                        text: placeholderText,
                        comments: [
                            {author: authors[1], text: placeholderText, rate: 319},
                            {
                                author: authors[0], text: placeholderText, rate: 932, replies: [
                                    {author: authors[1], text: placeholderText, rate: 318},
                                    {author: authors[0], text: placeholderText, rate: -49},
                                    {author: authors[1], text: placeholderText, rate: 442},
                                    {author: authors[0], text: placeholderText, rate: 1239}
                                ]
                            },
                            {author: authors[0], text: placeholderText, rate: -51}
                        ]
                    }
                }
            }
        },
        template: `
            <div class="row m-0 p-5">
                <div class="col-10">
                    <c-post :post="post" />
                </div>
            </div>
        `
    }))

// import ProductTags from '../ui/components/product-tags/index'

// storiesOf('Product Tags', module)
//     .add('default', () => ({
//         components: {
//             'c-tags-list': ProductTags
//         },
//         data() {
//             return {
//                 tags: [
//                     "adventure",
//                     "rpg",
//                     "mmorpg"
//                 ],
//             }
//         },
//         template: `
//             <div class="row m-0 p-5">
//                 <div class="col-12">
//                     <h3 class="text-white d-block">Some title or name</h3>
//                     <c-tags-list :tags="tags" />
//                 </div>
//             </div>
//         `
//     }))

import ProjectCard from '../ui/components/projects/card'

storiesOf('Project Card', module)
    .add('default', () => ({
        components: {
            'c-projects-card': ProjectCard
        },
        data() {
            return {
                trending_projects: [
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                    {
                        game: {
                            title: 'World of Warcraft',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'GBP',
                            obtained: 7613,
                            goal: 8500
                        }
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                    {
                        game: {
                            title: 'Diablo III',
                            developer: 'Blizzard Entertainment',
                            img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240'
                        },
                        description: 'Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.',
                        img: 'https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg',
                        funds: {
                            currency: 'USD',
                            obtained: 2834,
                            goal: 5000
                        }
                    },
                ]
            }
        },
        template: `
            <div class="row m-0 p-5">
                <div class="col-10">
                    <c-projects-card v-for="(project, index) in trending_projects"
                                    :key="index"
                                    :project="project"
                                    customClass="margin-bottom-20"/>
                </div>
            </div>
        `
    }))


import RatingBlock from '../ui/components/rating-block/index'

storiesOf('Rating Block', module)
    .add('default', () => ({
        components: {
            'c-rating-block': RatingBlock
        },
        data() {
            return {
                items: [
                    {
                        name: 'Some title',
                        number: 4
                    },
                    {
                        name: 'Some second title',
                        number: 3.6
                    },
                    {
                        name: 'Some third a little bit bigger title',
                        number: 5
                    }
                ]
            }
        },
        template: `
        <div class="row">
            <div class="col-8">
                <c-rating-block :items="items" fullReviewsLink="#3" rateGameLink="#4" />
            </div>
        </div>
        `
    }))


import SendingFundsPopup from '../ui/components/send-funds-popup/index'

storiesOf('Sending Funds(not finished)', module)
    .add('default', () => ({
        components: {
            'c-send-funds': SendingFundsPopup,
            'c-button': Buttons
        },
        data() {
            return {
                modalActive: false
            }
        },
        methods: {
            showModalHandler: function () {
                this.modalActive = !this.modalActive;
            }
        },
        template: data.SendingFunds.template
    }))

import UserCard from '../ui/components/user-card/index'

storiesOf('User Card(not finished)', module)
    .add('default', () => ({
        components: {
            'c-user-card': UserCard
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-user-card  />
            </div>
        </div>
        `
    }))
    .add('done', () => ({
        components: {
            'c-user-card': UserCard
        },
        template: `
        <div class="row p-5">
            <div class="col-4">
                <c-user-card status="success" :user="true"  />
            </div>
        </div>
        `
    }))

import ScreenGallery from '../ui/components/screen-gallery/gallery';

storiesOf('Gallery', module)
    .add('screen-gallery', () => ({
        components: {ScreenGallery},
        data() {
            return {
                main: 'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012',
                items: [
                    'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_64eb760f9a2b67f6731a71cce3a8fb684b9af267.1920x1080.jpg?t=1529405012',
                    'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.1920x1080.jpg?t=1529405012',
                    'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_d5b80eb63c12a6484f26796f3e34410651bba068.1920x1080.jpg?t=1529405012',
                ]
            }
        },
        template: `<screen-gallery :main="main" :items="items" class="col-6"/>`
    }))

import ProductCardDynamic from '@/ui/components/store/product-card-dynamic';
import ProductCard from '@/ui/components/store/product-card';
import ProductsCards from '@/ui/components/store/products-cards';

const productsCardsData = [
    {
        id: "8",
        name: "Gothic® 3",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
            medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/39500/header.jpg?t=1533039803",
            main: "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004036.1920x1080.jpg?t=1533039803",
            preview: [
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004033.1920x1080.jpg?t=1533039803",
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004034.1920x1080.jpg?t=1533039803",
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004035.1920x1080.jpg?t=1533039803",
                "https://steamcdn-a.akamaihd.net/steam/apps/39500/0000004037.1920x1080.jpg?t=1533039803"
            ]
        },
        author: "Piranha Bytes",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/901191/movie480.webm?t=1490866901"],
        author_tags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
    },
    {
        id: "9",
        name: "The Witcher® 3: Wild Hunt",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
            medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg?t=1529405012",
            main: "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_b74d60ee215337d765e4d20c8ca6710ae2362cc2.600x338.jpg?t=1529405012",
            preview: [
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_107600c1337accc09104f7a8aa7f275f23cad096.600x338.jpg?t=1529405012",
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_64eb760f9a2b67f6731a71cce3a8fb684b9af267.600x338.jpg?t=1529405012",
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.600x338.jpg?t=1529405012",
                "https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_d5b80eb63c12a6484f26796f3e34410651bba068.600x338.jpg?t=1529405012"
            ]
        },
        author: "CD PROJEKT RED",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256658589/movie480.webm?t=1528288687"],
        author_tags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
    },
    {
        id: "10",
        name: "Fallout 4",
        images: {
            header: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
            medium_tile: "https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg?t=1533676954",
            main: "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c6b798424a93617b4b825aea3bcd9547c0b0a5ce.1920x1080.jpg?t=1533676954",
            preview: [
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f7861bd71e6c0c218d8ff69fb1c626aec0d187cf.1920x1080.jpg?t=1533676954",
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_910437ac708aed7c028f6e43a6224c633d086b0a.1920x1080.jpg?t=1533676954",
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_f649b8e57749f380cca225db5074edbb1e06d7f5.1920x1080.jpg?t=1533676954",
                "https://steamcdn-a.akamaihd.net/steam/apps/377160/ss_c310f858e6a7b02ffa21db984afb0dd1b24c1423.1920x1080.jpg?t=1533676954"
            ]
        },
        author: "Bethesda",
        videos: ["https://steamcdn-a.akamaihd.net/steam/apps/256657338/movie480.webm?t=1447378505"],
        author_tags: ["RPG", "Open World", "Fantasy", "Action", "Atmospheric", "Third Person"]
    }
];
storiesOf('Product Card', module)
    .add('basic', () => ({
        components: {ProductCard},
        data: () => ({products: productsCardsData}),
        template: `
            <div class="row">
                <product-card
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    class="col-3"
                />
            </div>
        `
    }))
    .add('dynamic', () => ({
        components: {ProductCardDynamic},
        data: () => ({products: productsCardsData}),
        template: `
            <div class="row">
                <product-card-dynamic
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    class="col-3"
                />
            </div>
        `
    }))
    .add('wrapper', () => ({
        components: {ProductsCards},
        data: () => ({products: productsCardsData}),
        template: `
            <div>
                <h1 style="text-align: center;">Hover transitions are enabled only on bigger screens</h1>
                <products-cards :products="products"/>
            </div>
        `
    }))

import CuratorReview from '@/ui/components/store/curator-review';
import CuratorsReviews from '@/ui/components/store/curators-reviews';

const curatorReview = {
    author: {name: 'SatoSan', img: 'https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png'},
    rate: 4.5,
    game: {img: 'http://www.pixels-association.ch/wp-content/uploads/2017/11/no1.jpg'},
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi arcu, viverra et efficitur luctus, tincidunt vel lacus. Morbi erat augue, posuere et sodales venenatis, tincidunt eu arcu. In sollicitudin purus quis sodales ornare. Cras tempus vestibulum elementum. Sed placerat, turpis id cursus cursus, augue enim molestie dui, elementum luctus lectus est vitae dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris vehicula mi a nunc cursus, id volutpat purus commodo. Duis consequat elementum varius. Suspendisse dui enim, rhoncus a molestie at, tristique ut urna. Praesent et consectetur dui. Pellentesque ut volutpat nunc, ut viverra nulla. Duis ultricies, sem sit amet laoreet lobortis, mauris est mollis orci, non eleifend urna leo quis lectus. Vestibulum sit amet volutpat est.',
    more_reviews: [
        {
            rate: 3.5,
            game: {
                title: 'Volgar the Viking',
                img: 'https://images-1.gog.com/54e9b9504af871d5a6ed67f9a9c439fc3a889ecd4e84d24173b10e49971db9c7.jpg'
            }
        },
        {
            rate: 5,
            game: {
                title: 'The Witcher 3: Wild Hunt',
                img: 'http://getwallpapers.com/wallpaper/full/6/f/7/22250.jpg'
            }
        }
    ]
};
storiesOf('Curators Reviews', module)
    .add('review', () => ({
        components: {CuratorReview},
        data: () => ({review: curatorReview}),
        template: `<curator-review :review="review" class="col-3"/>`
    }))
    .add('reviews wrapper', () => ({
        components: {CuratorsReviews},
        data: () => ({reviews: [curatorReview, curatorReview, curatorReview]}),
        template: `<curators-reviews :reviews="reviews" class="col-8"/>`
    }))


import ModalLight from '@/ui/components/modal-light';
storiesOf('Modal Light', module)
    .add('default', () => ({
        components: { 'c-modal-light': ModalLight },
        template: `<c-modal-light/>`
    }))
    .add('image', () => ({
        components: { 'c-modal-light': ModalLight },
        template: `
            <c-modal-light>
                <img
                    src="http://gamechanger.co.ke/wp-content/uploads/2016/09/The-Witcher-3-Wild-Hunt-Game-of-the-Year-Edition3.jpg"
                />
            </c-modal-light>
        `
    }))
    .add('text', () => ({
        components: { 'c-modal-light': ModalLight },
        template: `
            <c-modal-light>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn</p>
            </c-modal-light>
        `
    }))

import ImagesExplorer from '@/ui/components/images-explorer';
storiesOf('Images Explorer', module)
    .add('default', () => ({
        components: { 'c-images-explorer': ImagesExplorer },
        data: () => object('Data', data.ImagesExplorer),
        template: `<c-images-explorer :images="images"/>`
    }))
    .add('in modal', () => ({
        components: {
            'c-images-explorer': ImagesExplorer,
            'c-modal-light': ModalLight
        },
        data: () => object('Data', data.ImagesExplorer),
        template: `
            <c-modal-light>
                <c-images-explorer :images="images"/>
            </c-modal-light>
        `
    }))

import CollectionItem from '@/ui/components/collection/item';
storiesOf('Collection', module)
    .add('single item', () => ({
        components:{
            'c-collection-item': CollectionItem
        },
        data(){
            return{
                item:{
                    title: 'Collection name',
                    user: 'John Doel',
                    count_number: 2741,
                    background: 'data:image/jpeg;base64,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',
                    images:[
                        'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                        'https://d1u5p3l4wpay3k.cloudfront.net/skyrim_de_gamepedia/thumb/0/04/SteelPlateArmorofIllusion.png/200px-SteelPlateArmorofIllusion.png',
                    ]
                }
            }
        },
        template: `
            <div class="col-3 p-5">
                <c-collection-item :item="item" />
            </div>
        `
    }))








/*
     Dynamic import - test version

const navigation = storiesOf('Navigation', module);

['account', 'asset', 'funding'].forEach(component => {
    navigation.add(component, () => ({
        components: { [component]: () => import(`../ui/components/navigation/${component}`) },
        template: `<${component}/>`
    }))
});

*/


// /* eslint-enable react/react-in-jsx-scope */
