(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{104:function(t,e){},530:function(t,e,s){"use strict";var n=s(104);s.n(n).a},846:function(t,e,s){"use strict";s.r(e);var n={computed:{list:function(){var t=[];return t.push({type:"trending_projects_row",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.trending_projects||[]}}),t.push({type:"trending_projects_row",data:{title:"Top Game Ideas",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.top_game_ideas||[]}}),t.push({type:"trending_projects_row",data:{title:"Top Content Suggestions",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.top_content_suggestions||[]}}),t.push({type:"trending_projects_row",data:{title:"Top Item Suggestions",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.top_item_suggestions||[]}}),t.push({type:"trending_projects_row",data:{title:"Most Popular Games",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.most_popular_games||[]}}),t}}},i=(s(530),s(0)),o=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("c-layout",{attrs:{navigationKey:"funding"}},[e("div",{staticClass:"content",attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[e("c-infinite-content",{attrs:{list:this.list}})],1)])])},[],!1,null,"61b88281",null);e.default=o.exports}}]);