(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1255:function(t,e,a){"use strict";a.r(e);var n=a(7),s=a.n(n),r=a(2),o=a.n(r),c=a(11),i=a.n(c),f=a(56),_=a.n(f),l={name:"trade-offer",props:{offer:{type:Object,required:!0}},components:{"c-author":function(t){return a.e(165).then(function(){var e=[a(1274)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-tooltip":function(t){return a.e(192).then(function(){var e=[a(1261)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-asset-preview":function(t){return a.e(170).then(function(){var e=[a(1262)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{showDetails:!1}},methods:{expandDetails:function(){this.showDetails=!this.showDetails,this.offer.new&&this.$emit("wasSeen")},round:function(t){return Math.floor(100*t)/100}},computed:{totalVal:function(){var t=this.assets,e=this.round;return _()(t).reduce(function(t,a){var n=i()(a,2),r=n[0],c=n[1];return o()({},t,s()({},r,e(c.reduce(function(t,e){return t+e.price.current},0))))},{})},finalBalance:function(){return this.round(this.totalVal.Yours-this.totalVal[this.contrName])},contrName:function(){return this.offer.contractor.name+"s"},assets:function(){return s()({Yours:this.offer.yourOffer},this.contrName,this.offer.contractorOffer)}}},u=(a(723),a(0)),v=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trade-offer",class:{"trade-offer--new":t.offer.new}},[a("div",{staticClass:"trade-offer__date"},[a("span",[t.offer.new?a("span",{staticClass:"trade-offer__status"},[t._v("NEW")]):t._e(),t._v("\n            "+t._s(t._f("formatDate")(t.offer.createdAt))+" - "+t._s(t._f("timeAgo")(t.offer.createdAt))+"\n        ")]),t._v(" "),a("span",[t._v("\n            Expires "+t._s(t._f("timeAgo")(t._f("addTime")(t.offer.createdAt,2,"weeks")))+"\n        ")])]),t._v(" "),a("div",{staticClass:"trade-offer__content",on:{click:function(e){t.expandDetails()}}},[a("c-author",{attrs:{author:t.offer.contractor}}),t._v(" "),a("span",[t._v("\n            Trade "+t._s(t.offer.yourOffer.length)+" for "+t._s(t.offer.contractorOffer.length)+" assets\n        ")]),t._v(" "),a("div",[a("c-button",{attrs:{status:"success",icon_hide:""}},[t._v("Accept")]),t._v(" "),a("c-button",{attrs:{status:"danger",icon_hide:""}},[t._v("Decline")])],1)],1),t._v(" "),a("transition",{attrs:{name:"slide-in-top"}},[t.showDetails?a("div",{staticClass:"trade-offer__details"},[a("h4",[t._v("Offer details")]),t._v(" "),t._l(t.assets,function(e,n){return a("table",{key:n,staticClass:"trade-offer__assets-table"},[a("thead",[a("th",[t._v(t._s(n)+" items")]),t._v(" "),a("th",[t._v("Total value "+t._s(t._f("convertCurrency")(t.totalVal[n])))])]),t._v(" "),a("tbody",t._l(e,function(e,n){return a("tr",{key:n},[a("td",[a("c-tooltip",[a("c-asset-preview",{attrs:{slot:"tooltip",asset:e},slot:"tooltip"}),t._v(" "),a("div",{staticClass:"asset__info"},[a("c-img",{staticClass:"asset__image",attrs:{src:e.image}}),t._v("\n                                    "+t._s(e.name)+"\n                                ")],1)],1)],1),t._v(" "),a("td",[t._v(t._s(t._f("convertCurrency")(e.price.current)))])])}))])}),t._v(" "),a("table",{staticClass:"trade-offer__summary-table"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Summary:")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.contrName)+" items:")]),t._v(" "),a("td",[t._v("- "+t._s(t._f("convertCurrency")(t.totalVal[t.contrName])))])]),t._v(" "),a("tr",[a("td",[t._v("Yours items:")]),t._v(" "),a("td",[t._v("+ "+t._s(t._f("convertCurrency")(t.totalVal.Yours)))])])]),t._v(" "),a("tfoot",[a("tr",[a("td",[t._v("Final balance:")]),t._v(" "),a("td",[a("span",{staticClass:"total-balance",class:[t.finalBalance>0?"total-balance--positive":t.finalBalance<0?"total-balance--negative":""]},[t._v("\n                                "+t._s(t.finalBalance>0?"+":"")+"\n                                "+t._s(t.finalBalance)+"$\n                            ")])])])])]),t._v(" "),a("div",{staticClass:"trade-offer__action"},[a("c-button",{attrs:{status:"info",icon_hide:""},on:{click:function(e){t.$router.push({path:"/marketplace/trade/"+t.offer.id})}}},[t._v("Go to transaction")]),t._v(" "),a("span",[a("c-button",{attrs:{status:"success",icon_hide:""}},[t._v("Accept")]),t._v(" "),a("c-button",{attrs:{status:"danger",icon_hide:""}},[t._v("Decline")])],1)],1)],2):t._e()])],1)},[],!1,null,"2250f976",null);e.default=v.exports},157:function(t,e){},723:function(t,e,a){"use strict";var n=a(157);a.n(n).a}}]);