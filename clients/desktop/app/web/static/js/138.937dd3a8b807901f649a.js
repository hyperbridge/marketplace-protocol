(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{115:function(t,s){},116:function(t,s){},1225:function(t,s,e){"use strict";var i=e(381);e.n(i).a},1426:function(t,s,e){"use strict";e.r(s);var i=e(30),a=e.n(i),n=e(17),o=e(37),c=e.n(o),l=e(6),r=e(456),d=e(455),u=(e(59),{props:{navigationKey:String},components:{"c-swiper":n.swiper,"c-notification":function(t){return e.e(282).then(function(){var s=[e(1310)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-message":function(t){return e.e(281).then(function(){var s=[e(1306)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-basic-popup":function(t){return e.e(17).then(function(){var s=[e(1372)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-slide":n.swiperSlide,"c-dotted-list":function(t){return Promise.resolve().then(function(){var s=[e(455)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-heading-bar-color":function(t){return Promise.resolve().then(function(){var s=[e(456)];t.apply(null,s)}.bind(this)).catch(e.oe)}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},current_identity:function(){return this.$store.state.application.account&&this.$store.state.application.account.current_identity},messages:function(){return this.current_identity&&this.current_identity.messages}},data:function(){return{errors:[],updateExpanded:null,updates:[],entries:[],currentUpdate:{},showModal:!1}},methods:{showSlide:function(t){switch(t){case"notification":this.swiper.slideTo(0,1e3,!1);break;case"messages":this.$el.classList.add("active"),this.swiper.slideTo(1,1e3,!1);break;case"updates":this.$el.classList.add("active"),this.swiper.slideTo(2,1e3,!1);break;case"top_lists":this.$el.classList.add("active"),this.swiper.slideTo(3,1e3,!1)}},showUpdateModal:function(t){this.currentUpdate=t,this.showModal=!0},hideUpdateModal:function(){this.showModal=!1,this.currentUpdate=[]}},created:function(){var t=this;if("store"===this.navigationKey&&this.$store.state.application.desktopMode){c()({method:"get",url:"https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json"}).then(function(s){for(var e in t.entries=s.data.feed.entry,t.entries){var i=t.entries[e],a=l.a.compile("<div>"+i.gsx$content.$t+"</div>");a=new l.a({components:{"c-heading-bar-color":r.default,"c-dotted-list":d.default},render:a.render,staticRenderFns:a.staticRenderFns}).$mount(),t.updates.push({version:i.gsx$version.$t,title:i.gsx$title.$t,description:i.gsx$description.$t,content:a.$el.innerHTML})}}).catch(function(s){t.errors.push("Could not contact update service. Please contact support with this error: "+a()(s))})}}}),p=(e(1225),e(0)),h=Object(p.a)(u,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-sidepanel invert text-right",attrs:{id:"page-sidepanel"}},[e("div",{staticClass:"page-sidepanel__content"},[e("c-swiper",{ref:"mySwiper"},[t.$store.state.application.signedIn?e("c-slide",[e("div",{staticClass:"item"},[e("h3",[t._v("NOTIFICATION")]),t._v(" "),e("div",{staticClass:"slide-chooser"},[t.$store.state.application.signedIn?e("c-button",{staticClass:"active",attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("notification")}}},[e("i",{staticClass:"fa fa-bell"})]):t._e(),t._v(" "),t.$store.state.application.signedIn?e("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"MESSAGES",expression:"'MESSAGES'"}],staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("messages")}}},[e("i",{staticClass:"fa fa-envelope"})]):t._e(),t._v(" "),t.$store.state.application.desktopMode?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("updates")}}},[e("i",{staticClass:"fa fa-star"})]):t._e(),t._v(" "),"store"===t.navigationKey?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("top_lists")}}},[e("i",{staticClass:"fa fa-trophy"})]):t._e()],1),t._v(" "),e("div",{staticClass:"navigation"},[t.$store.state.application.account.notifications.length>0?e("div",t._l(t.$store.state.application.account.notifications,function(s,i){return e("c-notification",{key:i,attrs:{notification:s},on:{showPopup:function(e){t.showNotifPopup(s)}}})})):e("div",[t._v("All clear. Good work!")])])])]):t._e(),t._v(" "),t.$store.state.application.signedIn?e("c-slide",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"MESSAGES",expression:"'MESSAGES'"}]},[e("div",{staticClass:"item"},[e("h3",[t._v("MESSAGES")]),t._v(" "),e("div",{staticClass:"slide-chooser"},[t.$store.state.application.signedIn?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("notification")}}},[e("i",{staticClass:"fa fa-bell"})]):t._e(),t._v(" "),t.$store.state.application.signedIn?e("c-button",{staticClass:"active",attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("messages")}}},[e("i",{staticClass:"fa fa-envelope"})]):t._e(),t._v(" "),t.$store.state.application.desktopMode?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("updates")}}},[e("i",{staticClass:"fa fa-star"})]):t._e(),t._v(" "),"store"===t.navigationKey?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("top_lists")}}},[e("i",{staticClass:"fa fa-trophy"})]):t._e()],1),t._v(" "),e("div",{staticClass:"navigation"},[e("div",{staticClass:"messages-action"},[e("c-button",{attrs:{status:"info",icon:"angle-double-right",size:"sm"}},[t._v("Quick Send")]),t._v(" "),e("c-button",{attrs:{status:"info",icon:"envelope",size:"sm"}},[t._v("View All")])],1),t._v(" "),e("div",{staticClass:"message-list"},t._l(t.messages,function(t,s){return e("c-message",{key:s,attrs:{msg:t}})}))])])]):t._e(),t._v(" "),t.$store.state.application.desktopMode?e("c-slide",[e("div",{staticClass:"item"},[e("h3",[t._v("UPDATES")]),t._v(" "),e("div",{staticClass:"slide-chooser"},[t.$store.state.application.signedIn?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("notification")}}},[e("i",{staticClass:"fa fa-bell"})]):t._e(),t._v(" "),t.$store.state.application.signedIn?e("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"MESSAGES",expression:"'MESSAGES'"}],staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("messages")}}},[e("i",{staticClass:"fa fa-envelope"})]):t._e(),t._v(" "),t.$store.state.application.desktopMode?e("c-button",{staticClass:"active",attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("updates")}}},[e("i",{staticClass:"fa fa-star"})]):t._e(),t._v(" "),"store"===t.navigationKey?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("top_lists")}}},[e("i",{staticClass:"fa fa-trophy"})]):t._e()],1),t._v(" "),e("div",{staticClass:"navigation"},[e("ul",[t._l(t.updates,function(s,i){return[e("li",{key:i,staticClass:"mb-4",staticStyle:{cursor:"pointer"},on:{click:function(e){t.showUpdateModal(s)}}},[e("div",{staticClass:"h5 font-weight-bold mb-1 pb-0"},[t._v("\n                                        "+t._s(s.title)+"\n                                    ")]),t._v(" "),e("div",{staticClass:"text"},[t._v("\n                                        "+t._s(s.description)+"\n                                    ")])])]}),t._v(" "),e("li",[e("br"),t._v(" "),e("button",{staticClass:"btn btn-outline-info btn-sm",staticStyle:{color:"#fff",border:"2px solid #fff"}},[e("span",{staticClass:"icon fa fa-sync"}),t._v(" Relaunch\n                                ")])])],2)])])]):t._e(),t._v(" "),"store"===t.navigationKey?e("c-slide",[e("div",{staticClass:"item"},[e("h3",[t._v("TOP LISTS")]),t._v(" "),e("div",{staticClass:"slide-chooser"},[t.$store.state.application.signedIn?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("notification")}}},[e("i",{staticClass:"fa fa-bell"})]):t._e(),t._v(" "),t.$store.state.application.signedIn?e("c-button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"MESSAGES",expression:"'MESSAGES'"}],staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("messages")}}},[e("i",{staticClass:"fa fa-envelope"})]):t._e(),t._v(" "),t.$store.state.application.desktopMode?e("c-button",{staticStyle:{"box-shadow":"none"},attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("updates")}}},[e("i",{staticClass:"fa fa-star"})]):t._e(),t._v(" "),e("c-button",{staticClass:"active",attrs:{status:"plain","icon-hide":""},on:{click:function(s){t.showSlide("top_lists")}}},[e("i",{staticClass:"fa fa-trophy"})])],1),t._v(" "),e("div",{staticClass:"navigation"},[e("ul",[e("li",{staticClass:"title"},[t._v("TOP 5")]),t._v(" "),t._l(t.$store.state.marketplace.top_5,function(s,i){return e("li",{key:i},[e("a",{attrs:{href:"#/product/"+s.id}},[e("span",{staticClass:"text"},[t._v(t._s(s.name))])])])}),t._v(" "),e("li",{staticClass:"more"},[e("a",{attrs:{href:"#/search"}},[e("span",{staticClass:"text"},[t._v("MORE...")])])])],2)]),t._v(" "),e("div",{staticClass:"navigation"},[e("ul",[e("li",{staticClass:"title"},[t._v("TOP FREE")]),t._v(" "),t._l(t.$store.state.marketplace.top_free.slice(0,5),function(s,i){return e("li",{key:i},[e("a",{attrs:{href:"#/product/"+s.id}},[e("span",{staticClass:"text"},[t._v(t._s(s.name))])])])}),t._v(" "),e("li",{staticClass:"more"},[e("a",{attrs:{href:"#/search"}},[e("span",{staticClass:"text"},[t._v("MORE...")])])])],2)])])]):t._e()],1)],1),t._v(" "),t._m(0),t._v(" "),e("c-basic-popup",{staticClass:"text-left",attrs:{activated:t.showModal},on:{close:t.hideUpdateModal}},[e("div",{staticClass:"d-flex flex-column",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"h4 m-0 p-0"},[t._v("\n                "+t._s(t.currentUpdate.title)+"\n            ")]),t._v(" "),e("div",[t._v("\n                "+t._s(t.currentUpdate.version)+"\n            ")])]),t._v(" "),e("div",{attrs:{slot:"body"},domProps:{innerHTML:t._s(t.currentUpdate.content)},slot:"body"}),t._v(" "),e("small",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n            Missed an update? "),e("c-button",{attrs:{status:"plain",href:"#/updates"}},[t._v("Check our previous updates here.")])],1)])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page-sidepanel__button page-sidepanel__button--lower",attrs:{"data-action":"sidepanel-hide"}},[s("div")])}],!1,null,"ea0e23ba",null);s.default=h.exports},381:function(t,s){},455:function(t,s,e){"use strict";e.r(s);var i={},a=(e(720),e(0)),n=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"doted-list-container"},[this._t("default")],2)},[],!1,null,"6271eca6",null);s.default=n.exports},456:function(t,s,e){"use strict";e.r(s);var i={name:"heading-bar-colored",props:{colorCode:{type:String,default:"#fff"},textAlign:{type:String,default:"left"}}},a=(e(721),e(0)),n=Object(a.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"heading-bar-colored",class:["text-position-"+t.textAlign]},["left"!=t.textAlign?e("span",{staticClass:"heading-bar-colored__left-line",style:{"background-color":t.colorCode}}):t._e(),t._v(" "),e("div",{staticClass:"h3 heading-bar-colored__title",style:{color:t.colorCode}},[t._t("default")],2),t._v(" "),"right"!=t.textAlign?e("span",{staticClass:"heading-bar-colored__right-line",style:{"background-color":t.colorCode}}):t._e()])},[],!1,null,"df6ed2c2",null);s.default=n.exports},720:function(t,s,e){"use strict";var i=e(115);e.n(i).a},721:function(t,s,e){"use strict";var i=e(116);e.n(i).a}}]);