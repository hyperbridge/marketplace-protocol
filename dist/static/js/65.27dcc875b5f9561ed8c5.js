(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1293:function(t,e,i){"use strict";i.r(e);var o=i(7),n=(i(3),{components:{"c-user-card":function(t){return i.e(151).then(function(){var e=[i(1245)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){var t=this,e=this.$store.state.application.account.identities.find(function(t){return void 0!==t.developer_id}),i=this.$store.state.application.account.identities.find(function(e){return e.id==t.$store.state.application.account.current_identity.id});return!i&&this.$store.state.application.account.identities.length&&(i=this.$store.state.application.account.identities[0]),{identities:this.$store.state.application.account.identities,chosenIdentity:i,developerIdentity:e,errors:[]}},methods:{convertIdentity:function(){var t=this;o.sendCommand("createDeveloperRequest",this.chosenIdentity).then(function(e){t.chosenIdentity.developer_id=e,t.developerIdentity=t.chosenIdentity,t.$store.state.application.developer_mode=!0})},chooseIdentity:function(t){this.chosenIdentity=t}}}),r=(i(739),i(0)),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{attrs:{navigationKey:"store"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("p",[t._v("We're still working on our Business Manager. In the meantime, you can contact us directly at "),i("a",{attrs:{href:"mailto:devs@hyperbridge.org"}},[t._v("devs@hyperbridge.org")])]),t._v(" "),i("h2",[t._v("Community-Driven Development")]),t._v(" "),i("p",[t._v("You might immediately think that community-driven feature development could lead to bad game design. And in ordinary circumstances you may be right. But don't worry, BlockHub is not an ordinary platform. We know the reason why forum feedback is often mostly negative. It's because people enjoying the game aren't there, THEY'RE PLAYING THE GAME. That's why we need to use COMPARISON metrics to determine the state of your feedback to other games. This, along with the reputations system, will greatly improve the feedback loop to your internal testers. Ultimately you do decide, but we want to make it super easy to understand your community. For the growth of your game, both the developer and the community need to work together, it's a symbiotic relationship. And we're to help nurture it.")]),t._v(" "),i("br"),t._v(" "),t.developerIdentity?t._e():i("div",[i("p",[t._v("Choose a profile to convert:")]),t._v(" "),i("br"),t._v(" "),i("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Choose Profile"}},[i("div",{staticClass:"profile-picker"},t._l(t.identities,function(e){return t.identities&&t.identities.length?i("div",{key:e.id,staticClass:"profile-picker__profile"},[i("c-user-card",{class:{default:t.chosenIdentity&&e.id==t.chosenIdentity.id},attrs:{user:e,previewMode:!0}}),t._v(" "),i("div",{staticClass:"profile__action"},[t.chosenIdentity&&e.id==t.chosenIdentity.id?t._e():i("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(i){t.chooseIdentity(e)}}},[t._v("Choose")])],1)],1):t._e()})),t._v(" "),i("br"),t._v(" "),i("c-button",{attrs:{href:"/#/account/identities"}},[t._v("New Profile")])],1),t._v(" "),i("br"),i("br"),t._v(" "),i("c-button",{on:{click:t.convertIdentity}},[t._v("Convert to Developer")])],1),t._v(" "),t.developerIdentity?i("div",[t._v("\n                    Congratulations, your developer profile is all setup. You are Developer #"+t._s(this.chosenIdentity.developer_id)+"\n\n                    "),i("br"),i("br"),t._v(" "),i("c-button",{attrs:{href:"/#/developer"}},[t._v("Go to dashboard")])],1):t._e()])])])},[],!1,null,"52b1896e",null);e.default=s.exports},226:function(t,e){},739:function(t,e,i){"use strict";var o=i(226);i.n(o).a}}]);