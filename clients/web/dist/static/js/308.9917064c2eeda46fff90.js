(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1537:function(t,e,n){"use strict";n.r(e);var i=n(80),a={name:"navigator-item",components:{"c-asset":function(t){return n.e(215).then(function(){var e=[n(1508)];t.apply(null,e)}.bind(this)).catch(n.oe)}},props:{item:Object,isChildren:Boolean,index:Number,listLength:Number,useComp:{type:String,default:"c-asset"},parentId:[Number,String],hideButtons:Boolean},data:function(){return{hovered:!1}},methods:{handleEvolve:function(t){i.a.$emit("evolve",t)},handleDevolve:function(t){t.id;var e=this.parentId;i.a.$emit("devolve",{tree:this.item,parentId:e})}}},o=(n(811),n(0)),s=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigator-item",class:{"navigator-item--first-row":!t.isChildren,"navigator-item--first":0===t.index,"navigator-item--last":t.index===t.listLength-1},on:{mouseover:function(e){t.hovered=!0},mouseout:function(e){t.hovered=!1}}},[n("div",{staticClass:"navigator-item__content"},[t.item.evolvesTo.length||!t.hovered||t.hideButtons?t._e():n("button",{staticClass:"navigator-item__btn navigator-item__btn--right",on:{click:function(e){t.handleEvolve(t.item.id)}}},[n("c-icon",{attrs:{name:"plus"}})],1),t._v(" "),t.index===t.listLength-1&&t.hovered&&!t.hideButtons?n("button",{staticClass:"navigator-item__btn navigator-item__btn--bottom",on:{click:function(e){t.handleEvolve(t.parentId)}}},[n("c-icon",{attrs:{name:"plus"}})],1):t._e(),t._v(" "),n("c-asset",{staticClass:"navigator-item__asset",attrs:{asset:t.item.asset},on:{click:t.handleDevolve}})],1),t._v(" "),n("div",{staticClass:"navigator-item__sub-navigators",class:{"sub-navigators__line":t.item.evolvesTo.length,"first-line":0===t.index,"hide-line":t.item.evolvesTo.length<2}},t._l(t.item.evolvesTo,function(e,i){return n("navigator-item",{key:i,attrs:{index:i,item:e,isChildren:!0,listLength:t.item.evolvesTo.length,parentId:t.item.id,hideButtons:t.hideButtons}})}))])},[],!1,null,"52dfe8d2",null);e.default=s.exports},168:function(t,e){},811:function(t,e,n){"use strict";var i=n(168);n.n(i).a}}]);