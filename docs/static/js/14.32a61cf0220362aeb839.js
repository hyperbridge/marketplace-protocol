(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{419:function(t,e,a){"use strict";var s=a(57);a.n(s).a},57:function(t,e){},723:function(t,e,a){"use strict";a.r(e);var s={props:["id"],data:function(){return{timeline:{timeline_progress:24,timeline_periods:[{number:"1",description:"some text about this period",progress:{days_amouth:"97",days_percent:15,done_percent:38,spent_percent:25}},{number:"2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur consequat turpis, ac tincidunt turpis venenatis fermentum. Suspendisse dignissim scelerisque nisi et rutrum.",progress:{days_amouth:"133",days_percent:94,done_percent:8,spent_percent:95}},{number:"3",description:"Curabitur eget felis nulla. Aliquam erat volutpat. Suspendisse dictum sed nisi quis placerat.",progress:{days_amouth:"92",days_percent:29,done_percent:58,spent_percent:75}}]},milestones:[{img:"http://via.placeholder.com/350x250",title:"Milestone 1",short_description:"For far away, behind the word mountains, far from the countries Vokalia\n                                                and Consonatia, there live.",full_text:"Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel\n                                            lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet\n                                            ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.\n                                            Curabitur lobortis arcu neque, non rutrum elit placerat eget.",progress:{days_amouth:"133",days_percent:94,done_percent:8,spent_percent:95}},{img:"http://via.placeholder.com/350x250",title:"Milestone 2",short_description:"For far away, behind the word mountains, far from the countries Vokalia\n                                                and Consonatia, there live.",full_text:"Aenean eu tellus vel tortor tincidunt pharetra. Aenean mattis, sapien vel\n                                            lacinia accumsan, justo mi venenatis justo, ut accumsan diam mauris sit amet\n                                            ipsum. Vivamus iaculis lectus vel egestas vehicula. Phasellus in lacus nunc.\n                                            Curabitur lobortis arcu neque, non rutrum elit placerat eget.",progress:{days_amouth:"171",days_percent:4,done_percent:38,spent_percent:61}}]}},components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[a(734)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-milestone":function(t){return a.e(166).then(function(){var e=[a(645)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-progress-bar":function(t){return a.e(110).then(function(){var e=[a(666)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-badges":function(t){return a.e(90).then(function(){var e=[a(630)];t.apply(null,e)}.bind(this)).catch(a.oe)}},computed:{project:function(){if(this.$store.state.funding.projects){var t=this.$store.state.funding.projects[this.id];if(t)return t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t}}},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},i=(a(419),a(0)),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",{attrs:{navigationKey:"project-navigation"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t.project?t._e():a("div",{staticClass:"col-12"},[t._v("\n                    Project not found\n                ")])]),t._v(" "),t.project?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.name?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                Project Name "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project name..."},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])]):t._e()]):t._e(),t._v(" "),a("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.project.name))])]),t._v(" "),a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.author_tags?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.activateElement("author_tags")}}},[t._v("Change\n                                Tags "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.author_tags?a("div",{staticClass:"form-control-element form-control-element--right"},[a("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,s){return a("option",{key:s,domProps:{selected:t.project.author_tags.includes(e)}},[t._v(t._s(e)+"\n                                    ")])})),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("author_tags")}}})])]):t._e()]):t._e(),t._v(" "),t.editing&&t.activeElement.author_tags?t._e():a("c-tags-list",{attrs:{tags:t.project.author_tags}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("c-badges",{attrs:{icons:["trophy","gem"]}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[t.editing?a("div",{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[t.activeElement.background_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?a("div",{},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),a("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e(),t._v(" "),t.editing?a("div",{staticClass:"editor text-right"},[t.activeElement.store_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("store_image")}}},[t._v("Change Store Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.store_image?a("div",{},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{name:"store_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("store_image")}}})])])]):t._e(),t._v(" "),a("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 2140 x 680px")])]):t._e()]),t._v(" "),a("div",{staticClass:"col-12"},[a("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id}},[t._v("Overview")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/community"}},[t._v("Community")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/bounties"}},[t._v("Bounties")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/updates"}},[t._v("Updates")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{to:"/project/"+t.project.id+"/milestones"}},[t._v("Milestones")])],1)]),t._v(" "),t.timeline?a("div",{staticClass:"timeline-blk position-relative"},[a("div",{staticClass:"progress main_timeline",staticStyle:{height:"15px"}},[a("c-progress-bar",{attrs:{percentages:t.timeline.timeline_progress}})],1),t._v(" "),t.timeline?a("div",{staticClass:"period-container"},t._l(t.timeline.timeline_periods,function(e,s){return a("div",{key:s,staticClass:"period"},[a("div",{staticClass:"number"},[t._v(t._s(e.number))]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v("\n                                        "+t._s(e.description)+"\n                                    ")]),t._v(" "),a("div",{staticClass:"progress_line"},[a("i",{staticClass:"fas fa-clock icon"}),t._v(" "),a("c-progress-bar",{attrs:{percentages:e.progress.days_percent}}),t._v("\n                                        "+t._s(e.progress.days_amouth)+" days left\n                                    ")],1),t._v(" "),a("div",{staticClass:"progress_line"},[a("i",{staticClass:"fas fa-check icon"}),t._v(" "),a("c-progress-bar",{attrs:{percentages:e.progress.done_percent}}),t._v("\n                                        "+t._s(e.progress.done_percent)+"% Done\n                                    ")],1),t._v(" "),a("div",{staticClass:"progress_line"},[a("i",{staticClass:"fas fa-dollar-sign icon"}),t._v(" "),a("c-progress-bar",{attrs:{percentages:e.progress.spent_percent}}),t._v("\n                                        "+t._s(e.progress.spent_percent)+"% Spent\n                                    ")],1)])])})):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"milestones-list"},t._l(t.milestones,function(t,e){return a("c-milestone",{key:e,attrs:{milestone:t}})}))])]):t._e()])])])},[],!1,null,"3fc1f0da",null);e.default=n.exports}}]);