(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{109:function(s,t){},535:function(s,t,a){"use strict";var e=a(109);a.n(e).a},844:function(s,t,a){"use strict";a.r(t);var e={name:"asset-overview-popup",props:{asset:{type:Object,required:!0}},components:{"c-heading-bar":function(s){return Promise.resolve().then(function(){var t=[a(857)];s.apply(null,t)}.bind(this)).catch(a.oe)}}},i=(a(535),a(0)),n=Object(i.a)(e,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"asset-overview-popup"},[a("div",{staticClass:"asset-overview-popup__head"},[a("div",{staticClass:"link"},[a("c-icon",{attrs:{name:"link"}})],1),s._v(" "),a("div",{staticClass:"img"},[a("c-img",{attrs:{src:s.asset.image}})],1),s._v(" "),a("div",{staticClass:"info"},[a("h4",[s._v(s._s(s.asset.name))]),s._v(" "),a("h6",[s._v(s._s(s.asset.product_name))]),s._v(" "),a("div",{staticClass:"description"},[a("h6",[s._v(s._s(s.asset.price.current)+"$")]),s._v(" "),a("p",[s._v("Based on 7461 other transactions")]),s._v(" "),a("p",[s._v("Lowest: "+s._s(s.asset.price.min)+"$ Highest: "+s._s(s.asset.price.max)+"$")])])])]),s._v(" "),a("div",{staticClass:"asset-overview-popup__action"},[a("div",{staticClass:"button-line d-flex w-100 justify-content-between"},[a("c-button",{attrs:{status:"danger",icon_hide:""}},[a("c-icon",{attrs:{name:"trash-alt"}})],1),s._v(" "),a("div",{staticClass:"text-right"},[a("c-button",{attrs:{status:"share"}},[s._v("\n                    Send\n                ")]),s._v(" "),a("c-button",{attrs:{status:"success"}},[s._v("\n                    Use\n                ")])],1)],1),s._v(" "),a("div",{staticClass:"w-100 py-4"},[a("c-switch",{attrs:{label:"Accept offers for this item?",checked:s.asset.accept_offers,label_size:"18px",size:"sm",label_position:"left"},on:{change:function(t){s.$store.commit("assets/negateValue",{id:s.asset.id,iprop:"accept_offers"})}}})],1)]),s._v(" "),a("div",{staticClass:"asset-overview-popup__info-list"},[a("div",{staticClass:"metadata"},[a("c-heading-bar",{attrs:{name:"Game Metadata",showArrows:!1,showBackground:!1}}),s._v(" "),a("div",{staticClass:"metadata__table padding-bottom-10"},s._l(s.asset.metadata,function(t,e,i){return a("div",{key:i,staticClass:"item-row"},[a("div",{staticClass:"item-label"},[a("i",{staticClass:"fas fa-file"}),s._v("\n                        "+s._s(s._f("upperFirstChar")(s._f("space")(e)))+"\n                    ")]),s._v(" "),a("div",{staticClass:"item-description"},["object"==typeof t?a("ul",{staticClass:"margin-0"},s._l(t,function(t,e,i){return a("li",{key:i},[s._v("\n                                "+s._s(s._f("upperFirstChar")(s._f("space")(e)))+": "+s._s(t)+"\n                            ")])})):a("span",[s._v("\n                            "+s._s(t)+"\n                        ")])])])}))],1)])])},[],!1,null,"1b0cbafe",null);t.default=n.exports}}]);