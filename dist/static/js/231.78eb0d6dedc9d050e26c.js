(window.webpackJsonp=window.webpackJsonp||[]).push([[231,232],{100:function(e,t){},1195:function(e,t,i){"use strict";i.r(t);var s=i(404),a=i(1),n=i.n(a),o={name:"pledge",props:["pledge"],components:{"c-contribute-form":s.default},data:function(){return{form:!1,showToggle:!1,toBePaid:""}},methods:{showFrom:function(){this.form=!0,this.showToggle=!1}},computed:{date:function(){return n()(this.pledge.delivery_date).format("DD MMMM, YYYY")}}},l=(i(764),i(0)),r=Object(l.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pledge-item",on:{mouseover:function(t){e.showToggle=!0},mouseleave:function(t){e.showToggle=!1}}},[i("transition",{attrs:{name:"fade"}},[e.showToggle&&!e.form?i("div",{staticClass:"pledge-form-toggle",staticStyle:{"animation-duration":"0.5s"},on:{click:e.showFrom}},[e._v("\n            Select this reward\n        ")]):e._e()]),e._v(" "),i("h3",[e._v("Pledge US "+e._s(e._f("convertCurrency")(e.pledge.min_price))+" or more")]),e._v(" "),e.pledge.title?i("h4",[e._v(e._s(e.pledge.title))]):e._e(),e._v(" "),i("div",{staticClass:"pledge-item__text"},[e._v("\n        "+e._s(e.pledge.description)+"\n    ")]),e._v(" "),!e.form&&e.pledge.includes.length>0?i("div",{staticClass:"pledge-item__includes"},[i("h6",[e._v("Includes")]),e._v(" "),i("ul",e._l(e.pledge.includes,function(t,s){return i("li",{key:s},[e._v("\n                "+e._s(t.text)+"\n            ")])}))]):e._e(),e._v(" "),i("div",{staticClass:"pledge-item__info"},[e.pledge.delivery_date?i("div",[i("span",{staticClass:"h6"},[e._v("Estimated delivery")]),e._v("\n            "+e._s(e.date)+"\n        ")]):e._e(),e._v(" "),e.pledge.ships_to?i("div",[i("span",{staticClass:"h6"},[e._v("Ships to")]),e._v("\n            "+e._s(e.pledge.ships_to)+"\n        ")]):e._e(),e._v(" "),e.pledge.backers?i("div",{staticClass:"w-100 mt-5"},[i("span",{staticClass:"h6"},[e._v("\n                "+e._s(e.pledge.backers)+" backers\n            ")])]):e._e()]),e._v(" "),e.form?i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"mt-5"},[i("div",{staticClass:"h6 font-weight-bold text-uppercase mb-3"},[e._v("\n                Pledge amount\n            ")]),e._v(" "),i("c-contribute-form",{attrs:{defaultValue:e.pledge.min_price,active:!0},on:{click:function(t){e.$emit("click")}},model:{value:e.toBePaid,callback:function(t){e.toBePaid=t},expression:"toBePaid"}})],1)]):e._e()],1)},[],!1,null,"a24e124a",null);t.default=r.exports},207:function(e,t){},404:function(e,t,i){"use strict";i.r(t);var s={name:"contribute-form",props:{active:{type:Boolean,default:!1},value:"",defaultValue:Number},data:function(){return{activeForm:!1,error:!1,mutableValue:this.value}},created:function(){this.activeForm=this.active,this.defaultValue&&(this.mutableValue=this.defaultValue)},methods:{changeData:function(){this.$emit("input",this.$refs.input.value),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}},watch:{mutableValue:function(e){this.$emit("input",e),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}}},a=(i(676),i(0)),n=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contribute-form",on:{mouseover:function(t){e.activeForm=!0},mouseleave:function(t){e.activeForm=!1}}},[i("div",{staticClass:"input-group mb-4",class:[{active:e.activeForm},{"has-error":e.error}]},[i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text"},[e._v("\n                "+e._s(e.currency)+"\n            ")])]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.mutableValue,expression:"mutableValue"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"0.00"},domProps:{value:e.mutableValue},on:{input:function(t){t.target.composing||(e.mutableValue=t.target.value)}}})]),e._v(" "),i("c-button",{staticClass:"justify-content-center",attrs:{status:"success",icon_hide:"",size:"xl"},on:{click:function(t){e.$emit("click")}}},[e._v("\n        Continue\n    ")])],1)},[],!1,null,"09d35361",null);t.default=n.exports},676:function(e,t,i){"use strict";var s=i(100);i.n(s).a},764:function(e,t,i){"use strict";var s=i(207);i.n(s).a}}]);