(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{1288:function(t,e,n){"use strict";n.r(e);var r={name:"system-requirements",props:{requirements:{type:Array,required:!0}},components:{"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1437)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tab-universal":function(t){return n.e(171).then(function(){var e=[n(1415)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tabs-universal":function(t){return n.e(172).then(function(){var e=[n(1413)];t.apply(null,e)}.bind(this)).catch(n.oe)}},methods:{platform:function(t){return this.requirements.find(function(e){return e.os===t.toLowerCase()&&e})}},filters:{reqProp:function(t){return t.replace(/[\s_]+/g," ").toUpperCase()}}},s=(n(884),n(0)),i=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-block",{attrs:{title:"System Requirements",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("template",{slot:"heading-bar"},[n("i",{staticClass:"fas fa-laptop title-icon"})]),t._v(" "),n("c-tabs-universal",{attrs:{tabNames:["Mac","Win","Linux"]}},t._l(["Mac","Win","Linux"],function(e,r){return n("c-tab-universal",{key:r,attrs:{tab_id:r+1}},[t.platform(e)?n("ul",{staticClass:"system-requirements__list"},t._l(t.platform(e),function(e,r){return e?n("li",{key:r,staticClass:"system-requirements__list-item"},[n("strong",[t._v(t._s(t._f("reqProp")(r)))]),t._v(" "),n("p",{staticClass:"system-requirements__value"},"os"==r?[t._v("\n                        "+t._s(t._f("upperFirstChar")(e))+"\n                        "),n("i",{staticClass:"fab",class:"fa-"+("win"==e?"windows":"mac"==e?"apple":"linux")})]:[t._v(t._s(t._f("upperFirstChar")(e)))])]):t._e()})):n("h4",[t._v("Not currently supported.")])])}))],2)},[],!1,null,"dd64f400",null);e.default=i.exports},255:function(t,e){},884:function(t,e,n){"use strict";var r=n(255);n.n(r).a}}]);