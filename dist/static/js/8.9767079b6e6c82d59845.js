(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{484:function(t,e,s){"use strict";var n=s(63);s.n(n).a},63:function(t,e){},910:function(t,e,s){"use strict";s.r(e);var n={props:["assets"],components:{"c-block":function(t){return Promise.resolve().then(function(){var e=[s(870)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-asset-comparison":function(t){return s.e(181).then(function(){var e=[s(813)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-modal":function(t){return s.e(141).then(function(){var e=[s(832)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-modal-light":function(t){return s.e(180).then(function(){var e=[s(772)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-asset-grid":function(t){return s.e(155).then(function(){var e=[s(818)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{addMore:!1}},methods:{negateValue:function(t){var e=t.id,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"selected";this.$store.commit("assets/negateValue",{id:e,iprop:s})}},computed:{selectedAssets:function(){return this.$store.getters["assets/selectedAssets"]}}},a=(s(484),s(0)),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Compare assets")]),t._v(" "),s("c-asset-comparison",{attrs:{assets:t.selectedAssets},on:{addMore:function(e){t.addMore=!0},delete:t.negateValue}}),t._v(" "),t.addMore?s("c-modal",{attrs:{title:"Select assets to compare"},on:{close:function(e){t.addMore=!1}}},[s("c-asset-grid",{attrs:{slot:"modal_body",assets:t.assets},on:{click:t.negateValue},slot:"modal_body"})],1):t._e(),t._v(" "),t.addMore?t._e():s("c-modal-light",{attrs:{title:"Select assets to compare"},on:{close:function(e){t.addMore=!t.addMore}}},[s("c-asset-grid",{attrs:{assets:t.assets},on:{click:t.negateValue}})],1)],1)},[],!1,null,null,null);e.default=o.exports}}]);