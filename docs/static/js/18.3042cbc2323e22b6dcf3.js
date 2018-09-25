(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 83).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-article-item': function cArticleItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 145).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/help/article-item */ "./src/ui/components/help/article-item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-topic-item': function cTopicItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 146).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/help/topic-item */ "./src/ui/components/help/topic-item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-list-item': function cListItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 147).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/help/simple-item */ "./src/ui/components/help/simple-item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-card': function cCard(resolve) {
            return __webpack_require__.e(/*! AMD require */ 148).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/help/help-card.vue */ "./src/ui/components/help/help-card.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {};
    },
    methods: {
        showByTopic: function showByTopic(data, id) {
            var results = [],
                key = 'topic';

            for (var i = 0; i < data.length; i++) {
                if (data[i][key].includes(id)) {
                    results.push(data[i]);
                }
            }
            return results;
        }
    },
    computed: {
        topics: function topics() {
            return this.$store.state.marketplace.help.topics;
        },
        articles: function articles() {
            return this.$store.state.marketplace.help.articles;
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=template&id=335d9a58&scoped=true":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=template&id=335d9a58&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"help-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-12 text-center"},[_c('h2',{staticClass:"m-0 p-o"},[_vm._v("Welcome to BlockHub Support")])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-9 text-center"},[_c('div',{staticClass:"input-group input-group-lg my-5"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Search query","aria-label":"Search query","aria-describedby":"button-addon"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('c-button',{staticClass:"px-4",staticStyle:{"border-radius":"0 5px 5px 0"},attrs:{"status":"info","icon_hide":""}},[_vm._v("Search")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[(_vm.articles)?_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Trending articles"}},[_c('div',{staticClass:"article-list"},_vm._l((_vm.showByTopic(_vm.articles, 0)),function(article,index){return _c('c-article-item',{key:index,class:{'mb-0': _vm.articles.length === index+1 },attrs:{"link":("/#/help/" + (0) + "/article/" + (article.slug))}},[_vm._v("\n                                "+_vm._s(article.title)+"\n                            ")])}))]):_vm._e(),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Topics"}},[_c('div',{staticClass:"topics-list"},_vm._l((_vm.topics),function(topic,index){return _c('c-topic-item',{key:index,staticClass:"padding-10",attrs:{"link":("/#/help/" + (topic.id)),"icon":topic.icon}},[_vm._v("\n                                "+_vm._s(topic.label)+"\n                            ")])}))])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 margin-bottom-30"},[_c('c-block',{attrs:{"title":"Changelog"}},[_c('div',{staticClass:"simple-list"},_vm._l((_vm.showByTopic(_vm.articles, 5)),function(article,index){return _c('c-list-item',{key:index,class:{'mb-0': _vm.articles.length === index+1 },attrs:{"link":("/#/help/" + (5) + "/article/" + (article.slug))}},[_vm._v("\n                                "+_vm._s(article.title)+"\n                                ")])}))])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 margin-bottom-30"},[_c('c-block',{attrs:{"title":"Common issues"}},[_c('div',{staticClass:"simple-list"},_vm._l((_vm.showByTopic(_vm.articles, 7)),function(article,index){return _c('c-list-item',{key:index,class:{'mb-0': _vm.articles.length === index+1 },attrs:{"link":("/#/help/" + (7) + "/article/" + (article.slug))}},[_vm._v("\n                                "+_vm._s(article.title)+"\n                            ")])}))])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6"},[_c('c-card',{staticClass:"text-center"},[_c('h4',{staticClass:"h2"},[_vm._v("Community")]),_vm._v(" "),_c('p',[_vm._v("Engage with a community of passionate experts to get the answers you need")]),_vm._v(" "),_c('c-button',{staticClass:"width-auto margin-top-10",attrs:{"icon_hide":"","href":"https://github.com/hyperbridge","target":"_blank"}},[_vm._v("Visit GitHub")])],1)],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6"},[_c('c-card',{staticClass:"text-center"},[_c('h4',{staticClass:"h2"},[_vm._v("BlockHub Support")]),_vm._v(" "),_c('p',[_vm._v("Create a support ticket and our support experts will get back to you")]),_vm._v(" "),_c('c-button',{staticClass:"width-auto margin-top-10",attrs:{"status":"info","icon_hide":""}},[_vm._v("Create a ticket")])],1)],1)])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/help/index.vue":
/*!***************************************!*\
  !*** ./src/ui/screens/help/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_335d9a58_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=335d9a58&scoped=true */ "./src/ui/screens/help/index.vue?vue&type=template&id=335d9a58&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/help/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true */ "./src/ui/screens/help/index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_335d9a58_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_335d9a58_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "335d9a58",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/help/index.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/ui/screens/help/index.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/help/index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/ui/screens/help/index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=style&index=0&id=335d9a58&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_335d9a58_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/help/index.vue?vue&type=template&id=335d9a58&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/ui/screens/help/index.vue?vue&type=template&id=335d9a58&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_335d9a58_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=335d9a58&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/help/index.vue?vue&type=template&id=335d9a58&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_335d9a58_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_335d9a58_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=18.3042cbc2323e22b6dcf3.js.map