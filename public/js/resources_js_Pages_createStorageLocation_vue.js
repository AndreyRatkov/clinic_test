(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_createStorageLocation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
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
    
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'createStorageLocation',
  data: function data() {
    return {
      pagination: {},
      isLoad: false,
      param_storage_location_id: this.$route.params.storage_location_id,
      isViewCreate: this.$route.params.flag,

      /*
          $table->bigInteger('store_id')->unsigned();
          $table->foreign('store_id')
              ->references('id')
              ->on('stores');
          $table->string('name', 20);
          $table->string('adress', 250);
          $table->string('telephone', 30);
          $table->string('number', 30);
          $table->string('scan', 200);
          $table->timestamps();
      */
      formData: {},
      formCreateData: {
        name: "",
        adress: "",
        telephone: "",
        number: "",
        scan: "",
        storage_location_id: 0,
        store_id: 0
      },
      create_errors: {},
      edit_errors: {},
      errors: {},
      lastValue: "",
      lastCollection: "",
      timer: null
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    cur_store_id: function cur_store_id(state) {
      return state.select_store_id;
    }
  })),
  methods: {
    resetFormCreate: function resetFormCreate() {
      this.formCreateData.storage_location_id = 0;
      this.formCreateData.name = "";
      this.formCreateData.store_id = 0;
      this.formCreateData.adress = "";
      this.formCreateData.telephone = "";
      this.formCreateData.number = "";
      this.formCreateData.scan = "";
      this.formCreateData.telephone = "";
    },
    sendData: function sendData() {
      if (this.isViewCreate) {
        console.log("sendCreateStorageLocation");
        this.sendCreateStorageLocation();
      } else {
        console.log("sendUpdateStorageLocation");
        this.sendEditStorageLocation();
      }
    },
    sendCreateStorageLocation: function sendCreateStorageLocation() {
      var _this = this;

      var token = localStorage.getItem('token'); //localStorage.removeItem('token')

      this.formCreateData.store_id = this.cur_store_id;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.post('/api/create_storage_location', this.formCreateData).then(function (response) {
        _this.resetFormCreate();

        _this.$router.push('/storage-locations-list');
      })["catch"](function (errors) {
        _this.create_errors = errors.response.data.errors;
      });
    },
    sendEditStorageLocation: function sendEditStorageLocation() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      this.formCreateData.storage_location_id = this.param_storage_location_id;
      axios.post('/api/update_storage_location', this.formCreateData).then(function (response) {
        _this2.resetFormCreate();

        _this2.$router.push('/storage-locations-list');
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    },
    getDetailStorageLocation: function getDetailStorageLocation() {
      var _this3 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; //console.log()

      /*
          name:                   "",
          adress:                 "",
          telephone:              "",
          number:                 "",
          scan:                   "",
          storage_location_id:    0,
          store_id:               0,
      */

      axios.post('/api/detail_storage_location_info', {
        "storage_location_id": this.param_storage_location_id,
        "store_id": this.cur_store_id
      }).then(function (response) {
        _this3.formCreateData.name = response.data.storage_location.name;
        _this3.formCreateData.adress = response.data.storage_location.adress;
        _this3.formCreateData.telephone = response.data.storage_location.telephone;
        _this3.formCreateData.number = response.data.storage_location.number;
        _this3.formCreateData.scan = response.data.storage_location.scan;
      })["catch"](function (errors) {
        _this3.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    if (!this.isViewCreate) {
      this.getDetailStorageLocation();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/createStorageLocation.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/createStorageLocation.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStorageLocation_vue_vue_type_template_id_4d727a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStorageLocation.vue?vue&type=template&id=4d727a0a& */ "./resources/js/Pages/createStorageLocation.vue?vue&type=template&id=4d727a0a&");
/* harmony import */ var _createStorageLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStorageLocation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/createStorageLocation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _createStorageLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createStorageLocation_vue_vue_type_template_id_4d727a0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _createStorageLocation_vue_vue_type_template_id_4d727a0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/createStorageLocation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/createStorageLocation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/createStorageLocation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createStorageLocation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/createStorageLocation.vue?vue&type=template&id=4d727a0a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/createStorageLocation.vue?vue&type=template&id=4d727a0a& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocation_vue_vue_type_template_id_4d727a0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocation_vue_vue_type_template_id_4d727a0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocation_vue_vue_type_template_id_4d727a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createStorageLocation.vue?vue&type=template&id=4d727a0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocation.vue?vue&type=template&id=4d727a0a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocation.vue?vue&type=template&id=4d727a0a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocation.vue?vue&type=template&id=4d727a0a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      ? _c("h2", [_vm._v("\n        Создание расположение склада \n    ")])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isViewCreate
      ? _c("h2", [
          _vm._v(
            '\n        Редактируем расположение склада: "' +
              _vm._s(_vm.formCreateData.name) +
              '" \n    '
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.name,
            expression: "formCreateData.name"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "name" },
        domProps: { value: _vm.formCreateData.name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "name", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.name) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "adress" } }, [_vm._v("Адрес")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.adress,
            expression: "formCreateData.adress"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "adress" },
        domProps: { value: _vm.formCreateData.adress },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "adress", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.adress) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "telephone" } }, [_vm._v("Номер телефона")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.telephone,
            expression: "formCreateData.telephone"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "telephone" },
        domProps: { value: _vm.formCreateData.telephone },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "telephone", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.telephone) }
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