(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{123:function(t,e){},544:function(t,e,a){"use strict";var i=a(123);a.n(i).a},868:function(t,e,a){"use strict";a.r(e);var i=function(){if(this.$store.state.marketplace.products){var t=this.$store.state.marketplace.products[this.id];if(t){if(t.images.preview&&t.images.preview.length){var e=window.document.getElementById("header-bg");e.style["background-image"]="url("+t.images.preview[0]+")",e.style["background-size"]="cover"}return t}}},n={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[a(930)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-tags-list":function(t){return a.e(118).then(function(){var e=[a(751)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-item":function(t){return a.e(136).then(function(){var e=[a(754)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-post-comment":function(t){return a.e(150).then(function(){var e=[a(39)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){var t=[{name:"Nakatochi",img:"https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"},{name:"Nakatochi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"},{name:"SatoshiSan",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"}],e=["2018-07-24T04:09:00.000Z","2017-07-24T04:09:00.000Z","2018-08-12T04:09:00.000Z","2018-08-14T04:09:00.000Z","2018-04-14T04:09:00.000Z","2018-04-17T04:09:00.000Z"],a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.";return{community_1:!1,community_2:!0,posts:[{title:"This post has been pinned and the title is a single line of text",date:e[0],rate:-319,comments_count:3019,status:"pinned",author:t[0]},{title:"The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.",date:e[1],rate:232,comments_count:3019,status:"locked",author:t[1]},{title:"The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.",date:e[2],rate:103,comments_count:894391,status:"starred",author:t[1],content:{img:"http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg",text:a}},{title:"Actually all the boxes with the titles here are the same size",date:e[3],rate:103,comments_count:894391,author:t[0]}],post:{objectId:"192u81i218j2812j8",title:"The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.",date:e[3],rate:1391,comments_count:894391,status:"starred",author:t[0],content:{img:"http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg",text:a,comments:[{author:t[1],text:a,rate:319,date:e[4]},{author:t[0],text:a,rate:932,date:e[1],replies:[{author:t[1],text:a,rate:318,date:e[0]},{author:t[0],text:a,rate:-49,date:e[2]},{author:t[1],text:a,rate:442,date:e[1]},{author:t[0],text:a,rate:1239,date:e[5]}]},{author:t[0],text:a,rate:-51,date:e[2]}]}}}},methods:{save:function(){this.$store.dispatch("marketplace/updateProduct",this.product)}},computed:{product:i,editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode},first_product:function(){return this.$store.state.marketplace.first_product}},mounted:i,created:i,beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},s=(a(544),a(0)),o=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",{attrs:{navigationKey:"product",navigationTitle:"GAME COMMUNITY"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t.product?t._e():a("div",{staticClass:"col-12"},[t._v("\n                    Product not found\n                ")]),t._v(" "),t.product?a("div",{staticClass:"col-12"},[a("h1",{staticClass:"title margin-top-10"},[t._v(t._s(t.product.name))]),t._v(" "),!t.editing||t.product.developer_tags?a("c-tags-list",{attrs:{tags:t.product.developer_tags}}):t._e(),t._v(" "),a("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id}},[t._v("Overview")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{to:"/product/"+t.product.id+"/community"}},[t._v("Community")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/projects"}},[t._v("Crowdfunding")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/assets"}},[t._v("Assets")])],1)]),t._v(" "),t.community_1?a("div",t._l(t.posts,function(t,e){return a("c-item",{key:e,attrs:{post:t}})})):t._e(),t._v(" "),t.community_2?a("div",[a("div",{staticClass:"community-wrapper"},[a("c-item",{attrs:{post:t.post}}),t._v(" "),t._l(t.post.content.comments,function(e,i){return a("c-post-comment",{key:i,attrs:{comment:e}},t._l(e.replies,function(t,e){return a("c-post-comment",{key:e,attrs:{comment:t}})}))})],2)]):t._e()],1):t._e()])])])])},[],!1,null,null,null);e.default=o.exports}}]);