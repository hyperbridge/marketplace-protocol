(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{139:function(e,t){},1392:function(e,t,s){"use strict";s.r(t);var n={props:["trx"],components:{"c-chat-message":function(e){return s.e(257).then(function(){var t=[s(1324)];e.apply(null,t)}.bind(this)).catch(s.oe)}},data:function(){return{newMessage:""}},methods:{dispatch:function(e,t){},sendMessage:function(){var e=this.trx;e.id,e.messages;this.$store.dispatch("community/createMessage",this.newMessage),this.newMessage=""}},computed:{userId:function(){return this.$store.state.application.account.id},messages:function(){return this.$store.getters["community/messages"]}}},a=(s(694),s(0)),i=Object(a.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",{staticClass:"reset-list chat"},e._l(e.trx.messages,function(t,n){return s("c-chat-message",{key:n,attrs:{message:t,userId:e.userId}})})),e._v(" "),s("div",{staticClass:"chat-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],staticClass:"chat-form__input",attrs:{type:"text"},domProps:{value:e.newMessage},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.sendMessage()},input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e._v(" "),s("button",{staticClass:"chat-form__btn",on:{click:function(t){e.sendMessage()}}},[s("c-icon",{attrs:{name:"paper-plane"}})],1)])])},[],!1,null,"b5a774b2",null);t.default=i.exports},694:function(e,t,s){"use strict";var n=s(139);s.n(n).a}}]);