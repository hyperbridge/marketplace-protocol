(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1393:function(t,e,o){"use strict";o.r(e);var n=o(9),i=(o(3),{components:{"c-user-card":function(t){return o.e(9).then(function(){var e=[o(1259)];t.apply(null,e)}.bind(this)).catch(o.oe)}},data:function(){var t=this,e=this.$store.state.application.account.identities.find(function(e){return e.id==t.$store.state.application.account.current_identity.id});return!e&&this.$store.state.application.account.identities.length&&(e=this.$store.state.application.account.identities[0]),{errors:[],chosenIdentity:e}},computed:{identities:function(){return this.$store.state.application.account.identities},developer_mode:function(){return this.$store.state.application.developer_mode}},methods:{convertIdentity:function(){var t=this;n.sendCommand("createDeveloperRequest",this.chosenIdentity).then(function(e){t.chosenIdentity.developer_id=e,t.$store.state.application.developer_mode=!0})},chooseIdentity:function(t){this.chosenIdentity=t}}}),r=(o(817),o(0)),s=Object(r.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("c-layout",{attrs:{navigationKey:"store"}},[o("div",{staticClass:"row"},[t.developer_mode?t._e():o("div",{staticClass:"col-12"},[o("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Business Manager",noGutter:!0,bgGradient:!0,onlyContentBg:!0,hidden:""}},[o("p",[t._v("We're still working on our Business Manager. If you want a sneak preview, "),o("a",{attrs:{href:"#/business"}},[t._v("it's over here")]),t._v(". In the meantime, you can contact us directly at "),o("a",{attrs:{href:"mailto:business@hyperbridge.org"}},[o("strong",[t._v("business@hyperbridge.org")])])])]),t._v(" "),o("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Why Community-Driven Development?",noGutter:!0,bgGradient:!0,onlyContentBg:!0,hidden:""}},[o("p",[t._v("You might initially think that community-driven feature development could lead to bad game design. And in ordinary circumstances that's correct. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, "),o("strong",[t._v("they're playing the game")]),t._v(". That's why we need to use "),o("strong",[t._v("comparison")]),t._v(" metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. We want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.")])]),t._v(" "),t.developer_mode?t._e():o("div",{staticStyle:{"text-align":"center"}},[o("c-user-card",{staticClass:"col-3 margin-auto",class:{default:!0},attrs:{user:t.chosenIdentity,previewMode:!0}}),t._v(" "),o("br"),t._v(" "),o("c-button",{staticClass:"underline",on:{click:function(e){t.$store.commit("application/showProfileChooser",!0)}}},[t._v("Choose Different Profile")]),t._v(" "),o("br"),o("br"),t._v(" "),o("c-button",{staticClass:"c-btn-lg outline-white margin-top-20",on:{click:t.convertIdentity}},[t._v("Convert to Developer")])],1)],1),t._v(" "),t.developer_mode?o("div",{staticClass:"col-12"},[o("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Congratulations",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t._v("\n                    Your profile is all setup. You are Developer #"+t._s(t.chosenIdentity.developer_id)+"\n\n                    "),o("br"),o("br"),t._v(" "),o("c-button",{attrs:{href:"#/developer"}},[t._v("Go to dashboard")])],1)],1):t._e()])])},[],!1,null,"1158af73",null);e.default=s.exports},251:function(t,e){},817:function(t,e,o){"use strict";var n=o(251);o.n(n).a}}]);