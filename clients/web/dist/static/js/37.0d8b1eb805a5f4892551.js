(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1078:function(t,e,n){"use strict";var i=n(325);n.n(i).a},1804:function(t,e,n){"use strict";n.r(e);n(40);var i=n(11),a={name:"main-banner",props:{slides:Array},components:{"c-button":function(t){return Promise.resolve().then(function(){var e=[n(587)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-image-overlay":function(t){return n.e(284).then(function(){var e=[n(1674)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-swiper":i.swiper,"c-slide":i.swiperSlide},data:function(){return{sliderOptions:{slidesPerView:1,spaceBetween:15,pagination:{el:".main-banner-swiper-pagination",clickable:!0}}}},methods:{bannerImg:function(t){return{"background-image":"url("+t.src+")","background-position":t.position}},logoPosition:function(t){switch(t.position){case"left top":return"margin: 0 auto auto 0";case"center top":return"margin: 0 auto";case"right top":return"margin: 0 0 auto auto";case"left center":return"margin: auto auto auto 0";case"center center":return"margin: auto";case"right center":return"margin: auto 0 auto auto";case"left bottom":return"margin: auto auto 0 0";case"center bottom":return"margin: auto auto 0";case"right bottom":return"margin: auto 0 0 auto"}}}},o=(n(1078),n(0)),s=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-banner text-white"},[n("c-swiper",{attrs:{options:t.sliderOptions}},t._l(t.slides,function(e,i){return n("c-slide",{key:i},[n("div",{staticClass:"main-banner__content"},[n("div",{staticClass:"image-bg",style:t.bannerImg(e.image)}),t._v(" "),n("div",{staticClass:"main-banner__content--logo",class:[e.logo.size?"logo-size-"+e.logo.size:"logo-size-md",e.logo.position],style:t.logoPosition(e.logo)},[n("c-img",{attrs:{src:e.logo.src,alt:e.title}})],1),t._v(" "),e.overlay?n("c-image-overlay",{attrs:{title:e.overlay.title,subtitle:e.overlay.subtitle,text:e.overlay.text}}):t._e()],1),t._v(" "),n("div",{staticClass:"main-banner__footer"},[n("h4",[t._v("\n                    "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"main-banner__footer-actions"},[t.slides.length>1?n("div",{ref:"sliderDots",refInFor:!0,staticClass:"slider-dots"},[n("div",{staticClass:"main-banner-swiper-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})]):t._e(),t._v(" "),n("c-button",{attrs:{status:"lightpurple",size:"md",iconHide:"",to:"/product/"+e.id}},[t._v("\n                        "+t._s(e.buttonText)+"\n                    ")])],1)])])}))],1)},[],!1,null,"17aab08e",null);e.default=s.exports},325:function(t,e){}}]);