(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1386:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),o={name:"timeline-list",props:["items","project_id"],data:function(){return{show:!1,offset:3,display:5,trigger:150,list:[],end:!1}},components:{"c-timeline-item":function(t){return n.e(277).then(function(){var e=[n(1564)];t.apply(null,e)}.bind(this)).catch(n.oe)}},methods:{scroll:function(){var t=this;window.onscroll=function(e){window.innerHeight+window.scrollY>=document.body.offsetHeight-t.trigger&&(t.display<t.list.length?t.display=t.display+t.offset:t.end=!0)},console.log("done scroll")}},created:function(){if(!this.items)return!1;var t=this.items;t.sort(function(t,e){return new Date(t.date)-new Date(e.date)}).forEach(function(e,n){var i=s()(e.date).format("MMMM YYYY"),o=!!t[n-1]&&s()(t[n-1].date).format("MMMM YYYY");o&&i==o||(e.period=s()(i).format("MMMM, YYYY"))}),this.list=t.reverse(),this.show=!0,console.log("done create")},computed:{sliced:function(){return this.list.slice(0,this.display)}},mounted:function(){console.log("done mounted"),this.scroll()}},r=(n(942),n(0)),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts-timeline"},[t._l(t.sliced,function(e,i){return t.items?[n("c-timeline-item",{key:i,attrs:{item:e,index:i,projectID:t.project_id}}),t._v(" "),e.period?n("div",{staticClass:"post-timeline__period-info"},[t._v("\n        "+t._s(e.period)+"\n        ")]):t._e()]:t._e()}),t._v(" "),n("transition",{attrs:{name:"fade-slow"}},[t.end?n("div",{staticClass:"posts-timeline__end"},[n("h3",[t._v("End of updates")])]):t._e(),t._v(" "),t.items?t._e():n("div",{staticClass:"posts-timeline__end no-updates"},[n("h3",[t._v("\n                There is no updates yet.\n            ")])])])],2)},[],!1,null,null,null);e.default=l.exports},258:function(t,e){},942:function(t,e,n){"use strict";var i=n(258);n.n(i).a}}]);