(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1696:function(t,n,e){"use strict";e.r(n);var i={props:{title:{type:String,default:"GAME OVERVIEW",required:!1}},components:{"c-sidebar-menu":function(t){return e.e(195).then(function(){var n=[e(1575)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-searcher":function(t){return e.e(10).then(function(){var n=[e(1700)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-claim":function(t){return e.e(236).then(function(){var n=[e(1570)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-curator-panel":function(t){return e.e(235).then(function(){var n=[e(1847)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-curator-info":function(t){return e.e(234).then(function(){var n=[e(1571)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-join-community":function(t){return e.e(233).then(function(){var n=[e(1572)];t.apply(null,n)}.bind(this)).catch(e.oe)}},methods:{showClaimPopup:function(){this.$store.commit("application/activateModal","claim")}},data:function(){return{links:{gameOverview:[{to:{path:"/help/1/article/suggesting-features"},title:"Suggesting Features"},{to:{path:"/help/1/article/voting-and-curating-updates"},title:"Voting and Curating Updates"},{to:{path:"/help/1"},title:"MORE ..."}]}}},computed:{signedIn:function(){return this.$store.state.application.signedIn}}},a=e(0),o=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation",attrs:{id:"navigation-default"}},[e("c-sidebar-menu",{attrs:{title:t.title,sub_title:"Help",sub_icon:"fas fa-question-circle",mClass:"margin-bottom-20",links:t.links.gameOverview}}),t._v(" "),"editing"===t.$store.state.application.editorMode?e("c-button",{staticClass:"mb-4",attrs:{status:"second-info",size:"lg"},on:{click:function(n){t.$store.commit("application/activateModal","sync-blockchain")}}},[t._v("Sync Blockchain")]):t._e(),t._v(" "),"editing"===t.$store.state.application.editorMode?e("c-button",{staticClass:"mb-4",attrs:{status:"second-info",size:"lg"},on:{click:function(n){t.$store.commit("application/activateModal","import-product")}}},[t._v("Import")]):t._e(),t._v(" "),t.$store.state.application.desktopMode?t._e():e("c-join-community"),t._v(" "),e("c-curator-panel",[e("c-curator-info",{attrs:{title:""}},[e("c-claim",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"CURATORS",expression:"'CURATORS'"}],staticClass:"margin-bottom-10 margin-top-10",attrs:{title:"Content curated",type:"success"}},[e("p",[t._v("This product has been curated by 2041 people.")]),t._v(" "),e("c-button",{staticClass:"outline-white",attrs:{to:"/curator/application"}},[t._v("\n                    Become a curator\n                ")])],1),t._v(" "),e("ul",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"CURATORS",expression:"'CURATORS'"}]},[e("li",[e("strong",[t._v("492")]),t._v("\n                    Approved with 0 changes\n                ")]),t._v(" "),e("li",[e("strong",[t._v("132")]),t._v("\n                    Approved with at least 1 change requested\n                ")]),t._v(" "),e("li",[e("strong",[t._v("32")]),t._v("\n                    Disapproved with requests\n                ")]),t._v(" "),e("li",[e("strong",[t._v("23")]),t._v("\n                    Disapproved with 0 changes\n                ")])]),t._v(" "),e("c-button",{attrs:{status:"underline"},on:{click:t.showClaimPopup}},[t._v("Created this game?")])],1)],1)],1)},[],!1,null,null,null);n.default=o.exports}}]);