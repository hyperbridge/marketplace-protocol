(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{142:function(t,i){},504:function(t,i,s){"use strict";var a=s(142);s.n(a).a},675:function(t,i,s){"use strict";s.r(i);var a={components:{"c-layout":function(t){return Promise.resolve().then(function(){var i=[s(734)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-block":function(t){return s.e(85).then(function(){var i=[s(663)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-article-item":function(t){return s.e(105).then(function(){var i=[s(595)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-topic-item":function(t){return s.e(104).then(function(){var i=[s(670)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-list-item":function(t){return s.e(103).then(function(){var i=[s(668)];t.apply(null,i)}.bind(this)).catch(s.oe)},"c-card":function(t){return s.e(102).then(function(){var i=[s(667)];t.apply(null,i)}.bind(this)).catch(s.oe)}},data:function(){return{}},methods:{showByTopic:function(t,i){for(var s=[],a=0;a<t.length;a++)t[a].topic.includes(i)&&s.push(t[a]);return s}},computed:{topics:function(){return this.$store.state.marketplace.help.topics},articles:function(){return this.$store.state.marketplace.help.articles}}},c=(s(504),s(0)),e=Object(c.a)(a,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("c-layout",{attrs:{navigationKey:"help-navigation"}},[s("div",{staticClass:"content",attrs:{id:"content"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 text-center"},[s("h2",{staticClass:"m-0 p-o"},[t._v("Welcome to BlockHub Support")])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-9 text-center"},[s("div",{staticClass:"input-group input-group-lg my-5"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search query","aria-label":"Search query","aria-describedby":"button-addon"}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("c-button",{staticClass:"px-4",staticStyle:{"border-radius":"0 5px 5px 0"},attrs:{status:"info",icon_hide:""}},[t._v("Search")])],1)])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[t.articles?s("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Trending articles"}},[s("div",{staticClass:"article-list"},t._l(t.showByTopic(t.articles,0),function(i,a){return s("c-article-item",{key:a,class:{"mb-0":t.articles.length===a+1},attrs:{link:"/#/help/0/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                            ")])}))]):t._e(),t._v(" "),s("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Topics"}},[s("div",{staticClass:"topics-list"},t._l(t.topics,function(i,a){return s("c-topic-item",{key:a,staticClass:"padding-10",attrs:{link:"/#/help/"+i.id,icon:i.icon}},[t._v("\n                                "+t._s(i.label)+"\n                            ")])}))])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6 margin-bottom-30"},[s("c-block",{attrs:{title:"Changelog"}},[s("div",{staticClass:"simple-list"},t._l(t.showByTopic(t.articles,5),function(i,a){return s("c-list-item",{key:a,class:{"mb-0":t.articles.length===a+1},attrs:{link:"/#/help/5/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                                ")])}))])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6 margin-bottom-30"},[s("c-block",{attrs:{title:"Common issues"}},[s("div",{staticClass:"simple-list"},t._l(t.showByTopic(t.articles,7),function(i,a){return s("c-list-item",{key:a,class:{"mb-0":t.articles.length===a+1},attrs:{link:"/#/help/7/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                            ")])}))])],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6"},[s("c-card",{staticClass:"text-center"},[s("h4",{staticClass:"h2"},[t._v("Community")]),t._v(" "),s("p",[t._v("Engage with a community of passionate experts to get the answers you need")]),t._v(" "),s("c-button",{staticClass:"width-auto margin-top-10",attrs:{icon_hide:"",href:"https://github.com/hyperbridge",target:"_blank"}},[t._v("Visit GitHub")])],1)],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-6"},[s("c-card",{staticClass:"text-center"},[s("h4",{staticClass:"h2"},[t._v("BlockHub Support")]),t._v(" "),s("p",[t._v("Create a support ticket and our support experts will get back to you")]),t._v(" "),s("c-button",{staticClass:"width-auto margin-top-10",attrs:{status:"info",icon_hide:""}},[t._v("Create a ticket")])],1)],1)])])])])},[],!1,null,"335d9a58",null);i.default=e.exports}}]);