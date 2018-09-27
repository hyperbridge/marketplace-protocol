(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_bar_logo_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loading-bar/logo-loader */ "./src/ui/components/loading-bar/logo-loader.vue");
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
    props: ['isLoader'],
    components: {
        'c-loading-logo': _loading_bar_logo_loader__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    data: function data() {
        return {
            show_menu: false,
            is_desktop: window && window.process && window.process.type
        };
    },

    computed: {
        developer_enabled: function developer_enabled() {
            return this.$store.state.marketplace.developer_enabled;
        },
        is_editing: function is_editing() {
            return this.$store.state.marketplace.editor_mode === 'editing';
        },
        signed_in: function signed_in() {
            return this.$store.state.network.signed_in;
        },
        is_loading: function is_loading() {
            return this.$store.state.network.loading;
        }
    },
    methods: {
        clickEdit: function clickEdit() {
            this.$store.dispatch('marketplace/setEditorMode', 'editing');
        },
        clickRemove: function clickRemove() {},
        clickPublish: function clickPublish() {
            this.$store.dispatch('marketplace/setEditorMode', 'publishing');
        },
        clickExit: function clickExit() {
            this.$store.dispatch('marketplace/setEditorMode', 'viewing');
        },
        signOut: function signOut() {
            this.$store.dispatch('network/signOut');

            this.is_loading = true;
        },
        toggleMenu: function toggleMenu() {
            this.show_menu = !this.show_menu;
        },
        closeWindow: function closeWindow() {
            var BrowserWindow = window.require('electron').remote.BrowserWindow;

            var browserWindow = BrowserWindow.getFocusedWindow();
            browserWindow.close();
        },
        maximizeWindow: function maximizeWindow() {
            var BrowserWindow = window.require('electron').remote.BrowserWindow;

            var browserWindow = BrowserWindow.getFocusedWindow();
            if (browserWindow.isMaximized()) {
                browserWindow.unmaximize();
            } else {
                browserWindow.maximize();
            }
        },
        minimizeWindow: function minimizeWindow() {
            var BrowserWindow = window.require('electron').remote.BrowserWindow;

            var browserWindow = BrowserWindow.getFocusedWindow();
            browserWindow.minimize();
        }
    },
    created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
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
    name: 'c-loading-logo',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--7-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=style&index=0&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--7-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=template&id=22c1acd6&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=template&id=22c1acd6&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"app-header"},[_c('div',{staticClass:"app-header__top-bar desktop-draggable"},[(_vm.is_desktop)?_c('div',{staticClass:"app-header__buttons"},[_c('div',{staticClass:"app-header__close-button"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.closeWindow($event)}}},[_c('span',[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"app-header__minimize-button"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.minimizeWindow($event)}}},[_c('span',[_vm._v("–")])])]),_vm._v(" "),_c('div',{staticClass:"app-header__maximize-button"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.maximizeWindow($event)}}},[_c('span',[_vm._v("+")])])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"position-relative w-100",staticStyle:{"margin-top":"-10px"}},[_c('div',{staticClass:"app-header__bar-left"},[_vm._m(0),_vm._v(" "),_c('a',{on:{"click":function($event){_vm.$router.go(-1)}}},[_c('span',{staticClass:"fa fa-arrow-left"})]),_vm._v(" "),_c('a',{on:{"click":function($event){_vm.$router.go(+1)}}},[_c('span',{staticClass:"fa fa-arrow-right"})])]),_vm._v(" "),_c('div',{staticClass:"app-header__shadow"}),_vm._v(" "),_c('a',{staticClass:"app-header__bar-center",attrs:{"href":"/#/"}},[_c('c-loading-logo',{attrs:{"isLoading":_vm.isLoader}})],1),_vm._v(" "),_vm._m(1),_vm._v(" "),(_vm.signed_in && _vm.developer_enabled)?_c('div',{staticClass:"app-header__options"},[(_vm.is_editing)?_c('button',{staticClass:"remove-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{"click":function($event){_vm.clickRemove()}}},[_c('img',{attrs:{"src":"data:image/png;base64,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"}}),_vm._v(" "),_vm._m(2)]):_vm._e(),_vm._v(" "),(_vm.is_editing)?_c('button',{staticClass:"publish-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{"click":function($event){_vm.clickPublish()}}},[_c('img',{attrs:{"src":"data:image/png;base64,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"}}),_vm._v(" "),_vm._m(3)]):_vm._e(),_vm._v(" "),(_vm.is_editing)?_c('button',{staticClass:"exit-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{"click":function($event){_vm.clickExit()}}},[_vm._m(4)]):_vm._e()]):_vm._e(),_vm._v(" "),(!_vm.signed_in || (_vm.signed_in && _vm.developer_enabled && !_vm.is_editing))?_c('nav',{staticClass:"app-header__nav"},[_c('nav',{staticClass:"horizontal-navigation app-header__nav-left"},[_vm._m(5),_vm._v(" "),_c('ul',[(!_vm.signed_in)?_c('li',{staticClass:"app-header__create-account-btn"},[_vm._m(6)]):_vm._e(),_vm._v(" "),(!_vm.is_desktop)?_c('li',{staticClass:"app-header__download-btn"},[_vm._m(7)]):_vm._e(),_vm._v(" "),_vm._m(8),_vm._v(" "),(_vm.signed_in)?_c('li',[_vm._m(9)]):_vm._e(),_vm._v(" "),(_vm.signed_in)?_c('li',[_vm._m(10)]):_vm._e()])]),_vm._v(" "),_c('nav',{staticClass:"horizontal-navigation app-header__nav-right"},[_vm._m(11),_vm._v(" "),_c('ul',[(_vm.signed_in && _vm.developer_enabled && !_vm.is_editing)?_c('li',[_c('button',{staticClass:"edit-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{"click":function($event){_vm.clickEdit()}}},[_c('img',{attrs:{"src":"data:image/png;base64,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"}}),_vm._v(" "),_vm._m(12)])]):_vm._e(),_vm._v(" "),(_vm.signed_in)?_c('li',[_vm._m(13)]):_vm._e(),_vm._v(" "),(_vm.signed_in)?_c('li',[_vm._m(14)]):_vm._e(),_vm._v(" "),(!_vm.signed_in)?_c('li',[_vm._m(15)]):_vm._e(),_vm._v(" "),_vm._m(16)])])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/store"}},[_c('span',{staticClass:"fa fa-home"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-header__bar-right"},[_c('a',{attrs:{"href":"javascript:;","data-action":"fixedpanel-toggle"}},[_c('span',{staticClass:"fa fa-cog"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"fa fa-trash"}),_vm._v(" Remove")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"fa fa-check"}),_vm._v(" Publish")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"fa fa-eye"}),_vm._v(" Preview")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-light btn--icon",attrs:{"data-action":"horizontal-show"}},[_c('span',{staticClass:"fa fa-bars"}),_vm._v(" Toggle navigation")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/account/signup"}},[_c('span',{staticClass:"text"},[_vm._v("CREATE ACCOUNT")]),_vm._v(" "),_c('span',{staticClass:"fa fa-user-plus"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/download"}},[_c('span',{staticClass:"text"},[_vm._v("DOWNLOAD")]),_vm._v(" "),_c('span',{staticClass:"fa fa-download"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":"/#/store"}},[_c('span',{staticClass:"icon fa fa-shopping-cart"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Store")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/account/wallets"}},[_c('span',{staticClass:"icon fa fa-credit-card"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Wallets")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/account/identities"}},[_c('span',{staticClass:"icon fa fa-id-card"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Identities")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-light btn--icon",attrs:{"data-action":"horizontal-show"}},[_c('span',{staticClass:"fa fa-bars"}),_vm._v(" Toggle navigation")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('span',{staticClass:"fa fa-edit"}),_vm._v("Edit")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/identity/1"}},[_c('span',{staticClass:"icon fa fa-user"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Satoshi")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/identity/1/contacts"}},[_c('span',{staticClass:"icon fa fa-users"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Contacts")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"/#/account/signin"}},[_c('span',{staticClass:"icon fa fa-sign-out-alt"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Sign In")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":"/#/help"}},[_c('span',{staticClass:"icon fa fa-question-circle"}),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v("Help")])])])}]



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo-loader"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 130.01 38.75"}},[_c('defs',[_c('clipPath',{attrs:{"id":"a"}},[_c('path',{staticStyle:{"fill":"none"},attrs:{"d":"M32,12.92h0L19.79.71a.84.84,0,0,0-1.16,0l-18,18a.82.82,0,0,0,0,1.16l18,18a.84.84,0,0,0,1.16,0L32,25.71h0l5.81-5.81a.84.84,0,0,0,0-1.16Z"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"b"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"32 12.92 25.6 19.32 19.21 12.93 19.21 0.14 32 12.92"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"c"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"0.03 19.31 6.42 25.71 6.42 12.92 0.03 19.31"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"d"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"19.21 25.71 19.21 38.5 6.42 25.71 6.42 12.93 12.81 19.32 19.21 25.71"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"e"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"31.99 12.92 31.99 25.71 38.39 19.31 31.99 12.92"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"f"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"32 12.92 32 25.71 19.21 38.5 19.21 25.71 32 12.92"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"g"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"19.21 0.14 19.21 12.93 12.81 19.32 6.42 12.93 6.42 12.92 19.21 0.14"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"h"}},[_c('path',{staticStyle:{"fill":"none"},attrs:{"d":"M61.54,22.38c0,2.47-.6,4-3.55,4H52.47a2,2,0,0,1-2.21-2.22v-10a2,2,0,0,1,2.21-2.24h5.31c2.51,0,3.47,1.26,3.47,4,0,1.52-.41,2.77-2,3V19C61.13,19.29,61.54,20.52,61.54,22.38ZM53.8,17.7h2.31c1,0,1.41-.39,1.41-1.54s-.38-1.5-1.43-1.5H54.72c-.73,0-.93.21-.93.93Zm0,4.9c0,.83.21,1,1,1h1.3c1.13,0,1.67-.46,1.67-1.6s-.54-1.64-1.58-1.64H53.8Zm9.45-10.71h3.24V26.42H63.25Zm15.3,9c0,4.48-1.27,5.63-5.32,5.63s-5.31-1.16-5.31-5.63,1.26-5.63,5.31-5.63S78.55,16.45,78.55,20.92Zm-5.32,3.24c1.77,0,2-1.06,2-3.24s-.22-3.24-2-3.24-2,1.06-2,3.24S71.47,24.16,73.23,24.16ZM85.54,17.8c-2.11,0-2.55,1.25-2.55,3.12S83.43,24,85.54,24H88v2.39H84.3c-3.73,0-4.63-2.18-4.63-5.5s.89-5.49,4.63-5.49h3.4v2.39Zm3.66,8.62V11.89h3.24V26.42Zm6.58,0L93.6,22.54a3.5,3.5,0,0,1,0-3.57l1.79-3.55h3.55l-2.41,4.31a1.91,1.91,0,0,0-.23.9,2.46,2.46,0,0,0,.35,1.08l2.85,4.71Zm14.28,0h-1.12V19.53h-7.16v6.89h-1.12V11.89h1.12v6.63h7.15V11.89h1.12ZM120,24.69c0,1.06-.33,1.75-1.49,1.75h-2.68c-2.29,0-3.18-1.23-3.18-3.39V15.43h1.08V23c0,1.32.44,2.4,2.1,2.4h2.43c.41,0,.66-.08.66-.77V15.43H120Zm4.46,1.75c-1.34,0-2.21-.17-2.21-1.73V11.89h1.07v3.54h2.43c3.51,0,4.28,1.9,4.28,5.43s-.77,5.56-4.3,5.56Zm-1.15-1.83c0,.54,0,.85.77.85h1.66c2.91,0,3.17-1.89,3.17-4.59s-.26-4.46-3.17-4.46h-2.43Z"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"i"}},[_c('path',{staticStyle:{"fill":"none"},attrs:{"d":"M32,13h0L19.91.9a.83.83,0,0,0-1.16,0h0L.84,18.8A.81.81,0,0,0,.84,20h0L18.75,37.86a.81.81,0,0,0,1.15,0h0L32,25.73h0l5.79-5.79a.81.81,0,0,0,0-1.15h0Z"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"j"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"32.03 13.02 25.68 19.38 19.33 13.03 19.33 0.32 32.03 13.02"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"k"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"0.27 19.38 6.62 25.73 6.62 13.03 0.27 19.38"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"l"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"19.33 25.73 19.33 38.44 6.62 25.73 6.62 13.03 12.97 19.38 19.33 25.73"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"m"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"32.03 13.02 32.03 25.73 38.38 19.38 32.03 13.02"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"n"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"32.03 13.02 32.03 25.73 19.33 38.44 19.33 25.73 32.03 13.02"}})]),_vm._v(" "),_c('clipPath',{attrs:{"id":"o"}},[_c('polygon',{staticStyle:{"fill":"none"},attrs:{"points":"19.33 0.32 19.33 13.03 12.97 19.38 6.62 13.03 6.62 13.02 19.33 0.32"}})])]),_vm._v(" "),_c('title',[_vm._v("logo")]),_vm._v(" "),_c('g',{staticClass:"logo-cube",class:{'fadeIn': _vm.isLoading},staticStyle:{"clip-path":"url(#a)"}},[_c('polygon',{staticStyle:{"fill":"#25a9e0"},attrs:{"points":"31.99 12.92 19.21 0.13 31.99 12.92 31.99 12.92"}}),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#b)"}},[_c('polygon',{staticStyle:{"fill":"#fa5fcd"},attrs:{"points":"19.21 16.99 25.6 19.32 19.21 19.32 19.21 16.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5fcd"},attrs:{"points":"19.21 16.63 26.58 19.32 25.6 19.32 19.21 16.99 19.21 16.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecc"},attrs:{"points":"19.21 16.27 27.57 19.32 26.58 19.32 19.21 16.63 19.21 16.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecb"},attrs:{"points":"19.21 15.91 28.55 19.32 27.57 19.32 19.21 16.27 19.21 15.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5dca"},attrs:{"points":"19.21 15.55 29.54 19.32 28.55 19.32 19.21 15.91 19.21 15.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc9"},attrs:{"points":"19.21 15.2 30.49 19.31 30.49 19.32 29.54 19.32 19.21 15.55 19.21 15.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc8"},attrs:{"points":"19.21 14.84 30.61 18.99 30.49 19.31 19.21 15.2 19.21 14.84"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5bc7"},attrs:{"points":"19.21 14.48 30.72 18.67 30.61 18.99 19.21 14.84 19.21 14.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ac6"},attrs:{"points":"19.21 14.12 30.84 18.36 30.72 18.67 19.21 14.48 19.21 14.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c5"},attrs:{"points":"19.21 13.76 30.95 18.04 30.84 18.36 19.21 14.12 19.21 13.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c4"},attrs:{"points":"19.21 13.4 31.07 17.72 30.95 18.04 19.21 13.76 19.21 13.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f958c3"},attrs:{"points":"19.21 13.04 31.18 17.41 31.07 17.72 19.21 13.4 19.21 13.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c2"},attrs:{"points":"19.21 12.69 31.3 17.09 31.18 17.41 19.21 13.04 19.21 12.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c1"},attrs:{"points":"19.21 12.33 31.41 16.77 31.3 17.09 19.21 12.69 19.21 12.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f956c0"},attrs:{"points":"19.21 11.97 31.53 16.46 31.41 16.77 19.21 12.33 19.21 11.97"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955bf"},attrs:{"points":"19.21 11.61 31.64 16.14 31.53 16.46 19.21 11.97 19.21 11.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955be"},attrs:{"points":"19.21 11.25 31.76 15.82 31.64 16.14 19.21 11.61 19.21 11.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f954bd"},attrs:{"points":"19.21 10.89 31.88 15.51 31.76 15.82 19.21 11.25 19.21 10.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f953bc"},attrs:{"points":"19.21 10.54 31.99 15.19 31.88 15.51 19.21 10.89 19.21 10.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952bb"},attrs:{"points":"19.21 10.18 32 14.83 32 15.18 31.99 15.19 19.21 10.54 19.21 10.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952ba"},attrs:{"points":"19.21 9.82 32 14.47 32 14.83 19.21 10.18 19.21 9.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f951b9"},attrs:{"points":"19.21 9.46 32 14.12 32 14.47 19.21 9.82 19.21 9.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b8"},attrs:{"points":"19.21 9.1 32 13.76 32 14.12 19.21 9.46 19.21 9.1"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b7"},attrs:{"points":"19.21 8.74 32 13.4 32 13.76 19.21 9.1 19.21 8.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f94fb6"},attrs:{"points":"19.21 8.38 32 13.04 32 13.4 19.21 8.74 19.21 8.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84eb4"},attrs:{"points":"19.21 8.03 32 12.68 32 13.04 19.21 8.38 19.21 8.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84eb3"},attrs:{"points":"19.21 7.67 32 12.32 32 12.68 19.21 8.03 19.21 7.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84db2"},attrs:{"points":"19.21 7.31 32 11.96 32 12.32 19.21 7.67 19.21 7.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84cb1"},attrs:{"points":"19.21 6.95 32 11.61 32 11.96 19.21 7.31 19.21 6.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84cb0"},attrs:{"points":"19.21 6.59 32 11.25 32 11.61 19.21 6.95 19.21 6.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84baf"},attrs:{"points":"19.21 6.23 32 10.89 32 11.25 19.21 6.59 19.21 6.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84aae"},attrs:{"points":"19.21 5.87 32 10.53 32 10.89 19.21 6.23 19.21 5.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f849ad"},attrs:{"points":"19.21 5.51 32 10.17 32 10.53 19.21 5.87 19.21 5.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f849ac"},attrs:{"points":"19.21 5.16 32 9.81 32 10.17 19.21 5.51 19.21 5.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f848ab"},attrs:{"points":"19.21 4.8 32 9.46 32 9.81 19.21 5.16 19.21 4.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f847aa"},attrs:{"points":"19.21 4.44 32 9.1 32 9.46 19.21 4.8 19.21 4.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f847a9"},attrs:{"points":"19.21 4.08 32 8.74 32 9.1 19.21 4.44 19.21 4.08"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f846a8"},attrs:{"points":"19.21 3.72 32 8.38 32 8.74 19.21 4.08 19.21 3.72"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f845a7"},attrs:{"points":"19.21 3.36 32 8.02 32 8.38 19.21 3.72 19.21 3.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f845a6"},attrs:{"points":"19.21 3 32 7.66 32 8.02 19.21 3.36 19.21 3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f744a5"},attrs:{"points":"19.21 2.65 32 7.3 32 7.66 19.21 3 19.21 2.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f743a4"},attrs:{"points":"19.21 2.29 32 6.95 32 7.3 19.21 2.65 19.21 2.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a3"},attrs:{"points":"19.21 1.93 32 6.59 32 6.95 19.21 2.29 19.21 1.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a2"},attrs:{"points":"19.21 1.57 32 6.23 32 6.59 19.21 1.93 19.21 1.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f741a1"},attrs:{"points":"19.21 1.21 32 5.87 32 6.23 19.21 1.57 19.21 1.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f740a0"},attrs:{"points":"19.21 0.85 32 5.51 32 5.87 19.21 1.21 19.21 0.85"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f7409f"},attrs:{"points":"19.21 0.49 32 5.15 32 5.51 19.21 0.85 19.21 0.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"19.21 0.14 32 4.79 32 5.15 19.21 0.49 19.21 0.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"32 4.79 19.21 0.14 32 0.14 32 4.79"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#c)"}},[_c('polygon',{staticStyle:{"fill":"#71d7fb"},attrs:{"points":"0.03 25.26 6.42 25.71 0.03 25.71 0.03 25.26"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#71d7fb"},attrs:{"points":"0.03 25.07 6.42 25.52 6.42 25.71 0.03 25.26 0.03 25.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d6fb"},attrs:{"points":"0.03 24.88 6.42 25.33 6.42 25.52 0.03 25.07 0.03 24.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d5fb"},attrs:{"points":"0.03 24.69 6.42 25.14 6.42 25.33 0.03 24.88 0.03 24.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6fd4fb"},attrs:{"points":"0.03 24.51 6.42 24.95 6.42 25.14 0.03 24.69 0.03 24.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6ed3fb"},attrs:{"points":"0.03 24.32 6.42 24.77 6.42 24.95 0.03 24.51 0.03 24.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd2fb"},attrs:{"points":"0.03 24.13 6.42 24.58 6.42 24.77 0.03 24.32 0.03 24.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd1fb"},attrs:{"points":"0.03 23.94 6.42 24.39 6.42 24.58 0.03 24.13 0.03 23.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6cd0fb"},attrs:{"points":"0.03 23.75 6.42 24.2 6.42 24.39 0.03 23.94 0.03 23.75"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6bcffb"},attrs:{"points":"0.03 23.57 6.42 24.01 6.42 24.2 0.03 23.75 0.03 23.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acefa"},attrs:{"points":"0.03 23.38 6.42 23.83 6.42 24.01 0.03 23.57 0.03 23.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acdfa"},attrs:{"points":"0.03 23.19 6.42 23.64 6.42 23.83 0.03 23.38 0.03 23.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#69ccfa"},attrs:{"points":"0.03 23 6.42 23.45 6.42 23.64 0.03 23.19 0.03 23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#68cbfa"},attrs:{"points":"0.03 22.81 6.42 23.26 6.42 23.45 0.03 23 0.03 22.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67cafa"},attrs:{"points":"0.03 22.63 6.42 23.07 6.42 23.26 0.03 22.81 0.03 22.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67c9fa"},attrs:{"points":"0.03 22.44 6.42 22.89 6.42 23.07 0.03 22.63 0.03 22.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#66c8fa"},attrs:{"points":"0.03 22.25 6.42 22.7 6.42 22.89 0.03 22.44 0.03 22.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#65c7fa"},attrs:{"points":"0.03 22.06 6.42 22.51 6.42 22.7 0.03 22.25 0.03 22.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c6fa"},attrs:{"points":"0.03 21.87 6.42 22.32 6.42 22.51 0.03 22.06 0.03 21.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c5fa"},attrs:{"points":"0.03 21.69 6.42 22.13 6.42 22.32 0.03 21.87 0.03 21.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#63c4fa"},attrs:{"points":"0.03 21.5 6.42 21.95 6.42 22.13 0.03 21.69 0.03 21.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#62c3fa"},attrs:{"points":"0.03 21.31 6.42 21.76 6.42 21.95 0.03 21.5 0.03 21.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c2fa"},attrs:{"points":"0.03 21.12 6.42 21.57 6.42 21.76 0.03 21.31 0.03 21.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c1fa"},attrs:{"points":"0.03 20.93 6.42 21.38 6.42 21.57 0.03 21.12 0.03 20.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#60c0fa"},attrs:{"points":"0.03 20.75 6.42 21.19 6.42 21.38 0.03 20.93 0.03 20.75"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5fbffa"},attrs:{"points":"0.03 20.56 6.42 21 6.42 21.19 0.03 20.75 0.03 20.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebefa"},attrs:{"points":"0.03 20.37 6.42 20.82 6.42 21 0.03 20.56 0.03 20.37"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebdf9"},attrs:{"points":"0.03 20.18 6.42 20.63 6.42 20.82 0.03 20.37 0.03 20.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5dbcf9"},attrs:{"points":"0.03 19.99 6.42 20.44 6.42 20.63 0.03 20.18 0.03 19.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5cbbf9"},attrs:{"points":"0.03 19.81 6.42 20.25 6.42 20.44 0.03 19.99 0.03 19.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bbaf9"},attrs:{"points":"0.03 19.62 6.42 20.07 6.42 20.25 0.03 19.81 0.03 19.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bb9f9"},attrs:{"points":"0.03 19.43 6.42 19.88 6.42 20.07 0.03 19.62 0.03 19.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ab8f9"},attrs:{"points":"0.03 19.24 6.42 19.69 6.42 19.88 0.03 19.43 0.03 19.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#59b7f9"},attrs:{"points":"0.03 19.05 6.42 19.5 6.42 19.69 0.03 19.24 0.03 19.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b6f9"},attrs:{"points":"0.03 18.87 6.42 19.31 6.42 19.5 0.03 19.05 0.03 18.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b4f9"},attrs:{"points":"0.03 18.68 6.42 19.13 6.42 19.31 0.03 18.87 0.03 18.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#57b3f9"},attrs:{"points":"0.03 18.49 6.42 18.94 6.42 19.13 0.03 18.68 0.03 18.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#56b2f9"},attrs:{"points":"0.03 18.3 6.42 18.75 6.42 18.94 0.03 18.49 0.03 18.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b1f9"},attrs:{"points":"0.03 18.11 6.42 18.56 6.42 18.75 0.03 18.3 0.03 18.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b0f9"},attrs:{"points":"0.03 17.93 6.42 18.37 6.42 18.56 0.03 18.11 0.03 17.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#54aff9"},attrs:{"points":"0.03 17.74 6.42 18.18 6.42 18.37 0.03 17.93 0.03 17.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#53aef9"},attrs:{"points":"0.03 17.55 6.42 18 6.42 18.18 0.03 17.74 0.03 17.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52adf9"},attrs:{"points":"0.03 17.36 6.42 17.81 6.42 18 0.03 17.55 0.03 17.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52acf8"},attrs:{"points":"0.03 17.17 6.42 17.62 6.42 17.81 0.03 17.36 0.03 17.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#51abf8"},attrs:{"points":"0.03 16.98 6.42 17.43 6.42 17.62 0.03 17.17 0.03 16.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#50aaf8"},attrs:{"points":"0.03 16.8 6.42 17.25 6.42 17.43 0.03 16.98 0.03 16.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa9f8"},attrs:{"points":"0.03 16.61 6.42 17.06 6.42 17.25 0.03 16.8 0.03 16.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa8f8"},attrs:{"points":"0.03 16.42 6.42 16.87 6.42 17.06 0.03 16.61 0.03 16.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ea7f8"},attrs:{"points":"0.03 16.23 6.42 16.68 6.42 16.87 0.03 16.42 0.03 16.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4da6f8"},attrs:{"points":"0.03 16.05 6.42 16.49 6.42 16.68 0.03 16.23 0.03 16.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca5f8"},attrs:{"points":"0.03 15.86 6.42 16.3 6.42 16.49 0.03 16.05 0.03 15.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca4f8"},attrs:{"points":"0.03 15.67 6.42 16.12 6.42 16.3 0.03 15.86 0.03 15.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ba3f8"},attrs:{"points":"0.03 15.48 6.42 15.93 6.42 16.12 0.03 15.67 0.03 15.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4aa2f8"},attrs:{"points":"0.03 15.29 6.42 15.74 6.42 15.93 0.03 15.48 0.03 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a1f8"},attrs:{"points":"0.03 15.11 6.42 15.55 6.42 15.74 0.03 15.29 0.03 15.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a0f8"},attrs:{"points":"0.03 14.92 6.42 15.37 6.42 15.55 0.03 15.11 0.03 14.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#489ff8"},attrs:{"points":"0.03 14.73 6.42 15.18 6.42 15.37 0.03 14.92 0.03 14.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#479ef8"},attrs:{"points":"0.03 14.54 6.42 14.99 6.42 15.18 0.03 14.73 0.03 14.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469df8"},attrs:{"points":"0.03 14.35 6.42 14.8 6.42 14.99 0.03 14.54 0.03 14.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469cf8"},attrs:{"points":"0.03 14.16 6.42 14.61 6.42 14.8 0.03 14.35 0.03 14.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#459bf7"},attrs:{"points":"0.03 13.98 6.42 14.43 6.42 14.61 0.03 14.16 0.03 13.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#449af7"},attrs:{"points":"0.03 13.79 6.42 14.24 6.42 14.43 0.03 13.98 0.03 13.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4399f7"},attrs:{"points":"0.03 13.6 6.42 14.05 6.42 14.24 0.03 13.79 0.03 13.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4398f7"},attrs:{"points":"0.03 13.41 6.42 13.86 6.42 14.05 0.03 13.6 0.03 13.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4297f7"},attrs:{"points":"0.03 13.22 6.42 13.67 6.42 13.86 0.03 13.41 0.03 13.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4196f7"},attrs:{"points":"0.03 13.04 6.42 13.48 6.42 13.67 0.03 13.22 0.03 13.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4095f7"},attrs:{"points":"1.05 12.92 6.42 13.3 6.42 13.48 0.03 13.04 0.03 12.92 1.05 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4094f7"},attrs:{"points":"3.73 12.92 6.42 13.11 6.42 13.3 1.05 12.92 3.73 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f93f7"},attrs:{"points":"6.42 12.92 6.42 12.92 6.42 13.11 3.73 12.92 6.42 12.92"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#d)"}},[_c('polygon',{staticStyle:{"fill":"#6f40dd"},attrs:{"points":"6.64 12.93 6.42 13.34 6.42 12.93 6.64 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e40dc"},attrs:{"points":"6.85 12.93 6.42 13.74 6.42 13.34 6.64 12.93 6.85 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e3fdb"},attrs:{"points":"7.07 12.93 6.42 14.15 6.42 13.74 6.85 12.93 7.07 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6d3fda"},attrs:{"points":"7.29 12.93 6.42 14.56 6.42 14.15 7.07 12.93 7.29 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c3fd9"},attrs:{"points":"7.51 12.93 6.42 14.97 6.42 14.56 7.29 12.93 7.51 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c3ed8"},attrs:{"points":"7.73 12.93 6.42 15.38 6.42 14.97 7.51 12.93 7.73 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6b3ed7"},attrs:{"points":"7.95 12.93 6.42 15.8 6.42 15.38 7.73 12.93 7.95 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6a3dd6"},attrs:{"points":"8.06 12.93 8.14 12.97 6.42 16.21 6.42 15.8 7.95 12.93 8.06 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd5"},attrs:{"points":"8.14 12.97 8.31 13.06 6.42 16.62 6.42 16.21 8.14 12.97"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd4"},attrs:{"points":"8.31 13.06 8.48 13.15 6.42 17.03 6.42 16.62 8.31 13.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#683cd3"},attrs:{"points":"8.48 13.15 8.65 13.24 6.42 17.44 6.42 17.03 8.48 13.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd2"},attrs:{"points":"8.65 13.24 8.82 13.33 6.42 17.85 6.42 17.44 8.65 13.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd1"},attrs:{"points":"8.82 13.33 8.99 13.42 6.42 18.26 6.42 17.85 8.82 13.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#663bd0"},attrs:{"points":"8.99 13.42 9.16 13.51 6.42 18.67 6.42 18.26 8.99 13.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bcf"},attrs:{"points":"9.16 13.51 9.33 13.6 6.42 19.08 6.42 18.67 9.16 13.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bce"},attrs:{"points":"9.33 13.6 9.5 13.69 6.42 19.49 6.42 19.08 9.33 13.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643acd"},attrs:{"points":"9.5 13.69 9.67 13.78 6.42 19.9 6.42 19.49 9.5 13.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633acc"},attrs:{"points":"9.67 13.78 9.84 13.87 6.42 20.31 6.42 19.9 9.67 13.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239cb"},attrs:{"points":"9.84 13.87 10.01 13.96 6.42 20.72 6.42 20.31 9.84 13.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239ca"},attrs:{"points":"10.01 13.96 10.18 14.05 6.42 21.13 6.42 20.72 10.01 13.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6139c9"},attrs:{"points":"10.18 14.05 10.35 14.14 6.42 21.54 6.42 21.13 10.18 14.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c8"},attrs:{"points":"10.35 14.14 10.52 14.23 6.42 21.95 6.42 21.54 10.35 14.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c7"},attrs:{"points":"10.52 14.23 10.69 14.32 6.42 22.36 6.42 21.95 10.52 14.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5f38c6"},attrs:{"points":"10.69 14.32 10.86 14.41 6.42 22.77 6.42 22.36 10.69 14.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c5"},attrs:{"points":"10.86 14.41 11.03 14.5 6.42 23.18 6.42 22.77 10.86 14.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c4"},attrs:{"points":"11.03 14.5 11.2 14.59 6.42 23.59 6.42 23.18 11.03 14.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5d36c3"},attrs:{"points":"11.2 14.59 11.37 14.68 6.42 24 6.42 23.59 11.2 14.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5c36c2"},attrs:{"points":"11.37 14.68 11.54 14.77 6.42 24.41 6.42 24 11.37 14.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b36c1"},attrs:{"points":"11.54 14.77 11.71 14.87 6.42 24.82 6.42 24.41 11.54 14.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b35c0"},attrs:{"points":"11.71 14.87 11.88 14.96 6.42 25.23 6.42 24.82 11.71 14.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5a35bf"},attrs:{"points":"11.88 14.96 12.05 15.05 6.42 25.64 6.42 25.23 11.88 14.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5935be"},attrs:{"points":"12.05 15.05 12.22 15.14 6.42 26.05 6.42 25.64 12.05 15.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5934bd"},attrs:{"points":"12.22 15.14 12.39 15.23 6.42 26.46 6.42 26.05 12.22 15.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5834bc"},attrs:{"points":"12.39 15.23 12.56 15.32 6.42 26.87 6.42 26.46 12.39 15.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5734bb"},attrs:{"points":"12.56 15.32 12.73 15.41 6.42 27.28 6.42 26.87 12.56 15.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5733ba"},attrs:{"points":"12.73 15.41 12.9 15.5 6.42 27.69 6.42 27.28 12.73 15.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5633b9"},attrs:{"points":"12.9 15.5 13.07 15.59 6.42 28.1 6.42 27.69 12.9 15.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5532b8"},attrs:{"points":"13.07 15.59 13.24 15.68 6.42 28.51 6.42 28.1 13.07 15.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b7"},attrs:{"points":"13.24 15.68 13.41 15.77 6.42 28.92 6.42 28.51 13.24 15.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b6"},attrs:{"points":"13.41 15.77 13.58 15.86 6.42 29.33 6.42 28.92 13.41 15.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5331b5"},attrs:{"points":"13.58 15.86 13.75 15.95 6.42 29.74 6.42 29.33 13.58 15.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b4"},attrs:{"points":"13.75 15.95 13.92 16.04 6.42 30.15 6.42 29.74 13.75 15.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b3"},attrs:{"points":"13.92 16.04 14.09 16.13 6.42 30.56 6.42 30.15 13.92 16.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5130b2"},attrs:{"points":"14.09 16.13 14.26 16.22 6.42 30.97 6.42 30.56 14.09 16.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b1"},attrs:{"points":"14.26 16.22 14.43 16.31 6.42 31.38 6.42 30.97 14.26 16.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b0"},attrs:{"points":"14.43 16.31 14.6 16.4 6.42 31.79 6.42 31.38 14.43 16.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f2faf"},attrs:{"points":"14.6 16.4 14.77 16.49 6.42 32.2 6.42 31.79 14.6 16.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e2fae"},attrs:{"points":"14.77 16.49 14.94 16.58 6.43 32.58 6.42 32.57 6.42 32.2 14.77 16.49"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#4d2ead"},attrs:{"x":"1.71","y":"24.53","width":"18.12","height":"0.19","transform":"translate(-16.03 22.58) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#4d2eac"},attrs:{"x":"1.88","y":"24.62","width":"18.12","height":"0.19","transform":"translate(-16.02 22.78) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#4c2eab"},attrs:{"x":"2.05","y":"24.71","width":"18.12","height":"0.19","transform":"translate(-16.01 22.97) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#4b2daa"},attrs:{"x":"2.22","y":"24.8","width":"18.12","height":"0.19","transform":"translate(-16 23.17) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#4b2da9"},attrs:{"x":"2.39","y":"24.89","width":"18.12","height":"0.19","transform":"translate(-15.99 23.37) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#4a2da8"},attrs:{"x":"2.56","y":"24.98","width":"18.12","height":"0.19","transform":"translate(-15.98 23.57) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#492ca7"},attrs:{"x":"2.73","y":"25.07","width":"18.12","height":"0.19","transform":"translate(-15.97 23.77) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#492ca6"},attrs:{"x":"2.9","y":"25.16","width":"18.12","height":"0.19","transform":"translate(-15.96 23.96) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#482ba5"},attrs:{"x":"3.07","y":"25.25","width":"18.12","height":"0.19","transform":"translate(-15.95 24.16) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#472ba4"},attrs:{"x":"3.24","y":"25.34","width":"18.12","height":"0.19","transform":"translate(-15.94 24.36) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#462ba3"},attrs:{"x":"3.41","y":"25.43","width":"18.12","height":"0.19","transform":"translate(-15.93 24.56) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#462aa2"},attrs:{"x":"3.58","y":"25.52","width":"18.12","height":"0.19","transform":"translate(-15.91 24.76) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#452aa1"},attrs:{"x":"3.75","y":"25.62","width":"18.12","height":"0.19","transform":"translate(-15.9 24.95) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#442a9f"},attrs:{"x":"3.92","y":"25.71","width":"18.12","height":"0.19","transform":"translate(-15.89 25.15) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#44299e"},attrs:{"x":"4.09","y":"25.8","width":"18.12","height":"0.19","transform":"translate(-15.88 25.35) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#43299d"},attrs:{"x":"4.26","y":"25.89","width":"18.12","height":"0.19","transform":"translate(-15.87 25.55) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#42299c"},attrs:{"x":"4.43","y":"25.98","width":"18.12","height":"0.19","transform":"translate(-15.86 25.75) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#42289b"},attrs:{"x":"4.6","y":"26.07","width":"18.12","height":"0.19","transform":"translate(-15.85 25.94) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#41289a"},attrs:{"x":"4.77","y":"26.16","width":"18.12","height":"0.19","transform":"translate(-15.84 26.14) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#402799"},attrs:{"x":"4.94","y":"26.25","width":"18.12","height":"0.19","transform":"translate(-15.83 26.34) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#3f2798"},attrs:{"x":"5.11","y":"26.34","width":"18.12","height":"0.19","transform":"translate(-15.82 26.54) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#3f2797"},attrs:{"x":"5.28","y":"26.43","width":"18.12","height":"0.19","transform":"translate(-15.81 26.74) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#3e2696"},attrs:{"x":"5.45","y":"26.52","width":"18.12","height":"0.19","transform":"translate(-15.8 26.93) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#3d2695"},attrs:{"x":"5.62","y":"26.61","width":"18.12","height":"0.19","transform":"translate(-15.79 27.13) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#3d2694"},attrs:{"x":"5.79","y":"26.7","width":"18.12","height":"0.19","transform":"translate(-15.78 27.33) rotate(-62)"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2593"},attrs:{"points":"19.19 18.84 19.21 18.85 19.21 19.22 10.86 34.93 10.69 34.84 19.19 18.84"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2592"},attrs:{"points":"19.21 19.63 11.03 35.02 10.86 34.93 19.21 19.22 19.21 19.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2591"},attrs:{"points":"19.21 20.04 11.2 35.11 11.03 35.02 19.21 19.63 19.21 20.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3a2490"},attrs:{"points":"19.21 20.45 11.37 35.2 11.2 35.11 19.21 20.04 19.21 20.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#39248f"},attrs:{"points":"19.21 20.86 11.54 35.29 11.37 35.2 19.21 20.45 19.21 20.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238e"},attrs:{"points":"19.21 21.27 11.71 35.38 11.54 35.29 19.21 20.86 19.21 21.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238d"},attrs:{"points":"19.21 21.68 11.88 35.47 11.71 35.38 19.21 21.27 19.21 21.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#37238c"},attrs:{"points":"19.21 22.09 12.04 35.56 11.88 35.47 19.21 21.68 19.21 22.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228b"},attrs:{"points":"19.21 22.5 12.21 35.66 12.04 35.56 19.21 22.09 19.21 22.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228a"},attrs:{"points":"19.21 22.91 12.38 35.74 12.21 35.66 19.21 22.5 19.21 22.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#352289"},attrs:{"points":"19.21 23.32 12.55 35.84 12.38 35.74 19.21 22.91 19.21 23.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#342188"},attrs:{"points":"19.21 23.73 12.72 35.93 12.55 35.84 19.21 23.32 19.21 23.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#342187"},attrs:{"points":"19.21 24.14 12.89 36.02 12.72 35.93 19.21 23.73 19.21 24.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#332086"},attrs:{"points":"19.21 24.55 13.06 36.11 12.89 36.02 19.21 24.14 19.21 24.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#322085"},attrs:{"points":"19.21 24.96 13.23 36.2 13.06 36.11 19.21 24.55 19.21 24.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#312084"},attrs:{"points":"19.21 25.37 13.4 36.29 13.23 36.2 19.21 24.96 19.21 25.37"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#311f83"},attrs:{"points":"19.21 25.78 13.57 36.38 13.4 36.29 19.21 25.37 19.21 25.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#301f82"},attrs:{"points":"19.21 26.19 13.74 36.47 13.57 36.38 19.21 25.78 19.21 26.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1f81"},attrs:{"points":"19.21 26.61 13.91 36.56 13.74 36.47 19.21 26.19 19.21 26.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1e80"},attrs:{"points":"19.21 27.02 14.09 36.65 13.91 36.56 19.21 26.61 19.21 27.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2e1e7f"},attrs:{"points":"19.21 27.43 14.26 36.74 14.09 36.65 19.21 27.02 19.21 27.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1e7e"},attrs:{"points":"19.21 27.84 14.43 36.83 14.26 36.74 19.21 27.43 19.21 27.84"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1d7d"},attrs:{"points":"19.21 28.25 14.6 36.92 14.43 36.83 19.21 27.84 19.21 28.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2c1d7c"},attrs:{"points":"19.21 28.66 14.77 37.01 14.6 36.92 19.21 28.25 19.21 28.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2b1c7b"},attrs:{"points":"19.21 29.07 14.94 37.1 14.77 37.01 19.21 28.66 19.21 29.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c7a"},attrs:{"points":"19.21 29.48 15.11 37.19 14.94 37.1 19.21 29.07 19.21 29.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c79"},attrs:{"points":"19.21 29.89 15.28 37.28 15.11 37.19 19.21 29.48 19.21 29.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#291b78"},attrs:{"points":"19.21 30.3 15.45 37.37 15.28 37.28 19.21 29.89 19.21 30.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b77"},attrs:{"points":"19.21 30.71 15.62 37.46 15.45 37.37 19.21 30.3 19.21 30.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b76"},attrs:{"points":"19.21 31.12 15.79 37.55 15.62 37.46 19.21 30.71 19.21 31.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#271a75"},attrs:{"points":"19.21 31.53 15.96 37.64 15.79 37.55 19.21 31.12 19.21 31.53"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a74"},attrs:{"points":"19.21 31.94 16.13 37.73 15.96 37.64 19.21 31.53 19.21 31.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a73"},attrs:{"points":"19.21 32.35 16.3 37.82 16.13 37.73 19.21 31.94 19.21 32.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#251972"},attrs:{"points":"19.21 32.76 16.46 37.91 16.3 37.82 19.21 32.35 19.21 32.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#241971"},attrs:{"points":"19.21 33.17 16.64 38.01 16.46 37.91 19.21 32.76 19.21 33.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#231870"},attrs:{"points":"19.21 33.58 16.8 38.09 16.64 38.01 19.21 33.17 19.21 33.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#23186f"},attrs:{"points":"19.21 33.99 16.98 38.19 16.8 38.09 19.21 33.58 19.21 33.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#22186e"},attrs:{"points":"19.21 34.4 17.14 38.28 16.98 38.19 19.21 33.99 19.21 34.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176d"},attrs:{"points":"19.21 34.81 17.32 38.37 17.14 38.28 19.21 34.4 19.21 34.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176c"},attrs:{"points":"19.21 35.22 17.48 38.46 17.32 38.37 19.21 34.81 19.21 35.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#20176b"},attrs:{"points":"19.21 35.63 17.68 38.5 17.56 38.5 17.48 38.46 19.21 35.22 19.21 35.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f166a"},attrs:{"points":"19.21 36.04 17.9 38.5 17.68 38.5 19.21 35.63 19.21 36.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f1669"},attrs:{"points":"19.21 36.45 18.12 38.5 17.9 38.5 19.21 36.04 19.21 36.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1e1568"},attrs:{"points":"19.21 36.86 18.34 38.5 18.12 38.5 19.21 36.45 19.21 36.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1d1567"},attrs:{"points":"19.21 37.27 18.55 38.5 18.34 38.5 19.21 36.86 19.21 37.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1566"},attrs:{"points":"19.21 37.68 18.77 38.5 18.55 38.5 19.21 37.27 19.21 37.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1465"},attrs:{"points":"19.21 38.09 18.99 38.5 18.77 38.5 19.21 37.68 19.21 38.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"19.21 38.5 19.21 38.5 18.99 38.5 19.21 38.09 19.21 38.5"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#e)"}},[_c('polygon',{staticStyle:{"fill":"#71d7fb"},attrs:{"points":"31.99 25.52 34.69 25.71 31.99 25.71 31.99 25.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d6fb"},attrs:{"points":"31.99 25.33 37.39 25.71 34.69 25.71 31.99 25.52 31.99 25.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d5fb"},attrs:{"points":"31.99 25.15 38.39 25.59 38.39 25.71 37.39 25.71 31.99 25.33 31.99 25.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6fd4fb"},attrs:{"points":"31.99 24.96 38.39 25.4 38.39 25.59 31.99 25.15 31.99 24.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6ed3fb"},attrs:{"points":"31.99 24.77 38.39 25.21 38.39 25.4 31.99 24.96 31.99 24.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd2fb"},attrs:{"points":"31.99 24.58 38.39 25.03 38.39 25.21 31.99 24.77 31.99 24.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd1fb"},attrs:{"points":"31.99 24.39 38.39 24.84 38.39 25.03 31.99 24.58 31.99 24.39"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6cd0fb"},attrs:{"points":"31.99 24.2 38.39 24.65 38.39 24.84 31.99 24.39 31.99 24.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6bcffb"},attrs:{"points":"31.99 24.02 38.39 24.46 38.39 24.65 31.99 24.2 31.99 24.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acefa"},attrs:{"points":"31.99 23.83 38.39 24.27 38.39 24.46 31.99 24.02 31.99 23.83"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acdfa"},attrs:{"points":"31.99 23.64 38.39 24.09 38.39 24.27 31.99 23.83 31.99 23.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#69ccfa"},attrs:{"points":"31.99 23.45 38.39 23.9 38.39 24.09 31.99 23.64 31.99 23.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#68cbfa"},attrs:{"points":"31.99 23.27 38.39 23.71 38.39 23.9 31.99 23.45 31.99 23.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67cafa"},attrs:{"points":"31.99 23.08 38.39 23.52 38.39 23.71 31.99 23.27 31.99 23.08"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67c9fa"},attrs:{"points":"31.99 22.89 38.39 23.34 38.39 23.52 31.99 23.08 31.99 22.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#66c8fa"},attrs:{"points":"31.99 22.7 38.39 23.15 38.39 23.34 31.99 22.89 31.99 22.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#65c7fa"},attrs:{"points":"31.99 22.51 38.39 22.96 38.39 23.15 31.99 22.7 31.99 22.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c6fa"},attrs:{"points":"31.99 22.32 38.39 22.77 38.39 22.96 31.99 22.51 31.99 22.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c5fa"},attrs:{"points":"31.99 22.14 38.39 22.58 38.39 22.77 31.99 22.32 31.99 22.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#63c4fa"},attrs:{"points":"31.99 21.95 38.39 22.39 38.39 22.58 31.99 22.14 31.99 21.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#62c3fa"},attrs:{"points":"31.99 21.76 38.39 22.21 38.39 22.39 31.99 21.95 31.99 21.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c2fa"},attrs:{"points":"31.99 21.57 38.39 22.02 38.39 22.21 31.99 21.76 31.99 21.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c1fa"},attrs:{"points":"31.99 21.38 38.39 21.83 38.39 22.02 31.99 21.57 31.99 21.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#60c0fa"},attrs:{"points":"31.99 21.2 38.39 21.64 38.39 21.83 31.99 21.38 31.99 21.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5fbffa"},attrs:{"points":"31.99 21.01 38.39 21.45 38.39 21.64 31.99 21.2 31.99 21.01"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebefa"},attrs:{"points":"31.99 20.82 38.39 21.27 38.39 21.45 31.99 21.01 31.99 20.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebdf9"},attrs:{"points":"31.99 20.63 38.39 21.08 38.39 21.27 31.99 20.82 31.99 20.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5dbcf9"},attrs:{"points":"31.99 20.44 38.39 20.89 38.39 21.08 31.99 20.63 31.99 20.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5cbbf9"},attrs:{"points":"31.99 20.26 38.39 20.7 38.39 20.89 31.99 20.44 31.99 20.26"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bbaf9"},attrs:{"points":"31.99 20.07 38.39 20.51 38.39 20.7 31.99 20.26 31.99 20.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bb9f9"},attrs:{"points":"31.99 19.88 38.39 20.33 38.39 20.51 31.99 20.07 31.99 19.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ab8f9"},attrs:{"points":"31.99 19.69 38.39 20.14 38.39 20.33 31.99 19.88 31.99 19.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#59b7f9"},attrs:{"points":"31.99 19.5 38.39 19.95 38.39 20.14 31.99 19.69 31.99 19.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b6f9"},attrs:{"points":"31.99 19.32 38.39 19.76 38.39 19.95 31.99 19.5 31.99 19.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b4f9"},attrs:{"points":"31.99 19.13 38.39 19.57 38.39 19.76 31.99 19.32 31.99 19.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#57b3f9"},attrs:{"points":"31.99 18.94 38.39 19.39 38.39 19.57 31.99 19.13 31.99 18.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#56b2f9"},attrs:{"points":"31.99 18.75 38.39 19.2 38.39 19.39 31.99 18.94 31.99 18.75"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b1f9"},attrs:{"points":"31.99 18.56 38.39 19.01 38.39 19.2 31.99 18.75 31.99 18.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b0f9"},attrs:{"points":"31.99 18.38 38.39 18.82 38.39 19.01 31.99 18.56 31.99 18.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#54aff9"},attrs:{"points":"31.99 18.19 38.39 18.63 38.39 18.82 31.99 18.38 31.99 18.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#53aef9"},attrs:{"points":"31.99 18 38.39 18.45 38.39 18.63 31.99 18.19 31.99 18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52adf9"},attrs:{"points":"31.99 17.81 38.39 18.26 38.39 18.45 31.99 18 31.99 17.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52acf8"},attrs:{"points":"31.99 17.62 38.39 18.07 38.39 18.26 31.99 17.81 31.99 17.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#51abf8"},attrs:{"points":"31.99 17.43 38.39 17.88 38.39 18.07 31.99 17.62 31.99 17.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#50aaf8"},attrs:{"points":"31.99 17.25 38.39 17.69 38.39 17.88 31.99 17.43 31.99 17.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa9f8"},attrs:{"points":"31.99 17.06 38.39 17.5 38.39 17.69 31.99 17.25 31.99 17.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa8f8"},attrs:{"points":"31.99 16.87 38.39 17.32 38.39 17.5 31.99 17.06 31.99 16.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ea7f8"},attrs:{"points":"31.99 16.68 38.39 17.13 38.39 17.32 31.99 16.87 31.99 16.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4da6f8"},attrs:{"points":"31.99 16.49 38.39 16.94 38.39 17.13 31.99 16.68 31.99 16.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca5f8"},attrs:{"points":"31.99 16.31 38.39 16.75 38.39 16.94 31.99 16.49 31.99 16.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca4f8"},attrs:{"points":"31.99 16.12 38.39 16.56 38.39 16.75 31.99 16.31 31.99 16.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ba3f8"},attrs:{"points":"31.99 15.93 38.39 16.38 38.39 16.56 31.99 16.12 31.99 15.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4aa2f8"},attrs:{"points":"31.99 15.74 38.39 16.19 38.39 16.38 31.99 15.93 31.99 15.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a1f8"},attrs:{"points":"31.99 15.55 38.39 16 38.39 16.19 31.99 15.74 31.99 15.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a0f8"},attrs:{"points":"31.99 15.37 38.39 15.81 38.39 16 31.99 15.55 31.99 15.37"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#489ff8"},attrs:{"points":"31.99 15.18 38.39 15.62 38.39 15.81 31.99 15.37 31.99 15.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#479ef8"},attrs:{"points":"31.99 14.99 38.39 15.44 38.39 15.62 31.99 15.18 31.99 14.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469df8"},attrs:{"points":"31.99 14.8 38.39 15.25 38.39 15.44 31.99 14.99 31.99 14.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469cf8"},attrs:{"points":"31.99 14.61 38.39 15.06 38.39 15.25 31.99 14.8 31.99 14.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#459bf7"},attrs:{"points":"31.99 14.43 38.39 14.87 38.39 15.06 31.99 14.61 31.99 14.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#449af7"},attrs:{"points":"31.99 14.24 38.39 14.68 38.39 14.87 31.99 14.43 31.99 14.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4399f7"},attrs:{"points":"31.99 14.05 38.39 14.49 38.39 14.68 31.99 14.24 31.99 14.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4398f7"},attrs:{"points":"31.99 13.86 38.39 14.31 38.39 14.49 31.99 14.05 31.99 13.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4297f7"},attrs:{"points":"31.99 13.67 38.39 14.12 38.39 14.31 31.99 13.86 31.99 13.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4196f7"},attrs:{"points":"31.99 13.48 38.39 13.93 38.39 14.12 31.99 13.67 31.99 13.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4095f7"},attrs:{"points":"31.99 13.3 38.39 13.74 38.39 13.93 31.99 13.48 31.99 13.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4094f7"},attrs:{"points":"31.99 13.11 38.39 13.55 38.39 13.74 31.99 13.3 31.99 13.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f93f7"},attrs:{"points":"31.99 12.92 38.39 13.37 38.39 13.55 31.99 13.11 31.99 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f93f7"},attrs:{"points":"38.39 13.37 31.99 12.92 38.39 12.92 38.39 13.37"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#f)"}},[_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"23.12 12.92 19.21 25.71 19.21 12.92 23.12 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"23.22 12.92 19.21 26.05 19.21 25.71 23.12 12.92 23.22 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1465"},attrs:{"points":"23.33 12.92 19.21 26.4 19.21 26.05 23.22 12.92 23.33 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1566"},attrs:{"points":"23.43 12.92 19.21 26.75 19.21 26.4 23.33 12.92 23.43 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1d1567"},attrs:{"points":"23.54 12.92 19.21 27.09 19.21 26.75 23.43 12.92 23.54 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1e1568"},attrs:{"points":"23.65 12.92 19.21 27.44 19.21 27.09 23.54 12.92 23.65 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f1669"},attrs:{"points":"23.75 12.92 19.21 27.78 19.21 27.44 23.65 12.92 23.75 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f166a"},attrs:{"points":"23.86 12.92 19.21 28.13 19.21 27.78 23.75 12.92 23.86 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#20176b"},attrs:{"points":"23.96 12.92 19.21 28.48 19.21 28.13 23.86 12.92 23.96 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176c"},attrs:{"points":"24.07 12.92 19.21 28.82 19.21 28.48 23.96 12.92 24.07 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176d"},attrs:{"points":"24.17 12.92 19.21 29.17 19.21 28.82 24.07 12.92 24.17 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#22186e"},attrs:{"points":"24.28 12.92 19.21 29.51 19.21 29.17 24.17 12.92 24.28 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#23186f"},attrs:{"points":"24.39 12.92 19.21 29.86 19.21 29.51 24.28 12.92 24.39 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#231870"},attrs:{"points":"24.49 12.92 19.21 30.2 19.21 29.86 24.39 12.92 24.49 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#241971"},attrs:{"points":"24.6 12.92 19.21 30.55 19.21 30.2 24.49 12.92 24.6 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#251972"},attrs:{"points":"24.7 12.92 19.21 30.89 19.21 30.55 24.6 12.92 24.7 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a73"},attrs:{"points":"24.81 12.92 19.21 31.24 19.21 30.89 24.7 12.92 24.81 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a74"},attrs:{"points":"24.91 12.92 19.21 31.59 19.21 31.24 24.81 12.92 24.91 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#271a75"},attrs:{"points":"25.02 12.92 19.21 31.93 19.21 31.59 24.91 12.92 25.02 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b76"},attrs:{"points":"25.13 12.92 19.21 32.28 19.21 31.93 25.02 12.92 25.13 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b77"},attrs:{"points":"25.23 12.92 19.21 32.62 19.21 32.28 25.13 12.92 25.23 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#291b78"},attrs:{"points":"25.34 12.92 19.21 32.97 19.21 32.62 25.23 12.92 25.34 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c79"},attrs:{"points":"25.44 12.92 19.21 33.31 19.21 32.97 25.34 12.92 25.44 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c7a"},attrs:{"points":"25.55 12.92 19.21 33.66 19.21 33.31 25.44 12.92 25.55 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2b1c7b"},attrs:{"points":"25.65 12.92 19.21 34.01 19.21 33.66 25.55 12.92 25.65 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2c1d7c"},attrs:{"points":"25.76 12.92 19.21 34.35 19.21 34.01 25.65 12.92 25.76 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1d7d"},attrs:{"points":"25.86 12.92 19.21 34.7 19.21 34.35 25.76 12.92 25.86 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1e7e"},attrs:{"points":"25.97 12.92 19.21 35.04 19.21 34.7 25.86 12.92 25.97 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2e1e7f"},attrs:{"points":"26.08 12.92 19.21 35.39 19.21 35.04 25.97 12.92 26.08 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1e80"},attrs:{"points":"26.18 12.92 19.21 35.73 19.21 35.39 26.08 12.92 26.18 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1f81"},attrs:{"points":"26.29 12.92 19.21 36.08 19.21 35.73 26.18 12.92 26.29 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#301f82"},attrs:{"points":"26.39 12.92 19.21 36.43 19.21 36.08 26.29 12.92 26.39 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#311f83"},attrs:{"points":"26.5 12.92 19.21 36.77 19.21 36.43 26.39 12.92 26.5 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#312084"},attrs:{"points":"26.61 12.92 19.21 37.12 19.21 36.77 26.5 12.92 26.61 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#322085"},attrs:{"points":"26.71 12.92 19.21 37.46 19.21 37.12 26.61 12.92 26.71 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#332086"},attrs:{"points":"26.82 12.92 19.21 37.81 19.21 37.46 26.71 12.92 26.82 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#342187"},attrs:{"points":"26.92 12.92 19.21 38.16 19.21 37.81 26.82 12.92 26.92 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#342188"},attrs:{"points":"27.03 12.92 19.21 38.5 19.21 38.5 19.21 38.16 26.92 12.92 27.03 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#352289"},attrs:{"points":"27.13 12.92 19.31 38.5 19.21 38.5 27.03 12.92 27.13 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228a"},attrs:{"points":"27.24 12.92 19.42 38.5 19.31 38.5 27.13 12.92 27.24 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228b"},attrs:{"points":"27.34 12.92 19.52 38.5 19.42 38.5 27.24 12.92 27.34 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#37238c"},attrs:{"points":"27.45 12.92 19.63 38.5 19.52 38.5 27.34 12.92 27.45 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238d"},attrs:{"points":"27.56 12.92 19.74 38.5 19.63 38.5 27.45 12.92 27.56 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238e"},attrs:{"points":"27.66 12.92 19.84 38.5 19.74 38.5 27.56 12.92 27.66 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#39248f"},attrs:{"points":"27.77 12.92 19.95 38.5 19.84 38.5 27.66 12.92 27.77 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3a2490"},attrs:{"points":"27.87 12.92 20.05 38.5 19.95 38.5 27.77 12.92 27.87 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2591"},attrs:{"points":"27.98 12.92 20.16 38.5 20.05 38.5 27.87 12.92 27.98 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2592"},attrs:{"points":"28.09 12.92 20.27 38.5 20.16 38.5 27.98 12.92 28.09 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2593"},attrs:{"points":"28.19 12.92 20.37 38.5 20.27 38.5 28.09 12.92 28.19 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2694"},attrs:{"points":"28.3 12.92 20.48 38.5 20.37 38.5 28.19 12.92 28.3 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2695"},attrs:{"points":"28.4 12.92 20.58 38.5 20.48 38.5 28.3 12.92 28.4 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3e2696"},attrs:{"points":"28.51 12.92 20.69 38.5 20.58 38.5 28.4 12.92 28.51 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2797"},attrs:{"points":"28.61 12.92 20.79 38.5 20.69 38.5 28.51 12.92 28.61 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2798"},attrs:{"points":"28.72 12.92 20.9 38.5 20.79 38.5 28.61 12.92 28.72 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402799"},attrs:{"points":"28.82 12.92 21 38.5 20.9 38.5 28.72 12.92 28.82 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#41289a"},attrs:{"points":"28.93 12.92 21.11 38.5 21 38.5 28.82 12.92 28.93 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42289b"},attrs:{"points":"29.04 12.92 21.22 38.5 21.11 38.5 28.93 12.92 29.04 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42299c"},attrs:{"points":"29.14 12.92 21.32 38.5 21.22 38.5 29.04 12.92 29.14 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#43299d"},attrs:{"points":"29.25 12.92 21.43 38.5 21.32 38.5 29.14 12.92 29.25 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#44299e"},attrs:{"points":"29.35 12.92 21.53 38.5 21.43 38.5 29.25 12.92 29.35 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#442a9f"},attrs:{"points":"29.46 12.92 21.64 38.5 21.53 38.5 29.35 12.92 29.46 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#452aa1"},attrs:{"points":"29.57 12.92 21.74 38.5 21.64 38.5 29.46 12.92 29.57 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462aa2"},attrs:{"points":"29.67 12.92 21.85 38.5 21.74 38.5 29.57 12.92 29.67 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462ba3"},attrs:{"points":"29.78 12.92 21.96 38.5 21.85 38.5 29.67 12.92 29.78 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#472ba4"},attrs:{"points":"29.88 12.92 22.06 38.5 21.96 38.5 29.78 12.92 29.88 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#482ba5"},attrs:{"points":"29.99 12.92 22.17 38.5 22.06 38.5 29.88 12.92 29.99 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca6"},attrs:{"points":"30.09 12.92 22.27 38.5 22.17 38.5 29.99 12.92 30.09 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca7"},attrs:{"points":"30.2 12.92 22.38 38.5 22.27 38.5 30.09 12.92 30.2 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4a2da8"},attrs:{"points":"30.3 12.92 22.48 38.5 22.38 38.5 30.2 12.92 30.3 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2da9"},attrs:{"points":"30.41 12.92 22.59 38.5 22.48 38.5 30.3 12.92 30.41 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2daa"},attrs:{"points":"30.52 12.92 22.7 38.5 22.59 38.5 30.41 12.92 30.52 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4c2eab"},attrs:{"points":"30.62 12.92 22.8 38.5 22.7 38.5 30.52 12.92 30.62 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2eac"},attrs:{"points":"30.73 12.92 22.91 38.5 22.8 38.5 30.62 12.92 30.73 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2ead"},attrs:{"points":"30.83 12.92 23.01 38.5 22.91 38.5 30.73 12.92 30.83 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e2fae"},attrs:{"points":"30.94 12.92 23.12 38.5 23.01 38.5 30.83 12.92 30.94 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f2faf"},attrs:{"points":"31.04 12.92 23.22 38.5 23.12 38.5 30.94 12.92 31.04 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b0"},attrs:{"points":"31.15 12.92 23.33 38.5 23.22 38.5 31.04 12.92 31.15 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b1"},attrs:{"points":"31.26 12.92 23.44 38.5 23.33 38.5 31.15 12.92 31.26 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5130b2"},attrs:{"points":"31.36 12.92 23.54 38.5 23.44 38.5 31.26 12.92 31.36 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b3"},attrs:{"points":"31.47 12.92 23.65 38.5 23.54 38.5 31.36 12.92 31.47 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b4"},attrs:{"points":"31.57 12.92 23.75 38.5 23.65 38.5 31.47 12.92 31.57 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5331b5"},attrs:{"points":"31.68 12.92 23.86 38.5 23.75 38.5 31.57 12.92 31.68 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b6"},attrs:{"points":"31.78 12.92 23.96 38.5 23.86 38.5 31.68 12.92 31.78 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b7"},attrs:{"points":"31.89 12.92 24.07 38.5 23.96 38.5 31.78 12.92 31.89 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5532b8"},attrs:{"points":"32 12.92 24.18 38.5 24.07 38.5 31.89 12.92 32 12.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5633b9"},attrs:{"points":"32 13.27 24.28 38.5 24.18 38.5 32 12.92 32 12.92 32 13.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5733ba"},attrs:{"points":"32 13.61 24.39 38.5 24.28 38.5 32 13.27 32 13.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5734bb"},attrs:{"points":"32 13.96 24.49 38.5 24.39 38.5 32 13.61 32 13.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5834bc"},attrs:{"points":"32 14.3 24.6 38.5 24.49 38.5 32 13.96 32 14.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5934bd"},attrs:{"points":"32 14.65 24.7 38.5 24.6 38.5 32 14.3 32 14.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5935be"},attrs:{"points":"32 14.99 24.81 38.5 24.7 38.5 32 14.65 32 14.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5a35bf"},attrs:{"points":"32 15.34 24.91 38.5 24.81 38.5 32 14.99 32 15.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b35c0"},attrs:{"points":"32 15.68 25.02 38.5 24.91 38.5 32 15.34 32 15.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b36c1"},attrs:{"points":"32 16.03 25.13 38.5 25.02 38.5 32 15.68 32 16.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5c36c2"},attrs:{"points":"32 16.38 25.23 38.5 25.13 38.5 32 16.03 32 16.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5d36c3"},attrs:{"points":"32 16.72 25.34 38.5 25.23 38.5 32 16.38 32 16.72"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c4"},attrs:{"points":"32 17.07 25.44 38.5 25.34 38.5 32 16.72 32 17.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c5"},attrs:{"points":"32 17.41 25.55 38.5 25.44 38.5 32 17.07 32 17.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5f38c6"},attrs:{"points":"32 17.76 25.66 38.5 25.55 38.5 32 17.41 32 17.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c7"},attrs:{"points":"32 18.1 25.76 38.5 25.66 38.5 32 17.76 32 18.1"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c8"},attrs:{"points":"32 18.45 25.87 38.5 25.76 38.5 32 18.1 32 18.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6139c9"},attrs:{"points":"32 18.8 25.97 38.5 25.87 38.5 32 18.45 32 18.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239ca"},attrs:{"points":"32 19.14 26.08 38.5 25.97 38.5 32 18.8 32 19.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239cb"},attrs:{"points":"32 19.49 26.18 38.5 26.08 38.5 32 19.14 32 19.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633acc"},attrs:{"points":"32 19.83 26.29 38.5 26.18 38.5 32 19.49 32 19.83"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643acd"},attrs:{"points":"32 20.18 26.39 38.5 26.29 38.5 32 19.83 32 20.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bce"},attrs:{"points":"32 20.52 26.5 38.5 26.39 38.5 32 20.18 32 20.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bcf"},attrs:{"points":"32 20.87 26.61 38.5 26.5 38.5 32 20.52 32 20.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#663bd0"},attrs:{"points":"32 21.22 26.71 38.5 26.61 38.5 32 20.87 32 21.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd1"},attrs:{"points":"32 21.56 26.82 38.5 26.71 38.5 32 21.22 32 21.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd2"},attrs:{"points":"32 21.91 26.92 38.5 26.82 38.5 32 21.56 32 21.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#683cd3"},attrs:{"points":"32 22.25 27.03 38.5 26.92 38.5 32 21.91 32 22.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd4"},attrs:{"points":"32 22.6 27.14 38.5 27.03 38.5 32 22.25 32 22.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd5"},attrs:{"points":"32 22.94 27.24 38.5 27.14 38.5 32 22.6 32 22.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6a3dd6"},attrs:{"points":"32 23.29 27.35 38.5 27.24 38.5 32 22.94 32 23.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6b3ed7"},attrs:{"points":"32 23.64 27.45 38.5 27.35 38.5 32 23.29 32 23.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c3ed8"},attrs:{"points":"32 23.98 27.56 38.5 27.45 38.5 32 23.64 32 23.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c3fd9"},attrs:{"points":"32 24.33 27.66 38.5 27.56 38.5 32 23.98 32 24.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6d3fda"},attrs:{"points":"32 24.67 27.77 38.5 27.66 38.5 32 24.33 32 24.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e3fdb"},attrs:{"points":"32 25.02 27.88 38.5 27.77 38.5 32 24.67 32 25.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e40dc"},attrs:{"points":"32 25.36 27.98 38.5 27.88 38.5 32 25.02 32 25.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6f40dd"},attrs:{"points":"32 25.71 28.09 38.5 27.98 38.5 32 25.36 32 25.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6f40dd"},attrs:{"points":"28.09 38.5 32 25.71 32 38.5 28.09 38.5"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#g)"}},[_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"6.42 12.93 10.57 19.32 6.42 19.32 6.42 12.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"6.42 12.23 11.02 19.32 10.57 19.32 6.42 12.93 6.42 12.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f7409f"},attrs:{"points":"6.42 11.54 11.47 19.32 11.02 19.32 6.42 12.23 6.42 11.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f740a0"},attrs:{"points":"6.42 10.85 11.91 19.32 11.47 19.32 6.42 11.54 6.42 10.85"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f741a1"},attrs:{"points":"6.42 10.16 12.36 19.32 11.91 19.32 6.42 10.85 6.42 10.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a2"},attrs:{"points":"6.42 9.47 12.81 19.32 12.36 19.32 6.42 10.16 6.42 9.47"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a3"},attrs:{"points":"6.42 8.78 13.26 19.32 12.81 19.32 6.42 9.47 6.42 8.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f743a4"},attrs:{"points":"6.42 8.09 13.71 19.32 13.26 19.32 6.42 8.78 6.42 8.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f744a5"},attrs:{"points":"6.42 7.52 6.47 7.48 14.16 19.32 13.71 19.32 6.42 8.09 6.42 7.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f845a6"},attrs:{"points":"6.47 7.48 6.79 7.28 14.5 19.14 14.23 19.32 14.16 19.32 6.47 7.48"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f845a7"},attrs:{"x":"10.61","y":"6.03","width":"0.38","height":"14.15","transform":"translate(-5.4 8) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f846a8"},attrs:{"x":"10.93","y":"5.83","width":"0.38","height":"14.15","transform":"translate(-5.23 8.13) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f847a9"},attrs:{"x":"11.24","y":"5.62","width":"0.38","height":"14.15","transform":"translate(-5.07 8.27) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f847aa"},attrs:{"x":"11.56","y":"5.42","width":"0.38","height":"14.15","transform":"translate(-4.91 8.41) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f848ab"},attrs:{"x":"11.88","y":"5.21","width":"0.38","height":"14.15","transform":"translate(-4.75 8.55) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f849ac"},attrs:{"x":"12.19","y":"5.01","width":"0.38","height":"14.15","transform":"translate(-4.58 8.69) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f849ad"},attrs:{"x":"12.51","y":"4.8","width":"0.38","height":"14.15","transform":"translate(-4.42 8.83) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84aae"},attrs:{"x":"12.82","y":"4.6","width":"0.38","height":"14.15","transform":"translate(-4.26 8.97) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84baf"},attrs:{"x":"13.14","y":"4.39","width":"0.38","height":"14.15","transform":"translate(-4.1 9.11) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84cb0"},attrs:{"x":"13.45","y":"4.19","width":"0.38","height":"14.15","transform":"translate(-3.93 9.25) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84cb1"},attrs:{"x":"13.77","y":"3.98","width":"0.38","height":"14.15","transform":"translate(-3.77 9.38) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84db2"},attrs:{"x":"14.09","y":"3.78","width":"0.38","height":"14.15","transform":"translate(-3.61 9.52) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84eb3"},attrs:{"x":"14.4","y":"3.57","width":"0.38","height":"14.15","transform":"translate(-3.45 9.66) rotate(-32.99)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84eb4"},attrs:{"x":"14.72","y":"3.37","width":"0.38","height":"14.15","transform":"translate(-3.28 9.8) rotate(-32.99)"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f94fb6"},attrs:{"points":"11.21 4.41 11.53 4.2 19.21 16.03 19.21 16.09 18.92 16.28 11.21 4.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b7"},attrs:{"points":"11.53 4.2 11.84 4 19.21 15.34 19.21 16.03 11.53 4.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b8"},attrs:{"points":"11.84 4 12.16 3.79 19.21 14.65 19.21 15.34 11.84 4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f951b9"},attrs:{"points":"12.16 3.79 12.47 3.59 19.21 13.96 19.21 14.65 12.16 3.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952ba"},attrs:{"points":"12.47 3.59 12.79 3.38 19.21 13.27 19.21 13.96 12.47 3.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952bb"},attrs:{"points":"12.79 3.38 13.11 3.18 19.21 12.58 19.21 13.27 12.79 3.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f953bc"},attrs:{"points":"13.11 3.18 13.42 2.97 19.21 11.89 19.21 12.58 13.11 3.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f954bd"},attrs:{"points":"13.42 2.97 13.74 2.77 19.21 11.2 19.21 11.89 13.42 2.97"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955be"},attrs:{"points":"13.74 2.77 14.05 2.56 19.21 10.5 19.21 11.2 13.74 2.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955bf"},attrs:{"points":"14.05 2.56 14.37 2.36 19.21 9.81 19.21 10.5 14.05 2.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f956c0"},attrs:{"points":"14.37 2.36 14.68 2.15 19.21 9.12 19.21 9.81 14.37 2.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c1"},attrs:{"points":"14.68 2.15 15 1.95 19.21 8.43 19.21 9.12 14.68 2.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c2"},attrs:{"points":"15 1.95 15.31 1.74 19.21 7.74 19.21 8.43 15 1.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f958c3"},attrs:{"points":"15.31 1.74 15.63 1.54 19.21 7.05 19.21 7.74 15.31 1.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c4"},attrs:{"points":"15.63 1.54 15.95 1.33 19.21 6.36 19.21 7.05 15.63 1.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c5"},attrs:{"points":"15.95 1.33 16.26 1.13 19.21 5.67 19.21 6.36 15.95 1.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ac6"},attrs:{"points":"16.26 1.13 16.58 0.92 19.21 4.97 19.21 5.67 16.26 1.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5bc7"},attrs:{"points":"16.58 0.92 16.89 0.72 19.21 4.28 19.21 4.97 16.58 0.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc8"},attrs:{"points":"16.89 0.72 17.21 0.51 19.21 3.59 19.21 4.28 16.89 0.72"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc9"},attrs:{"points":"17.21 0.51 17.52 0.31 19.21 2.9 19.21 3.59 17.21 0.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5dca"},attrs:{"points":"17.52 0.31 17.79 0.14 17.86 0.14 19.21 2.21 19.21 2.9 17.52 0.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecb"},attrs:{"points":"18.31 0.14 19.21 1.52 19.21 2.21 17.86 0.14 18.31 0.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecc"},attrs:{"points":"18.76 0.14 19.21 0.83 19.21 1.52 18.31 0.14 18.76 0.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5fcd"},attrs:{"points":"19.21 0.83 18.76 0.14 19.21 0.14 19.21 0.83"}})])]),_vm._v(" "),_c('g',{staticClass:"logo-cube",staticStyle:{"opacity":"0.5"}},[_c('g',{staticStyle:{"clip-path":"url(#i)"}},[_c('polygon',{staticStyle:{"fill":"#25a9e0"},attrs:{"points":"32.03 13.02 19.33 0.32 32.03 13.02 32.03 13.02"}}),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#j)"}},[_c('polygon',{staticStyle:{"fill":"#fa5fcd"},attrs:{"points":"19.33 17.06 25.68 19.38 19.33 19.38 19.33 17.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5fcd"},attrs:{"points":"19.33 16.71 26.66 19.38 25.68 19.38 19.33 17.06 19.33 16.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecc"},attrs:{"points":"19.33 16.35 27.64 19.38 26.66 19.38 19.33 16.71 19.33 16.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecb"},attrs:{"points":"19.33 15.99 28.61 19.38 27.64 19.38 19.33 16.35 19.33 15.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5dca"},attrs:{"points":"19.33 15.64 29.59 19.38 28.61 19.38 19.33 15.99 19.33 15.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc9"},attrs:{"points":"19.33 15.28 30.55 19.37 30.54 19.38 29.59 19.38 19.33 15.64 19.33 15.28"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc8"},attrs:{"points":"19.33 14.93 30.66 19.05 30.55 19.37 19.33 15.28 19.33 14.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5bc7"},attrs:{"points":"19.33 14.57 30.78 18.74 30.66 19.05 19.33 14.93 19.33 14.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ac6"},attrs:{"points":"19.33 14.21 30.89 18.42 30.78 18.74 19.33 14.57 19.33 14.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c5"},attrs:{"points":"19.33 13.86 31 18.11 30.89 18.42 19.33 14.21 19.33 13.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c4"},attrs:{"points":"19.33 13.5 31.12 17.79 31 18.11 19.33 13.86 19.33 13.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f958c3"},attrs:{"points":"19.33 13.14 31.23 17.48 31.12 17.79 19.33 13.5 19.33 13.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c2"},attrs:{"points":"19.33 12.79 31.35 17.16 31.23 17.48 19.33 13.14 19.33 12.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c1"},attrs:{"points":"19.33 12.43 31.46 16.85 31.35 17.16 19.33 12.79 19.33 12.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f956c0"},attrs:{"points":"19.33 12.07 31.58 16.53 31.46 16.85 19.33 12.43 19.33 12.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955bf"},attrs:{"points":"19.33 11.72 31.69 16.22 31.58 16.53 19.33 12.07 19.33 11.72"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955be"},attrs:{"points":"19.33 11.36 31.81 15.9 31.69 16.22 19.33 11.72 19.33 11.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f954bd"},attrs:{"points":"19.33 11.01 31.92 15.59 31.81 15.9 19.33 11.36 19.33 11.01"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f953bc"},attrs:{"points":"19.33 10.65 32.03 15.28 32.03 15.28 31.92 15.59 19.33 11.01 19.33 10.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952bb"},attrs:{"points":"19.33 10.29 32.03 14.92 32.03 15.28 19.33 10.65 19.33 10.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952ba"},attrs:{"points":"19.33 9.94 32.03 14.56 32.03 14.92 19.33 10.29 19.33 9.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f951b9"},attrs:{"points":"19.33 9.58 32.03 14.21 32.03 14.56 19.33 9.94 19.33 9.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b8"},attrs:{"points":"19.33 9.22 32.03 13.85 32.03 14.21 19.33 9.58 19.33 9.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b7"},attrs:{"points":"19.33 8.87 32.03 13.49 32.03 13.85 19.33 9.22 19.33 8.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f94fb6"},attrs:{"points":"19.33 8.51 32.03 13.14 32.03 13.49 19.33 8.87 19.33 8.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84eb4"},attrs:{"points":"19.33 8.16 32.03 12.78 32.03 13.14 19.33 8.51 19.33 8.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84eb3"},attrs:{"points":"19.33 7.8 32.03 12.43 32.03 12.78 19.33 8.16 19.33 7.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84db2"},attrs:{"points":"19.33 7.44 32.03 12.07 32.03 12.43 19.33 7.8 19.33 7.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84cb1"},attrs:{"points":"19.33 7.09 32.03 11.71 32.03 12.07 19.33 7.44 19.33 7.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84cb0"},attrs:{"points":"19.33 6.73 32.03 11.36 32.03 11.71 19.33 7.09 19.33 6.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84baf"},attrs:{"points":"19.33 6.37 32.03 11 32.03 11.36 19.33 6.73 19.33 6.37"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f84aae"},attrs:{"points":"19.33 6.02 32.03 10.64 32.03 11 19.33 6.37 19.33 6.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f849ad"},attrs:{"points":"19.33 5.66 32.03 10.29 32.03 10.64 19.33 6.02 19.33 5.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f849ac"},attrs:{"points":"19.33 5.3 32.03 9.93 32.03 10.29 19.33 5.66 19.33 5.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f848ab"},attrs:{"points":"19.33 4.95 32.03 9.57 32.03 9.93 19.33 5.3 19.33 4.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f847aa"},attrs:{"points":"19.33 4.59 32.03 9.22 32.03 9.57 19.33 4.95 19.33 4.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f847a9"},attrs:{"points":"19.33 4.24 32.03 8.86 32.03 9.22 19.33 4.59 19.33 4.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f846a8"},attrs:{"points":"19.33 3.88 32.03 8.51 32.03 8.86 19.33 4.24 19.33 3.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f845a7"},attrs:{"points":"19.33 3.52 32.03 8.15 32.03 8.51 19.33 3.88 19.33 3.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f845a6"},attrs:{"points":"19.33 3.17 32.03 7.79 32.03 8.15 19.33 3.52 19.33 3.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f744a5"},attrs:{"points":"19.33 2.81 32.03 7.44 32.03 7.79 19.33 3.17 19.33 2.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f743a4"},attrs:{"points":"19.33 2.46 32.03 7.08 32.03 7.44 19.33 2.81 19.33 2.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a3"},attrs:{"points":"19.33 2.1 32.03 6.72 32.03 7.08 19.33 2.46 19.33 2.1"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a2"},attrs:{"points":"19.33 1.74 32.03 6.37 32.03 6.72 19.33 2.1 19.33 1.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f741a1"},attrs:{"points":"19.33 1.39 32.03 6.01 32.03 6.37 19.33 1.74 19.33 1.39"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f740a0"},attrs:{"points":"19.33 1.03 32.03 5.66 32.03 6.01 19.33 1.39 19.33 1.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f7409f"},attrs:{"points":"19.33 0.67 32.03 5.3 32.03 5.66 19.33 1.03 19.33 0.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"19.33 0.32 32.03 4.94 32.03 5.3 19.33 0.67 19.33 0.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"32.03 4.94 19.33 0.32 32.03 0.32 32.03 4.94"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#k)"}},[_c('polygon',{staticStyle:{"fill":"#71d7fb"},attrs:{"points":"0.27 25.28 6.62 25.73 0.27 25.73 0.27 25.28"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#71d7fb"},attrs:{"points":"0.27 25.09 6.62 25.54 6.62 25.73 0.27 25.28 0.27 25.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d6fb"},attrs:{"points":"0.27 24.91 6.62 25.35 6.62 25.54 0.27 25.09 0.27 24.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d5fb"},attrs:{"points":"0.27 24.72 6.62 25.16 6.62 25.35 0.27 24.91 0.27 24.72"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6fd4fb"},attrs:{"points":"0.27 24.53 6.62 24.98 6.62 25.16 0.27 24.72 0.27 24.53"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6ed3fb"},attrs:{"points":"0.27 24.35 6.62 24.79 6.62 24.98 0.27 24.53 0.27 24.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd2fb"},attrs:{"points":"0.27 24.16 6.62 24.61 6.62 24.79 0.27 24.35 0.27 24.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd1fb"},attrs:{"points":"0.27 23.97 6.62 24.42 6.62 24.61 0.27 24.16 0.27 23.97"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6cd0fb"},attrs:{"points":"0.27 23.79 6.62 24.23 6.62 24.42 0.27 23.97 0.27 23.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6bcffb"},attrs:{"points":"0.27 23.6 6.62 24.04 6.62 24.23 0.27 23.79 0.27 23.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acefa"},attrs:{"points":"0.27 23.41 6.62 23.86 6.62 24.04 0.27 23.6 0.27 23.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acdfa"},attrs:{"points":"0.27 23.23 6.62 23.67 6.62 23.86 0.27 23.41 0.27 23.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#69ccfa"},attrs:{"points":"0.27 23.04 6.62 23.48 6.62 23.67 0.27 23.23 0.27 23.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#68cbfa"},attrs:{"points":"0.27 22.85 6.62 23.3 6.62 23.48 0.27 23.04 0.27 22.85"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67cafa"},attrs:{"points":"0.27 22.67 6.62 23.11 6.62 23.3 0.27 22.85 0.27 22.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67c9fa"},attrs:{"points":"0.27 22.48 6.62 22.92 6.62 23.11 0.27 22.67 0.27 22.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#66c8fa"},attrs:{"points":"0.27 22.29 6.62 22.74 6.62 22.92 0.27 22.48 0.27 22.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#65c7fa"},attrs:{"points":"0.27 22.11 6.62 22.55 6.62 22.74 0.27 22.29 0.27 22.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c6fa"},attrs:{"points":"0.27 21.92 6.62 22.36 6.62 22.55 0.27 22.11 0.27 21.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c5fa"},attrs:{"points":"0.27 21.73 6.62 22.18 6.62 22.36 0.27 21.92 0.27 21.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#63c4fa"},attrs:{"points":"0.27 21.55 6.62 21.99 6.62 22.18 0.27 21.73 0.27 21.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#62c3fa"},attrs:{"points":"0.27 21.36 6.62 21.8 6.62 21.99 0.27 21.55 0.27 21.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c2fa"},attrs:{"points":"0.27 21.17 6.62 21.62 6.62 21.8 0.27 21.36 0.27 21.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c1fa"},attrs:{"points":"0.27 20.98 6.62 21.43 6.62 21.62 0.27 21.17 0.27 20.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#60c0fa"},attrs:{"points":"0.27 20.8 6.62 21.24 6.62 21.43 0.27 20.98 0.27 20.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5fbffa"},attrs:{"points":"0.27 20.61 6.62 21.06 6.62 21.24 0.27 20.8 0.27 20.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebefa"},attrs:{"points":"0.27 20.43 6.62 20.87 6.62 21.06 0.27 20.61 0.27 20.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebdf9"},attrs:{"points":"0.27 20.24 6.62 20.68 6.62 20.87 0.27 20.43 0.27 20.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5dbcf9"},attrs:{"points":"0.27 20.05 6.62 20.5 6.62 20.68 0.27 20.24 0.27 20.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5cbbf9"},attrs:{"points":"0.27 19.86 6.62 20.31 6.62 20.5 0.27 20.05 0.27 19.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bbaf9"},attrs:{"points":"0.27 19.68 6.62 20.12 6.62 20.31 0.27 19.86 0.27 19.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bb9f9"},attrs:{"points":"0.27 19.49 6.62 19.93 6.62 20.12 0.27 19.68 0.27 19.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ab8f9"},attrs:{"points":"0.27 19.3 6.62 19.75 6.62 19.93 0.27 19.49 0.27 19.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#59b7f9"},attrs:{"points":"0.27 19.12 6.62 19.56 6.62 19.75 0.27 19.3 0.27 19.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b6f9"},attrs:{"points":"0.27 18.93 6.62 19.38 6.62 19.56 0.27 19.12 0.27 18.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b4f9"},attrs:{"points":"0.27 18.74 6.62 19.19 6.62 19.38 0.27 18.93 0.27 18.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#57b3f9"},attrs:{"points":"0.27 18.56 6.62 19 6.62 19.19 0.27 18.74 0.27 18.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#56b2f9"},attrs:{"points":"0.27 18.37 6.62 18.82 6.62 19 0.27 18.56 0.27 18.37"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b1f9"},attrs:{"points":"0.27 18.18 6.62 18.63 6.62 18.82 0.27 18.37 0.27 18.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b0f9"},attrs:{"points":"0.27 18 6.62 18.44 6.62 18.63 0.27 18.18 0.27 18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#54aff9"},attrs:{"points":"0.27 17.81 6.62 18.25 6.62 18.44 0.27 18 0.27 17.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#53aef9"},attrs:{"points":"0.27 17.62 6.62 18.07 6.62 18.25 0.27 17.81 0.27 17.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52adf9"},attrs:{"points":"0.27 17.44 6.62 17.88 6.62 18.07 0.27 17.62 0.27 17.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52acf8"},attrs:{"points":"0.27 17.25 6.62 17.69 6.62 17.88 0.27 17.44 0.27 17.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#51abf8"},attrs:{"points":"0.27 17.06 6.62 17.51 6.62 17.69 0.27 17.25 0.27 17.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#50aaf8"},attrs:{"points":"0.27 16.88 6.62 17.32 6.62 17.51 0.27 17.06 0.27 16.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa9f8"},attrs:{"points":"0.27 16.69 6.62 17.13 6.62 17.32 0.27 16.88 0.27 16.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa8f8"},attrs:{"points":"0.27 16.5 6.62 16.95 6.62 17.13 0.27 16.69 0.27 16.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ea7f8"},attrs:{"points":"0.27 16.32 6.62 16.76 6.62 16.95 0.27 16.5 0.27 16.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4da6f8"},attrs:{"points":"0.27 16.13 6.62 16.57 6.62 16.76 0.27 16.32 0.27 16.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca5f8"},attrs:{"points":"0.27 15.94 6.62 16.39 6.62 16.57 0.27 16.13 0.27 15.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca4f8"},attrs:{"points":"0.27 15.76 6.62 16.2 6.62 16.39 0.27 15.94 0.27 15.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ba3f8"},attrs:{"points":"0.27 15.57 6.62 16.01 6.62 16.2 0.27 15.76 0.27 15.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4aa2f8"},attrs:{"points":"0.27 15.38 6.62 15.83 6.62 16.01 0.27 15.57 0.27 15.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a1f8"},attrs:{"points":"0.27 15.2 6.62 15.64 6.62 15.83 0.27 15.38 0.27 15.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a0f8"},attrs:{"points":"0.27 15.01 6.62 15.45 6.62 15.64 0.27 15.2 0.27 15.01"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#489ff8"},attrs:{"points":"0.27 14.82 6.62 15.27 6.62 15.45 0.27 15.01 0.27 14.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#479ef8"},attrs:{"points":"0.27 14.63 6.62 15.08 6.62 15.27 0.27 14.82 0.27 14.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469df8"},attrs:{"points":"0.27 14.45 6.62 14.89 6.62 15.08 0.27 14.63 0.27 14.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469cf8"},attrs:{"points":"0.27 14.26 6.62 14.71 6.62 14.89 0.27 14.45 0.27 14.26"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#459bf7"},attrs:{"points":"0.27 14.07 6.62 14.52 6.62 14.71 0.27 14.26 0.27 14.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#449af7"},attrs:{"points":"0.27 13.89 6.62 14.33 6.62 14.52 0.27 14.07 0.27 13.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4399f7"},attrs:{"points":"0.27 13.7 6.62 14.15 6.62 14.33 0.27 13.89 0.27 13.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4398f7"},attrs:{"points":"0.27 13.52 6.62 13.96 6.62 14.15 0.27 13.7 0.27 13.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4297f7"},attrs:{"points":"0.27 13.33 6.62 13.77 6.62 13.96 0.27 13.52 0.27 13.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4196f7"},attrs:{"points":"0.27 13.14 6.62 13.59 6.62 13.77 0.27 13.33 0.27 13.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4095f7"},attrs:{"points":"1.27 13.03 6.62 13.4 6.62 13.59 0.27 13.14 0.27 13.03 1.27 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4094f7"},attrs:{"points":"3.95 13.03 6.62 13.21 6.62 13.4 1.27 13.03 3.95 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f93f7"},attrs:{"points":"6.62 13.03 6.62 13.03 6.62 13.21 3.95 13.03 6.62 13.03"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#l)"}},[_c('path',{staticStyle:{"fill":"#804aff"},attrs:{"d":"M7,13l-.34.65Z"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7f4afe"},attrs:{"points":"7.31 13.03 6.62 14.32 6.62 13.67 6.96 13.03 7.31 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7e49fd"},attrs:{"points":"7.65 13.03 6.62 14.97 6.62 14.32 7.31 13.03 7.65 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7d49fc"},attrs:{"points":"8 13.03 6.62 15.62 6.62 14.97 7.65 13.03 8 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7c48fc"},attrs:{"points":"8.26 13.03 8.33 13.06 6.62 16.27 6.62 15.62 8 13.03 8.26 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7b48fb"},attrs:{"points":"8.33 13.06 8.6 13.2 6.62 16.92 6.62 16.27 8.33 13.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7a47fa"},attrs:{"points":"8.6 13.2 8.86 13.34 6.62 17.57 6.62 16.92 8.6 13.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7947f9"},attrs:{"points":"8.86 13.34 9.13 13.49 6.62 18.22 6.62 17.57 8.86 13.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7846f8"},attrs:{"points":"9.13 13.49 9.4 13.63 6.62 18.86 6.62 18.22 9.13 13.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7746f7"},attrs:{"points":"9.4 13.63 9.67 13.77 6.62 19.51 6.62 18.86 9.4 13.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7645f6"},attrs:{"points":"9.67 13.77 9.94 13.92 6.62 20.16 6.62 19.51 9.67 13.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7545f6"},attrs:{"points":"9.94 13.92 10.21 14.06 6.62 20.81 6.62 20.16 9.94 13.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7444f5"},attrs:{"points":"10.21 14.06 10.48 14.2 6.62 21.46 6.62 20.81 10.21 14.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7344f4"},attrs:{"points":"10.48 14.2 10.75 14.35 6.62 22.11 6.62 21.46 10.48 14.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7243f3"},attrs:{"points":"10.75 14.35 11.02 14.49 6.62 22.76 6.62 22.11 10.75 14.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7143f2"},attrs:{"points":"11.02 14.49 11.28 14.63 6.62 23.41 6.62 22.76 11.02 14.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7042f1"},attrs:{"points":"11.28 14.63 11.55 14.77 6.62 24.06 6.62 23.41 11.28 14.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6f42f0"},attrs:{"points":"11.55 14.77 11.82 14.92 6.62 24.7 6.62 24.06 11.55 14.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e41f0"},attrs:{"points":"11.82 14.92 12.09 15.06 6.62 25.35 6.62 24.7 11.82 14.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6d41ef"},attrs:{"points":"12.09 15.06 12.36 15.2 6.62 26 6.62 25.35 12.09 15.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c40ee"},attrs:{"points":"12.36 15.2 12.63 15.35 6.62 26.65 6.62 26 12.36 15.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6b40ed"},attrs:{"points":"12.63 15.35 12.9 15.49 6.62 27.3 6.62 26.65 12.63 15.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6a3fec"},attrs:{"points":"12.9 15.49 13.17 15.63 6.62 27.95 6.62 27.3 12.9 15.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693feb"},attrs:{"points":"13.17 15.63 13.44 15.78 6.62 28.6 6.62 27.95 13.17 15.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#683eeb"},attrs:{"points":"13.44 15.78 13.71 15.92 6.62 29.25 6.62 28.6 13.44 15.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673eea"},attrs:{"points":"13.71 15.92 13.97 16.06 6.62 29.9 6.62 29.25 13.71 15.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#663ee9"},attrs:{"points":"13.97 16.06 14.24 16.2 6.62 30.55 6.62 29.9 13.97 16.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653de8"},attrs:{"points":"14.24 16.2 14.51 16.35 6.62 31.19 6.62 30.55 14.24 16.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643de7"},attrs:{"points":"14.51 16.35 14.78 16.49 6.62 31.84 6.62 31.19 14.51 16.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633ce6"},attrs:{"points":"14.78 16.49 15.05 16.63 6.62 32.49 6.62 31.84 14.78 16.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#623ce5"},attrs:{"points":"15.05 16.63 15.32 16.78 6.86 32.68 6.62 32.55 6.62 32.49 15.05 16.63"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#613be5"},attrs:{"x":"2.22","y":"24.65","width":"18.02","height":"0.3","transform":"translate(-15.94 23.07) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#603be4"},attrs:{"x":"2.49","y":"24.79","width":"18.02","height":"0.3","transform":"translate(-15.93 23.38) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5f3ae3"},attrs:{"x":"2.75","y":"24.94","width":"18.02","height":"0.3","transform":"translate(-15.91 23.7) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5e3ae2"},attrs:{"x":"3.02","y":"25.08","width":"18.02","height":"0.3","transform":"translate(-15.89 24.01) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5d39e1"},attrs:{"x":"3.29","y":"25.22","width":"18.02","height":"0.3","transform":"translate(-15.88 24.32) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5c39e0"},attrs:{"x":"3.56","y":"25.36","width":"18.02","height":"0.3","transform":"translate(-15.86 24.64) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5b38df"},attrs:{"x":"3.83","y":"25.51","width":"18.02","height":"0.3","transform":"translate(-15.84 24.95) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5938df"},attrs:{"x":"4.1","y":"25.65","width":"18.02","height":"0.3","transform":"translate(-15.83 25.26) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5837de"},attrs:{"x":"4.37","y":"25.79","width":"18.02","height":"0.3","transform":"translate(-15.81 25.58) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5737dd"},attrs:{"x":"4.64","y":"25.94","width":"18.02","height":"0.3","transform":"translate(-15.8 25.89) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5636dc"},attrs:{"x":"4.91","y":"26.08","width":"18.02","height":"0.3","transform":"translate(-15.78 26.2) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5536db"},attrs:{"x":"5.17","y":"26.22","width":"18.02","height":"0.3","transform":"translate(-15.76 26.52) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5435da"},attrs:{"x":"5.44","y":"26.37","width":"18.02","height":"0.3","transform":"translate(-15.75 26.83) rotate(-62)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#5335d9"},attrs:{"x":"5.71","y":"26.51","width":"18.02","height":"0.3","transform":"translate(-15.73 27.14) rotate(-62)"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5234d9"},attrs:{"points":"19.08 18.78 19.33 18.91 19.33 18.97 10.9 34.83 10.63 34.69 19.08 18.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5134d8"},attrs:{"points":"19.33 19.62 11.16 34.97 10.9 34.83 19.33 18.97 19.33 19.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5033d7"},attrs:{"points":"19.33 20.27 11.43 35.12 11.16 34.97 19.33 19.62 19.33 20.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f33d6"},attrs:{"points":"19.33 20.92 11.7 35.26 11.43 35.12 19.33 20.27 19.33 20.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e32d5"},attrs:{"points":"19.33 21.57 11.97 35.4 11.7 35.26 19.33 20.92 19.33 21.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d32d4"},attrs:{"points":"19.33 22.21 12.24 35.54 11.97 35.4 19.33 21.57 19.33 22.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4c32d3"},attrs:{"points":"19.33 22.86 12.51 35.69 12.24 35.54 19.33 22.21 19.33 22.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b31d3"},attrs:{"points":"19.33 23.51 12.78 35.83 12.51 35.69 19.33 22.86 19.33 23.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4a31d2"},attrs:{"points":"19.33 24.16 13.05 35.97 12.78 35.83 19.33 23.51 19.33 24.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4930d1"},attrs:{"points":"19.33 24.81 13.32 36.12 13.05 35.97 19.33 24.16 19.33 24.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4830d0"},attrs:{"points":"19.33 25.46 13.59 36.26 13.32 36.12 19.33 24.81 19.33 25.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#472fcf"},attrs:{"points":"19.33 26.11 13.85 36.4 13.59 36.26 19.33 25.46 19.33 26.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462fce"},attrs:{"points":"19.33 26.76 14.12 36.55 13.85 36.4 19.33 26.11 19.33 26.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#452ece"},attrs:{"points":"19.33 27.41 14.39 36.69 14.12 36.55 19.33 26.76 19.33 27.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#442ecd"},attrs:{"points":"19.33 28.05 14.66 36.83 14.39 36.69 19.33 27.41 19.33 28.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#432dcc"},attrs:{"points":"19.33 28.7 14.93 36.97 14.66 36.83 19.33 28.05 19.33 28.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#422dcb"},attrs:{"points":"19.33 29.35 15.2 37.12 14.93 36.97 19.33 28.7 19.33 29.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#412cca"},attrs:{"points":"19.33 30 15.47 37.26 15.2 37.12 19.33 29.35 19.33 30"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402cc9"},attrs:{"points":"19.33 30.65 15.74 37.4 15.47 37.26 19.33 30 19.33 30.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2bc8"},attrs:{"points":"19.33 31.3 16.01 37.55 15.74 37.4 19.33 30.65 19.33 31.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3e2bc8"},attrs:{"points":"19.33 31.95 16.27 37.69 16.01 37.55 19.33 31.3 19.33 31.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2ac7"},attrs:{"points":"19.33 32.6 16.54 37.83 16.27 37.69 19.33 31.95 19.33 32.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2ac6"},attrs:{"points":"19.33 33.25 16.81 37.97 16.54 37.83 19.33 32.6 19.33 33.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b29c5"},attrs:{"points":"19.33 33.9 17.08 38.12 16.81 37.97 19.33 33.25 19.33 33.9"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3a29c4"},attrs:{"points":"19.33 34.54 17.35 38.26 17.08 38.12 19.33 33.9 19.33 34.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3928c3"},attrs:{"points":"19.33 35.19 17.62 38.4 17.35 38.26 19.33 34.54 19.33 35.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3828c2"},attrs:{"points":"19.33 35.84 17.95 38.44 17.68 38.44 17.62 38.4 19.33 35.19 19.33 35.84"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3727c2"},attrs:{"points":"19.33 36.49 18.29 38.44 17.95 38.44 19.33 35.84 19.33 36.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3627c1"},attrs:{"points":"19.33 37.14 18.64 38.44 18.29 38.44 19.33 36.49 19.33 37.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3526c0"},attrs:{"points":"19.33 37.79 18.98 38.44 18.64 38.44 19.33 37.14 19.33 37.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3426bf"},attrs:{"points":"18.98 38.44 19.33 37.79 19.33 38.44 18.98 38.44"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#m)"}},[_c('path',{staticStyle:{"fill":"#71d7fb"},attrs:{"d":"M32,25.54l2.66.19Z"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d6fb"},attrs:{"points":"32.03 25.36 37.36 25.73 34.69 25.73 32.03 25.54 32.03 25.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#70d5fb"},attrs:{"points":"32.03 25.17 38.38 25.61 38.38 25.73 37.36 25.73 32.03 25.36 32.03 25.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6fd4fb"},attrs:{"points":"32.03 24.98 38.38 25.43 38.38 25.61 32.03 25.17 32.03 24.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6ed3fb"},attrs:{"points":"32.03 24.8 38.38 25.24 38.38 25.43 32.03 24.98 32.03 24.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd2fb"},attrs:{"points":"32.03 24.61 38.38 25.05 38.38 25.24 32.03 24.8 32.03 24.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6dd1fb"},attrs:{"points":"32.03 24.42 38.38 24.87 38.38 25.05 32.03 24.61 32.03 24.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6cd0fb"},attrs:{"points":"32.03 24.23 38.38 24.68 38.38 24.87 32.03 24.42 32.03 24.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6bcffb"},attrs:{"points":"32.03 24.05 38.38 24.49 38.38 24.68 32.03 24.23 32.03 24.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acefa"},attrs:{"points":"32.03 23.86 38.38 24.31 38.38 24.49 32.03 24.05 32.03 23.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6acdfa"},attrs:{"points":"32.03 23.67 38.38 24.12 38.38 24.31 32.03 23.86 32.03 23.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#69ccfa"},attrs:{"points":"32.03 23.49 38.38 23.93 38.38 24.12 32.03 23.67 32.03 23.49"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#68cbfa"},attrs:{"points":"32.03 23.3 38.38 23.75 38.38 23.93 32.03 23.49 32.03 23.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67cafa"},attrs:{"points":"32.03 23.11 38.38 23.56 38.38 23.75 32.03 23.3 32.03 23.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#67c9fa"},attrs:{"points":"32.03 22.93 38.38 23.37 38.38 23.56 32.03 23.11 32.03 22.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#66c8fa"},attrs:{"points":"32.03 22.74 38.38 23.18 38.38 23.37 32.03 22.93 32.03 22.74"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#65c7fa"},attrs:{"points":"32.03 22.55 38.38 23 38.38 23.18 32.03 22.74 32.03 22.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c6fa"},attrs:{"points":"32.03 22.36 38.38 22.81 38.38 23 32.03 22.55 32.03 22.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#64c5fa"},attrs:{"points":"32.03 22.18 38.38 22.62 38.38 22.81 32.03 22.36 32.03 22.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#63c4fa"},attrs:{"points":"32.03 21.99 38.38 22.44 38.38 22.62 32.03 22.18 32.03 21.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#62c3fa"},attrs:{"points":"32.03 21.8 38.38 22.25 38.38 22.44 32.03 21.99 32.03 21.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c2fa"},attrs:{"points":"32.03 21.62 38.38 22.06 38.38 22.25 32.03 21.8 32.03 21.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#61c1fa"},attrs:{"points":"32.03 21.43 38.38 21.88 38.38 22.06 32.03 21.62 32.03 21.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#60c0fa"},attrs:{"points":"32.03 21.24 38.38 21.69 38.38 21.88 32.03 21.43 32.03 21.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5fbffa"},attrs:{"points":"32.03 21.06 38.38 21.5 38.38 21.69 32.03 21.24 32.03 21.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebefa"},attrs:{"points":"32.03 20.87 38.38 21.32 38.38 21.5 32.03 21.06 32.03 20.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ebdf9"},attrs:{"points":"32.03 20.68 38.38 21.13 38.38 21.32 32.03 20.87 32.03 20.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5dbcf9"},attrs:{"points":"32.03 20.5 38.38 20.94 38.38 21.13 32.03 20.68 32.03 20.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5cbbf9"},attrs:{"points":"32.03 20.31 38.38 20.75 38.38 20.94 32.03 20.5 32.03 20.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bbaf9"},attrs:{"points":"32.03 20.12 38.38 20.57 38.38 20.75 32.03 20.31 32.03 20.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5bb9f9"},attrs:{"points":"32.03 19.94 38.38 20.38 38.38 20.57 32.03 20.12 32.03 19.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5ab8f9"},attrs:{"points":"32.03 19.75 38.38 20.2 38.38 20.38 32.03 19.94 32.03 19.75"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#59b7f9"},attrs:{"points":"32.03 19.56 38.38 20.01 38.38 20.2 32.03 19.75 32.03 19.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b6f9"},attrs:{"points":"32.03 19.38 38.38 19.82 38.38 20.01 32.03 19.56 32.03 19.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#58b4f9"},attrs:{"points":"32.03 19.19 38.38 19.63 38.38 19.82 32.03 19.38 32.03 19.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#57b3f9"},attrs:{"points":"32.03 19 38.38 19.45 38.38 19.63 32.03 19.19 32.03 19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#56b2f9"},attrs:{"points":"32.03 18.81 38.38 19.26 38.38 19.45 32.03 19 32.03 18.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b1f9"},attrs:{"points":"32.03 18.63 38.38 19.07 38.38 19.26 32.03 18.81 32.03 18.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#55b0f9"},attrs:{"points":"32.03 18.44 38.38 18.89 38.38 19.07 32.03 18.63 32.03 18.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#54aff9"},attrs:{"points":"32.03 18.25 38.38 18.7 38.38 18.89 32.03 18.44 32.03 18.25"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#53aef9"},attrs:{"points":"32.03 18.07 38.38 18.51 38.38 18.7 32.03 18.25 32.03 18.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52adf9"},attrs:{"points":"32.03 17.88 38.38 18.33 38.38 18.51 32.03 18.07 32.03 17.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#52acf8"},attrs:{"points":"32.03 17.69 38.38 18.14 38.38 18.33 32.03 17.88 32.03 17.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#51abf8"},attrs:{"points":"32.03 17.51 38.38 17.95 38.38 18.14 32.03 17.69 32.03 17.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#50aaf8"},attrs:{"points":"32.03 17.32 38.38 17.77 38.38 17.95 32.03 17.51 32.03 17.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa9f8"},attrs:{"points":"32.03 17.13 38.38 17.58 38.38 17.77 32.03 17.32 32.03 17.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4fa8f8"},attrs:{"points":"32.03 16.95 38.38 17.39 38.38 17.58 32.03 17.13 32.03 16.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ea7f8"},attrs:{"points":"32.03 16.76 38.38 17.2 38.38 17.39 32.03 16.95 32.03 16.76"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4da6f8"},attrs:{"points":"32.03 16.57 38.38 17.02 38.38 17.2 32.03 16.76 32.03 16.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca5f8"},attrs:{"points":"32.03 16.39 38.38 16.83 38.38 17.02 32.03 16.57 32.03 16.39"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ca4f8"},attrs:{"points":"32.03 16.2 38.38 16.64 38.38 16.83 32.03 16.39 32.03 16.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4ba3f8"},attrs:{"points":"32.03 16.01 38.38 16.46 38.38 16.64 32.03 16.2 32.03 16.01"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4aa2f8"},attrs:{"points":"32.03 15.82 38.38 16.27 38.38 16.46 32.03 16.01 32.03 15.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a1f8"},attrs:{"points":"32.03 15.64 38.38 16.08 38.38 16.27 32.03 15.82 32.03 15.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#49a0f8"},attrs:{"points":"32.03 15.45 38.38 15.9 38.38 16.08 32.03 15.64 32.03 15.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#489ff8"},attrs:{"points":"32.03 15.26 38.38 15.71 38.38 15.9 32.03 15.45 32.03 15.26"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#479ef8"},attrs:{"points":"32.03 15.08 38.38 15.52 38.38 15.71 32.03 15.26 32.03 15.08"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469df8"},attrs:{"points":"32.03 14.89 38.38 15.34 38.38 15.52 32.03 15.08 32.03 14.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#469cf8"},attrs:{"points":"32.03 14.7 38.38 15.15 38.38 15.34 32.03 14.89 32.03 14.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#459bf7"},attrs:{"points":"32.03 14.52 38.38 14.96 38.38 15.15 32.03 14.7 32.03 14.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#449af7"},attrs:{"points":"32.03 14.33 38.38 14.78 38.38 14.96 32.03 14.52 32.03 14.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4399f7"},attrs:{"points":"32.03 14.14 38.38 14.59 38.38 14.78 32.03 14.33 32.03 14.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4398f7"},attrs:{"points":"32.03 13.96 38.38 14.4 38.38 14.59 32.03 14.14 32.03 13.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4297f7"},attrs:{"points":"32.03 13.77 38.38 14.21 38.38 14.4 32.03 13.96 32.03 13.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4196f7"},attrs:{"points":"32.03 13.58 38.38 14.03 38.38 14.21 32.03 13.77 32.03 13.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4095f7"},attrs:{"points":"32.03 13.39 38.38 13.84 38.38 14.03 32.03 13.58 32.03 13.39"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4094f7"},attrs:{"points":"32.03 13.21 38.38 13.65 38.38 13.84 32.03 13.39 32.03 13.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f93f7"},attrs:{"points":"32.03 13.02 38.38 13.47 38.38 13.65 32.03 13.21 32.03 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f93f7"},attrs:{"points":"38.38 13.47 32.03 13.02 38.38 13.02 38.38 13.47"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#n)"}},[_c('polygon',{staticStyle:{"fill":"#3426bf"},attrs:{"points":"23.21 13.02 19.33 25.73 19.33 13.02 23.21 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3426bf"},attrs:{"points":"23.38 13.02 19.33 26.28 19.33 25.73 23.21 13.02 23.38 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3526c0"},attrs:{"points":"23.55 13.02 19.33 26.82 19.33 26.28 23.38 13.02 23.55 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3627c1"},attrs:{"points":"23.71 13.02 19.33 27.37 19.33 26.82 23.55 13.02 23.71 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3727c2"},attrs:{"points":"23.88 13.02 19.33 27.92 19.33 27.37 23.71 13.02 23.88 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3828c2"},attrs:{"points":"24.05 13.02 19.33 28.46 19.33 27.92 23.88 13.02 24.05 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3928c3"},attrs:{"points":"24.21 13.02 19.33 29.01 19.33 28.46 24.05 13.02 24.21 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3a29c4"},attrs:{"points":"24.38 13.02 19.33 29.56 19.33 29.01 24.21 13.02 24.38 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b29c5"},attrs:{"points":"24.55 13.02 19.33 30.11 19.33 29.56 24.38 13.02 24.55 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2ac6"},attrs:{"points":"24.72 13.02 19.33 30.65 19.33 30.11 24.55 13.02 24.72 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2ac7"},attrs:{"points":"24.88 13.02 19.33 31.2 19.33 30.65 24.72 13.02 24.88 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3e2bc8"},attrs:{"points":"25.05 13.02 19.33 31.75 19.33 31.2 24.88 13.02 25.05 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2bc8"},attrs:{"points":"25.22 13.02 19.33 32.29 19.33 31.75 25.05 13.02 25.22 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402cc9"},attrs:{"points":"25.39 13.02 19.33 32.84 19.33 32.29 25.22 13.02 25.39 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#412cca"},attrs:{"points":"25.55 13.02 19.33 33.39 19.33 32.84 25.39 13.02 25.55 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#422dcb"},attrs:{"points":"25.72 13.02 19.33 33.93 19.33 33.39 25.55 13.02 25.72 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#432dcc"},attrs:{"points":"25.89 13.02 19.33 34.48 19.33 33.93 25.72 13.02 25.89 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#442ecd"},attrs:{"points":"26.05 13.02 19.33 35.03 19.33 34.48 25.89 13.02 26.05 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#452ece"},attrs:{"points":"26.22 13.02 19.33 35.58 19.33 35.03 26.05 13.02 26.22 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462fce"},attrs:{"points":"26.39 13.02 19.33 36.12 19.33 35.58 26.22 13.02 26.39 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#472fcf"},attrs:{"points":"26.56 13.02 19.33 36.67 19.33 36.12 26.39 13.02 26.56 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4830d0"},attrs:{"points":"26.72 13.02 19.33 37.22 19.33 36.67 26.56 13.02 26.72 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4930d1"},attrs:{"points":"26.89 13.02 19.33 37.76 19.33 37.22 26.72 13.02 26.89 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4a31d2"},attrs:{"points":"27.06 13.02 19.33 38.31 19.33 37.76 26.89 13.02 27.06 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b31d3"},attrs:{"points":"27.22 13.02 19.45 38.44 19.33 38.44 19.33 38.31 27.06 13.02 27.22 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4c32d3"},attrs:{"points":"27.39 13.02 19.62 38.44 19.45 38.44 27.22 13.02 27.39 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d32d4"},attrs:{"points":"27.56 13.02 19.79 38.44 19.62 38.44 27.39 13.02 27.56 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e32d5"},attrs:{"points":"27.73 13.02 19.96 38.44 19.79 38.44 27.56 13.02 27.73 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f33d6"},attrs:{"points":"27.89 13.02 20.12 38.44 19.96 38.44 27.73 13.02 27.89 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5033d7"},attrs:{"points":"28.06 13.02 20.29 38.44 20.12 38.44 27.89 13.02 28.06 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5134d8"},attrs:{"points":"28.23 13.02 20.46 38.44 20.29 38.44 28.06 13.02 28.23 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5234d9"},attrs:{"points":"28.39 13.02 20.63 38.44 20.46 38.44 28.23 13.02 28.39 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5335d9"},attrs:{"points":"28.56 13.02 20.79 38.44 20.63 38.44 28.39 13.02 28.56 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5435da"},attrs:{"points":"28.73 13.02 20.96 38.44 20.79 38.44 28.56 13.02 28.73 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5536db"},attrs:{"points":"28.9 13.02 21.13 38.44 20.96 38.44 28.73 13.02 28.9 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5636dc"},attrs:{"points":"29.06 13.02 21.3 38.44 21.13 38.44 28.9 13.02 29.06 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5737dd"},attrs:{"points":"29.23 13.02 21.46 38.44 21.3 38.44 29.06 13.02 29.23 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5837de"},attrs:{"points":"29.4 13.02 21.63 38.44 21.46 38.44 29.23 13.02 29.4 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5938df"},attrs:{"points":"29.57 13.02 21.8 38.44 21.63 38.44 29.4 13.02 29.57 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b38df"},attrs:{"points":"29.73 13.02 21.96 38.44 21.8 38.44 29.57 13.02 29.73 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5c39e0"},attrs:{"points":"29.9 13.02 22.13 38.44 21.96 38.44 29.73 13.02 29.9 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5d39e1"},attrs:{"points":"30.07 13.02 22.3 38.44 22.13 38.44 29.9 13.02 30.07 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e3ae2"},attrs:{"points":"30.23 13.02 22.46 38.44 22.3 38.44 30.07 13.02 30.23 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5f3ae3"},attrs:{"points":"30.4 13.02 22.63 38.44 22.46 38.44 30.23 13.02 30.4 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#603be4"},attrs:{"points":"30.57 13.02 22.8 38.44 22.63 38.44 30.4 13.02 30.57 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#613be5"},attrs:{"points":"30.74 13.02 22.97 38.44 22.8 38.44 30.57 13.02 30.74 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#623ce5"},attrs:{"points":"30.9 13.02 23.13 38.44 22.97 38.44 30.74 13.02 30.9 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633ce6"},attrs:{"points":"31.07 13.02 23.3 38.44 23.13 38.44 30.9 13.02 31.07 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643de7"},attrs:{"points":"31.24 13.02 23.47 38.44 23.3 38.44 31.07 13.02 31.24 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653de8"},attrs:{"points":"31.41 13.02 23.64 38.44 23.47 38.44 31.24 13.02 31.41 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#663ee9"},attrs:{"points":"31.57 13.02 23.8 38.44 23.64 38.44 31.41 13.02 31.57 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673eea"},attrs:{"points":"31.74 13.02 23.97 38.44 23.8 38.44 31.57 13.02 31.74 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#683eeb"},attrs:{"points":"31.91 13.02 24.14 38.44 23.97 38.44 31.74 13.02 31.91 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693feb"},attrs:{"points":"32.03 13.15 24.3 38.44 24.14 38.44 31.91 13.02 32.03 13.02 32.03 13.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6a3fec"},attrs:{"points":"32.03 13.7 24.47 38.44 24.3 38.44 32.03 13.15 32.03 13.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6b40ed"},attrs:{"points":"32.03 14.24 24.64 38.44 24.47 38.44 32.03 13.7 32.03 14.24"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c40ee"},attrs:{"points":"32.03 14.79 24.81 38.44 24.64 38.44 32.03 14.24 32.03 14.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6d41ef"},attrs:{"points":"32.03 15.34 24.97 38.44 24.81 38.44 32.03 14.79 32.03 15.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e41f0"},attrs:{"points":"32.03 15.88 25.14 38.44 24.97 38.44 32.03 15.34 32.03 15.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6f42f0"},attrs:{"points":"32.03 16.43 25.31 38.44 25.14 38.44 32.03 15.88 32.03 16.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7042f1"},attrs:{"points":"32.03 16.98 25.48 38.44 25.31 38.44 32.03 16.43 32.03 16.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7143f2"},attrs:{"points":"32.03 17.52 25.64 38.44 25.48 38.44 32.03 16.98 32.03 17.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7243f3"},attrs:{"points":"32.03 18.07 25.81 38.44 25.64 38.44 32.03 17.52 32.03 18.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7344f4"},attrs:{"points":"32.03 18.62 25.98 38.44 25.81 38.44 32.03 18.07 32.03 18.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7444f5"},attrs:{"points":"32.03 19.16 26.14 38.44 25.98 38.44 32.03 18.62 32.03 19.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7545f6"},attrs:{"points":"32.03 19.71 26.31 38.44 26.14 38.44 32.03 19.16 32.03 19.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7645f6"},attrs:{"points":"32.03 20.26 26.48 38.44 26.31 38.44 32.03 19.71 32.03 20.26"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7746f7"},attrs:{"points":"32.03 20.81 26.64 38.44 26.48 38.44 32.03 20.26 32.03 20.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7846f8"},attrs:{"points":"32.03 21.35 26.81 38.44 26.64 38.44 32.03 20.81 32.03 21.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7947f9"},attrs:{"points":"32.03 21.9 26.98 38.44 26.81 38.44 32.03 21.35 32.03 21.9"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7a47fa"},attrs:{"points":"32.03 22.45 27.15 38.44 26.98 38.44 32.03 21.9 32.03 22.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7b48fb"},attrs:{"points":"32.03 22.99 27.31 38.44 27.15 38.44 32.03 22.45 32.03 22.99"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7c48fc"},attrs:{"points":"32.03 23.54 27.48 38.44 27.31 38.44 32.03 22.99 32.03 23.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7d49fc"},attrs:{"points":"32.03 24.09 27.65 38.44 27.48 38.44 32.03 23.54 32.03 24.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7e49fd"},attrs:{"points":"32.03 24.64 27.82 38.44 27.65 38.44 32.03 24.09 32.03 24.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#7f4afe"},attrs:{"points":"32.03 25.18 27.98 38.44 27.82 38.44 32.03 24.64 32.03 25.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#804aff"},attrs:{"points":"32.03 25.73 28.15 38.44 27.98 38.44 32.03 25.18 32.03 25.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#804aff"},attrs:{"points":"28.15 38.44 32.03 25.73 32.03 38.44 28.15 38.44"}})]),_vm._v(" "),_c('g',{staticStyle:{"clip-path":"url(#o)"}},[_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"6.62 13.03 10.74 19.38 6.62 19.38 6.62 13.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f73f9e"},attrs:{"points":"6.62 12.34 11.19 19.38 10.74 19.38 6.62 13.03 6.62 12.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f7409f"},attrs:{"points":"6.62 11.65 11.64 19.38 11.19 19.38 6.62 12.34 6.62 11.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f740a0"},attrs:{"points":"6.62 10.96 12.08 19.38 11.64 19.38 6.62 11.65 6.62 10.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f741a1"},attrs:{"points":"6.62 10.28 12.53 19.38 12.08 19.38 6.62 10.96 6.62 10.28"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a2"},attrs:{"points":"6.62 9.59 12.97 19.38 12.53 19.38 6.62 10.28 6.62 9.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f742a3"},attrs:{"points":"6.62 8.9 13.42 19.38 12.97 19.38 6.62 9.59 6.62 8.9"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f743a4"},attrs:{"points":"6.62 8.22 13.87 19.38 13.42 19.38 6.62 8.9 6.62 8.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f744a5"},attrs:{"points":"6.62 7.65 6.67 7.62 14.31 19.38 13.87 19.38 6.62 8.22 6.62 7.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f845a6"},attrs:{"points":"6.67 7.62 6.99 7.41 14.65 19.21 14.39 19.38 14.31 19.38 6.67 7.62"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f845a7"},attrs:{"x":"10.79","y":"6.18","width":"0.37","height":"14.06","transform":"translate(-5.42 8.11) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f846a8"},attrs:{"x":"11.1","y":"5.97","width":"0.37","height":"14.06","transform":"matrix(0.84, -0.54, 0.54, 0.84, -5.26, 8.25)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f847a9"},attrs:{"x":"11.41","y":"5.77","width":"0.37","height":"14.06","transform":"translate(-5.1 8.39) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f847aa"},attrs:{"x":"11.73","y":"5.56","width":"0.37","height":"14.06","transform":"translate(-4.94 8.52) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f848ab"},attrs:{"x":"12.04","y":"5.36","width":"0.37","height":"14.06","transform":"translate(-4.78 8.66) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f849ac"},attrs:{"x":"12.36","y":"5.16","width":"0.37","height":"14.06","transform":"translate(-4.62 8.8) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f849ad"},attrs:{"x":"12.67","y":"4.95","width":"0.37","height":"14.06","transform":"translate(-4.45 8.94) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84aae"},attrs:{"x":"12.98","y":"4.75","width":"0.37","height":"14.06","transform":"translate(-4.29 9.08) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84baf"},attrs:{"x":"13.3","y":"4.55","width":"0.37","height":"14.06","transform":"translate(-4.13 9.21) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84cb0"},attrs:{"x":"13.61","y":"4.34","width":"0.37","height":"14.06","transform":"translate(-3.97 9.35) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84cb1"},attrs:{"x":"13.92","y":"4.14","width":"0.37","height":"14.06","transform":"translate(-3.81 9.49) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84db2"},attrs:{"x":"14.24","y":"3.93","width":"0.37","height":"14.06","transform":"translate(-3.65 9.63) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84eb3"},attrs:{"x":"14.55","y":"3.73","width":"0.37","height":"14.06","transform":"translate(-3.48 9.77) rotate(-33.01)"}}),_vm._v(" "),_c('rect',{staticStyle:{"fill":"#f84eb4"},attrs:{"x":"14.87","y":"3.53","width":"0.37","height":"14.06","transform":"translate(-3.32 9.9) rotate(-33.01)"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f94fb6"},attrs:{"points":"11.38 4.56 11.69 4.36 19.33 16.11 19.33 16.17 19.04 16.35 11.38 4.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b7"},attrs:{"points":"11.69 4.36 12.01 4.15 19.33 15.42 19.33 16.11 11.69 4.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f950b8"},attrs:{"points":"12.01 4.15 12.32 3.95 19.33 14.74 19.33 15.42 12.01 4.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f951b9"},attrs:{"points":"12.32 3.95 12.63 3.75 19.33 14.05 19.33 14.74 12.32 3.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952ba"},attrs:{"points":"12.63 3.75 12.95 3.54 19.33 13.36 19.33 14.05 12.63 3.75"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f952bb"},attrs:{"points":"12.95 3.54 13.26 3.34 19.33 12.68 19.33 13.36 12.95 3.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f953bc"},attrs:{"points":"13.26 3.34 13.57 3.13 19.33 11.99 19.33 12.68 13.26 3.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f954bd"},attrs:{"points":"13.57 3.13 13.89 2.93 19.33 11.3 19.33 11.99 13.57 3.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955be"},attrs:{"points":"13.89 2.93 14.2 2.73 19.33 10.62 19.33 11.3 13.89 2.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f955bf"},attrs:{"points":"14.2 2.73 14.52 2.52 19.33 9.93 19.33 10.62 14.2 2.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f956c0"},attrs:{"points":"14.52 2.52 14.83 2.32 19.33 9.24 19.33 9.93 14.52 2.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c1"},attrs:{"points":"14.83 2.32 15.14 2.12 19.33 8.56 19.33 9.24 14.83 2.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f957c2"},attrs:{"points":"15.14 2.12 15.46 1.91 19.33 7.87 19.33 8.56 15.14 2.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f958c3"},attrs:{"points":"15.46 1.91 15.77 1.71 19.33 7.18 19.33 7.87 15.46 1.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c4"},attrs:{"points":"15.77 1.71 16.08 1.5 19.33 6.5 19.33 7.18 15.77 1.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#f959c5"},attrs:{"points":"16.08 1.5 16.4 1.3 19.33 5.81 19.33 6.5 16.08 1.5"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ac6"},attrs:{"points":"16.4 1.3 16.71 1.1 19.33 5.12 19.33 5.81 16.4 1.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5bc7"},attrs:{"points":"16.71 1.1 17.02 0.89 19.33 4.44 19.33 5.12 16.71 1.1"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc8"},attrs:{"points":"17.02 0.89 17.34 0.69 19.33 3.75 19.33 4.44 17.02 0.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5cc9"},attrs:{"points":"17.34 0.69 17.65 0.48 19.33 3.06 19.33 3.75 17.34 0.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5dca"},attrs:{"points":"17.65 0.48 17.91 0.32 17.99 0.32 19.33 2.38 19.33 3.06 17.65 0.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecb"},attrs:{"points":"18.43 0.32 19.33 1.69 19.33 2.38 17.99 0.32 18.43 0.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5ecc"},attrs:{"points":"18.88 0.32 19.33 1 19.33 1.69 18.43 0.32 18.88 0.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fa5fcd"},attrs:{"points":"19.33 0.32 19.33 0.32 19.33 1 18.88 0.32 19.33 0.32"}})]),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fff"},attrs:{"points":"6.53 25.8 6.44 25.8 6.53 25.8 6.53 25.8"}}),_vm._v(" "),_c('g',{staticStyle:{"opacity":"0.150000005960464","isolation":"isolate"}},[_c('path',{staticStyle:{"fill":"#fff"},attrs:{"d":"M19.38,38.75l-.05,0,0,0v-.1L6.53,25.91h0L0,19.38l6.44-6.44v-.1l0,.05L19.28.1V0l0,.05.05,0V.1L32.17,12.89l0-.05v.1l6.44,6.44L19.38,38.65Zm-12.84-13L19.28,38.52V25.81L6.54,13.07Zm12.84,0V38.52L32.12,25.77V13.07ZM13,19.38l6.35,6.35,6.35-6.35L19.33,13Zm19.23-6.31V25.68l6.31-6.3ZM.14,19.38l6.3,6.3V13.08ZM6.56,13l6.35,6.35,6.37-6.37V.23Zm12.82,0,6.37,6.37L32.1,13,19.38.23Z"}})]),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#fff"},attrs:{"points":"12.96 19.38 12.86 19.38 12.96 19.38 12.96 19.38"}})])]),_vm._v(" "),_c('g',{staticClass:"logo-text",staticStyle:{"clip-path":"url(#h)"}},[_c('polygon',{staticStyle:{"fill":"#281b77"},attrs:{"points":"123.54 16.41 123.29 16.66 123.29 16.41 123.54 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b76"},attrs:{"points":"124.29 16.41 123.29 17.41 123.29 16.66 123.54 16.41 124.29 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#271a75"},attrs:{"points":"125.04 16.41 123.29 18.16 123.29 17.41 124.29 16.41 125.04 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a74"},attrs:{"points":"125.79 16.41 123.29 18.92 123.29 18.16 125.04 16.41 125.79 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a73"},attrs:{"points":"126.55 16.41 123.29 19.67 123.29 18.92 125.79 16.41 126.55 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#251972"},attrs:{"points":"127.3 16.41 123.29 20.42 123.29 19.67 126.55 16.41 127.3 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#241971"},attrs:{"points":"128.05 16.41 123.29 21.17 123.29 20.42 127.3 16.41 128.05 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#231870"},attrs:{"points":"128.8 16.41 123.29 21.92 123.29 21.17 128.05 16.41 128.8 16.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#23186f"},attrs:{"points":"128.89 17.07 123.29 22.68 123.29 21.92 128.8 16.41 128.89 16.41 128.89 17.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#22186e"},attrs:{"points":"128.89 17.82 123.29 23.43 123.29 22.68 128.89 17.07 128.89 17.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176d"},attrs:{"points":"128.89 18.57 123.29 24.18 123.29 23.43 128.89 17.82 128.89 18.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176c"},attrs:{"points":"128.89 19.32 123.29 24.93 123.29 24.18 128.89 18.57 128.89 19.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#20176b"},attrs:{"points":"128.89 20.08 123.51 25.46 123.29 25.46 123.29 24.93 128.89 19.32 128.89 20.08"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f166a"},attrs:{"points":"128.89 20.83 124.26 25.46 123.51 25.46 128.89 20.08 128.89 20.83"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f1669"},attrs:{"points":"128.89 21.58 125.01 25.46 124.26 25.46 128.89 20.83 128.89 21.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1e1568"},attrs:{"points":"128.89 22.33 125.76 25.46 125.01 25.46 128.89 21.58 128.89 22.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1d1567"},attrs:{"points":"128.89 23.08 126.52 25.46 125.76 25.46 128.89 22.33 128.89 23.08"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1566"},attrs:{"points":"128.89 23.83 127.27 25.46 126.52 25.46 128.89 23.08 128.89 23.83"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1465"},attrs:{"points":"128.89 24.59 128.02 25.46 127.27 25.46 128.89 23.83 128.89 24.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"128.89 25.34 128.77 25.46 128.02 25.46 128.89 24.59 128.89 25.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"128.77 25.46 128.89 25.34 128.89 25.46 128.77 25.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1e7e"},attrs:{"points":"122.8 11.89 122.22 12.46 122.22 11.89 122.8 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1d7d"},attrs:{"points":"123.55 11.89 122.22 13.21 122.22 12.46 122.8 11.89 123.55 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2c1d7c"},attrs:{"points":"124.3 11.89 122.22 13.96 122.22 13.21 123.55 11.89 124.3 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2b1c7b"},attrs:{"points":"125.05 11.89 122.22 14.72 122.22 13.96 124.3 11.89 125.05 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c7a"},attrs:{"points":"125.81 11.89 122.22 15.47 122.22 14.72 125.05 11.89 125.81 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c79"},attrs:{"points":"126.56 11.89 122.22 16.22 122.22 15.47 125.81 11.89 126.56 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#291b78"},attrs:{"points":"126.78 11.89 127.05 12.15 122.22 16.97 122.22 16.22 126.56 11.89 126.78 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b77"},attrs:{"points":"127.05 12.15 127.42 12.53 122.22 17.72 122.22 16.97 127.05 12.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b76"},attrs:{"points":"127.42 12.53 127.8 12.9 122.22 18.48 122.22 17.72 127.42 12.53"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#271a75"},attrs:{"points":"127.8 12.9 128.17 13.28 122.22 19.23 122.22 18.48 127.8 12.9"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a74"},attrs:{"points":"128.17 13.28 128.55 13.65 122.22 19.98 122.22 19.23 128.17 13.28"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a73"},attrs:{"points":"128.55 13.65 128.93 14.03 122.22 20.73 122.22 19.98 128.55 13.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#251972"},attrs:{"points":"128.93 14.03 129.3 14.4 122.22 21.48 122.22 20.73 128.93 14.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#241971"},attrs:{"points":"129.3 14.4 129.68 14.78 122.22 22.23 122.22 21.48 129.3 14.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#231870"},attrs:{"points":"129.68 14.78 130.01 15.11 130.01 15.2 122.22 22.98 122.22 22.23 129.68 14.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#23186f"},attrs:{"points":"130.01 15.95 122.22 23.74 122.22 22.98 130.01 15.2 130.01 15.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#22186e"},attrs:{"points":"130.01 16.7 122.22 24.49 122.22 23.74 130.01 15.95 130.01 16.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176d"},attrs:{"points":"130.01 17.45 122.22 25.24 122.22 24.49 130.01 16.7 130.01 17.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#21176c"},attrs:{"points":"130.01 18.2 122.22 25.99 122.22 25.24 130.01 17.45 130.01 18.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#20176b"},attrs:{"points":"130.01 18.96 122.53 26.43 122.22 26.43 122.22 25.99 130.01 18.2 130.01 18.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f166a"},attrs:{"points":"130.01 19.71 123.28 26.43 122.53 26.43 130.01 18.96 130.01 19.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1f1669"},attrs:{"points":"130.01 20.46 124.04 26.43 123.28 26.43 130.01 19.71 130.01 20.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1e1568"},attrs:{"points":"130.01 21.21 124.79 26.43 124.04 26.43 130.01 20.46 130.01 21.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1d1567"},attrs:{"points":"130.01 21.96 125.54 26.43 124.79 26.43 130.01 21.21 130.01 21.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1566"},attrs:{"points":"130.01 22.71 126.29 26.43 125.54 26.43 130.01 21.96 130.01 22.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1c1465"},attrs:{"points":"130.01 23.47 127.04 26.43 126.29 26.43 130.01 22.71 130.01 23.47"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"130.01 24.22 127.79 26.43 127.04 26.43 130.01 23.47 130.01 24.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#1b1464"},attrs:{"points":"127.79 26.43 130.01 24.22 130.01 26.43 127.79 26.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#332086"},attrs:{"points":"113.24 15.43 112.63 16.04 112.63 15.43 113.24 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#322085"},attrs:{"points":"113.99 15.43 112.63 16.8 112.63 16.04 113.24 15.43 113.99 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#312084"},attrs:{"points":"114.75 15.43 112.63 17.55 112.63 16.8 113.99 15.43 114.75 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#311f83"},attrs:{"points":"115.5 15.43 112.63 18.3 112.63 17.55 114.75 15.43 115.5 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#301f82"},attrs:{"points":"116.25 15.43 112.63 19.05 112.63 18.3 115.5 15.43 116.25 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1f81"},attrs:{"points":"117 15.43 112.63 19.8 112.63 19.05 116.25 15.43 117 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1e80"},attrs:{"points":"117.75 15.43 112.63 20.55 112.63 19.8 117 15.43 117.75 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2e1e7f"},attrs:{"points":"118.5 15.43 112.63 21.3 112.63 20.55 117.75 15.43 118.5 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1e7e"},attrs:{"points":"119.25 15.43 112.63 22.06 112.63 21.3 118.5 15.43 119.25 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1d7d"},attrs:{"points":"119.98 15.46 112.63 22.81 112.63 22.06 119.25 15.43 119.98 15.43 119.98 15.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2c1d7c"},attrs:{"points":"119.98 16.21 112.63 23.56 112.63 22.81 119.98 15.46 119.98 16.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2b1c7b"},attrs:{"points":"119.98 16.96 112.63 24.31 112.63 23.56 119.98 16.21 119.98 16.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c7a"},attrs:{"points":"119.98 17.71 112.63 25.06 112.63 24.31 119.98 16.96 119.98 17.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2a1c79"},attrs:{"points":"119.98 18.46 112.63 25.82 112.63 25.06 119.98 17.71 119.98 18.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#291b78"},attrs:{"points":"119.98 19.22 112.76 26.43 112.63 26.43 112.63 25.82 119.98 18.46 119.98 19.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b77"},attrs:{"points":"119.98 19.97 113.51 26.43 112.76 26.43 119.98 19.22 119.98 19.97"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#281b76"},attrs:{"points":"119.98 20.72 114.27 26.43 113.51 26.43 119.98 19.97 119.98 20.72"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#271a75"},attrs:{"points":"119.98 21.47 115.02 26.43 114.27 26.43 119.98 20.72 119.98 21.47"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a74"},attrs:{"points":"119.98 22.22 115.77 26.43 115.02 26.43 119.98 21.47 119.98 22.22"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#261a73"},attrs:{"points":"119.98 22.98 116.52 26.43 115.77 26.43 119.98 22.22 119.98 22.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#251972"},attrs:{"points":"119.98 23.73 117.27 26.43 116.52 26.43 119.98 22.98 119.98 23.73"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#241971"},attrs:{"points":"119.98 24.48 118.02 26.43 117.27 26.43 119.98 23.73 119.98 24.48"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#231870"},attrs:{"points":"119.98 25.23 118.78 26.43 118.02 26.43 119.98 24.48 119.98 25.23"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#23186f"},attrs:{"points":"119.98 25.98 119.53 26.43 118.78 26.43 119.98 25.23 119.98 25.98"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#22186e"},attrs:{"points":"119.53 26.43 119.98 25.98 119.98 26.43 119.53 26.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42289b"},attrs:{"points":"101 11.89 100.66 12.23 100.66 11.89 101 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#41289a"},attrs:{"points":"101.76 11.89 100.66 12.98 100.66 12.23 101 11.89 101.76 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402799"},attrs:{"points":"102.51 11.89 100.66 13.73 100.66 12.98 101.76 11.89 102.51 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2798"},attrs:{"points":"103.26 11.89 100.66 14.48 100.66 13.73 102.51 11.89 103.26 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2797"},attrs:{"points":"104.01 11.89 100.66 15.23 100.66 14.48 103.26 11.89 104.01 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3e2696"},attrs:{"points":"104.76 11.89 100.66 15.99 100.66 15.23 104.01 11.89 104.76 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2695"},attrs:{"points":"105.51 11.89 100.66 16.74 100.66 15.99 104.76 11.89 105.51 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2694"},attrs:{"points":"106.27 11.89 100.66 17.49 100.66 16.74 105.51 11.89 106.27 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2593"},attrs:{"points":"107.02 11.89 100.66 18.24 100.66 17.49 106.27 11.89 107.02 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2592"},attrs:{"points":"107.77 11.89 100.66 18.99 100.66 18.24 107.02 11.89 107.77 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2591"},attrs:{"points":"108.52 11.89 100.66 19.74 100.66 18.99 107.77 11.89 108.52 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3a2490"},attrs:{"points":"109.27 11.89 100.66 20.5 100.66 19.74 108.52 11.89 109.27 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#39248f"},attrs:{"points":"110.02 11.89 100.66 21.25 100.66 20.5 109.27 11.89 110.02 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238e"},attrs:{"points":"110.06 12.6 100.66 22 100.66 21.25 110.02 11.89 110.06 11.89 110.06 12.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238d"},attrs:{"points":"110.06 13.36 100.66 22.75 100.66 22 110.06 12.6 110.06 13.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#37238c"},attrs:{"points":"110.06 14.11 100.66 23.5 100.66 22.75 110.06 13.36 110.06 14.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228b"},attrs:{"points":"110.06 14.86 100.66 24.25 100.66 23.5 110.06 14.11 110.06 14.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228a"},attrs:{"points":"110.06 15.61 100.66 25.01 100.66 24.25 110.06 14.86 110.06 15.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#352289"},attrs:{"points":"110.06 16.36 100.66 25.76 100.66 25.01 110.06 15.61 110.06 16.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#342188"},attrs:{"points":"110.06 17.11 100.75 26.42 100.66 26.42 100.66 25.76 110.06 16.36 110.06 17.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#342187"},attrs:{"points":"110.06 17.87 101.5 26.42 100.75 26.42 110.06 17.11 110.06 17.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#332086"},attrs:{"points":"110.06 18.62 102.26 26.42 101.5 26.42 110.06 17.87 110.06 18.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#322085"},attrs:{"points":"110.06 19.37 103.01 26.42 102.26 26.42 110.06 18.62 110.06 19.37"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#312084"},attrs:{"points":"110.06 20.12 103.76 26.42 103.01 26.42 110.06 19.37 110.06 20.12"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#311f83"},attrs:{"points":"110.06 20.87 104.51 26.42 103.76 26.42 110.06 20.12 110.06 20.87"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#301f82"},attrs:{"points":"110.06 21.62 105.26 26.42 104.51 26.42 110.06 20.87 110.06 21.62"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1f81"},attrs:{"points":"110.06 22.38 106.01 26.42 105.26 26.42 110.06 21.62 110.06 22.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2f1e80"},attrs:{"points":"110.06 23.13 106.77 26.42 106.01 26.42 110.06 22.38 110.06 23.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2e1e7f"},attrs:{"points":"110.06 23.88 107.52 26.42 106.77 26.42 110.06 23.13 110.06 23.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1e7e"},attrs:{"points":"110.06 24.63 108.27 26.42 107.52 26.42 110.06 23.88 110.06 24.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2d1d7d"},attrs:{"points":"110.06 25.38 109.02 26.42 108.27 26.42 110.06 24.63 110.06 25.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2c1d7c"},attrs:{"points":"110.06 26.13 109.77 26.42 109.02 26.42 110.06 25.38 110.06 26.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#2b1c7b"},attrs:{"points":"109.77 26.42 110.06 26.13 110.06 26.42 109.77 26.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#452aa1"},attrs:{"points":"93.72 15.42 93.1 16.03 93.1 15.42 93.72 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#442a9f"},attrs:{"points":"94.47 15.42 93.1 16.78 93.1 16.03 93.72 15.42 94.47 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#44299e"},attrs:{"points":"95.22 15.42 93.1 17.54 93.1 16.78 94.47 15.42 95.22 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#43299d"},attrs:{"points":"95.97 15.42 93.1 18.29 93.1 17.54 95.22 15.42 95.97 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42299c"},attrs:{"points":"96.72 15.42 93.1 19.04 93.1 18.29 95.97 15.42 96.72 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42289b"},attrs:{"points":"97.47 15.42 93.1 19.79 93.1 19.04 96.72 15.42 97.47 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#41289a"},attrs:{"points":"98.23 15.42 93.1 20.54 93.1 19.79 97.47 15.42 98.23 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402799"},attrs:{"points":"98.98 15.42 93.1 21.29 93.1 20.54 98.23 15.42 98.98 15.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2798"},attrs:{"points":"99.5 15.65 93.1 22.05 93.1 21.29 98.98 15.42 99.5 15.42 99.5 15.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2797"},attrs:{"points":"99.5 16.4 93.1 22.8 93.1 22.05 99.5 15.65 99.5 16.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3e2696"},attrs:{"points":"99.5 17.15 93.1 23.55 93.1 22.8 99.5 16.4 99.5 17.15"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2695"},attrs:{"points":"99.5 17.9 93.1 24.3 93.1 23.55 99.5 17.15 99.5 17.9"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2694"},attrs:{"points":"99.5 18.65 93.21 24.94 93.1 24.83 93.1 24.3 99.5 17.9 99.5 18.65"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2593"},attrs:{"points":"99.5 19.41 93.59 25.32 93.21 24.94 99.5 18.65 99.5 19.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2592"},attrs:{"points":"99.5 20.16 93.96 25.69 93.59 25.32 99.5 19.41 99.5 20.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3b2591"},attrs:{"points":"99.5 20.91 94.34 26.07 93.96 25.69 99.5 20.16 99.5 20.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3a2490"},attrs:{"points":"99.5 21.66 94.74 26.42 94.69 26.42 94.34 26.07 99.5 20.91 99.5 21.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#39248f"},attrs:{"points":"99.5 22.41 95.49 26.42 94.74 26.42 99.5 21.66 99.5 22.41"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238e"},attrs:{"points":"99.5 23.16 96.24 26.42 95.49 26.42 99.5 22.41 99.5 23.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#38238d"},attrs:{"points":"99.5 23.92 97 26.42 96.24 26.42 99.5 23.16 99.5 23.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#37238c"},attrs:{"points":"99.5 24.67 97.75 26.42 97 26.42 99.5 23.92 99.5 24.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228b"},attrs:{"points":"99.5 25.42 98.5 26.42 97.75 26.42 99.5 24.67 99.5 25.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#36228a"},attrs:{"points":"99.5 26.17 99.25 26.42 98.5 26.42 99.5 25.42 99.5 26.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#352289"},attrs:{"points":"99.25 26.42 99.5 26.17 99.5 26.42 99.25 26.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4c2eab"},attrs:{"points":"89.73 11.89 89.2 12.42 89.2 11.89 89.73 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2daa"},attrs:{"points":"90.48 11.89 89.2 13.17 89.2 12.42 89.73 11.89 90.48 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2da9"},attrs:{"points":"91.23 11.89 89.2 13.92 89.2 13.17 90.48 11.89 91.23 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4a2da8"},attrs:{"points":"91.98 11.89 89.2 14.67 89.2 13.92 91.23 11.89 91.98 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca7"},attrs:{"points":"92.44 12.19 89.2 15.42 89.2 14.67 91.98 11.89 92.44 11.89 92.44 12.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca6"},attrs:{"points":"92.44 12.94 89.2 16.17 89.2 15.42 92.44 12.19 92.44 12.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#482ba5"},attrs:{"points":"92.44 13.69 89.2 16.93 89.2 16.17 92.44 12.94 92.44 13.69"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#472ba4"},attrs:{"points":"92.44 14.44 89.2 17.68 89.2 16.93 92.44 13.69 92.44 14.44"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462ba3"},attrs:{"points":"92.44 15.19 89.2 18.43 89.2 17.68 92.44 14.44 92.44 15.19"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462aa2"},attrs:{"points":"92.44 15.94 89.2 19.18 89.2 18.43 92.44 15.19 92.44 15.94"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#452aa1"},attrs:{"points":"92.44 16.7 89.2 19.93 89.2 19.18 92.44 15.94 92.44 16.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#442a9f"},attrs:{"points":"92.44 17.45 89.2 20.68 89.2 19.93 92.44 16.7 92.44 17.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#44299e"},attrs:{"points":"92.44 18.2 89.2 21.44 89.2 20.68 92.44 17.45 92.44 18.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#43299d"},attrs:{"points":"92.44 18.95 89.2 22.19 89.2 21.44 92.44 18.2 92.44 18.95"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42299c"},attrs:{"points":"92.44 19.7 89.2 22.94 89.2 22.19 92.44 18.95 92.44 19.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42289b"},attrs:{"points":"92.44 20.45 89.2 23.69 89.2 22.94 92.44 19.7 92.44 20.45"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#41289a"},attrs:{"points":"92.44 21.2 89.2 24.44 89.2 23.69 92.44 20.45 92.44 21.2"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402799"},attrs:{"points":"92.44 21.96 89.2 25.19 89.2 24.44 92.44 21.2 92.44 21.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2798"},attrs:{"points":"92.44 22.71 89.2 25.95 89.2 25.19 92.44 21.96 92.44 22.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3f2797"},attrs:{"points":"92.44 23.46 89.48 26.42 89.2 26.42 89.2 25.95 92.44 22.71 92.44 23.46"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3e2696"},attrs:{"points":"92.44 24.21 90.23 26.42 89.48 26.42 92.44 23.46 92.44 24.21"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2695"},attrs:{"points":"92.44 24.96 90.98 26.42 90.23 26.42 92.44 24.21 92.44 24.96"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3d2694"},attrs:{"points":"92.44 25.71 91.73 26.42 90.98 26.42 92.44 24.96 92.44 25.71"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#3c2593"},attrs:{"points":"91.73 26.42 92.44 25.71 92.44 26.42 91.73 26.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b3"},attrs:{"points":"80.17 15.43 79.67 15.93 79.67 15.43 80.17 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5130b2"},attrs:{"points":"80.92 15.43 79.67 16.68 79.67 15.93 80.17 15.43 80.92 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b1"},attrs:{"points":"81.68 15.43 79.67 17.44 79.67 16.68 80.92 15.43 81.68 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b0"},attrs:{"points":"82.43 15.43 79.67 18.19 79.67 17.44 81.68 15.43 82.43 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f2faf"},attrs:{"points":"83.18 15.43 79.67 18.94 79.67 18.19 82.43 15.43 83.18 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e2fae"},attrs:{"points":"83.93 15.43 79.67 19.69 79.67 18.94 83.18 15.43 83.93 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2ead"},attrs:{"points":"84.68 15.43 79.67 20.44 79.67 19.69 83.93 15.43 84.68 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2eac"},attrs:{"points":"85.43 15.43 79.67 21.19 79.67 20.44 84.68 15.43 85.43 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4c2eab"},attrs:{"points":"86.19 15.43 79.67 21.95 79.67 21.19 85.43 15.43 86.19 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2daa"},attrs:{"points":"86.94 15.43 79.67 22.7 79.67 21.95 86.19 15.43 86.94 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2da9"},attrs:{"points":"87.69 15.43 79.67 23.45 79.67 22.7 86.94 15.43 87.69 15.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4a2da8"},attrs:{"points":"87.96 15.91 79.67 24.2 79.67 23.45 87.69 15.43 87.96 15.43 87.96 15.91"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca7"},attrs:{"points":"87.96 16.66 79.67 24.95 79.67 24.2 87.96 15.91 87.96 16.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca6"},attrs:{"points":"87.96 17.42 79.67 25.7 79.67 24.95 87.96 16.66 87.96 17.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#482ba5"},attrs:{"points":"87.96 18.17 79.71 26.42 79.67 26.42 79.67 25.7 87.96 17.42 87.96 18.17"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#472ba4"},attrs:{"points":"87.96 18.92 80.46 26.42 79.71 26.42 87.96 18.17 87.96 18.92"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462ba3"},attrs:{"points":"87.96 19.67 81.21 26.42 80.46 26.42 87.96 18.92 87.96 19.67"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#462aa2"},attrs:{"points":"87.96 20.42 81.96 26.42 81.21 26.42 87.96 19.67 87.96 20.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#452aa1"},attrs:{"points":"87.96 21.18 82.72 26.42 81.96 26.42 87.96 20.42 87.96 21.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#442a9f"},attrs:{"points":"87.96 21.93 83.47 26.42 82.72 26.42 87.96 21.18 87.96 21.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#44299e"},attrs:{"points":"87.96 22.68 84.22 26.42 83.47 26.42 87.96 21.93 87.96 22.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#43299d"},attrs:{"points":"87.96 23.43 84.97 26.42 84.22 26.42 87.96 22.68 87.96 23.43"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42299c"},attrs:{"points":"87.96 24.18 85.72 26.42 84.97 26.42 87.96 23.43 87.96 24.18"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#42289b"},attrs:{"points":"87.96 24.93 86.47 26.42 85.72 26.42 87.96 24.18 87.96 24.93"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#41289a"},attrs:{"points":"87.96 25.68 87.22 26.42 86.47 26.42 87.96 24.93 87.96 25.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#402799"},attrs:{"points":"87.22 26.42 87.96 25.68 87.96 26.42 87.22 26.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5734bb"},attrs:{"points":"71.91 17.68 71.24 18.35 71.24 17.68 71.91 17.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5733ba"},attrs:{"points":"72.66 17.68 71.24 19.11 71.24 18.35 71.91 17.68 72.66 17.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5633b9"},attrs:{"points":"73.41 17.68 71.24 19.86 71.24 19.11 72.66 17.68 73.41 17.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5532b8"},attrs:{"points":"74.17 17.68 71.24 20.61 71.24 19.86 73.41 17.68 74.17 17.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b7"},attrs:{"points":"74.92 17.68 71.24 21.36 71.24 20.61 74.17 17.68 74.92 17.68"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b6"},attrs:{"points":"75.22 18.13 71.24 22.11 71.24 21.36 74.92 17.68 75.22 17.68 75.22 18.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5331b5"},attrs:{"points":"75.22 18.88 71.24 22.86 71.24 22.11 75.22 18.13 75.22 18.88"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b4"},attrs:{"points":"75.22 19.63 71.24 23.61 71.24 22.86 75.22 18.88 75.22 19.63"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b3"},attrs:{"points":"75.22 20.38 71.45 24.16 71.24 24.16 71.24 23.61 75.22 19.63 75.22 20.38"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5130b2"},attrs:{"points":"75.22 21.13 72.2 24.16 71.45 24.16 75.22 20.38 75.22 21.13"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b1"},attrs:{"points":"75.22 21.89 72.95 24.16 72.2 24.16 75.22 21.13 75.22 21.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b0"},attrs:{"points":"75.22 22.64 73.7 24.16 72.95 24.16 75.22 21.89 75.22 22.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f2faf"},attrs:{"points":"75.22 23.39 74.45 24.16 73.7 24.16 75.22 22.64 75.22 23.39"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e2fae"},attrs:{"points":"75.22 24.14 75.2 24.16 74.45 24.16 75.22 23.39 75.22 24.14"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2ead"},attrs:{"points":"75.2 24.16 75.22 24.14 75.22 24.16 75.2 24.16"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5d36c3"},attrs:{"points":"68.29 15.29 67.92 15.66 67.92 15.29 68.29 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5c36c2"},attrs:{"points":"69.04 15.29 67.92 16.41 67.92 15.66 68.29 15.29 69.04 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b36c1"},attrs:{"points":"69.79 15.29 67.92 17.17 67.92 16.41 69.04 15.29 69.79 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b35c0"},attrs:{"points":"70.54 15.29 67.92 17.92 67.92 17.17 69.79 15.29 70.54 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5a35bf"},attrs:{"points":"71.29 15.29 67.92 18.67 67.92 17.92 70.54 15.29 71.29 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5935be"},attrs:{"points":"72.04 15.29 67.92 19.42 67.92 18.67 71.29 15.29 72.04 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5934bd"},attrs:{"points":"72.8 15.29 67.92 20.17 67.92 19.42 72.04 15.29 72.8 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5834bc"},attrs:{"points":"73.55 15.29 67.92 20.92 67.92 20.17 72.8 15.29 73.55 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5734bb"},attrs:{"points":"74.3 15.29 67.92 21.68 67.92 20.92 73.55 15.29 74.3 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5733ba"},attrs:{"points":"75.05 15.29 67.92 22.43 67.92 21.68 74.3 15.29 75.05 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5633b9"},attrs:{"points":"75.8 15.29 67.92 23.18 67.92 22.43 75.05 15.29 75.8 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5532b8"},attrs:{"points":"76.55 15.29 67.92 23.93 67.92 23.18 75.8 15.29 76.55 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b7"},attrs:{"points":"77.31 15.29 67.92 24.68 67.92 23.93 76.55 15.29 77.31 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b6"},attrs:{"points":"78.06 15.29 67.92 25.43 67.92 24.68 77.31 15.29 78.06 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5331b5"},attrs:{"points":"78.48 15.29 78.55 15.36 78.55 15.56 67.92 26.18 67.92 25.43 78.06 15.29 78.48 15.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b4"},attrs:{"points":"78.55 16.31 68.31 26.55 67.98 26.55 67.92 26.48 67.92 26.18 78.55 15.56 78.55 16.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5231b3"},attrs:{"points":"78.55 17.06 69.06 26.55 68.31 26.55 78.55 16.31 78.55 17.06"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5130b2"},attrs:{"points":"78.55 17.81 69.81 26.55 69.06 26.55 78.55 17.06 78.55 17.81"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b1"},attrs:{"points":"78.55 18.56 70.56 26.55 69.81 26.55 78.55 17.81 78.55 18.56"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5030b0"},attrs:{"points":"78.55 19.31 71.31 26.55 70.56 26.55 78.55 18.56 78.55 19.31"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4f2faf"},attrs:{"points":"78.55 20.07 72.06 26.55 71.31 26.55 78.55 19.31 78.55 20.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4e2fae"},attrs:{"points":"78.55 20.82 72.82 26.55 72.06 26.55 78.55 20.07 78.55 20.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2ead"},attrs:{"points":"78.55 21.57 73.57 26.55 72.82 26.55 78.55 20.82 78.55 21.57"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4d2eac"},attrs:{"points":"78.55 22.32 74.32 26.55 73.57 26.55 78.55 21.57 78.55 22.32"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4c2eab"},attrs:{"points":"78.55 23.07 75.07 26.55 74.32 26.55 78.55 22.32 78.55 23.07"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2daa"},attrs:{"points":"78.55 23.82 75.82 26.55 75.07 26.55 78.55 23.07 78.55 23.82"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4b2da9"},attrs:{"points":"78.55 24.58 76.58 26.55 75.82 26.55 78.55 23.82 78.55 24.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#4a2da8"},attrs:{"points":"78.55 25.33 77.33 26.55 76.58 26.55 78.55 24.58 78.55 25.33"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca7"},attrs:{"points":"78.55 26.08 78.08 26.55 77.33 26.55 78.55 25.33 78.55 26.08"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#492ca6"},attrs:{"points":"78.08 26.55 78.55 26.08 78.55 26.55 78.08 26.55"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bce"},attrs:{"points":"63.42 11.89 63.24 12.07 63.24 11.89 63.42 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643acd"},attrs:{"points":"64.18 11.89 63.24 12.82 63.24 12.07 63.42 11.89 64.18 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633acc"},attrs:{"points":"64.93 11.89 63.24 13.57 63.24 12.82 64.18 11.89 64.93 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239cb"},attrs:{"points":"65.68 11.89 63.24 14.32 63.24 13.57 64.93 11.89 65.68 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239ca"},attrs:{"points":"66.43 11.89 63.24 15.07 63.24 14.32 65.68 11.89 66.43 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6139c9"},attrs:{"points":"66.49 12.58 63.24 15.82 63.24 15.07 66.43 11.89 66.49 11.89 66.49 12.58"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c8"},attrs:{"points":"66.49 13.34 63.24 16.58 63.24 15.82 66.49 12.58 66.49 13.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c7"},attrs:{"points":"66.49 14.09 63.24 17.33 63.24 16.58 66.49 13.34 66.49 14.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5f38c6"},attrs:{"points":"66.49 14.84 63.24 18.08 63.24 17.33 66.49 14.09 66.49 14.84"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c5"},attrs:{"points":"66.49 15.59 63.24 18.83 63.24 18.08 66.49 14.84 66.49 15.59"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c4"},attrs:{"points":"66.49 16.34 63.24 19.58 63.24 18.83 66.49 15.59 66.49 16.34"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5d36c3"},attrs:{"points":"66.49 17.09 63.24 20.34 63.24 19.58 66.49 16.34 66.49 17.09"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5c36c2"},attrs:{"points":"66.49 17.85 63.24 21.09 63.24 20.34 66.49 17.09 66.49 17.85"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b36c1"},attrs:{"points":"66.49 18.6 63.24 21.84 63.24 21.09 66.49 17.85 66.49 18.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b35c0"},attrs:{"points":"66.49 19.35 63.24 22.59 63.24 21.84 66.49 18.6 66.49 19.35"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5a35bf"},attrs:{"points":"66.49 20.1 63.24 23.34 63.24 22.59 66.49 19.35 66.49 20.1"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5935be"},attrs:{"points":"66.49 20.85 63.24 24.09 63.24 23.34 66.49 20.1 66.49 20.85"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5934bd"},attrs:{"points":"66.49 21.6 63.24 24.84 63.24 24.09 66.49 20.85 66.49 21.6"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5834bc"},attrs:{"points":"66.49 22.36 63.24 25.6 63.24 24.84 66.49 21.6 66.49 22.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5734bb"},attrs:{"points":"66.49 23.11 63.24 26.35 63.24 25.6 66.49 22.36 66.49 23.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5733ba"},attrs:{"points":"66.49 23.86 63.92 26.42 63.24 26.42 63.24 26.35 66.49 23.11 66.49 23.86"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5633b9"},attrs:{"points":"66.49 24.61 64.68 26.42 63.92 26.42 66.49 23.86 66.49 24.61"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5532b8"},attrs:{"points":"66.49 25.36 65.43 26.42 64.68 26.42 66.49 24.61 66.49 25.36"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b7"},attrs:{"points":"66.49 26.11 66.18 26.42 65.43 26.42 66.49 25.36 66.49 26.11"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5432b6"},attrs:{"points":"66.18 26.42 66.49 26.11 66.49 26.42 66.18 26.42"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bcf"},attrs:{"points":"54.16 20.4 53.8 20.76 53.8 20.4 54.16 20.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bce"},attrs:{"points":"54.91 20.4 53.8 21.52 53.8 20.76 54.16 20.4 54.91 20.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643acd"},attrs:{"points":"55.66 20.4 53.8 22.27 53.8 21.52 54.91 20.4 55.66 20.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633acc"},attrs:{"points":"56.41 20.4 53.8 23.02 53.8 22.27 55.66 20.4 56.41 20.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239cb"},attrs:{"points":"57.17 20.4 53.93 23.64 53.8 23.64 53.8 23.02 56.41 20.4 57.17 20.4"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239ca"},attrs:{"points":"57.81 20.51 54.68 23.64 53.93 23.64 57.17 20.4 57.81 20.4 57.81 20.51"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6139c9"},attrs:{"points":"57.81 21.27 55.43 23.64 54.68 23.64 57.81 20.51 57.81 21.27"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c8"},attrs:{"points":"57.81 22.02 56.18 23.64 55.43 23.64 57.81 21.27 57.81 22.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c7"},attrs:{"points":"57.81 22.77 56.94 23.64 56.18 23.64 57.81 22.02 57.81 22.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5f38c6"},attrs:{"points":"57.81 23.52 57.69 23.64 56.94 23.64 57.81 22.77 57.81 23.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c5"},attrs:{"points":"57.69 23.64 57.81 23.52 57.81 23.64 57.69 23.64"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6b3ed7"},attrs:{"points":"53.89 14.66 53.79 14.76 53.79 14.66 53.89 14.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6a3dd6"},attrs:{"points":"54.64 14.66 53.79 15.51 53.79 14.76 53.89 14.66 54.64 14.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd5"},attrs:{"points":"55.39 14.66 53.79 16.27 53.79 15.51 54.64 14.66 55.39 14.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd4"},attrs:{"points":"56.14 14.66 53.79 17.02 53.79 16.27 55.39 14.66 56.14 14.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#683cd3"},attrs:{"points":"56.89 14.66 53.85 17.7 53.79 17.7 53.79 17.02 56.14 14.66 56.89 14.66"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd2"},attrs:{"points":"57.52 14.78 54.61 17.7 53.85 17.7 56.89 14.66 57.52 14.66 57.52 14.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd1"},attrs:{"points":"57.52 15.53 55.36 17.7 54.61 17.7 57.52 14.78 57.52 15.53"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#663bd0"},attrs:{"points":"57.52 16.29 56.11 17.7 55.36 17.7 57.52 15.53 57.52 16.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bcf"},attrs:{"points":"57.52 17.04 56.86 17.7 56.11 17.7 57.52 16.29 57.52 17.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bce"},attrs:{"points":"56.86 17.7 57.52 17.04 57.52 17.7 56.86 17.7"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6f40dd"},attrs:{"points":"51.4 11.89 50.26 13.02 50.26 11.89 51.4 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6f40dd"},attrs:{"points":"52.15 11.89 50.26 13.78 50.26 13.02 51.4 11.89 52.15 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e40dc"},attrs:{"points":"52.9 11.89 50.26 14.53 50.26 13.78 52.15 11.89 52.9 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6e3fdb"},attrs:{"points":"53.66 11.89 50.26 15.28 50.26 14.53 52.9 11.89 53.66 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6d3fda"},attrs:{"points":"54.41 11.89 50.26 16.03 50.26 15.28 53.66 11.89 54.41 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c3fd9"},attrs:{"points":"55.16 11.89 50.26 16.78 50.26 16.03 54.41 11.89 55.16 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6c3ed8"},attrs:{"points":"55.91 11.89 50.26 17.53 50.26 16.78 55.16 11.89 55.91 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6b3ed7"},attrs:{"points":"56.66 11.89 50.26 18.29 50.26 17.53 55.91 11.89 56.66 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6a3dd6"},attrs:{"points":"57.41 11.89 50.26 19.04 50.26 18.29 56.66 11.89 57.41 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd5"},attrs:{"points":"58.16 11.89 50.26 19.79 50.26 19.04 57.41 11.89 58.16 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#693dd4"},attrs:{"points":"58.92 11.89 50.26 20.54 50.26 19.79 58.16 11.89 58.92 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#683cd3"},attrs:{"points":"59.67 11.89 50.26 21.29 50.26 20.54 58.92 11.89 59.67 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd2"},attrs:{"points":"60.42 11.89 50.26 22.04 50.26 21.29 59.67 11.89 60.42 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#673cd1"},attrs:{"points":"61.17 11.89 50.26 22.8 50.26 22.04 60.42 11.89 61.17 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#663bd0"},attrs:{"points":"61.38 11.89 61.54 12.04 61.54 12.27 50.26 23.55 50.26 22.8 61.17 11.89 61.38 11.89"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bcf"},attrs:{"points":"61.54 13.02 50.26 24.3 50.26 23.55 61.54 12.27 61.54 13.02"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#653bce"},attrs:{"points":"61.54 13.77 50.26 25.05 50.26 24.3 61.54 13.02 61.54 13.77"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#643acd"},attrs:{"points":"61.54 14.52 50.26 25.8 50.26 25.05 61.54 13.77 61.54 14.52"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#633acc"},attrs:{"points":"61.54 15.28 50.41 26.4 50.26 26.4 50.26 25.8 61.54 14.52 61.54 15.28"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239cb"},attrs:{"points":"61.54 16.03 51.16 26.4 50.41 26.4 61.54 15.28 61.54 16.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6239ca"},attrs:{"points":"61.54 16.78 51.91 26.4 51.16 26.4 61.54 16.03 61.54 16.78"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6139c9"},attrs:{"points":"61.54 17.53 52.67 26.4 51.91 26.4 61.54 16.78 61.54 17.53"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c8"},attrs:{"points":"61.54 18.28 53.42 26.4 52.67 26.4 61.54 17.53 61.54 18.28"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#6038c7"},attrs:{"points":"61.54 19.03 54.17 26.4 53.42 26.4 61.54 18.28 61.54 19.03"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5f38c6"},attrs:{"points":"61.54 19.79 54.92 26.4 54.17 26.4 61.54 19.03 61.54 19.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c5"},attrs:{"points":"61.54 20.54 55.67 26.4 54.92 26.4 61.54 19.79 61.54 20.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5e37c4"},attrs:{"points":"61.54 21.29 56.42 26.4 55.67 26.4 61.54 20.54 61.54 21.29"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5d36c3"},attrs:{"points":"61.54 22.04 57.18 26.4 56.42 26.4 61.54 21.29 61.54 22.04"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5c36c2"},attrs:{"points":"61.54 22.79 57.93 26.4 57.18 26.4 61.54 22.04 61.54 22.79"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b36c1"},attrs:{"points":"61.54 23.54 58.68 26.4 57.93 26.4 61.54 22.79 61.54 23.54"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5b35c0"},attrs:{"points":"61.54 24.3 59.43 26.4 58.68 26.4 61.54 23.54 61.54 24.3"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5a35bf"},attrs:{"points":"61.54 25.05 60.18 26.4 59.43 26.4 61.54 24.3 61.54 25.05"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5935be"},attrs:{"points":"61.54 25.8 60.93 26.4 60.18 26.4 61.54 25.05 61.54 25.8"}}),_vm._v(" "),_c('polygon',{staticStyle:{"fill":"#5934bd"},attrs:{"points":"60.93 26.4 61.54 25.8 61.54 26.4 60.93 26.4"}})])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/headers/basic.vue":
/*!*********************************************!*\
  !*** ./src/ui/components/headers/basic.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_vue_vue_type_template_id_22c1acd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.vue?vue&type=template&id=22c1acd6&scoped=true */ "./src/ui/components/headers/basic.vue?vue&type=template&id=22c1acd6&scoped=true");
/* harmony import */ var _basic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.vue?vue&type=script&lang=js */ "./src/ui/components/headers/basic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.vue?vue&type=style&index=0&lang=css */ "./src/ui/components/headers/basic.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true */ "./src/ui/components/headers/basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _basic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _basic_vue_vue_type_template_id_22c1acd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _basic_vue_vue_type_template_id_22c1acd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22c1acd6",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/headers/basic.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/ui/components/headers/basic.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./basic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/headers/basic.vue?vue&type=style&index=0&lang=css":
/*!*****************************************************************************!*\
  !*** ./src/ui/components/headers/basic.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--7-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./basic.vue?vue&type=style&index=0&lang=css */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--7-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/headers/basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./src/ui/components/headers/basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=style&index=1&id=22c1acd6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_1_id_22c1acd6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/headers/basic.vue?vue&type=template&id=22c1acd6&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/ui/components/headers/basic.vue?vue&type=template&id=22c1acd6&scoped=true ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_template_id_22c1acd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./basic.vue?vue&type=template&id=22c1acd6&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/headers/basic.vue?vue&type=template&id=22c1acd6&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_template_id_22c1acd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_template_id_22c1acd6_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui/components/loading-bar/logo-loader.vue":
/*!*******************************************************!*\
  !*** ./src/ui/components/loading-bar/logo-loader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_loader_vue_vue_type_template_id_6fe7cd6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true */ "./src/ui/components/loading-bar/logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true");
/* harmony import */ var _logo_loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo-loader.vue?vue&type=script&lang=js */ "./src/ui/components/loading-bar/logo-loader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true */ "./src/ui/components/loading-bar/logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _logo_loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _logo_loader_vue_vue_type_template_id_6fe7cd6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _logo_loader_vue_vue_type_template_id_6fe7cd6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6fe7cd6e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/loading-bar/logo-loader.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/ui/components/loading-bar/logo-loader.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./logo-loader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/loading-bar/logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./src/ui/components/loading-bar/logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=style&index=0&id=6fe7cd6e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_style_index_0_id_6fe7cd6e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/loading-bar/logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/ui/components/loading-bar/logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_template_id_6fe7cd6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/loading-bar/logo-loader.vue?vue&type=template&id=6fe7cd6e&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_template_id_6fe7cd6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_loader_vue_vue_type_template_id_6fe7cd6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=0.8dd16ad9eb604660fd4e.js.map