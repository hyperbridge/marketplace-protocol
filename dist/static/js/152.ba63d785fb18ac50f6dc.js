(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1157:function(t,a,e){"use strict";e.r(a);var s={name:"user-card",props:{id:String,user:{img:String,name:String,wallet:String},status:{type:String,default:"success",validator:function(t){return["info","success","warning","danger"].includes(t)}},iconColor:String,iconClass:String,previewMode:Boolean}},i=(e(757),e(0)),c=Object(i.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"identity-block",class:{"preview-mode":t.previewMode}},[e("div",{staticClass:"identity-block__user-data"},[t.previewMode?e("div",{staticClass:"user-data__icon",class:{verified:t.user.verified}},[e("i",{staticClass:"fas",class:{"fa-check":t.user.verified,"fa-times":!t.user.verified}})]):t._e(),t._v(" "),t.previewMode?e("div",{staticClass:"user-data__avatar"},[e("a",{staticClass:"user-data__avatar-upload-btn",attrs:{href:"/#/identities/"+t.user.id}},[t.user.img?e("c-img",{attrs:{src:t.user.img}}):e("c-img",{attrs:{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"}})],1)]):t._e(),t._v(" "),t.previewMode?t._e():e("div",{staticClass:"user-data__avatar"},[t.user.img?e("c-img",{attrs:{src:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"}}):e("a",{staticClass:"user-data__avatar-upload-btn",attrs:{href:"#"}},[e("c-img",{attrs:{src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxOS45ODIgMzE5Ljk4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5Ljk4MiAzMTkuOTgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTIzNC45OTEsMzE5Ljk4MmMyLjYxOCwwLDUuMjItMS4wNzgsNy4wNzEtMi45MjlzMi45MjktNC40NTMsMi45MjktNy4wNzF2LTE0MGg2NSAgIGMzLjkyMi0wLjAwOCw3LjcyMS0yLjU1Miw5LjIyMS02LjE3NnMwLjYxLTguMTA5LTIuMTU5LTEwLjg4NmwtMTUwLTE1MEMxNjUuMjAyLDEuMDc0LDE2Mi42MDQsMCwxNTkuOTkxLDAgICBjLTIuNjE0LDAtNS4yMTIsMS4wNzQtNy4wNjIsMi45MmwtMTUwLDE1MGMtMi43NjksMi43NzctMy42NTksNy4yNjMtMi4xNTksMTAuODg2YzEuNSwzLjYyNCw1LjI5OSw2LjE2OCw5LjIyMSw2LjE3Nmg2NXYxNDAgICBjMCwyLjYxOCwxLjA3OCw1LjIyLDIuOTI5LDcuMDcxczQuNDUzLDIuOTI5LDcuMDcxLDIuOTI5SDIzNC45OTF6IiBmaWxsPSIjNjQ3M2Y0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="}})],1)],1),t._v(" "),e("div",[e("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"form-control margin-bottom-5",attrs:{type:"text",name:"profile_name",placeholder:"Profile name",readonly:t.previewMode},domProps:{value:t.user.name},on:{input:function(a){t.$emit("update:name",a.target.value)}}}),t._v(" "),e("p",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}]},[t._v("User")])])]),t._v(" "),e("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}],staticClass:"identity-block__unknown-blk"},[t._l(4,function(t){return e("button",{key:t,staticClass:"btn"},[e("i",{staticClass:"fas fa-plus"})])}),t._v(" "),t.previewMode?e("div",{staticClass:"counts"},[t._m(0),t._v(" "),t._m(1)]):t._e()],2),t._v(" "),e("div",{staticClass:"wallet_number"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"wallet_number",placeholder:"Public address",readonly:"readonly"},domProps:{value:t.user.public_address},on:{input:function(a){t.$emit("update:wallet",a.target.value)}}}),t._v(" "),e("button",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"BADGES",expression:"'BADGES'"}]},[e("i",{class:"fas fa-"+(t.previewMode?"copy":"redo-alt")})])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("span",[this._v("\n                0 "),a("i",{staticClass:"fas fa-long-arrow-alt-down"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",[this._v("\n                0 "),a("i",{staticClass:"fas fa-long-arrow-alt-up"})])}],!1,null,"be9ffc3e",null);a.default=c.exports},257:function(t,a){},757:function(t,a,e){"use strict";var s=e(257);e.n(s).a}}]);