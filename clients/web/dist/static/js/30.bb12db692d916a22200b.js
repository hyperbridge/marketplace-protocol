(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{167:function(t,e){},1738:function(t,e,i){"use strict";i.r(e);var r=i(28),a={name:"product-card-dynamic",props:{product:{type:Object,required:!0}},components:{"c-tags":function(t){return i.e(12).then(function(){var e=[i(1688)];t.apply(null,e)}.bind(this)).catch(i.oe)}},mixins:[r.b],data:function(){return{displayPreview:!1,interval:null,currentImage:0}},methods:{show_preview:function(t){var e=this;clearTimeout(this.timeout),this.debounce(function(){t||clearInterval(e.interval),!t||e.displayPreview||e.product.video&&e.autoplay||e.slider(),e.displayPreview=t},t?250:0)},slider:function(){var t=this;this.interval=setInterval(function(){var e=t.currentImage,i=t.product.images;t.currentImage=e===i.preview.length-1?0:e+1},1600)}},computed:{autoplay:function(){return this.$store.state.application.settings.client.autoplay}}},s=(i(846),i(0)),o=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-grid__item",on:{mouseover:function(e){t.show_preview(!0)},mouseout:function(e){t.show_preview(!1)}}},[i("div",{staticClass:"position-relative"},[t.product.price?i("div",{staticClass:"product-grid__item-price"},[i("strong",[t._v(t._s(t._f("convertCurrency")(t.product.price)))])]):t._e(),t._v(" "),i("c-button",{staticClass:"card-img-top",attrs:{status:"none",to:"/product/"+t.product.id}},[i("transition",{attrs:{name:"fade"}},[t.displayPreview?[t.product.video&&t.autoplay?i("video",{staticClass:"card-img-top",attrs:{width:"100%",autoplay:""}},[i("source",{attrs:{src:t.product.video,type:"video/mp4"}})]):i("transition-group",{attrs:{tag:"div",name:"slide-left"}},t._l(t.product.images.preview,function(e,r){return r===t.currentImage?i("c-img",{key:e,staticClass:"card-img-top",attrs:{src:t.product.images.preview[r]}}):t._e()}))]:i("c-img",{staticClass:"card-img-top",attrs:{src:t.product.images.mediumTile}})],2)],1)],1),t._v(" "),i("h4",[i("c-button",{attrs:{status:"none",to:"/product/"+t.product.id}},[t._v(t._s(t.product.name))])],1),t._v(" "),i("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(t.product.shortDescription)+" ")]),t._v(" "),i("c-tags",{attrs:{tags:t.product.developerTags.slice(0,3)}})],1)},[],!1,null,"790dea06",null);e.default=o.exports},846:function(t,e,i){"use strict";var r=i(167);i.n(r).a}}]);