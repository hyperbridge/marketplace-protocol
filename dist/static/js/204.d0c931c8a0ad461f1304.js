(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1226:function(t,e,i){"use strict";i.r(e);var s=i(3),n=i.n(s),c=i(10),r=i.n(c),u={props:{limitTo:{type:Number,default:3},items:Array},data:function(){return{focusedItem:1}},methods:{},computed:{visItemsOld:function(){return 4},focusItems:function(){return 4},visibleItems:function(){var t=this.items,e=this.focusedItem,i=this.limitTo,s=t.length,n=e%s;n<0&&(n=s+n);var c=(i-1)/2,u=n-c<0?t.slice(s-c,s):t.slice(n-c,n),o=n+1===s?t.slice(0,c):t.slice(n+1,n+1+c);return[].concat(r()(u),[t[n]],r()(o))},itemsV2:function(){var t=this;return this.items.map(function(e){return n()({},e,{visible:!!t.visibleItems.filter(function(t){return t.id===e.id}).length})})},css:function(){var t=this.visibleItems,e=(t.length-1)/2;return t.map(function(t,i){var s="carousel-3d__item--";return"carousel-3d__item "+(s+=i<e?e-i+" left":i===e?"main":i-e+" right")})}}},o=(i(851),i(0)),a=Object(o.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-3d"},[i("c-icon",{staticClass:"carousel-3d__btn",attrs:{name:"arrow-circle-left"},on:{click:function(e){t.focusedItem--}}}),t._v(" "),i("div",{staticClass:"carousel-3d__content"},[t._t("default",null,{items:t.visibleItems,css:t.css})],2),t._v(" "),i("c-icon",{staticClass:"carousel-3d__btn",attrs:{name:"arrow-circle-right"},on:{click:function(e){t.focusedItem++}}})],1)},[],!1,null,"5e5ec8d9",null);e.default=a.exports},295:function(t,e){},851:function(t,e,i){"use strict";var s=i(295);i.n(s).a}}]);