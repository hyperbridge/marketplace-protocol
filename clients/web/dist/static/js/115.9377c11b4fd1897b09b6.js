(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1037:function(t,a,n){"use strict";var l=n(353);n.n(l).a},1609:function(t,a,n){"use strict";n.r(a);var l={props:["id"],components:{},computed:{wallet:function(){if(this.$store.state.application.wallets){var t=this.$store.state.application.wallets[this.id];if(t)return t}}},created:function(){this.$store.commit("application/activateModal","coming-soon")}},s=(n(1037),n(0)),e=Object(s.a)(l,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("c-layout",{attrs:{navigationKey:"wallet"}},[n("div",{staticClass:"row"},[t.wallet?t._e():n("div",{staticClass:"col-12"},[t._v("\n            Wallet not found\n        ")]),t._v(" "),t.wallet?n("div",{staticClass:"col-12"},[t._v("\n            "+t._s(t.wallet.name)+"\n            "+t._s(t.wallet.id)+"\n            "),n("br"),t._v(" "),n("a",{attrs:{href:"#/wallet/"+t.wallet.id+"/transactions"}},[t._v("Transactions")])]):t._e()])])},[],!1,null,null,null);a.default=e.exports},353:function(t,a){}}]);