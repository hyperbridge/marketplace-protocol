(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1134:function(t,n,o){"use strict";var e=o(356);o.n(e).a},1302:function(t,n,o){"use strict";o.r(n);var e=o(2),s=o.n(e),i=o(25),c={name:"cookie-policy",components:{"c-popup":function(t){return o.e(6).then(function(){var n=[o(124)];t.apply(null,n)}.bind(this)).catch(o.oe)}},data:function(){return{show:!1}},methods:s()({},Object(i.d)(["UPDATE_CLIENT_SETTINGS"]),{updateClientSettings:function(){this.$store.commit("application/UPDATE_CLIENT_SETTINGS","cookie_policy_accepted"),this.show=!1},showPopup:function(){this.show=!0},closePopup:function(){this.show=!1}}),computed:{settings:function(){return this.$store.state.application.account.settings}}},a=(o(1134),o(0)),u=Object(a.a)(c,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("transition",{attrs:{name:"fade"}},[t.settings.client.cookie_policy_accepted?t._e():o("div",{staticClass:"cookie-policy"},[o("p",{staticClass:"p-0 m-0"},[t._v("\n            By using this website, you agree to our\n            "),o("c-button",{staticClass:"p-0 m-0",attrs:{status:"plain"},on:{click:t.showPopup}},[t._v("cookie policy")])],1),t._v(" "),o("c-button",{staticClass:"margin-left-20",attrs:{status:"info",icon_hide:""},on:{click:function(n){t.updateClientSettings()}}},[t._v("\n            Dismiss\n        ")]),t._v(" "),o("c-popup",{attrs:{activated:t.show,title:"Cookie Policy"},on:{close:t.closePopup}},[o("p",[t._v("\n                We use cookies to make interactions with our websites and services easy and meaningful,\n                to better understand how they are used and to tailor advertising.")]),t._v(" "),o("p",[t._v("\n                You can "),o("c-button",{attrs:{status:"plain",href:"#3"}},[t._v("read more")]),t._v("\n                and "),o("c-button",{attrs:{status:"plain",href:"#4"}},[t._v("make you cookies choices here")]),t._v(".\n            ")],1),t._v(" "),o("p",[t._v("\n                By continuing to use this site you are giving\n                us your consent to do this.\n            ")]),t._v(" "),o("template",{slot:"footer"},[o("div",{staticClass:"text-right w-100"},[o("c-button",{attrs:{status:"success",icon_hide:""},on:{click:function(n){t.updateClientSettings()}}},[t._v("\n                        Accept\n                    ")])],1)])],2)],1)])},[],!1,null,null,null);n.default=u.exports},356:function(t,n){}}]);