(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_createBox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//



/*
    $table->string('idbox', 50)->nullable();
    $table->string('number', 30)->nullable();
    $table->string('place', 30)->nullable();
    $table->string('scan', 200)->nullable();
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'createBox',
  data: function data() {
    return {
      boxes: [],
      pagination: {},
      isLoad: false,
      param_box_id: this.$route.params.box_id,
      isViewCreate: this.$route.params.flag,
      formData: {},
      formCreateData: {
        idbox: "",
        number: "",
        place: "",
        scan: "",
        store_id: 0
      },
      create_errors: {},
      edit_errors: {},
      errors: {}
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    cur_store_id: function cur_store_id(state) {
      return state.select_store_id;
    }
  })),
  methods: {
    resetFormCreate: function resetFormCreate() {
      this.formCreateData.idbox = "";
      this.formCreateData.number = "";
      this.formCreateData.store_id = 0;
      this.formCreateData.place = "";
      this.formCreateData.scan = "";
    },
    sendData: function sendData() {
      if (this.isViewCreate) {
        console.log("sendCreateBox");
        this.sendCreateBox();
      } else {
        console.log("sendUpdateBox");
        this.sendEditBox();
      }
    },
    sendCreateBox: function sendCreateBox() {
      var _this = this;

      var token = localStorage.getItem('token'); //localStorage.removeItem('token')

      this.formCreateData.store_id = this.cur_store_id;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.post('/api/create_box', this.formCreateData).then(function (response) {
        _this.resetFormCreate();

        _this.$router.push('/boxes-list');
      })["catch"](function (errors) {
        _this.create_errors = errors.response.data.errors;
      });
    },
    sendEditBox: function sendEditBox() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      this.formCreateData.box_id = this.param_box_id;
      axios.post('/api/update_box', this.formCreateData).then(function (response) {
        _this2.resetFormCreate();

        _this2.$router.push('/boxes-list');
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    },
    getDetailBox: function getDetailBox() {
      var _this3 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; //console.log("")

      axios.post('/api/detail_box_info', {
        "box_id": this.param_box_id,
        "store_id": this.cur_store_id
      }).then(function (response) {
        _this3.formCreateData.idbox = response.data.box.idbox;
        _this3.formCreateData.number = response.data.box.number;
        _this3.formCreateData.place = response.data.box.place;
        _this3.formCreateData.scan = response.data.box.scan;
        /*
        this.formCreateData.idbox = ""
        this.formCreateData.number = ""
        this.formCreateData.store_id = 0
        this.formCreateData.place = ""
        this.formCreateData.scan = ""
        */
      })["catch"](function (errors) {
        _this3.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    if (!this.isViewCreate) {
      this.getDetailBox();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/createBox.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/createBox.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createBox_vue_vue_type_template_id_e4809714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBox.vue?vue&type=template&id=e4809714& */ "./resources/js/Pages/createBox.vue?vue&type=template&id=e4809714&");
/* harmony import */ var _createBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBox.vue?vue&type=script&lang=js& */ "./resources/js/Pages/createBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _createBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createBox_vue_vue_type_template_id_e4809714___WEBPACK_IMPORTED_MODULE_0__.render,
  _createBox_vue_vue_type_template_id_e4809714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/createBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/createBox.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/createBox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/createBox.vue?vue&type=template&id=e4809714&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/createBox.vue?vue&type=template&id=e4809714& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createBox_vue_vue_type_template_id_e4809714___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createBox_vue_vue_type_template_id_e4809714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createBox_vue_vue_type_template_id_e4809714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createBox.vue?vue&type=template&id=e4809714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createBox.vue?vue&type=template&id=e4809714&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createBox.vue?vue&type=template&id=e4809714&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createBox.vue?vue&type=template&id=e4809714& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    _vm.isViewCreate
      ? _c("h2", [_vm._v("\n        Создание коробки\n    ")])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isViewCreate
      ? _c("h2", [
          _vm._v(
            '\n        Редактируем коробку: "' +
              _vm._s(_vm.formCreateData.number) +
              '" \n    '
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "idbox" } }, [_vm._v("Id коробки")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.idbox,
            expression: "formCreateData.idbox"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "idbox" },
        domProps: { value: _vm.formCreateData.idbox },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "idbox", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.idbox) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "number" } }, [_vm._v("Номер")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.number,
            expression: "formCreateData.number"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "number" },
        domProps: { value: _vm.formCreateData.number },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "number", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.number) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "place" } }, [_vm._v("Место")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.place,
            expression: "formCreateData.place"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "place" },
        domProps: { value: _vm.formCreateData.place },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "place", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.place) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "scan" } }, [_vm._v("Scan")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.scan,
            expression: "formCreateData.scan"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "scan" },
        domProps: { value: _vm.formCreateData.scan },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "scan", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.scan) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "form-group" }, [
          _vm.isViewCreate
            ? _c(
                "button",
                { staticClass: "btn btn-primary", on: { click: _vm.sendData } },
                [_vm._v("Создать")]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isViewCreate
            ? _c(
                "button",
                { staticClass: "btn btn-primary", on: { click: _vm.sendData } },
                [_vm._v("Сохранить")]
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);