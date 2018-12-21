(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1316:function(t,a,s){"use strict";var e=s(418);s.n(e).a},1428:function(t,a,s){"use strict";s.r(a);var e=s(92),o=s.n(e),r=(s(35),s(96),{props:["activated"],components:{"c-popup":function(t){return s.e(9).then(function(){var a=[s(146)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-terms-popup":function(t){return s.e(227).then(function(){var a=[s(1397)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-custom-modal":function(t){return s.e(13).then(function(){var a=[s(1500)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-tabs":function(t){return s.e(189).then(function(){var a=[s(1462)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-tab":function(t){return s.e(188).then(function(){var a=[s(1456)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-terms-block":function(t){return s.e(202).then(function(){var a=[s(1488)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-privacy-block":function(t){return s.e(201).then(function(){var a=[s(1476)];t.apply(null,a)}.bind(this)).catch(s.oe)}},data:function(){return{errors:[],email:null,password:null,repeatPassword:null,loading:!1,agreement:null,terms:null,privacy:null}},watch:{"$store.state.application.signedIn":function(t){}},computed:{},methods:{next:function(){var t=this,a=this.email,s=this.password;this.errors=[],this.$store.commit("accounts/clearCreateError"),this.loading=!0,a&&s?this.$store.dispatch("accounts/create",{email:a,password:s}).then(function(e){return t.$store.dispatch("auth/authenticate",{strategy:"local",email:a,password:s})}).catch(function(a){var s=a.errorType;(a=o()({},a)).message="uniqueViolated"===s?"That email address is unavailable.":"An error prevented signup.",t.errors=[a.message],t.loading=!1}):this.errors.push("Missing fields.")}}}),i=(s(1316),s(0)),n=Object(i.a)(r,function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.activated?s("c-custom-modal",{attrs:{title:"Sign Up"},on:{close:function(a){t.$store.state.application.activeModal=null}}},[s("div",{staticStyle:{width:"100%"},attrs:{slot:"modal_body"},slot:"modal_body"},[s("c-loading",{attrs:{enabled:t.loading}}),t._v(" "),t.loading?t._e():s("div",[s("p",{attrs:{hidden:""}},[t._v("\n                To manage your product listing, you'll need to verify your connection with this company. "),s("br"),t._v("\n                What you'll get with verification:\n                "),s("br"),s("br"),t._v(" "),s("i",{staticClass:"fas fa-check"}),t._v(" Allow new customers to find you on BlockHub Search"),s("br"),t._v(" "),s("i",{staticClass:"fas fa-check"}),t._v(" Promote your business with bounties"),s("br"),t._v(" "),s("i",{staticClass:"fas fa-check"}),t._v(" Track product analytics to understand your customers"),s("br"),t._v(" "),s("i",{staticClass:"fas fa-check"}),t._v(" Respond to customer reviews"),s("br"),t._v(" "),s("i",{staticClass:"fas fa-check"}),t._v(" And much more"),s("br"),t._v(" "),s("br")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",[t._v("E-mail")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail",name:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",name:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Repeat Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Repeat Password",name:"repeatPassword"},domProps:{value:t.repeatPassword},on:{input:function(a){a.target.composing||(t.repeatPassword=a.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row",attrs:{hidden:""}},[s("div",{staticClass:"col"},[s("c-switch",{attrs:{label_position:"right",customLabel:!0},model:{value:t.agreement,callback:function(a){t.agreement=a},expression:"agreement"}},[s("template",{slot:"label"},[t._v("\n                            I agree to the\n                            "),s("c-button",{attrs:{status:"plain"},on:{click:function(a){t.terms=!0}}},[t._v("terms")]),t._v(" and\n                            "),s("c-button",{attrs:{status:"plain"},on:{click:function(a){t.privacy=!0}}},[t._v("privacy policy")])],1)],2)],1)]),t._v(" "),t.errors.length?s("p",{staticClass:"errors"},[s("br"),t._v(" "),s("strong",[t._v("Please correct the following error(s):")]),t._v(" "),s("ul",t._l(t.errors,function(a){return s("li",{key:a},[t._v(t._s(a))])}))]):t._e()])],1),t._v(" "),t.loading?t._e():s("div",{staticClass:"text-right w-100",attrs:{slot:"modal_footer"},slot:"modal_footer"},[s("c-button",{staticStyle:{float:"left"},attrs:{status:"plain"},on:{click:function(a){t.$store.commit("application/activateModal","login")}}},[t._v("Already registered? Sign In")]),t._v(" "),s("c-button",{attrs:{size:"md"},on:{click:function(a){t.next()}}},[t._v("Continue")])],1),t._v(" "),s("c-terms-popup",{attrs:{title:"Terms",activated:t.terms,width:"800"},on:{close:function(a){t.terms=!1}}},[s("div",{staticClass:"h4",attrs:{slot:"header"},slot:"header"},[t._v("Terms and Conditions for BlockHub")]),t._v(" "),s("div",{attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"terms_block"},[s("c-terms-block")],1)])]),t._v(" "),s("c-terms-popup",{attrs:{title:"Privacy",activated:t.privacy,width:"800"},on:{close:function(a){t.privacy=!1}}},[s("div",{staticClass:"h4",attrs:{slot:"header"},slot:"header"},[t._v("Privacy Policy for BlockHub")]),t._v(" "),s("div",{attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"terms_block"},[s("c-privacy-block")],1)])])],1):t._e()},[],!1,null,"82981782",null);a.default=n.exports},418:function(t,a){}}]);