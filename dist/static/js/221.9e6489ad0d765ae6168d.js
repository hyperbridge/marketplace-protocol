(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{498:function(s,t,a){"use strict";var i=a(77);a.n(i).a},77:function(s,t){},805:function(s,t,a){"use strict";a.r(t);var i={name:"game-library-item",props:["game","isLoading","online","favorites"],data:function(){return{show:!1,shareList:!1}},components:{"c-dropdown":function(s){return a.e(157).then(function(){var t=[a(745)];s.apply(null,t)}.bind(this)).catch(a.oe)},"c-share-list":function(s){return a.e(175).then(function(){var t=[a(729)];s.apply(null,t)}.bind(this)).catch(a.oe)}},methods:{toggleList:function(){this.show=!this.show,this.shareList=!this.shareList}}},n=(a(498),a(0)),e=Object(n.a)(i,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"game-library__item"},[a("div",{staticClass:"item-img loading--w-spinner"},[a("c-img",{attrs:{src:s.game.images.medium_tile}}),s._v(" "),s.isLoading?a("div",{staticClass:"loader-block"},[a("div",{staticClass:"loading-spinner"})]):s._e()],1),s._v(" "),a("div",{staticClass:"item-name"},[s._v("\n        "+s._s(s.game.name)+"\n    ")]),s._v(" "),a("div",{staticClass:"item-action"},[s._m(0),s._v(" "),a("div",{staticStyle:{height:"20px",width:"20px","margin-right":"-5px"}},[a("c-dropdown",{class:{"no-right-border":s.shareList}},[a("ul",{staticClass:"item-dropdown"},[a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-list-alt"}),s._v("\n                            Add to Collection\n                        ")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-shopping-basket"}),s._v("\n                            Market page\n                        ")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-th"}),s._v("\n                            Inventory\n                        ")])]),s._v(" "),a("hr"),s._v(" "),a("li",{on:{click:s.toggleList}},[a("i",{staticClass:"fas fa-share"}),s._v("\n                        Share\n                        "),a("c-share-list",{staticClass:"in-dropdown",attrs:{onlineList:s.online,favoritesList:s.favorites,show:s.show}})],1),s._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-link"}),s._v("\n                            Copy Link\n                        ")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fab fa-facebook"}),s._v("\n                            Share on Facebook\n                        ")])])])])],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("span",{staticClass:"has-new"},[t("i",{staticClass:"fas fa-cog"})]),this._v(" "),t("span",[t("i",{staticClass:"fas fa-camera"})]),this._v(" "),t("span",[t("i",{staticClass:"fas fa-star"})]),this._v(" "),t("span",[t("i",{staticClass:"fas fa-play"})])])}],!1,null,"629c5049",null);t.default=e.exports}}]);