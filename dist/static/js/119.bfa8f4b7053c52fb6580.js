(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{223:function(t,e){},662:function(t,e,i){"use strict";var n=i(223);i.n(n).a},784:function(t,e,i){"use strict";i.r(e);var n={name:"content-navigation",props:{items:{type:Array,default:function(){return[]}},setItemsLimit:{type:Number,default:6},setItemsPerPage:{type:Number,default:6}},components:{"c-pagination":function(t){return i.e(127).then(function(){var e=[i(786)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-load-more":function(t){return i.e(4).then(function(){var e=[i(747)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{activePage:0,limitTo:this.setItemsLimit,itemsPerPage:this.setItemsPerPage}},methods:{loadMore:function(){this.limitTo<this.items.length?this.limitTo+=this.setItemsLimit:this.limitTo-=this.setItemsLimit}},computed:{paginationMode:function(){return this.$store.state.application.account.settings.client.pagination},pagination:function(){var t=this.activePage*this.itemsPerPage,e=Math.ceil(this.items.length/this.itemsPerPage);return{start:t,end:t+this.itemsPerPage,pages:e}},visibleItems:function(){return this.paginationMode?this.items.slice(this.pagination.start,this.pagination.end):this.items.slice(0,this.limitTo)},visibleItemsLength:function(){return this.visibleItems.length},itemsLeft:function(){return this.items.length-this.visibleItemsLength}},watch:{visibleItemsLength:function(t){0===t&&this.activePage>0&&(this.activePage=0)}}},s=(i(662),i(0)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default",null,{items:t.visibleItems}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleItems.length,expression:"visibleItems.length"}],staticClass:"content-navigation-wrapper"},[t.paginationMode?i("c-pagination",{attrs:{activePage:t.activePage+1,pages:t.pagination.pages},on:{pageChange:function(e){t.activePage=e-1}}}):i("c-load-more",{on:{click:function(e){t.loadMore()}}},[t._v("\n           "+t._s(t.itemsLeft?"Load More +"+t.itemsLeft:"Show Less")+"\n        ")])],1)],2)},[],!1,null,"0689431a",null);e.default=a.exports}}]);