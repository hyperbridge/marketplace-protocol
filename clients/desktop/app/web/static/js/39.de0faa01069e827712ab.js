(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{151:function(t,e){},1545:function(t,e,n){"use strict";n.r(e);var s=n(5),i=n.n(s),a=n(20),r=n.n(a),o=n(8),u=n.n(o),c=n(2),d=n.n(c),l=n(562),f=n(561),v=n(48),_=n(60),h=f.map(function(t){return d()({},t,{user:v.find(function(e){return e.id==t.user})})}),p=l.map(function(t,e){return d()({},t,{asset:_[e],bids:t.bids.map(function(t){return h.find(function(e){return e.id==t})}),seller:v.find(function(e){return e.id==t.seller})})}),b={props:["id","profileId"],components:{"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1437)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-asset-list":function(t){return n.e(199).then(function(){var e=[n(1269)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-asset-preview-basic":function(t){return n.e(174).then(function(){var e=[n(1419)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-content-navigation":function(t){return n.e(8).then(function(){var e=[n(1332)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{openedOffer:null,bidValue:0,results:[],isLoading:!0}},methods:{openOffer:function(t){0!=this.bidValue&&(this.bidValue=0),this.openedOffer==t?this.openedOffer=null:this.openedOffer=t},createAuction:function(t){var e=this.bidValue;if(e){var n={offerId:t,bid:e,user:{name:"Me"},date:moment()};this.$store.dispatch("assets/createAuction",n),this.$snotify.success("You have successfully created an auction bid for "+e+" $","Created"),this.bidValue=0}},getOffers:function(){var t=this;return u()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,new r.a(function(t){return setTimeout(t,2500)});case 3:t.$store.dispatch("loadData",["assets/offers",p]),t.isLoading=!1;case 5:case"end":return e.stop()}},e,t)}))()}},watch:{profileId:{handler:"getOffers",immediate:!0}},computed:{offers:function(){return this.$store.getters["assets/offersMap"]},assets:function(){return this.$store.assets["assets/assetsMap"]}},beforeDestroy:function(){}},m=(n(780),n(0)),y=Object(m.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("span",[t._v("Loading ...")]):n("c-content-navigation",{attrs:{items:t.offers,setLimits:7},scopedSlots:t._u([{key:"default",fn:function(e){return n("table",{staticClass:"offers-table"},[n("thead",[n("th",[t._v("Item")]),t._v(" "),n("th",[t._v("Auctions")]),t._v(" "),n("th",[t._v("Time left")]),t._v(" "),n("th",[t._v("Seller")]),t._v(" "),n("th",[t._v("Auction bid")]),t._v(" "),n("th",[t._v("Auction buyout")]),t._v(" "),n("th",[t._v("Market value")]),t._v(" "),n("th",[t._v("Show auctions")])]),t._v(" "),n("tbody",t._l(e.items,function(e){var s=e[0],i=e[1];return n("tr",{key:s},[t.openedOffer!=i.id?[n("td",[n("c-asset-preview-basic",{attrs:{asset:i.asset,size:"sm",horizontal:"",hideGame:""}})],1),t._v(" "),n("td",[t._v(t._s(i.bids.length))]),t._v(" "),n("td",[t._v(t._s(t._f("timeAgoShort")(i.expiresIn)))]),t._v(" "),n("td",[t._v(t._s(i.seller.name))]),t._v(" "),n("td",[t._v(t._s(i.bids[0].value)+" $")]),t._v(" "),n("td",[t._v(t._s(i.buyout)+" $")]),t._v(" "),n("td",[t._v(t._s(i.marketValue)+" %")]),t._v(" "),n("td",[n("c-button",{attrs:{iconHide:"",status:"info"},on:{click:function(e){t.openOffer(s)}}},[n("c-icon",{attrs:{name:"arrow-circle-down"}})],1)],1)]:[n("td",{staticClass:"offers-table--opened",attrs:{colspan:"7"}},[n("table",{staticClass:"auctions-table"},[n("thead",[n("tr",[n("th",[t._v("Buyer")]),t._v(" "),n("th",[t._v("Bid")]),t._v(" "),n("th",[t._v("Date")])])]),t._v(" "),n("tbody",[i.bids.length?t._l(i.auctions,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.user.name))]),t._v(" "),n("td",[t._v(t._s(e.bid)+" $")]),t._v(" "),n("td",[t._v(t._s(t._f("formatTime")(e.date))+" ("+t._s(t._f("timeAgoSShort")(e.date))+")")])])}):n("tr",[n("td",{attrs:{colspan:"3"}},[t._v("\n                                            This offer doesn't contain any auctions yet\n                                        ")])])],2),t._v(" "),n("tfoot",[n("tr",[n("td",{attrs:{colspan:"3"}},[n("div",{staticClass:"auctions-table__bid-asset"},[n("c-input",{model:{value:t.bidValue,callback:function(e){t.bidValue=e},expression:"bidValue"}}),t._v(" "),n("c-button",{attrs:{status:"success",icon:"gavel"},on:{click:function(e){t.createAuction(i.id)}}},[t._v("\n                                                    Bid the asset for "+t._s(t.bidValue)+"$\n                                                ")])],1)])])])])]),t._v(" "),n("td",[n("c-button",{attrs:{iconHide:"",status:"info"},on:{click:function(e){t.openOffer(s)}}},[n("c-icon",{attrs:{name:"arrow-circle-up"}})],1)],1)]],2)}))])}}])})],1)},[],!1,null,"3033848c",null);e.default=y.exports},561:function(t){t.exports=[{id:1,value:12.9,user:2,createdAt:""},{id:2,value:13.9,user:3,createdAt:""},{id:3,value:14.1,user:1,createdAt:""},{id:4,value:17.9,user:5,createdAt:""},{id:5,value:21,user:2,createdAt:""},{id:6,value:23.4,user:3,createdAt:""},{id:7,value:37.2,user:2,createdAt:""}]},562:function(t){t.exports=[{id:1,asset:1,bids:[1,2],buyout:42,marketValue:45,seller:4,expiresIn:""},{id:2,asset:2,bids:[2,3],buyout:42,marketValue:45,seller:4,expiresIn:""},{id:3,asset:3,bids:[4,5,6,7],buyout:42,marketValue:45,seller:4,expiresIn:""}]},780:function(t,e,n){"use strict";var s=n(151);n.n(s).a}}]);