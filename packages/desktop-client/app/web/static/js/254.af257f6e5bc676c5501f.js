(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1298:function(t,e,a){"use strict";a.r(e);var n=a(6),s=a.n(n),r=a(2),o=a.n(r),i=a(19),c=a.n(i),l=a(1),_=a.n(l),f={props:{offer:{type:Object}},components:{"c-author":function(t){return a.e(163).then(function(){var e=[a(1308)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-tooltip":function(t){return a.e(189).then(function(){var e=[a(1299)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-asset-preview":function(t){return a.e(168).then(function(){var e=[a(1300)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{showDetails:!1}},methods:{expandDetails:function(){this.showDetails=!this.showDetails,this.offer.new&&this.$emit("wasSeen")},round:function(t){return Math.floor(100*t)/100}},computed:{totalValue:function(){var t=this.assets,e=this.round;return c()(t).reduce(function(a,n){return o()({},a,s()({},n,e(t[n].reduce(function(t,e){return t+e.price.current},0))))},{})},finalBalance:function(){return this.round(this.totalValue.yours-this.totalValue.their)},assets:function(){return{yours:this.offer.me.selling,their:this.offer.contractor.selling}}},filters:{expIn:function(t){return _()(t).add(2,"weeks")}}},u=(a(719),a(0)),v=Object(u.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trade-offer",class:{"trade-offer--new":t.offer.new}},[a("div",{staticClass:"trade-offer__date"},[a("span",[t.offer.new?a("span",{staticClass:"trade-offer__status"},[t._v("NEW")]):t._e(),t._v("\n            "+t._s(t._f("formatDate")(t.offer.createdAt))+" - "+t._s(t._f("timeAgo")(t.offer.createdAt))+"\n        ")]),t._v(" "),a("span",[t._v("\n            Expires "+t._s(t._f("timeAgo")(t._f("expIn")(t.offer.createdAt)))+"\n        ")])]),t._v(" "),a("div",{staticClass:"trade-offer__content",on:{click:function(e){t.expandDetails()}}},[a("c-author",{attrs:{author:t.offer.contractor.user}}),t._v(" "),a("span",[t._v("\n            Trade "+t._s(t.offer.me.selling.length)+" for "+t._s(t.offer.contractor.selling.length)+" assets\n        ")]),t._v(" "),a("div",[a("c-button",{attrs:{status:"success",icon_hide:""}},[t._v("Accept")]),t._v(" "),a("c-button",{attrs:{status:"danger",icon_hide:""}},[t._v("Decline")])],1)],1),t._v(" "),a("transition",{attrs:{name:"slide-in-top"}},[t.showDetails?a("div",{staticClass:"trade-offer__details"},[a("h4",[t._v("Offer details")]),t._v(" "),t._l(t.assets,function(e,n){return a("table",{key:n,staticClass:"trade-offer__assets-table"},[a("thead",[a("th",[t._v(t._s(t._f("upperFirstChar")(n))+" items")]),t._v(" "),a("th",[t._v("Total value "+t._s(t._f("convertCurrency")(t.totalValue[n])))])]),t._v(" "),a("tbody",t._l(e,function(e){return a("tr",{key:e.id},[a("td",[a("c-tooltip",[a("c-asset-preview",{attrs:{slot:"tooltip",asset:e},slot:"tooltip"}),t._v(" "),a("div",{staticClass:"asset__info"},[a("c-img",{staticClass:"asset__image",attrs:{src:e.image}}),t._v("\n                                    "+t._s(e.name)+"\n                                ")],1)],1)],1),t._v(" "),a("td",[t._v(t._s(t._f("convertCurrency")(e.price.current)))])])}))])}),t._v(" "),a("table",{staticClass:"trade-offer__summary-table"},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Summary:")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Their items:")]),t._v(" "),a("td",[t._v("- "+t._s(t._f("convertCurrency")(t.totalValue.their)))])]),t._v(" "),a("tr",[a("td",[t._v("Yours items:")]),t._v(" "),a("td",[t._v("+ "+t._s(t._f("convertCurrency")(t.totalValue.yours)))])])]),t._v(" "),a("tfoot",[a("tr",[a("td",[t._v("Final balance:")]),t._v(" "),a("td",[a("span",{staticClass:"total-balance",class:[t.finalBalance>0?"total-balance--positive":t.finalBalance<0?"total-balance--negative":""]},[t._v("\n                                "+t._s(t.finalBalance>0?"+":"")+"\n                                "+t._s(t.finalBalance)+"$\n                            ")])])])])]),t._v(" "),a("div",{staticClass:"trade-offer__action"},[a("c-button",{attrs:{status:"info",icon_hide:""},on:{click:function(e){t.$router.push({path:"/marketplace/trade/"+t.offer.id})}}},[t._v("Go to transaction")]),t._v(" "),a("span",[a("c-button",{attrs:{status:"success",icon_hide:""}},[t._v("Accept")]),t._v(" "),a("c-button",{attrs:{status:"danger",icon_hide:""}},[t._v("Decline")])],1)],1)],2):t._e()])],1)},[],!1,null,"220996a2",null);e.default=v.exports},156:function(t,e){},719:function(t,e,a){"use strict";var n=a(156);a.n(n).a}}]);