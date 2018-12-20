(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1549:function(t,e,n){"use strict";n.r(e);var r=n(11),s=n.n(r),o={name:"games-explorer",components:{"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1574)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[n(1573)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar-fields":function(t){return n.e(16).then(function(){var e=[n(1555)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-input-searcher":function(t){return Promise.resolve().then(function(){var e=[n(1370)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-dropdown":function(t){return n.e(19).then(function(){var e=[n(1414)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-game-grid":function(t){return n.e(23).then(function(){var e=[n(1532)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-content-navigation":function(t){return n.e(11).then(function(){var e=[n(1436)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-option-tag":function(t){return n.e(217).then(function(){var e=[n(1554)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{category:"topSellingProducts",phrase:"",selectedGenres:[],sortBy:{property:null,asc:!0},sortOptions:[{title:"Name",property:"name",icon:"language"},{title:"Price",property:"price",icon:"dollar-sign"}]}},methods:{setGenre:function(t){var e=this.selectedGenres.indexOf(t);e>-1?this.selectedGenres.splice(e,1):this.selectedGenres.push(t)},clearFilters:function(){this.selectedGenres=[],this.phrase="",this.sortBy.property=null,this.sortBy.asc=!0},setSort:function(t,e){var n=this.sortBy,r=n.property,s=n.asc;this.sortBy.property=r===t&&e===s?null:t,this.sortBy.asc=e}},computed:{products:function(){return this.$store.state.marketplace[this.category]},filteredProducts:function(){var t=this,e=this.sortBy,n=e.property,r=e.asc,s=function(t){return r?t:-1*t};return this.$store.state.marketplace[this.category].filter(function(e){return e.name.toLowerCase().includes(t.phrase.toLowerCase())}).filter(function(e){return!t.selectedGenres.length||e.developerTags.some(function(e){return t.selectedGenres.includes(e)})}).sort(function(t,e){return n?t[n]>e[n]?s(1):t[n]<e[n]?s(-1):0:0})},availableGenres:function(){return this.products.reduce(function(t,e){return[].concat(s()(t),s()(e.developerTags.filter(function(e){return!t.includes(e)})))},[]).sort()},filtersActive:function(){var t=this.phrase,e=this.selectedGenres,n=this.sortBy.property;return!!(t.length||e.length||n)}}},i=(n(798),n(0)),c=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row product-grid"},[n("c-block",{attrs:{noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",headingTabs:[{title:"Top Games",category:"topSellingProducts"},{title:"New Releases",category:"newProducts"},{title:"Upcoming",category:"upcomingProducts"}],showActions:!0},on:{changeTab:function(e){t.category=e,t.clearFilters()}},slot:"title"},[n("template",{slot:"additional-action"},[n("span",{staticClass:"sort-title",attrs:{hidden:""}},[t._v("Sort by:")]),t._v(" "),t._l(t.sortOptions,function(e,r){return n("c-heading-bar-fields",{key:r,attrs:{name:e.title,icon:e.icon,activeUp:t.sortBy.property===e.property?t.sortBy.asc:null},on:{clickUp:function(n){t.setSort(e.property,!0)},clickDown:function(n){t.setSort(e.property,!1)}}})})],2)],2),t._v(" "),n("div",{staticClass:"product-grid__filters align-items-center"},[n("div",{staticClass:"d-flex align-items-center"},[n("c-dropdown",{staticClass:"product-genre",attrs:{id:"product-genres",name:"Filter by Genre",showBg:!0}},[n("div",{staticClass:"product-genre__content"},t._l(t.availableGenres,function(e){return n("a",{key:e,class:{"product-genre__btn--active":t.selectedGenres.includes(e)},attrs:{href:"#"+e},on:{click:function(n){n.preventDefault(),t.setGenre(e)}}},[t._v(t._s(e))])}))]),t._v(" "),n("c-input-searcher",{model:{value:t.phrase,callback:function(e){t.phrase=e},expression:"phrase"}})],1),t._v(" "),n("c-button",{attrs:{status:"lightpurple",iconHide:""}},[t._v("All New Releases")])],1),t._v(" "),n("transition",{attrs:{name:"slide-in"}},[t.filtersActive?n("div",{staticClass:"active-filters"},[n("div",{staticClass:"active-filters__content"},[t.phrase.length?n("c-option-tag",{attrs:{title:"NAME:",text:t.phrase},on:{delete:function(e){t.phrase=""}}}):t._e(),t._v(" "),t.selectedGenres.length?n("c-option-tag",{attrs:{title:"GENRES:",isParent:""},on:{delete:function(e){t.selectedGenres=[]}}},t._l(t.selectedGenres,function(e,r){return n("c-option-tag",{key:r,attrs:{text:e,isChildren:""},on:{delete:function(e){t.selectedGenres.splice(r,1)}}})})):t._e(),t._v(" "),t.sortBy.property?n("c-option-tag",{attrs:{title:"SORT BY:"},on:{delete:function(e){t.sortBy.property=null}}},[n("c-option-tag",{attrs:{title:"Property:",isChildren:"",isParent:!1},on:{delete:function(e){t.sortBy.property=null}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy.property,expression:"sortBy.property"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.sortBy,"property",e.target.multiple?n:n[0])}}},t._l(t.sortOptions,function(e){return n("option",{key:e.property,domProps:{value:e.property}},[t._v("\n                                    "+t._s(e.title)+"\n                                ")])}))]),t._v(" "),n("c-option-tag",{attrs:{title:"Direction:",isChildren:"",isParent:!1,hideButton:""},on:{delete:function(e){t.sortBy.asc=!t.sortBy.asc}}},[t._v("\n                            "+t._s(t.sortBy.asc?"Ascending":"Descending")+"\n                            "),n("c-icon",{staticClass:"sort-button",class:{desc:!t.sortBy.asc},attrs:{name:"arrow-up"},on:{click:function(e){t.sortBy.asc=!t.sortBy.asc}}})],1)],1):t._e()],1)]):t._e()]),t._v(" "),t.filteredProducts.length?n("c-content-navigation",{attrs:{items:t.filteredProducts},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.items;return n("c-game-grid",{attrs:{itemInRow:2,showRating:!1,items:e,showTime:"",itemBg:"transparent",pricePosition:"right"}})}}])}):t.filtersActive?n("div",[n("p",[t._v("No products were found using these filters. Want to "),n("c-button",{attrs:{status:"plain",doubled:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?")],1),t._v(" "),n("c-button",{attrs:{status:"info",size:"md",iconHide:""},on:{click:function(e){t.clearFilters()}}},[t._v("Clear filters")])],1):n("p",[t._v("\n            Nothing could be found. Want to "),n("c-button",{attrs:{status:"plain"},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?\n        ")],1)],1)],1)},[],!1,null,"40a71fb7",null);e.default=c.exports},155:function(t,e){},798:function(t,e,n){"use strict";var r=n(155);n.n(r).a}}]);