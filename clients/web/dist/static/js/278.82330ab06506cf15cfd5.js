(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1049:function(t,e,i){"use strict";var n=i(326);i.n(n).a},1680:function(t,e,i){"use strict";i.r(e);i(50);var n=i(13),s={props:["product","editing"],components:{"c-game-plan":function(t){return i.e(244).then(function(){var e=[i(1588)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-screen-gallery":function(t){return i.e(243).then(function(){var e=[i(1552)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-promotion-box":function(t){return i.e(274).then(function(){var e=[i(1561)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-rating-block":function(t){return i.e(207).then(function(){var e=[i(1690)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-purchase-block":function(t){return i.e(273).then(function(){var e=[i(1557)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-frequently-traded-assets":function(t){return i.e(242).then(function(){var e=[i(1650)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-community-spotlight":function(t){return i.e(241).then(function(){var e=[i(1619)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[i(1585)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-review":function(t){return i.e(272).then(function(){var e=[i(1553)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-system-requirements":function(t){return i.e(271).then(function(){var e=[i(1714)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-language-support":function(t){return i.e(270).then(function(){var e=[i(1566)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-stream-item":function(t){return i.e(269).then(function(){var e=[i(1565)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-modal":function(t){return i.e(210).then(function(){var e=[i(1681)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-game-installer":function(t){return i.e(268).then(function(){var e=[i(1564)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-swiper":n.swiper,"c-slide":n.swiperSlide},data:function(){return{promotionSections:null,sliderOptions:{slidesPerView:4,spaceBetween:20,breakpoints:{1200:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:1,spaceBetween:0}}},streamersList:8,showInstaller:!1}},methods:{showPurchaseModal:function(){this.$store.dispatch("application/activateModal","purchase")},showArrowsState:function(t,e){return t.length>e},scrollToReviews:function(){this.$refs.reviews.scrollIntoView()}},computed:{streamsSlider:function(){return this.$refs.streamsSlider.swiper},wishlist:function(){return this.$store.state.community.profiles[this.$store.state.application.activeProfile.id]||(this.$store.state.community.profiles[this.$store.state.application.activeProfile.id]={productWishlist:{}}),this.$store.state.community.profiles[this.$store.state.application.activeProfile.id].productWishlist},streams:function(){return this.product.streams},reviews:function(){return this.product.reviews},currentRelease:function(){var t=this;return this.product.releases&&this.product.releases.find(function(e){return t.product.currentVersion===e.version})},helpfulReviews:function(){if(!this.reviews)return[];var t=[];return this.reviews.forEach(function(e){e.helpful&&t.push(e)}),t},recentReviews:function(){if(!this.reviews)return[];var t=[];return this.reviews.forEach(function(e){e.recent&&t.push(e)}),t}}},r=(i(1049),i(0)),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-8 col-xl-8"},[i("c-screen-gallery",{attrs:{items:[t.product.images.mediumTile].concat(t.product.images.preview),video_url:t.product.video}}),t._v(" "),t._l(t.promotionSections,function(e,n){return t.promotionSections?i("div",{key:n},[n?i("h3",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(n))]):t._e(),t._v(" "),t._l(e,function(e,n){return t.product.promotions?i("c-promotion-box",{key:n,attrs:{title:e.title,price:e.price}}):t._e()})],2):t._e()}),t._v(" "),i("div",{staticClass:"overflow-hidden"},t._l(t.product.plans,function(t,e){return i("c-game-plan",{key:e,attrs:{plan:t}})})),t._v(" "),t.editing?t._e():i("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.product.content)}},[t._v("\n            "+t._s(t.product.content)+"\n        ")]),t._v(" "),t.editing?i("div",{staticClass:"content-editor"},[i("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.product.content)}},[t._v(t._s(t.product.content))])]):t._e()],2),t._v(" "),i("div",{staticClass:"col-12 col-lg-4 col-xl-4"},[i("c-purchase-block",{staticClass:"margin-bottom-15",attrs:{isUnavailable:!t.currentRelease,price:t.product.price,tags:["New"],onClickPurchase:t.showPurchaseModal,inWishlist:!!t.wishlist[t.product.id],inShortcut:t.$store.state.application.shortcuts.find(function(e){return e.id=="product"+t.product.id}),releaseDate:t.product.releaseDate,playLink:t.currentRelease&&t.currentRelease.playLink},on:{addToWishlist:function(e){t.$store.dispatch("community/updateWishlist",["product",t.product.id])},addToShortcut:function(e){t.$store.commit("application/updateShortcut",{id:"product"+t.product.id,type:"product",text:t.product.name,to:"/product/"+t.product.id,image:t.product.images.mediumTile})}}}),t._v(" "),i("c-button",{attrs:{iconHide:"",hidden:""},on:{click:function(e){t.showInstaller=!t.showInstaller}}},[t._v("Open installer")]),t._v(" "),i("c-rating-block",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"RATINGS",expression:"'RATINGS'"}],staticClass:"margin-bottom-20",attrs:{items:t.product.rating,parentPath:"/product/"+t.product.id},on:{goto:t.scrollToReviews}}),t._v(" "),i("c-frequently-traded-assets",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"ASSETS",expression:"'ASSETS'"}],staticClass:"margin-bottom-20",attrs:{items:t.product.frequentlyTradedAssets,assetsPath:"/product/"+t.product.id+"/assets"}}),t._v(" "),i("c-community-spotlight",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"COMMUNITY",expression:"'COMMUNITY'"}],staticClass:"margin-bottom-20",attrs:{discussions:t.product.community.discussions,communityPath:"/product/"+t.product.id+"/community"}}),t._v(" "),i("c-block",{staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Official",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showBackground:!0}},[i("div",[i("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in Discord")]),t._v(" "),i("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in Twitch")]),t._v(" "),i("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in YouTube")]),t._v(" "),i("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in Steam")])],1)]),t._v(" "),i("c-system-requirements",{staticClass:"margin-bottom-20",attrs:{requirements:t.product.systemRequirements}}),t._v(" "),i("c-language-support",{attrs:{languages:t.product.languageSupport}})],1),t._v(" "),i("div",{staticClass:"col-12"},[i("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Updates",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[i("div",{staticClass:"h5"},[t._v("\n                Updates were not found.\n            ")])])],1),t._v(" "),i("div",{staticClass:"col-12"},[i("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Streams",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[t.streams?i("c-swiper",{attrs:{options:t.sliderOptions}},t._l(t.streams,function(e,n){return i("c-slide",{key:n},[i("c-stream-item",{attrs:{streamGame:t.product.name,streamName:e.userName,streamAvatar:e.userAvatar,streamImg:e.previews,streamSrc:e.src,streamViews:e.views}})],1)})):i("div",{staticClass:"h5"},[t._v("\n                Twitch streams were not found.\n            ")])],1)],1),t._v(" "),i("div",{staticClass:"col-12"},[i("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"World Records",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[i("div",{staticClass:"h5"},[t._v("\n                World records were not found.\n            ")])])],1),t._v(" "),i("div",{ref:"reviews",staticClass:"col-12"},[i("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Reviews",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[t.helpfulReviews.length?i("div",{staticClass:"col-md-6 col-12"},[i("h3",{staticClass:"margin-vertical-20"},[t._v("Most helpful")]),t._v(" "),t._l(t.helpfulReviews,function(t,e){return i("c-review",{key:e,attrs:{review:t}})})],2):t.recentReviews.length?i("div",{staticClass:"col-md-6 col-12"},[i("h3",{staticClass:"margin-vertical-20"},[t._v("Most recent")]),t._v(" "),t._l(t.recentReviews,function(t,e){return i("c-review",{key:e,attrs:{review:t}})})],2):i("div",{staticClass:"h5"},[t._v("\n                No reviews yet. Be the first?\n            ")])])],1),t._v(" "),t.showInstaller?i("c-modal",{attrs:{title:t.product.name},on:{close:function(e){t.showInstaller=!1}}},[i("c-game-installer",{attrs:{slot:"body",product:t.product},on:{cancel:function(e){t.showInstaller=!1}},slot:"body"})],1):t._e()],1)},[],!1,null,null,null);e.default=o.exports},326:function(t,e){}}]);