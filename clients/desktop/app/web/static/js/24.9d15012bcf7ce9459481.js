(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1208:function(t,e,i){"use strict";var r=i(364);i.n(r).a},1317:function(t,e,i){"use strict";i.r(e);var r=i(29),a={name:"product-card-dynamic",props:{product:{type:Object,required:!0}},components:{"c-tags":function(t){return i.e(9).then(function(){var e=[i(1376)];t.apply(null,e)}.bind(this)).catch(i.oe)}},mixins:[r.b],data:function(){return{display_preview:!1,interval:null,current_image:0}},methods:{show_preview:function(t){var e=this;clearTimeout(this.timeout),this.debounce(function(){t||clearInterval(e.interval),!t||e.display_preview||e.product.video&&e.autoplay||e.slider(),e.display_preview=t},t?250:0)},slider:function(){var t=this;this.interval=setInterval(function(){var e=t.current_image,i=t.product.images;t.current_image=e===i.preview.length-1?0:e+1},1600)}},computed:{autoplay:function(){return this.$store.state.application.account.settings.client.autoplay}}},s=(i(1208),i(0)),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-grid__item",on:{mouseover:function(e){t.show_preview(!0)},mouseout:function(e){t.show_preview(!1)}}},[i("div",{staticClass:"position-relative"},[t.product.price?i("div",{staticClass:"product-grid__item-price"},[i("strong",[t._v(t._s(t._f("convertCurrency")(t.product.price)))])]):t._e(),t._v(" "),i("a",{staticClass:"card-img-top",attrs:{href:"#/product/"+t.product.id}},[i("transition",{attrs:{name:"fade"}},[t.display_preview?[t.product.video&&t.autoplay?i("video",{staticClass:"card-img-top",attrs:{width:"100%",autoplay:""}},[i("source",{attrs:{src:t.product.video,type:"video/mp4"}})]):i("transition-group",{attrs:{tag:"div",name:"slide-left"}},t._l(t.product.images.preview,function(e,r){return r===t.current_image?i("c-img",{key:e,staticClass:"card-img-top",attrs:{src:t.product.images.preview[r]}}):t._e()}))]:i("c-img",{staticClass:"card-img-top",attrs:{src:t.product.images.medium_tile}})],2)],1)]),t._v(" "),i("h4",[i("a",{attrs:{href:"#/product/"+t.product.id}},[t._v(t._s(t.product.name))])]),t._v(" "),i("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(t.product.short_description)+" ")]),t._v(" "),i("c-tags",{attrs:{tags:t.product.developer_tags.slice(0,3)}})],1)},[],!1,null,"425a87e2",null);e.default=c.exports},364:function(t,e){}}]);