(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1062:function(t,e,s){"use strict";var a=s(362);s.n(a).a},1063:function(t,e,s){"use strict";var a=s(363);s.n(a).a},1628:function(t,e,s){"use strict";s.r(e);var a=s(2),r=s.n(a),o=s(10),i=s(1),n=s.n(i),c={components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[s(1681)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-datepicker":function(t){return s.e(220).then(function(){var e=[s(1722)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-user-card":function(t){return s.e(12).then(function(){var e=[s(1488)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-privacy-block":function(t){return s.e(204).then(function(){var e=[s(1433)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-terms-block":function(t){return s.e(205).then(function(){var e=[s(1432)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-popup":function(t){return s.e(9).then(function(){var e=[s(46)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-tabs":function(t){return s.e(191).then(function(){var e=[s(1479)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-tab":function(t){return s.e(190).then(function(){var e=[s(1480)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{writtenDown:!1,verifyingPassphrase:!0,verifiedPassphrase:!0,agreeStoredPassphrase:!0,currentStep:1,finishedStep:1,steps:3,passphrase:[],repeatPassphrase:[],errors:[],account:{firstName:"",lastName:"",birthday:"",email:"",password:"",repeat_password:"",secretQuestion1:"",secretQuestion2:"",secretAnswer1:"",secretAnswer2:"",agreement:!1,newsletter:!0,passphrase:null,repeat_passphrase:null,encryptPassphrase:!0,profile:{name:"",img:"https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1",wallet:""}},terms:!1,privacy_policy:!1}},methods:{checkForm:function(){var t=this;if(this.errors=[],1===this.currentStep)this.account.firstName&&this.account.lastName&&this.account.email&&this.account.birthday&&this.account.agreement?o.getPassphraseRequest({seed:13891737193}).then(function(e){t.passphrase=e.split(" "),t.repeatPassphrase=e.split(" "),t.finishedStep=1,t.currentStep=2}):(this.account.firstName||this.errors.push("First name required."),this.account.lastName||this.errors.push("Last name required."),this.account.birthday||this.errors.push("Birthday required."),this.account.email||this.errors.push("Email required."),this.account.agreement||this.errors.push("To continue using BlockHub, you will need to review and agree to the Terms & Service Agreement."));else if(2===this.currentStep){var e=this.passphrase.join(" "),s=this.repeatPassphrase.join(" ");this.account.secretQuestion1&&this.account.secretAnswer1&&this.account.secretQuestion2&&this.account.secretAnswer2&&this.account.password&&this.account.repeat_password&&this.account.password===this.account.repeat_password&&this.agreeStoredPassphrase&&!this.passphrase.includes("")&&!this.repeatPassphrase.includes("")&&e===s?o.createAccountRequest({seed:13891737193,firstName:this.account.firstName,lastName:this.account.lastName,email:this.account.email,birthday:n()(this.account.birthday).format("DD-MM-YYYY"),password:this.account.password,passphrase:e,encryptPassphrase:this.account.encryptPassphrase,secretQuestion1:this.account.secretQuestion1,secretAnswer1:this.account.secretAnswer1.toLowerCase(),secretQuestion2:this.account.secretQuestion2,secretAnswer2:this.account.secretAnswer2.toLowerCase()}).then(function(e){t.finishedStep=2,t.currentStep=3,t.$store.dispatch("application/updateState",{account:r()({},t.$store.state.application.account,e.account),locked:!1,signedIn:!0})}):(this.account.password||this.errors.push("Password required."),this.account.repeat_password||this.errors.push("Repeat password required."),this.account.password!==this.account.repeat_password&&this.errors.push("Passwords must match."),this.account.secretQuestion1||this.errors.push("Secret Question 1 required."),this.account.secretAnswer1||this.errors.push("Secret Answer 1 required."),this.account.secretQuestion2||this.errors.push("Secret Question 2 required."),this.account.secretAnswer2||this.errors.push("Secret Answer 2 required."),this.agreeStoredPassphrase||this.errors.push("Please agree that you've stored your passphrase somewhere safe."),(this.passphrase.includes("")||this.repeatPassphrase.includes(""))&&this.errors.push("Passphrase must be filled in."),e!==s&&this.errors.push("Passphrase does not match."))}else 3===this.currentStep&&(this.finishedStep=3,this.$router.push({path:"/"}))},changeTab:function(t){t>this.currentStep?this.checkForm():this.currentStep=t},customBirthdayFormatter:function(t){return n()(t).format("DD-MM-YYYY")},showPassphrase:function(){this.errors=[],this.verifyingPassphrase=!1},startVerification:function(){this.errors=[],this.verifyingPassphrase=!0},confirmVerification:function(){this.errors=[];var t=this.passphrase.join(" "),e=this.repeatPassphrase.join(" ");this.passphrase.includes("")||this.repeatPassphrase.includes("")||t!==e?((this.passphrase.includes("")||this.repeatPassphrase.includes(""))&&this.errors.push("Passphrase must be filled in."),t!==e&&this.errors.push("Passphrase does not match.")):this.verifiedPassphrase=!0}},created:function(){this.$store.commit("application/activateModal","register")}},l=(s(1063),s(1062),s(0)),u=Object(l.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"account",showLeftPanel:!1,showRightPanel:!1,showShortcuts:!1}},[s("div",{staticClass:"content login-container",attrs:{id:"content"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-12"},[t.errors.length?s("p",{staticClass:"errors"},[s("strong",[t._v("Please correct the following error(s):")]),t._v(" "),s("ul",t._l(t.errors,function(e){return s("li",{key:e},[t._v(t._s(e))])}))]):t._e(),t._v(" "),s("form",{attrs:{action:"/",method:"post"}},[s("c-tabs",{attrs:{active_tab_prop:t.currentStep,lockedStep:t.finishedStep,tabText:"Step",styled:""},on:{click:function(e){t.changeTab(e)}}},[s("c-tab",{attrs:{tab_id:1,selected:!0,showFooter:!0}},[s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tab-card"},[s("h4",[t._v("Personal Information")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.email,expression:"account.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",name:"email"},domProps:{value:t.account.email},on:{input:function(e){e.target.composing||t.$set(t.account,"email",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Given Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.firstName,expression:"account.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Given Name",name:"firstName"},domProps:{value:t.account.firstName},on:{input:function(e){e.target.composing||t.$set(t.account,"firstName",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Family Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.lastName,expression:"account.lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Family Name",name:"lastName"},domProps:{value:t.account.lastName},on:{input:function(e){e.target.composing||t.$set(t.account,"lastName",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"sr-only"},[t._v("Birthday")]),t._v(" "),s("c-datepicker",{attrs:{placeholder:"Birthday","input-class":"form-control form-calendar__text",name:"birthday","calendar-class":"form-calendar",minimumView:"day",maximumView:"year",initialView:"year",format:t.customBirthdayFormatter},model:{value:t.account.birthday,callback:function(e){t.$set(t.account,"birthday",e)},expression:"account.birthday"}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("span",{staticClass:"input-group-text"},[s("i",{staticClass:"fas fa-calendar-alt"})])])],1)])])]),t._v(" "),s("div",{staticClass:"tab-card"},[s("h4",[t._v("Agreement")]),t._v(" "),s("div",{staticClass:"terms_block"},[s("c-terms-block")],1)])]),t._v(" "),s("div",{staticClass:"d-flex justify-content-between align-items-center margin-top-20",attrs:{slot:"footer"},slot:"footer"},[s("c-switch",{attrs:{label_position:"right",customLabel:!0},model:{value:t.account.agreement,callback:function(e){t.$set(t.account,"agreement",e)},expression:"account.agreement"}},[[t._v("\n                                        I agree to the\n                                        "),s("c-button",{attrs:{status:"plain"},on:{click:function(e){t.terms=!0}}},[t._v("terms")]),t._v(" and\n                                        "),s("c-button",{attrs:{status:"plain"},on:{click:function(e){t.privacy_policy=!0}}},[t._v("privacy policy")])]],2),t._v(" "),s("c-switch",{attrs:{label:"Sign up for our newsletter, get 100 HBX Bonus!",label_position:"right"},model:{value:t.account.newsletter,callback:function(e){t.$set(t.account,"newsletter",e)},expression:"account.newsletter"}}),t._v(" "),s("div",[s("c-button",{class:{disabled:!t.account.agreement},on:{click:function(e){t.checkForm()}}},[t._v("CONTINUE")])],1)],1)]),t._v(" "),s("c-tab",{attrs:{tab_id:2,showFooter:!0}},[s("div",{staticClass:"tab-container"},[t.passphrase?t._e():s("div",{staticClass:"padding-40 loading-process",staticStyle:{position:"relative"}},[s("div",{staticClass:"loading loading--w-spinner"},[s("div",[s("div",{staticClass:"loading-spinner"})])])]),t._v(" "),t.passphrase?s("div",{staticClass:"tab-card"},[s("h4",[t._v("Security")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.password,expression:"account.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",name:"password"},domProps:{value:t.account.password},on:{input:function(e){e.target.composing||t.$set(t.account,"password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Secret Question #1")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.account.secretQuestion1,expression:"account.secretQuestion1"}],staticClass:"form-control",attrs:{id:"secretQuestion1",name:"secretQuestion1"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.account,"secretQuestion1",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",selected:""}},[t._v("Choose Secret Question")]),t._v(" "),s("option",{attrs:{value:"last_name_first_kissed"}},[t._v("What is the first name of the person you first kissed?")]),t._v(" "),s("option",{attrs:{value:"first_name_favorite_aunt_uncle"}},[t._v("What is the first name of the your favorite aunt or uncle?")]),t._v(" "),s("option",{attrs:{value:"favorite_high_school_teacher"}},[t._v("What is the last name of your favorite teacher in high school?")]),t._v(" "),s("option",{attrs:{value:"last_name_teacher_failing_grade"}},[t._v("What is the last name of the teacher who gave you your first failing grade?")]),t._v(" "),s("option",{attrs:{value:"wedding_reception"}},[t._v("What is the name of the plac eyour wedding reception was held?")]),t._v(" "),s("option",{attrs:{value:"city_sibling_live"}},[t._v("In what city or town does your nearest sibling live?")])])])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Secret Question #2")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.account.secretQuestion2,expression:"account.secretQuestion2"}],staticClass:"form-control",attrs:{id:"secretQuestion2",name:"secretQuestion2"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.account,"secretQuestion2",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",selected:""}},[t._v("Choose Secret Question")]),t._v(" "),s("option",{attrs:{value:"last_name_first_kissed"}},[t._v("What is the first name of the person you first kissed?")]),t._v(" "),s("option",{attrs:{value:"first_name_favorite_aunt_uncle"}},[t._v("What is the first name of the your favorite aunt or uncle?")]),t._v(" "),s("option",{attrs:{value:"favorite_high_school_teacher"}},[t._v("What is the last name of your favorite teacher in high school?")]),t._v(" "),s("option",{attrs:{value:"last_name_teacher_failing_grade"}},[t._v("What is the last name of the teacher who gave you your first failing grade?")]),t._v(" "),s("option",{attrs:{value:"wedding_reception"}},[t._v("What is the name of the plac eyour wedding reception was held?")]),t._v(" "),s("option",{attrs:{value:"city_sibling_live"}},[t._v("In what city or town does your nearest sibling live?")])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Repeat Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.repeat_password,expression:"account.repeat_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password again",name:"repeat_password"},domProps:{value:t.account.repeat_password},on:{input:function(e){e.target.composing||t.$set(t.account,"repeat_password",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Answer #1")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.secretAnswer1,expression:"account.secretAnswer1"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Secret Answer #1",name:"secretAnswer1"},domProps:{value:t.account.secretAnswer1},on:{input:function(e){e.target.composing||t.$set(t.account,"secretAnswer1",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"sr-only"},[t._v("Answer #2")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account.secretAnswer2,expression:"account.secretAnswer2"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Secret Answer #2",name:"secretAnswer2"},domProps:{value:t.account.secretAnswer2},on:{input:function(e){e.target.composing||t.$set(t.account,"secretAnswer2",e.target.value)}}})])])])]):t._e()]),t._v(" "),t.verifyingPassphrase?t._e():s("div",{staticClass:"tab-card",attrs:{hidden:""}},[s("p",[t._v("We've generated a passphrase for you. You can change it, but it's not recommended. This is used to access, create & change your data. If you ever need to recover it, you can use your password. If you forget your password, you can use your secret question AND your birthday. We do this to protect you against hackers, however don't lose them, otherwise it will be impossible to recover the account.")]),t._v(" "),s("p",[t._v("Make sure to write down your passphase, password, and secret answers and put it somewhere safe.")]),t._v(" "),s("div",{staticClass:"passphrase"},t._l(t.passphrase,function(e,a){return s("input",{key:a,staticClass:"form-control",attrs:{type:"text"},domProps:{value:e},on:{keyup:function(e){t.passphrase[a]=e.target.value}}})})),t._v(" "),t.verifyingPassphrase?s("c-button",{staticClass:"plain",on:{click:function(e){t.showPassphrase()}}}):t._e(),t._v(" "),s("br"),s("br"),t._v(" "),s("c-button",{staticClass:"c-button--lg",on:{click:function(e){t.startVerification()}}},[t._v("Got it")])],1),t._v(" "),t.verifyingPassphrase?s("div",{staticClass:"tab-card",attrs:{hidden:""}},[s("p",[t._v("We've generated a passphrase for you. You can change it, but it's not recommended. This is used to access, create & change your data. If you ever need to recover it, you can use your password. If you forget your password, you can use your secret question AND your birthday. We do this to protect you against hackers, however don't lose them, otherwise it will be impossible to recover the account.")]),t._v(" "),s("p",[t._v("Make sure to write down your passphase, password, and secret answers and put it somewhere safe.")]),t._v(" "),s("div",{ref:"passphraseVerification",staticClass:"passphrase"},t._l(t.repeatPassphrase,function(e,a){return s("input",{key:a,staticClass:"form-control",attrs:{type:"text"},domProps:{value:e},on:{keyup:function(e){t.repeatPassphrase[a]=e.target.value}}})})),t._v(" "),t.verifyingPassphrase?s("c-button",{staticClass:"plain",on:{click:function(e){t.showPassphrase()}}},[t._v("Show Passphrase Again")]):t._e(),t._v(" "),s("br"),s("br"),t._v(" "),t.verifyingPassphrase?s("c-button",{staticClass:"c-button--lg",on:{click:function(e){t.confirmVerification()}}},[t._v("Verify Now")]):t._e()],1):t._e(),t._v(" "),t.verifiedPassphrase?s("div",{staticClass:"d-flex justify-content-between align-items-center margin-top-20",attrs:{slot:"footer"},slot:"footer"},[t._e(),t._v(" "),t._e(),t._v(" "),s("div",[t.verifiedPassphrase?s("c-button",{on:{click:function(e){t.checkForm()}}},[t._v("CONTINUE")]):t._e()],1)],1):t._e()]),t._v(" "),s("c-tab",{attrs:{tab_id:3}},[s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tab-card"},[s("h3",[t._v("Congratulations!")]),t._v(" "),s("p",[t._v("That's it! You're now a member of BlockHub, and the future of decentralized protocols."),s("br"),t._v("\n                                    We hope you enjoy many years of success with BlockHub and the Hyperbridge family!")]),t._v(" "),s("br"),t._v(" "),s("c-button",{staticClass:"c-button--lg outline-green",on:{click:function(e){t.checkForm()}}},[t._v("Continue to BlockHub")])],1)])])],1)],1)])])]),t._v(" "),s("c-popup",{attrs:{title:"Terms",activated:t.terms,width:"800"},on:{close:function(e){t.terms=!1}}},[s("div",{staticClass:"scroll_block"},[s("c-terms-block")],1)]),t._v(" "),s("c-popup",{attrs:{title:"Privacy policy",activated:t.privacy_policy,width:"800"},on:{close:function(e){t.privacy_policy=!1}}},[s("div",{staticClass:"scroll_block"},[s("c-privacy-block")],1)])],1)},[],!1,null,"3b2b4fbd",null);e.default=u.exports},362:function(t,e){},363:function(t,e){}}]);