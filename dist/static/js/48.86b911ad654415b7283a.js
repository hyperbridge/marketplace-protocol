(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1368:function(t,e,s){"use strict";s.r(e);var a=s(6),r=s.n(a),c=s(10),o=s.n(c),i=s(25),n=s.n(i),l={props:{id:[String,Number]},components:{"c-business-layout":function(t){return s.e(189).then(function(){var e=[s(1342)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{loadingState:!0,creating:"new"===this.id,successfulCreationMessage:!1}},computed:{marketplace:function(){return this.$store.state.marketplace},product:function(){return"new"===this.id?this.marketplace.default_product:this.marketplace.products[this.id]}},methods:{create:function(){var t=this,e={code:function(t,e,s,a,c,i,l,u,d,p){var v,m=this,f=p.product,C=p.profile;return new n.a((v=o()(r.a.mark(function t(s,c){var o,i,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.api.ethereum.state.contracts.ProductRegistration.deployed,i=!1,n=o.ProductCreated().watch(function(t,a){if(!i){if(i=!0,t)return console.warn("[BlockHub][Marketplace] Error",t),c(t);f.$loki=void 0,f.id=a.args.productId.toNumber();try{e.marketplace.products.insert(f),console.log("after",f.id)}catch(t){try{e.marketplace.products.update(f)}catch(t){c(t)}}e.save(),console.log("Product created"),s(f)}}),t.next=5,o.createProduct(f.name,f.type,f.content,{from:C.public_address});case 5:n.stopWatching(function(){});case 6:case"end":return t.stop()}},t,m)})),function(t,e){return v.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.account.current_identity,product:this.product}};BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.product.id=e.id,t.successfulCreationMessage="Congratulations, your product has been created!",t.marketplace.products[t.product.id]=t.product,t.$router.push("/business/product/"+t.product.id))})}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},u=(s(730),s(0)),d=Object(u.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-business-layout",[s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"page-heading__container"},[s("h1",{staticClass:"title"},[t._v("Product Creation")]),t._v(" "),s("p",{staticClass:"caption"})]),t._v(" "),s("nav",{attrs:{"aria-label":"breadcrumb",role:"navigation"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"/#/business"}},[t._v("Dashboard")])]),t._v(" "),s("li",{staticClass:"breadcrumb-item active"},[t._v("Product")])])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t.product.id?s("div",{staticClass:"col-2 offset-10"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"/#/product/"+t.product.id}},[t._v("PREVIEW")])]):t._e(),t._v(" "),t.successfulCreationMessage?s("div",{staticClass:"col-md-12"},[s("p",{staticClass:"alert alert-info"},[t._v(t._s(t.successfulCreationMessage))]),t._v(" "),s("br"),s("br")]):t._e(),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Title")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Type")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.type,expression:"product.type"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.type},on:{input:function(e){e.target.composing||t.$set(t.product,"type",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Description")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"switch switch-sm col-sm-3"},[s("label",[t._v("Content")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.content,expression:"product.content"}],staticClass:"form-control",domProps:{value:t.product.content},on:{input:function(e){e.target.composing||t.$set(t.product,"content",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])])]),t._v(" "),s("div",{staticClass:"col-md-6"})]),t._v(" "),s("div",{staticClass:"row"},[t.product.id?s("div",{staticClass:"col-2 offset-10"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v("SAVE")])]):t._e(),t._v(" "),t.product.id?t._e():s("div",{staticClass:"col-2 offset-10"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"#",target:"_blank"},on:{click:function(e){return e.preventDefault(),t.create(e)}}},[t._v("CREATE")])])])])])])},[],!1,null,"2516cdd3",null);e.default=d.exports},167:function(t,e){},730:function(t,e,s){"use strict";var a=s(167);s.n(a).a}}]);