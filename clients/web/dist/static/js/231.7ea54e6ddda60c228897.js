(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{1002:function(t,i,n){"use strict";var s=n(318);n.n(s).a},1406:function(t,i,n){"use strict";n.r(i);var s={name:"community-spotlight",props:{discussions:Array,communityUrl:String,editing:Boolean,activateElement:Boolean},components:{"c-block":function(t){return Promise.resolve().then(function(){var i=[n(1574)];t.apply(null,i)}.bind(this)).catch(n.oe)}}},e=(n(1002),n(0)),o=Object(e.a)(s,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("c-block",{attrs:{title:"Community Spotlight",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("template",{slot:"heading-bar"},[n("a",{staticClass:"title-icon text-white",attrs:{href:t.communityUrl}},[t.activateElement?n("i",{staticClass:"fas fa-cog"}):n("i",{staticClass:"fas fa-comments"})])]),t._v(" "),t.discussions.length>0?n("div",{staticClass:"w-100"},[t.editing?n("div",{staticClass:"editor-container editor-container--style-2"},[n("p",{},[t._v("\n                Set Up Community\n            ")])]):t._e(),t._v(" "),n("ul",{staticClass:"community-spotlight__list"},t._l(t.discussions,function(i,s){return n("li",{key:s},[n("a",{attrs:{href:i.link}},[n("span",{staticClass:"community-spotlight__name"},[t._v(t._s(i.name))]),t._v(" "),n("span",{staticClass:"community-spotlight__count"},[t._v(t._s(i.count))])])])})),t._v(" "),n("c-button",{attrs:{status:"outline-white",href:t.communityUrl,hide_icon:""}},[t._v("\n            Go To Community\n        ")])],1):n("div",{staticClass:"w-100"},[n("h4",[t._v("No highlighted community activity yet.")])])],2)},[],!1,null,"8a1feffe",null);i.default=o.exports},318:function(t,i){}}]);