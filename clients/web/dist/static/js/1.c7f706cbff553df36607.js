(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1420:function(t,e,s){"use strict";var a=s(485);s.n(a).a},39:function(t,e,s){"use strict";s.r(e);var a=s(8),o=s.n(a),r=s(3),i=s.n(r),n=s(23),c=function(){var t=this.$store.state.marketplace.frontpageProduct;if(t&&t.images){var e=window.document.getElementById("header-bg"),s=Math.floor(Math.random()*t.images.preview.length);e.style["background-image"]="url("+t.images.preview[s]+")",e.style["background-size"]="cover"}};var l={components:{"c-banner":function(t){return s.e(28).then(function(){var e=[s(1730)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-custom-modal":function(t){return s.e(15).then(function(){var e=[s(1736)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-download-block":function(t){return s.e(22).then(function(){var e=[s(1721)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-welcome-box":function(t){return s.e(226).then(function(){var e=[s(1689)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{showWelcomeModal:!1}},computed:i()({},Object(n.c)({assets:"marketplace/assetsArray"}),{list:function(){var t,e,s,a=this,r=[];this.$store.state.marketplace.frontpageProduct&&this.$store.state.marketplace.frontpageProduct.id&&r.push({type:"frontpageProduct",data:this.$store.state.marketplace.frontpageProduct}),this.$store.state.marketplace.featuredProducts.length&&r.push({type:"featuredProductGallery",data:{title:"Featured",ref:"featuredProductGallerySlider",swiper:this.$refs.featuredProductGallerySlider&&this.$refs.featuredProductGallerySlider.swiper,products:this.$store.state.marketplace.featuredProducts,slides:[{image:{src:this.$store.state.marketplace.featuredProducts[0].images.preview[0],position:"center"},logo:{src:this.$store.state.marketplace.featuredProducts[0].images.icon,position:"left bottom",size:"lg"},title:this.$store.state.marketplace.featuredProducts[0].name,buttonText:"Check it out",id:this.$store.state.marketplace.featuredProducts[0].id},{image:{src:this.$store.state.marketplace.featuredProducts[1].images.preview[0],position:"center"},logo:{src:this.$store.state.marketplace.featuredProducts[1].images.icon,position:"left bottom",size:"lg"},title:this.$store.state.marketplace.featuredProducts[1].name,buttonText:"Check it out",id:this.$store.state.marketplace.featuredProducts[1].id},{image:{src:this.$store.state.marketplace.featuredProducts[2].images.preview[0],position:"center"},logo:{src:this.$store.state.marketplace.featuredProducts[2].images.icon,position:"left bottom",size:"lg"},title:this.$store.state.marketplace.featuredProducts[2].name,buttonText:"Check it out",id:this.$store.state.marketplace.featuredProducts[2].id}]}}),r.push({type:"collectionsList",data:{collectionsList:Array.isArray(this.$store.state.marketplace.collections)?this.$store.state.marketplace.collections:o()(this.$store.state.marketplace.collections),ref:"collectionsSlider",swiper:this.$refs.collectionsSlider&&this.$refs.collectionsSlider.swiper}}),r.push({type:"productSlider",data:{title:"New Releases",slidesPerView:3,products:this.$store.state.marketplace.newProducts.slice(0,12)}}),r.push({type:"banners",data:{banners:[{type:3,class:"col-12 col-md-7 col-lg-8",image:"/static/img/banners/banner-3.png",title:"Item Marketplace",subtitle:"All-in-one spot for games assets",buttonText:"GAME ON",to:"/marketplace"},{type:4,class:"col-12 col-md-5 col-lg-7",image:"/static/img/banners/banner-4.png",title:"Top Collections",subtitle:"Our community has curated the best ones for you",to:"/collections"}]}}),r.push({type:"gamesExplorer",data:{}}),r.push({type:"productSlider",data:{title:"Summer Sale",slidesPerView:3,products:this.$store.state.marketplace.saleProducts}}),r.push({type:"assetGrid",data:{assets:this.assets}}),this.$store.state.application.darklaunchFlags&&this.$store.state.application.account.darklaunchFlags&&(t=this.$store.state.application.darklaunchFlags,e=this.$store.state.application.account.darklaunchFlags,s="CURATORS",t.map(function(t){return t.code}).includes(s)&&e.map(function(t){return t.enabled?t.code:null}).includes(s))&&r.push({type:"curatorReviews",data:{title:"From our curators",ref:"curatorReviewsSlider",swiper:this.$refs.curatorReviewsSlider&&this.$refs.curatorReviewsSlider.swiper,options:{slidesPerView:3,spaceBetween:0,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},reviews:this.$store.state.marketplace.curatorReviews}});var i=function(t,e){return t.reduce(function(t,s){return s[e]?((t[s[e]]=t[s[e]]||[]).push(s),t):t},{})||null};return r.push({type:"productNews",data:{headings:o()(i(this.$store.state.marketplace.posts,"targetId")).map(function(t){if("product"===t[0].targetType){var e=a.$store.state.marketplace.products[t[0].targetId];return{image:e.images.mediumTile,title:e.name,developer:e.developer}}}),lists:o()(i(this.$store.state.marketplace.posts,"targetId"))}}),r.push({type:"trendingProjectsRow",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects}}),r.push({type:"gameSeries",data:{list:this.$store.state.marketplace.gameSeries,showNumber:3}}),r}}),methods:{closeModal:function(){this.showWelcomeModal=!1,this.$store.commit("application/updateClientSettings",{key:"hideWelcomeModal",value:!0})}},mounted:function(){c.call(this)},created:function(){c.call(this)},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},d=(s(1420),s(0)),u=Object(d.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"store"}},[s("div",{staticClass:"row",attrs:{hidden:""}},[s("div",{staticClass:"col-12 mb-4"},[s("c-banner",{attrs:{imgSrc:"/static/img/banners/banner-3.png",to:"/token"}},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("div",[s("h3",{staticClass:"text-yellow"},[t._v("Launch Sale")]),t._v(" "),s("p",[t._v("BlockHub has launched and the token sale is now live!")])]),t._v(" "),s("div",{staticClass:"banner-action"},[s("c-button",{attrs:{tag:"div",tatus:"info",iconHide:"",size:"lg",to:"/token"}},[t._v("JOIN NOW")])],1)])])],1)]),t._v(" "),s("div",{staticClass:"row",attrs:{hidden:""}},[t.$store.state.application.desktopMode?t._e():s("div",{staticClass:"col-12 mb-4"},[s("c-welcome-box")],1)]),t._v(" "),s("c-infinite-content",{attrs:{list:t.list,showSignIn:!0}}),t._v(" "),t.showWelcomeModal?s("c-custom-modal",{attrs:{title:"BlockHub Preview"},on:{close:t.closeModal}},[s("div",{staticClass:"help-modal__content",staticStyle:{"max-width":"500px"},attrs:{slot:"modalBody"},slot:"modalBody"},[s("h4",{staticClass:"h2 mb-3"},[t._v("Welcome")]),t._v(" "),s("p",[t._v("Welcome to the the BlockHub Preview Build. All features are enabled, with or without bugs. Gotta catch 'em all! 🐛")]),t._v(" "),s("p",[t._v("These features are still in active development, and may not functional properly and may not make it into production.")]),t._v(" "),s("p",[t._v("We believe in transparency and community-driven development, so why don't you let us know what you think!")]),s("p"),s("p",[t._v("To make things simple, hold ALT and click anywhere to send us feedback/bug reports!")]),s("p"),s("p",[t._v("Thanks for visiting and joining us on the journey to a decentralized future.")]),t._v(" "),s("p",{attrs:{hidden:""}},[t._v("We're a platform built by the community, for the community.")]),t._v(" "),s("p",{attrs:{hidden:""}},[s("c-button",{attrs:{to:"/help",target:"_blank"}},[t._v("Check out the BlockHub crowdfund")])],1)]),t._v(" "),s("div",{staticClass:"text-right w-100",attrs:{slot:"modalFooter"},slot:"modalFooter"},[s("c-button",{attrs:{size:"md"},on:{click:t.closeModal}},[t._v("Got it")])],1)]):t._e()],1)},[],!1,null,null,null);e.default=u.exports},485:function(t,e){}}]);