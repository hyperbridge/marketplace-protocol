(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1380:function(t,e,n){"use strict";n.r(e);var i=n(8),o=(n(4),{components:{"c-user-card":function(t){return n.e(9).then(function(){var e=[n(1293)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){var t=this,e=this.$store.state.application.account.identities.find(function(t){return void 0!==t.curator_id}),n=this.$store.state.application.account.identities.find(function(e){return e.id==t.$store.state.application.account.current_identity.id});return!n&&this.$store.state.application.account.identities.length&&(n=this.$store.state.application.account.identities[0]),{identities:this.$store.state.application.account.identities,chosenIdentity:n,developerIdentity:e,errors:[]}},methods:{convertIdentity:function(){var t=this;i.sendCommand("createCuratorRequest",this.chosenIdentity).then(function(e){t.chosenIdentity.curator_id=e,t.developerIdentity=t.chosenIdentity,t.$store.state.application.curator_mode=!0})},chooseIdentity:function(t){this.chosenIdentity=t}}}),a=(n(742),n(0)),r=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",{attrs:{navigationKey:"store"}},[n("div",{staticClass:"row"},[t.curator_mode?t._e():n("div",{staticClass:"col-12"},[n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Curator Application",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("p",[t._v("Welcome")])]),t._v(" "),t.curator_mode?t._e():n("div",{staticStyle:{"text-align":"center"}},[n("c-user-card",{staticClass:"col-3 margin-auto",class:{default:!0},attrs:{user:t.chosenIdentity,previewMode:!0}}),t._v(" "),n("br"),t._v(" "),n("c-button",{staticClass:"underline",on:{click:function(e){t.$store.commit("application/showProfileChooser",!0)}}},[t._v("Choose Different Profile")]),t._v(" "),n("br"),n("br"),t._v(" "),n("c-button",{staticClass:"c-btn-lg outline-white margin-top-20",on:{click:t.convertIdentity}},[t._v("Convert to Curator")])],1)],1),t._v(" "),t.curator_mode?n("div",{staticClass:"col-12"},[n("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Congratulations",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t._v("\n                Your profile is all setup. You are Curator #"+t._s(t.chosenIdentity.developer_id)+"\n\n                "),n("br"),n("br"),t._v(" "),n("c-button",{attrs:{href:"/#/meta"}},[t._v("Go to dashboard")])],1)],1):t._e()])])},[],!1,null,"ae52cec2",null);e.default=r.exports},187:function(t,e){},742:function(t,e,n){"use strict";var i=n(187);n.n(i).a}}]);