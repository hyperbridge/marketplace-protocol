(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1341:function(t,s,e){"use strict";e.r(s);var n={props:["project","editing"],components:{"c-milestone":function(t){return e.e(248).then(function(){var s=[e(1312)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-icon-block":function(t){return e.e(211).then(function(){var s=[e(1289)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-progress-bar":function(t){return e.e(181).then(function(){var s=[e(1304)];t.apply(null,s)}.bind(this)).catch(e.oe)}},computed:{milestones:function(){return this.project.milestones.items.sort()},doneMilestones:function(){var t=this.project.milestones.items,s=0;return t.forEach(function(t,e){console.log(t),"done"===t.status&&(s+=1)}),s}}},i=(e(849),e(0)),o=Object(i.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[t.project.milestones?t._e():e("div",{staticClass:"col-12"},[t._m(0)]),t._v(" "),t.project.milestones?e("div",{staticClass:"col-12"},[e("div",{staticClass:"milestones-header margin-bottom-20"},[e("div",{staticClass:"milestones-header__info"},[e("div",{staticClass:"h3 text-white font-weight-bold mb-0"},[t._v("\n                    "+t._s(t.project.milestones.overall_progress)+"% Project Completion\n                ")]),t._v("\n                "+t._s(t.doneMilestones)+" of "+t._s(t.project.milestones.items.length)+" Milestones Completed\n            ")]),t._v(" "),e("div",{staticClass:"milestones-header__stat"},[e("c-icon-block",{attrs:{icon:"check"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Completed\n                    ")]),t._v("\n                    "+t._s(t.doneMilestones)+" Milestones\n                ")]),t._v(" "),e("c-icon-block",{attrs:{icon:"th"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Total\n                    ")]),t._v("\n                    "+t._s(t.project.milestones.items.length)+" Milestones\n                ")]),t._v(" "),e("c-icon-block",{attrs:{icon:"file-alt"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Total Spent\n                    ")]),t._v("\n                    "+t._s(t._f("convertCurrency")(t.project.funding.spent_amount))+"\n                ")]),t._v(" "),e("c-icon-block",{attrs:{icon:"hand-holding-usd"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Project Budget\n                    ")]),t._v("\n                    "+t._s(t._f("convertCurrency")(t.project.funding.funded_amount))+"\n                ")])],1)]),t._v(" "),e("div",{staticClass:"timeline-blk position-relative"},[e("div",{staticClass:"progress main_timeline",staticStyle:{height:"15px"}},[e("c-progress-bar",{attrs:{percentages:t.project.milestones.overall_progress}})],1),t._v(" "),t.milestones?e("div",{staticClass:"period-container"},t._l(t.milestones,function(s,n){return e("div",{key:n,staticClass:"period"},[e("div",{staticClass:"number"},[t._v(t._s(s.step_number))]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v("\n                            "+t._s(s.short_description)+"\n                        ")]),t._v(" "),e("div",{staticClass:"progress_line"},[e("i",{staticClass:"fas fa-clock icon"}),t._v(" "),e("c-progress-bar",{attrs:{percentages:s.progress.percent_days}}),t._v("\n                            "+t._s(s.progress.days_left)+" days left\n                        ")],1),t._v(" "),e("div",{staticClass:"progress_line"},[e("i",{staticClass:"fas fa-check icon"}),t._v(" "),e("c-progress-bar",{attrs:{percentages:s.progress.percent_done}}),t._v("\n                            "+t._s(s.progress.percent_done)+"% Done\n                        ")],1),t._v(" "),e("div",{staticClass:"progress_line"},[e("i",{staticClass:"fas fa-dollar-sign icon"}),t._v(" "),e("c-progress-bar",{attrs:{percentages:s.progress.percent_spent}}),t._v("\n                            "+t._s(s.progress.percent_spent)+"% Spent\n                        ")],1)])])})):t._e()]),t._v(" "),e("div",{staticClass:"milestones-list"},t._l(t.milestones,function(t,s){return e("c-milestone",{key:s,attrs:{milestone:t}})}))]):t._e()])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"posts-timeline__end no-updates"},[s("h3",[this._v("\n                There is no milestones defined.\n            ")])])}],!1,null,"14c6a7dc",null);s.default=o.exports},220:function(t,s){},849:function(t,s,e){"use strict";var n=e(220);e.n(n).a}}]);