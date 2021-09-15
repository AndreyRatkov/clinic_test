(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RedisManager_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/RedisManager.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/RedisManager.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import { defineComponent } from '@vue/composition-api'



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DisassembliesList',
  data: function data() {
    return {
      isNotEmptyRedis: false,
      isLoaded: false,
      pagination: {},
      remove_disassembly_name: "",
      remove_disassembly_id: 0,
      errors: {}
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    cur_store_name: function cur_store_name(state) {
      return state.select_store_name;
    },
    cur_store_id: function cur_store_id(state) {
      return state.select_store_id;
    }
  })),
  methods: {
    getDisassemblies: function getDisassemblies(page_url) {
      var _this = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      page_url = page_url || 'api/get_disassembly_list'; //this.cur_store_id

      axios.post(page_url, {
        "store_id": this.cur_store_id
      }).then(function (response) {
        console.log('disassemblies length:' + response.data.disassemblies.data.length);
        _this.disassemblies = response.data.disassemblies.data;

        _this.makePagination(response.data.disassemblies);
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    makePagination: function makePagination(response) {
      var pagination = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url
      };
      this.pagination = pagination;
    },
    showRemoveModal: function showRemoveModal(disassembly_id, disassembly_name) {
      this.remove_disassembly_name = disassembly_name;
      this.remove_disassembly_id = disassembly_id;
      $(this.$refs.modal2).modal('show');
    },
    redisLoadData: function redisLoadData() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var formData = {
        "store_id": this.cur_store_id
      };
      axios.post('/api/redis_load_data', formData).then(function (response) {
        //this.resetFormEdit()
        //$(this.$refs.modal2).modal('hide')
        //this.$router.push('/stores-list')
        //this.getDisassemblies()
        _this2.redisInfoData();
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    },
    redisClearData: function redisClearData() {
      var _this3 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var formData = {
        "store_id": this.cur_store_id
      };
      axios.post('/api/redis_clear_data', formData).then(function (response) {
        //this.resetFormEdit()
        //$(this.$refs.modal2).modal('hide')
        //this.$router.push('/stores-list')
        //this.getDisassemblies()
        _this3.redisInfoData();
      })["catch"](function (errors) {
        _this3.create_errors = errors.response.data.errors;
      });
    },
    redisInfoData: function redisInfoData() {
      var _this4 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var formData = {
        "store_id": this.cur_store_id
      };
      axios.post('/api/redis_info_data', formData).then(function (response) {
        _this4.isLoaded = true;

        if (response.data.operation) {
          _this4.isNotEmptyRedis = true;
        } else {
          _this4.isNotEmptyRedis = false;
        }
      })["catch"](function (errors) {
        _this4.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    this.redisInfoData();
  }
});

/***/ }),

/***/ "./resources/js/Pages/RedisManager.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/RedisManager.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RedisManager_vue_vue_type_template_id_50dc424a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedisManager.vue?vue&type=template&id=50dc424a& */ "./resources/js/Pages/RedisManager.vue?vue&type=template&id=50dc424a&");
/* harmony import */ var _RedisManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedisManager.vue?vue&type=script&lang=js& */ "./resources/js/Pages/RedisManager.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RedisManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RedisManager_vue_vue_type_template_id_50dc424a___WEBPACK_IMPORTED_MODULE_0__.render,
  _RedisManager_vue_vue_type_template_id_50dc424a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/RedisManager.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/RedisManager.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/RedisManager.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedisManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RedisManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/RedisManager.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedisManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/RedisManager.vue?vue&type=template&id=50dc424a&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/RedisManager.vue?vue&type=template&id=50dc424a& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedisManager_vue_vue_type_template_id_50dc424a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedisManager_vue_vue_type_template_id_50dc424a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedisManager_vue_vue_type_template_id_50dc424a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RedisManager.vue?vue&type=template&id=50dc424a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/RedisManager.vue?vue&type=template&id=50dc424a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/RedisManager.vue?vue&type=template&id=50dc424a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/RedisManager.vue?vue&type=template&id=50dc424a& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("h1", [_vm._v("Управление Redis")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _vm.isNotEmptyRedis && _vm.isLoaded
          ? _c("div", { staticClass: "text-center" }, [
              _c("span", { staticStyle: { color: "green" } }, [
                _vm._v("Данные Redis не пустые")
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.isNotEmptyRedis && _vm.isLoaded
          ? _c("div", { staticClass: "text-center" }, [
              _c("span", { staticStyle: { color: "red" } }, [
                _vm._v("Данные Redis пустые")
              ])
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "input-group mb-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", id: "button-addon2" },
          on: {
            click: function($event) {
              return _vm.redisLoadData()
            }
          }
        },
        [_vm._v("Загрузить данные")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "input-group mb-3" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", id: "button-addon2" },
          on: {
            click: function($event) {
              return _vm.redisClearData()
            }
          }
        },
        [_vm._v("Очистить данные")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);