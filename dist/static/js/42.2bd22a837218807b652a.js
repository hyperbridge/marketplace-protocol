(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{514:function(t,e,a){"use strict";var i=a(88);a.n(i).a},864:function(t,e,a){"use strict";a.r(e);var i={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[a(934)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-tags-list":function(t){return a.e(3).then(function(){var e=[a(739)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-badges":function(t){return a.e(149).then(function(){var e=[a(755)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-item":function(t){return a.e(158).then(function(){var e=[a(758)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-post-comment":function(t){return a.e(167).then(function(){var e=[a(279)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){var t=[{name:"Nakatochi",img:"https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"},{name:"Nakatochi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"},{name:"SatoshiSan",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeGUxfoKhj7XC5BMdwz8dQ9QbavjCMgk6ZXkn2biteSN1c7nL"}],e=["2018-07-24T04:09:00.000Z","2017-07-24T04:09:00.000Z","2018-08-12T04:09:00.000Z","2018-08-14T04:09:00.000Z","2018-04-14T04:09:00.000Z","2018-04-17T04:09:00.000Z"],a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non maximus tellus, eu lacinia justo. Cras semper vestibulum est. Donec a massa vitae nibh consectetur efficitur non in erat. Morbi id dapibus tortor. Praesent sit amet vulputate leo, eu posuere neque. In id ante scelerisque, commodo nisi non, eleifend mauris. Pellentesque massa elit, semper non libero nec, interdum aliquet dolor.";return{errors:[],community_1:!1,community_2:!0,posts:[{title:"This post has been pinned and the title is a single line of text",date:e[0],rate:-319,comments_count:3019,status:"pinned",author:t[0]},{title:"The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.",date:e[1],rate:232,comments_count:3019,status:"locked",author:t[1]},{title:"The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.",date:e[2],rate:103,comments_count:894391,status:"starred",author:t[1],content:{img:"http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg",text:a}},{title:"Actually all the boxes with the titles here are the same size",date:e[3],rate:103,comments_count:894391,author:t[0]}],post:{title:"The previous title doesn't have it's single line aligned vertically because XD does not have this functionality.",date:e[3],rate:1391,comments_count:894391,status:"starred",author:t[0],content:{img:"http://memesbams.com/wp-content/uploads/2017/08/2.3-Delightful-cheer-up-cat-meme.jpg",text:a,comments:[{author:t[1],text:a,rate:319,date:e[4]},{author:t[0],text:a,rate:932,date:e[1],replies:[{author:t[1],text:a,rate:318,date:e[0]},{author:t[0],text:a,rate:-49,date:e[2]},{author:t[1],text:a,rate:442,date:e[1]},{author:t[0],text:a,rate:1239,date:e[5]}]},{author:t[0],text:a,rate:-51,date:e[2]}]}}}},methods:{},computed:{project:function(){var t=null;return"new"===this.id&&(t=this.$store.state.funding.default_project),this.$store.state.funding.projects&&this.$store.state.funding.projects[this.id]&&(t=this.$store.state.funding.projects[this.id]),t&&t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t}},watch:{},created:function(){},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},updated:function(){}},n=(a(514),a(0)),s=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",{attrs:{navigationKey:"project"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[t.project?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.name?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                Project Name "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project name..."},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])]):t._e()]):t._e(),t._v(" "),a("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.project.name))])]),t._v(" "),a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.developer_tags?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.activateElement("developer_tags")}}},[t._v("Change\n                                Tags "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.developer_tags?a("div",{staticClass:"form-control-element form-control-element--right"},[a("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,i){return a("option",{key:i,domProps:{selected:t.project.developer_tags.includes(e)}},[t._v(t._s(e)+"\n                                    ")])})),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("developer_tags")}}})])]):t._e()]):t._e(),t._v(" "),t.editing&&t.activeElement.developer_tags?t._e():a("c-tags-list",{attrs:{tags:t.project.developer_tags}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("c-badges",{attrs:{icons:["trophy","gem"]}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[t.editing?a("div",{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[t.activeElement.background_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?a("div",{},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),a("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e(),t._v(" "),t.editing?a("div",{staticClass:"editor text-right"},[t.activeElement.store_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("store_image")}}},[t._v("Change Store Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.store_image?a("div",{},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{name:"store_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("store_image")}}})])])]):t._e(),t._v(" "),a("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 2140 x 680px")])]):t._e()]),t._v(" "),a("div",{staticClass:"col-12 tab-content"},[a("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id}},[t._v("Overview")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{to:"/project/"+t.project.id+"/community"}},[t._v("Community")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/bounties"}},[t._v("Bounties")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/updates"}},[t._v("Updates")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/milestones"}},[t._v("Milestones")])],1),t._v(" "),t.editing?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#configure",role:"tab","aria-controls":"configure","aria-selected":"true"}},[t._v("Configure")])]):t._e()]),t._v(" "),t.community_1?a("div",t._l(t.posts,function(t,e){return a("c-item",{key:e,attrs:{post:t}})})):t.community_2?a("div",[a("c-item",{attrs:{post:t.post}})],1):t._e()])]):a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t._v("\n                    Project not found\n                ")])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"invertFormExampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content invert"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Set Up Campaign")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("div",{staticClass:"modal-body"}),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-light",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Submit")])])])])])])},[],!1,null,"ef7d980a",null);e.default=s.exports},88:function(t,e){}}]);