(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{125:function(t,s){},148:function(t,s,e){"use strict";e.r(s);var i={props:{type:{default:"default"},title:{type:String},sub_title:{type:String},activated:{type:Boolean},width:{default:"400"},dimension:{type:String,default:"px"}},computed:{customClose:function(){return this.$slots.customClose}}},a=(e(826),e(0)),c=Object(a.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade",duration:100}},[t.activated?e("div",{staticClass:"c-popup",on:{click:function(s){if(s.target!==s.currentTarget)return null;s.preventDefault(),t.$emit("close")}}},[e("div",{staticClass:"c-popup__item",style:{width:+t.width+t.dimension}},[t.title?e("h3",[t._v(t._s(t.title))]):t._e(),t._v(" "),e("div",{staticClass:"position-relative"},[t.customClose?t._t("customClose"):e("div",{staticClass:"c-popup__close",on:{click:function(s){t.$emit("close")}}},[e("i",{staticClass:"fas fa-times"})]),t._v(" "),this.$slots.customContent?t._t("customContent"):e("div",{staticClass:"c-popup__content"},[t.sub_title?e("div",{staticClass:"c-popup__content-header",class:["c-popup-type-"+t.type]},[e("div",{staticClass:"popup-icon"},[t.type==["warning","danger"]?e("i",{staticClass:"fas fa-exclamation-triangle"}):t._e(),t._v(" "),"success"==t.type?e("i",{staticClass:"fas fa-check"}):e("i",{staticClass:"fas fa-info-circle"})]),t._v(" "),e("div",{staticClass:"sub_title"},[t._v("\n                            "+t._s(t.sub_title)+"\n                        ")])]):t._e(),t._v(" "),e("div",{staticClass:"c-popup__content-body"},[e("p",{staticClass:"m-0"},[t._t("default")],2),t._v(" "),t._t("body")],2),t._v(" "),this.$slots.footer?e("div",{staticClass:"c-popup__content-footer"},[t._t("footer")],2):t._e()])],2)])]):t._e()])},[],!1,null,"35aa571f",null);s.default=c.exports},826:function(t,s,e){"use strict";var i=e(125);e.n(i).a}}]);