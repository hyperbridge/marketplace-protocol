(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1521:function(t,s,i){"use strict";i.r(s);var a={components:{"c-business-layout":function(t){return i.e(170).then(function(){var s=[i(1423)];t.apply(null,s)}.bind(this)).catch(i.oe)}},data:function(){return{loadingState:!0}},computed:{projects:function(){return this.$store.state.funding.projects}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},e=(i(811),i(0)),l=Object(e.a)(a,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("c-business-layout",[i("div",[i("div",{staticClass:"page-heading"},[i("div",{staticClass:"page-heading__container"},[i("h1",{staticClass:"title"},[t._v("Crowdfunds")]),t._v(" "),i("p",{staticClass:"caption"})]),t._v(" "),i("nav",{attrs:{"aria-label":"breadcrumb",role:"navigation"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#/business"}},[t._v("Dashboard")])]),t._v(" "),i("li",{staticClass:"breadcrumb-item active"},[t._v("Crowdfunds")])])])]),t._v(" "),i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row margin-bottom-20"},[i("div",{staticClass:"col-12 col-lg-3"},[i("div",{staticClass:"widget"},[i("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[i("span",{staticClass:"li-window"})]),t._v(" "),i("div",{staticClass:"widget__container"},[i("div",{staticClass:"widget__line"},[i("div",{staticClass:"widget__icon"},[i("span",{staticClass:"li-window"})]),t._v(" "),i("div",{staticClass:"widget__title"},[t._v("Crowdfunds")]),t._v(" "),i("div",{staticClass:"widget__subtitle"})]),t._v(" "),i("div",{staticClass:"widget__box widget__box--left"},[i("div",{staticClass:"widget__informer"},[t._v(t._s(t.projects.length)+" crowdfunds")])])])])]),t._v(" "),i("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[i("div",{staticClass:"widget"},[i("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[i("span",{staticClass:"li-users"})]),t._v(" "),i("div",{staticClass:"widget__container"},[i("div",{staticClass:"widget__line"},[i("div",{staticClass:"widget__icon"},[i("span",{staticClass:"li-users"})]),t._v(" "),i("div",{staticClass:"widget__title"},[t._v("Users activity")]),t._v(" "),i("div",{staticClass:"widget__subtitle"},[t._v("Online operators")])]),t._v(" "),i("div",{staticClass:"widget__box widget__box--left"},[i("div",{staticClass:"widget__informer"},[t._v("12 operators")])])])])]),t._v(" "),i("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[i("div",{staticClass:"widget"},[i("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[i("span",{staticClass:"li-receipt"})]),t._v(" "),i("div",{staticClass:"widget__container"},[i("div",{staticClass:"widget__line"},[i("div",{staticClass:"widget__icon"},[i("span",{staticClass:"li-receipt"})]),t._v(" "),i("div",{staticClass:"widget__title"},[t._v("Open payments")]),t._v(" "),i("div",{staticClass:"widget__subtitle"},[t._v("Payments summary")])]),t._v(" "),i("div",{staticClass:"widget__box widget__box--left"},[i("div",{staticClass:"widget__informer"},[t._v("6 payments for $2,485.00")])])])])]),t._v(" "),i("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[i("div",{staticClass:"widget"},[i("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[i("span",{staticClass:"li-lifebuoy"})]),t._v(" "),i("div",{staticClass:"widget__container"},[i("div",{staticClass:"widget__line"},[i("div",{staticClass:"widget__icon"},[i("span",{staticClass:"li-lifebuoy"})]),t._v(" "),i("div",{staticClass:"widget__title"},[t._v("Support tickets")]),t._v(" "),i("div",{staticClass:"widget__subtitle"},[t._v("Count of opened tickets")])]),t._v(" "),i("div",{staticClass:"widget__box widget__box--left"},[i("div",{staticClass:"widget__informer"},[t._v("5 of 2,133")])])])])])]),t._v(" "),i("div",{staticClass:"card margin-bottom-0"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"form-row"},[i("div",{staticClass:"col-6 col-lg-2"},[i("select",{staticClass:"form-control actionWithSelected",attrs:{tabindex:"-1","aria-hidden":"true",hidden:""}},[i("option"),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("Set as readed")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("Remove")])])]),t._v(" "),i("div",{staticClass:"col-6 col-lg-4 d-none d-md-block"}),t._v(" "),i("div",{staticClass:"col-6 col-lg-2"},[i("select",{staticClass:"form-control orderByStatus",attrs:{tabindex:"-1","aria-hidden":"true",hidden:""}},[i("option"),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("Active")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("Closed")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("Denied")])])]),t._v(" "),i("div",{staticClass:"col-6 col-lg-2 d-none d-md-block"},[i("c-button",{staticClass:"w-100 justify-content-center h-100",attrs:{href:"#/business/project/new",status:"dark",icon:"plus",size:"mg"}},[t._v("\n                                New Crowdfund\n                            ")])],1)]),t._v(" "),i("div",{staticClass:"table-responsive margin-top-20 margin-bottom-0"},[i("table",{staticClass:"table table-striped table-bordered margin-bottom-0",staticStyle:{"min-width":"800px"}},[i("thead",[i("tr",[i("th",{attrs:{width:"30"}},[i("label",{staticClass:"custom-control custom-checkbox"},[i("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),i("span",{staticClass:"custom-control-label"})])]),t._v(" "),i("th",{attrs:{width:"100"}},[t._v("ID")]),t._v(" "),i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("Date")]),t._v(" "),i("th",[t._v("Owner")]),t._v(" "),i("th",{attrs:{hidden:""}},[t._v("Operators")]),t._v(" "),i("th",[t._v("Funding Obtained")]),t._v(" "),i("th",[t._v("Funding Goal")]),t._v(" "),i("th",{attrs:{width:"100"}},[t._v("Status")]),t._v(" "),i("th",{attrs:{width:"30"}})])]),t._v(" "),i("tbody",t._l(t.projects,function(s){return i("tr",{key:s.id},[i("td",[i("label",{staticClass:"custom-control custom-checkbox"},[i("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),i("span",{staticClass:"custom-control-label"})])]),t._v(" "),i("td",[t._v(t._s(s.id))]),t._v(" "),i("td",[i("a",{staticClass:"text-secondary text-bold",attrs:{href:"#/business/project/"+s.id}},[t._v(t._s(s.name))])]),t._v(" "),i("td",[t._v(t._s(s.meta.created))]),t._v(" "),i("td",[i("div",{staticClass:"user user--bordered"},[i("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),i("div",{staticClass:"user__name"},[i("strong",[t._v(t._s(s.developerId))])])])]),t._v(" "),i("td",{attrs:{hidden:""}},[i("div",{staticClass:"user-group user-group--bordered"},[i("div",{staticClass:"user"},[i("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),i("div",{staticClass:"user"},[i("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),t._v(" "),i("div",{staticClass:"user"},[i("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])]),t._v(" "),i("td",[t._v("\n                                    "+t._s(s.funds.obtained)+"\n                                ")]),t._v(" "),i("td",[t._v("\n                                    "+t._s(s.funds.goal)+"\n                                ")]),t._v(" "),i("td",[i("button",{staticClass:"btn btn-outline-success btn-block btn-sm"},[t._v(t._s(s.status))])]),t._v(" "),i("td",[i("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[i("i",{staticClass:"fa fa-pencil"})])])])}))])])])])])])])},[],!1,null,"d95df362",null);s.default=l.exports},182:function(t,s){},811:function(t,s,i){"use strict";var a=i(182);i.n(a).a}}]);