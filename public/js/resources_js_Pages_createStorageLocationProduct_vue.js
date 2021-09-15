(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_createStorageLocationProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocationProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocationProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    $table->bigInteger('storage_location_id')->unsigned()->nullable();
    $table->foreign('storage_location_id')
        ->references('id')
        ->on('storage_locations');
    $table->bigInteger('box_id')->unsigned()->nullable();
    $table->foreign('box_id')
        ->references('id')
        ->on('boxes');
    $table->string('section_number', 30)->nullable();
    $table->string('section_place', 30)->nullable();
    $table->string('section_scan', 200)->nullable();
    $table->string('rack_number', 30)->nullable();
    $table->string('rack_place', 30)->nullable();
    $table->string('rack_scan', 200)->nullable();
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'createStoreLocationProduct',
  data: function data() {
    return {
      //contractors: [],
      pagination: {},
      boxes: [],
      boxPagination: {},
      box_search: "",
      storage_locations: [],
      storageLocationPagination: {},
      storage_location_search: "",
      isLoad: false,
      param_storage_location_product_id: this.$route.params.storage_location_product_id,
      isViewCreate: this.$route.params.flag,
      formData: {},
      formCreateData: {
        section_number: "",
        section_place: "",
        section_scan: "",
        rack_number: "",
        rack_place: "",
        rack_scan: "",
        storage_location_id: null,
        storage_location_product_id: null,
        box_id: null,
        store_id: 0,
        box_name: "",
        storage_location_name: ""
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
    /*
        section_number:         "",
        section_place:          "",
        section_scan:           "",
        rack_number:            "",
        rack_place:             "",
        rack_scan:              "",
        storage_location_id:    0,
        storage_location_product_id: 0,
        box_id:                 0,
        store_id:               0,
    */
    resetFormCreate: function resetFormCreate() {
      this.formCreateData.storage_location_product_id = null;
      this.formCreateData.store_id = 0;
      this.formCreateData.storage_location_id = null;
      this.formCreateData.box_id = null;
      this.formCreateData.section_number = "";
      this.formCreateData.section_place = "";
      this.formCreateData.section_scan = "";
      this.formCreateData.rack_number = "";
      this.formCreateData.rack_place = "";
      this.formCreateData.rack_scan = "";
      this.formCreateData.box_name = "";
      this.formCreateData.storage_location_name = "";
    },
    sendData: function sendData() {
      if (this.isViewCreate) {
        console.log("sendStorageLocationProduct");
        this.sendCreateStorageLocationProduct();
      } else {
        console.log("sendStorageLocationProduct");
        this.sendEditStorageLocationProduct();
      }
    },
    sendCreateStorageLocationProduct: function sendCreateStorageLocationProduct() {
      var _this = this;

      var token = localStorage.getItem('token'); //localStorage.removeItem('token')

      this.formCreateData.store_id = this.cur_store_id;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.post('/api/create_storage_location_product', this.formCreateData).then(function (response) {
        _this.resetFormCreate();

        _this.$router.push('/storage-location-products-list');
      })["catch"](function (errors) {
        _this.create_errors = errors.response.data.errors;
      });
    },
    sendEditStorageLocationProduct: function sendEditStorageLocationProduct() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      this.formCreateData.storage_location_product_id = this.param_storage_location_product_id;
      axios.post('/api/update_storage_location_product', this.formCreateData).then(function (response) {
        _this2.resetFormCreate();

        _this2.$router.push('/storage-location-products-list');
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    },
    getDetailStorageLocationProduct: function getDetailStorageLocationProduct() {
      var _this3 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; //console.log()

      /*
          section_number:         "",
          section_place:          "",
          section_scan:           "",
          rack_number:            "",
          rack_place:             "",
          rack_scan:              "",
          storage_location_id:    0,
          storage_location_product_id: 0,
          box_id:                 0,
          store_id:               0,
      */

      axios.post('/api/detail_storage_location_product_info', {
        "storage_location_product_id": this.param_storage_location_product_id,
        "store_id": this.cur_store_id
      }).then(function (response) {
        _this3.formCreateData.section_number = response.data.storage_location_product.section_number;
        _this3.formCreateData.section_place = response.data.storage_location_product.section_place;
        _this3.formCreateData.section_scan = response.data.storage_location_product.section_scan;
        _this3.formCreateData.rack_number = response.data.storage_location_product.rack_number;
        _this3.formCreateData.rack_place = response.data.storage_location_product.rack_place;
        _this3.formCreateData.rack_scan = response.data.storage_location_product.rack_scan;
        _this3.formCreateData.storage_location_id = response.data.storage_location_product.storage_location_id;
        _this3.formCreateData.box_id = response.data.storage_location_product.box_id;
        _this3.formCreateData.box_name = response.data.storage_location_product.box_name;
        _this3.formCreateData.storage_location_name = response.data.storage_location_product.storage_location_name;
      })["catch"](function (errors) {
        _this3.create_errors = errors.response.data.errors;
      });
    },
    makePagination: function makePagination(response, collection_name) {
      var pagination = {
        current_page: response.current_page,
        last_page: response.last_page,
        prev_page_url: response.prev_page_url,
        next_page_url: response.next_page_url
      };
      if (collection_name === 'boxes') this.boxPagination = pagination;
      if (collection_name === 'storage_locations') this.storageLocationPagination = pagination;
    },
    showSelectBox: function showSelectBox() {
      this.getBoxes();
      $(this.$refs.modal2).modal('show');
    },
    selectBox: function selectBox(box_id, box_name) {
      this.formCreateData.box_id = box_id;
      this.formCreateData.box_name = box_name;
      $(this.$refs.modal2).modal('hide');
    },
    getBoxes: function getBoxes(page_url) {
      var _this4 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      page_url = page_url || '/api/get_box_list';
      console.log(page_url); //var contractor_type = 1 //поставщик

      var data = {
        "store_id": this.cur_store_id,
        "box_search": this.box_search
      }; //axios.post(page_url, {"store_id": this.cur_store_id }).then((response) => {

      axios.post(page_url, data).then(function (response) {
        console.log('boxes length:' + response.data.boxes.data.length);
        _this4.boxes = response.data.boxes.data;

        _this4.makePagination(response.data.boxes, 'boxes');
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    showSelectStorageLocation: function showSelectStorageLocation() {
      this.getStorageLocations();
      $(this.$refs.modal3).modal('show');
    },
    selectStorageLocation: function selectStorageLocation(storage_location_id, storage_location_name) {
      this.formCreateData.storage_location_id = storage_location_id;
      this.formCreateData.storage_location_name = storage_location_name;
      $(this.$refs.modal3).modal('hide');
    },
    getStorageLocations: function getStorageLocations(page_url) {
      var _this5 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      page_url = page_url || '/api/get_storage_location_list';
      console.log(page_url); //var contractor_type = 1 //поставщик

      var data = {
        "store_id": this.cur_store_id,
        "storage_location_search": this.storage_location_search
      }; //axios.post(page_url, {"store_id": this.cur_store_id }).then((response) => {

      axios.post(page_url, data).then(function (response) {
        //console.log('storage_locations length:'+response.data.storage_locations.data.length)
        _this5.storage_locations = response.data.storage_locations.data;

        _this5.makePagination(response.data.storage_locations, 'storage_locations');
      })["catch"](function (errors) {
        console.log(errors);
      });
    },
    startTimer: function startTimer() {
      var _this6 = this;

      this.timer = setInterval(function () {
        if (_this6.lastCollection === "boxes") {
          _this6.getBoxes();
        }

        if (_this6.lastCollection === "storage_locations") {
          _this6.getStorageLocations();
        }

        _this6.stopTimer();
      }, 1000);
    },
    stopTimer: function stopTimer() {
      clearTimeout(this.timer);
    },
    changeValueInput: function changeValueInput(e, collec) {
      //.event.target.value.length
      //console.log("event.target.value:" + parseFloat(event.target.value))
      this.lastValue = e.target.value;
      this.lastCollection = collec;
      this.stopTimer();
      this.startTimer();
    }
  },
  mounted: function mounted() {
    if (!this.isViewCreate) {
      this.getDetailStorageLocationProduct();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/createStorageLocationProduct.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/createStorageLocationProduct.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStorageLocationProduct_vue_vue_type_template_id_8bbb3bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8& */ "./resources/js/Pages/createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8&");
/* harmony import */ var _createStorageLocationProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStorageLocationProduct.vue?vue&type=script&lang=js& */ "./resources/js/Pages/createStorageLocationProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _createStorageLocationProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createStorageLocationProduct_vue_vue_type_template_id_8bbb3bb8___WEBPACK_IMPORTED_MODULE_0__.render,
  _createStorageLocationProduct_vue_vue_type_template_id_8bbb3bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/createStorageLocationProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/createStorageLocationProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/createStorageLocationProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocationProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createStorageLocationProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocationProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocationProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocationProduct_vue_vue_type_template_id_8bbb3bb8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocationProduct_vue_vue_type_template_id_8bbb3bb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStorageLocationProduct_vue_vue_type_template_id_8bbb3bb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStorageLocationProduct.vue?vue&type=template&id=8bbb3bb8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      ? _c("h2", [_vm._v("\n        Создание место хранения продукта \n    ")])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isViewCreate
      ? _c("h2", [
          _vm._v(
            '\n        Редактируем место хранения продукта: "' +
              _vm._s(_vm.formCreateData.section_number) +
              '" \n    '
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "modal2",
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal2",
          tabindex: "-1",
          "aria-labelledby": "exampleModalLabel2",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("label", { attrs: { for: "box_search" } }, [
                  _vm._v("Коробки")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.box_search,
                      expression: "box_search"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Search",
                    name: "box_search"
                  },
                  domProps: { value: _vm.box_search },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.box_search = $event.target.value
                      },
                      function($event) {
                        return _vm.changeValueInput($event, "boxes")
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _vm._l(_vm.boxes, function(box) {
                  return _c("div", { key: box.id, staticClass: "row" }, [
                    _c("div", { staticClass: "col-3" }, [
                      _vm._v(_vm._s(box.number))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-1" }, [
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.selectBox(box.id, box.number)
                            }
                          }
                        },
                        [_vm._v("Выбрать")]
                      )
                    ])
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-4" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c(
                      "nav",
                      { attrs: { "aria-label": "Page navigation example" } },
                      [
                        _c("ul", { staticClass: "pagination" }, [
                          _c(
                            "li",
                            {
                              staticClass: "page-item",
                              class: {
                                disabled: !_vm.boxPagination.prev_page_url
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.getBoxes(
                                    _vm.boxPagination.prev_page_url
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Предыдущая")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item disabled" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#" }
                              },
                              [
                                _vm._v(
                                  "\n                                        Страница " +
                                    _vm._s(_vm.boxPagination.current_page) +
                                    " из " +
                                    _vm._s(_vm.boxPagination.last_page) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "page-item",
                              class: {
                                disabled: !_vm.boxPagination.next_page_url
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.getBoxes(
                                    _vm.boxPagination.next_page_url
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Следующая")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" })
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" })
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "modal3",
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal3",
          tabindex: "-1",
          "aria-labelledby": "exampleModalLabel3",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _c("label", { attrs: { for: "storage_location_search" } }, [
                  _vm._v("Места хранения")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.storage_location_search,
                      expression: "storage_location_search"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Search",
                    name: "storage_location"
                  },
                  domProps: { value: _vm.storage_location_search },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.storage_location_search = $event.target.value
                      },
                      function($event) {
                        return _vm.changeValueInput($event, "storage_locations")
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _vm._l(_vm.storage_locations, function(storage_location) {
                  return _c(
                    "div",
                    { key: storage_location.id, staticClass: "row" },
                    [
                      _c("div", { staticClass: "col-3" }, [
                        _vm._v(_vm._s(storage_location.name))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-1" }, [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.selectStorageLocation(
                                  storage_location.id,
                                  storage_location.name
                                )
                              }
                            }
                          },
                          [_vm._v("Выбрать")]
                        )
                      ])
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-4" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c(
                      "nav",
                      { attrs: { "aria-label": "Page navigation example" } },
                      [
                        _c("ul", { staticClass: "pagination" }, [
                          _c(
                            "li",
                            {
                              staticClass: "page-item",
                              class: {
                                disabled: !_vm.storageLocationPagination
                                  .prev_page_url
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.getStorageLocations(
                                    _vm.storageLocationPagination.prev_page_url
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Предыдущая")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item disabled" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#" }
                              },
                              [
                                _vm._v(
                                  "\n                                        Страница " +
                                    _vm._s(
                                      _vm.storageLocationPagination.current_page
                                    ) +
                                    " из " +
                                    _vm._s(
                                      _vm.storageLocationPagination.last_page
                                    ) +
                                    "\n                                    "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass: "page-item",
                              class: {
                                disabled: !_vm.storageLocationPagination
                                  .next_page_url
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.getStorageLocations(
                                    _vm.storageLocationPagination.next_page_url
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "page-link",
                                  attrs: { href: "#" }
                                },
                                [_vm._v("Следующая")]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" })
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" })
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "section_number" } }, [
        _vm._v("Номер секции")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.section_number,
            expression: "formCreateData.section_number"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "section_number" },
        domProps: { value: _vm.formCreateData.section_number },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "section_number", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.section_number) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "section_place" } }, [
        _vm._v("Место секции")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.section_place,
            expression: "formCreateData.section_place"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "section_place" },
        domProps: { value: _vm.formCreateData.section_place },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "section_place", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.section_place) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "section_scan" } }, [_vm._v("Скан секции")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.section_scan,
            expression: "formCreateData.section_scan"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "section_scan" },
        domProps: { value: _vm.formCreateData.section_scan },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "section_scan", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.section_scan) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "rack_number" } }, [_vm._v("Номер стойки")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.rack_number,
            expression: "formCreateData.rack_number"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "rack_number" },
        domProps: { value: _vm.formCreateData.rack_number },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "rack_number", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.rack_number) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "rack_place" } }, [_vm._v("Место стойки")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.rack_place,
            expression: "formCreateData.rack_place"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "rack_place" },
        domProps: { value: _vm.formCreateData.rack_place },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "rack_place", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.rack_place) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "rack_scan" } }, [_vm._v("Скан стойки")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.rack_scan,
            expression: "formCreateData.rack_scan"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "rack_scan" },
        domProps: { value: _vm.formCreateData.rack_scan },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "rack_scan", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.rack_scan) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.storage_location_name,
            expression: "formCreateData.storage_location_name"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          placeholder: "Выбор место хранения",
          "aria-label": "Выбор место хранения",
          "aria-describedby": "button-addon2",
          readonly: ""
        },
        domProps: { value: _vm.formCreateData.storage_location_name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.formCreateData,
              "storage_location_name",
              $event.target.value
            )
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-outline-secondary",
          attrs: { type: "button", id: "button-addon2" },
          on: {
            click: function($event) {
              return _vm.showSelectStorageLocation()
            }
          }
        },
        [_vm._v("Список")]
      ),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.storage_location_id) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.box_name,
            expression: "formCreateData.box_name"
          }
        ],
        staticClass: "form-control",
        attrs: {
          type: "text",
          placeholder: "Выбор коробки",
          "aria-label": "Выбор коробки",
          "aria-describedby": "button-addon2",
          readonly: ""
        },
        domProps: { value: _vm.formCreateData.box_name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "box_name", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-outline-secondary",
          attrs: { type: "button", id: "button-addon2" },
          on: {
            click: function($event) {
              return _vm.showSelectBox()
            }
          }
        },
        [_vm._v("Список")]
      ),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.box_id) }
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c(
            "h5",
            { staticClass: "modal-title", attrs: { id: "exampleModalLabel2" } },
            [_vm._v("Выбор коробки")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c(
            "button",
            {
              staticClass: "close",
              attrs: {
                type: "button",
                "data-dismiss": "modal",
                "aria-label": "Close"
              }
            },
            [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c(
            "h5",
            { staticClass: "modal-title", attrs: { id: "exampleModalLabel3" } },
            [_vm._v("Выбор места хранения")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c(
            "button",
            {
              staticClass: "close",
              attrs: {
                type: "button",
                "data-dismiss": "modal",
                "aria-label": "Close"
              }
            },
            [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);