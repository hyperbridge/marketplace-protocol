(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{450:function(t,i,n){"use strict";var s=n(88);n.n(s).a},602:function(t,i,n){"use strict";n.r(i);var s={name:"community-spotlight",props:{discussions:Array,communityUrl:String,editing:Boolean,activateElement:Boolean},components:{"c-block":function(t){return n.e(85).then(function(){var i=[n(663)];t.apply(null,i)}.bind(this)).catch(n.oe)}}},a=(n(450),n(0)),e=Object(a.a)(s,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("c-block",{attrs:{title:"Community Spotlight",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("template",{slot:"heading-bar"},[n("a",{staticClass:"title-icon text-white",attrs:{href:t.communityUrl}},[t.activateElement?n("i",{staticClass:"fas fa-cog"}):n("i",{staticClass:"fas fa-comments"})])]),t._v(" "),t.discussions.length>0?n("div",{staticClass:"w-100"},[t.editing?n("div",{staticClass:"editor-container editor-container--style-2"},[t.activeElement?t._e():n("p",{},[t._v("\n                Set Up Community\n            ")])]):t._e(),t._v(" "),n("ul",{staticClass:"community-spotlight__list"},t._l(t.discussions,function(i,s){return n("li",{key:s},[n("a",{attrs:{href:i.link}},[n("span",{staticClass:"community-spotlight__name"},[t._v(t._s(i.name))]),t._v(" "),n("span",{staticClass:"community-spotlight__count"},[t._v(t._s(i.count))])])])})),t._v(" "),n("a",{staticClass:"btn btn-outline-white",attrs:{href:t.communityUrl}},[t._v("Go To Community")])]):n("div",{staticClass:"w-100"},[n("h4",[t._v("No highlighted community activity yet.")])])],2)},[],!1,null,"077d1910",null);i.default=e.exports},88:function(t,i){}}]);