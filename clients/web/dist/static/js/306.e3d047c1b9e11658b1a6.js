(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1069:function(t,e,a){"use strict";var n=a(316);a.n(n).a},1760:function(t,e,a){"use strict";a.r(e);var n={components:{},props:{image:String,description:String,funds:{obtained:Number,goal:Number},parentImage:String,parentName:String,parentDeveloperName:String,parentDeveloperId:String,id:Number,customClass:{type:String}},computed:{goalProgress:function(){if(!this.funds)return 0;var t=this.funds,e=t.obtained,a=t.goal;return Math.round(e/a*100)}},filters:{currencySign:function(t){switch(t){case"EUR":return"€";case"GBP":return"£";default:return"$"}}}},s=(a(1069),a(0)),r=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"idea-card__item",class:t.customClass},[t.parentName?a("div",{staticClass:"head"},[t.parentImage?a("div",{staticClass:"img"},[a("c-img",{attrs:{src:t.parentImage}})],1):t._e(),t._v(" "),a("div",{staticClass:"text"},[a("c-button",{attrs:{status:"none",to:"/idea/"+t.id}},[a("h4",[t._v(t._s(t.parentName))])]),t._v(" "),t.parentDeveloperName?a("c-button",{attrs:{status:"none",to:"/profile/"+t.parentDeveloperId}},[a("p",[t._v(t._s(t.parentDeveloperName))])]):t._e()],1)]):t._e(),t._v(" "),a("c-button",{attrs:{status:"none",to:"/idea/"+t.id}},[a("c-img",{attrs:{src:t.image}}),t._v(" "),a("div",{staticClass:"description"},[t._v(t._s(t.description))])],1),t._v(" "),a("div",{staticClass:"item-action"},[a("c-button",{attrs:{status:"info",to:"/idea/"+t.id,iconHide:""}},[t._v("Check it out")])],1)],1)},[],!1,null,null,null);e.default=r.exports},316:function(t,e){}}]);