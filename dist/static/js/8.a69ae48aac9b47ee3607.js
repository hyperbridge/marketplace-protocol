(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{467:function(t,n,e){"use strict";var c=e(63);e.n(c).a},63:function(t,n){},861:function(t,n,e){"use strict";e.r(n);e(8);var c={components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[e(871)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-block":function(t){return e.e(105).then(function(){var n=[e(756)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-dropdown":function(t){return e.e(128).then(function(){var n=[e(759)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-input-searcher":function(t){return e.e(111).then(function(){var n=[e(682)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-dropdown-menu":function(t){return e.e(159).then(function(){var n=[e(774)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-list":function(t){return e.e(120).then(function(){var n=[e(775)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-user-head":function(t){return e.e(158).then(function(){var n=[e(791)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-game":function(t){return e.e(201).then(function(){var n=[e(740)];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:{selectableCategory:function(){},selectableRating:function(){},games:function(){return this.$store.state.marketplace.products}}},a=(e(467),e(0)),i=Object(a.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",[e("div",{staticClass:"content",attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("c-user-head"),t._v(" "),e("div",{staticClass:"row margin-top-50"},[e("div",{staticClass:"col-12 col-xl-4"},[e("div",{staticClass:"h2 p-0 m-0"},[t._v("Game Library")]),t._v(" "),e("div",[e("strong",[t._v("482")]),t._v("\n                        games in your inventory\n                    ")])]),t._v(" "),e("div",{staticClass:"col-12 col-lg-8"},[e("div",{staticClass:"filter-blk d-flex align-items-center"},[e("c-dropdown-menu",{staticClass:"margin-right-10 dark-bg",attrs:{title:"FILTER BY CATEGORY"}},[e("c-list",{attrs:{items:t.selectableCategory},on:{click:function(t){return t.selected=!t.selected}}})],1),t._v(" "),e("c-dropdown-menu",{staticClass:"margin-right-10 dark-bg",attrs:{title:"FILTER BY RATING"}},[e("c-list",{attrs:{items:t.selectableRating},on:{click:function(t){return t.selected=!t.selected}}})],1),t._v(" "),e("c-input-searcher",{staticClass:"assets-explorer__input-searcher",model:{value:t.phrase,callback:function(n){t.phrase=n},expression:"phrase"}})],1)])]),t._v(" "),e("div",{staticClass:"row align-items-stretch"},t._l(t.games,function(t,n){return e("div",{key:n,staticClass:"col-12 col-xl-3 py-3"},[e("c-game",{attrs:{game:t}})],1)}))],1)])])},[],!1,null,"bfad7606",null);n.default=i.exports}}]);