(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ContractorsList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContractorsList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContractorsList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ContractorsList',
  components: {},
  data: function data() {
    return {
      contractors: {},
      pagination: {},
      remove_contractor_name: "",
      remove_contractor_id: 0,
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
    getContractors: function getContractors(page_url) {
      var _this = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      page_url = page_url || 'api/get_contractor_list'; //this.cur_store_id

      axios.post(page_url, {
        "store_id": this.cur_store_id
      }).then(function (response) {
        console.log('contractors length:' + response.data.contractors.data.length);
        _this.contractors = response.data.contractors.data;

        _this.makePagination(response.data.contractors);
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
    showRemoveModal: function showRemoveModal(contractor_id, contractor_name) {
      this.remove_contractor_name = contractor_name;
      this.remove_contractor_id = contractor_id;
      $(this.$refs.modal2).modal('show');
    },
    removeContractor: function removeContractor() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var formData = {
        "contractor_id": this.remove_contractor_id
      };
      axios.post('/api/remove_contractor', formData).then(function (response) {
        //this.resetFormEdit()
        $(_this2.$refs.modal2).modal('hide'); //this.$router.push('/stores-list')

        _this2.getContractors();
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    this.getContractors();
  }
});

/***/ }),

/***/ "./resources/js/Pages/ContractorsList.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/ContractorsList.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContractorsList_vue_vue_type_template_id_672a5dc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContractorsList.vue?vue&type=template&id=672a5dc3& */ "./resources/js/Pages/ContractorsList.vue?vue&type=template&id=672a5dc3&");
/* harmony import */ var _ContractorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContractorsList.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ContractorsList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ContractorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContractorsList_vue_vue_type_template_id_672a5dc3___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContractorsList_vue_vue_type_template_id_672a5dc3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ContractorsList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ContractorsList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/ContractorsList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContractorsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContractorsList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractorsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/ContractorsList.vue?vue&type=template&id=672a5dc3&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/ContractorsList.vue?vue&type=template&id=672a5dc3& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractorsList_vue_vue_type_template_id_672a5dc3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractorsList_vue_vue_type_template_id_672a5dc3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractorsList_vue_vue_type_template_id_672a5dc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContractorsList.vue?vue&type=template&id=672a5dc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContractorsList.vue?vue&type=template&id=672a5dc3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContractorsList.vue?vue&type=template&id=672a5dc3&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContractorsList.vue?vue&type=template&id=672a5dc3& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("h2", [_vm._v("??????????????????????")]),
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
            _c("div", { staticClass: "modal-body" }, [
              _vm._v(
                "\n                    ???? ??????????????, ?????? ???????????? ?????????????? ??????????????????????:" +
                  _vm._s(_vm.remove_contractor_name) +
                  "?\n                "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button" },
                  on: { click: _vm.removeContractor }
                },
                [_vm._v("????????????????")]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-6" },
        [
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "create-contractor", params: { flag: true } }
              }
            },
            [_vm._v("Add contractor")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "table",
          {
            staticClass: "table table-bordered table-striped",
            attrs: { id: "example1" }
          },
          [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.contractors, function(contractor) {
                return _c("tr", { key: contractor.id }, [
                  _c("td", [_vm._v(_vm._s(contractor.name))]),
                  _vm._v(" "),
                  contractor.contractor_type == 1
                    ? _c("td", [_vm._v("??????????????????")])
                    : _vm._e(),
                  _vm._v(" "),
                  contractor.contractor_type == 3
                    ? _c("td", [_vm._v("????????????????")])
                    : _vm._e(),
                  _vm._v(" "),
                  contractor.contractor_type != 1 &&
                  contractor.contractor_type != 3
                    ? _c("td")
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "edit-contractor",
                              params: {
                                flag: false,
                                contractor_id: contractor.id
                              }
                            }
                          }
                        },
                        [_vm._v("??????????????????????????")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.showRemoveModal(
                                contractor.id,
                                contractor.model
                              )
                            }
                          }
                        },
                        [_vm._v("??????????????")]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _vm._m(3)
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" }, [
        _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
          _c("ul", { staticClass: "pagination" }, [
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: !_vm.pagination.prev_page_url },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.getContractors(_vm.pagination.prev_page_url)
                  }
                }
              },
              [
                _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                  _vm._v("????????????????????")
                ])
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "page-item disabled" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v(
                  "\n                        ???????????????? " +
                    _vm._s(_vm.pagination.current_page) +
                    " ???? " +
                    _vm._s(_vm.pagination.last_page) +
                    "\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "page-item",
                class: { disabled: !_vm.pagination.next_page_url },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.getContractors(_vm.pagination.next_page_url)
                  }
                }
              },
              [
                _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                  _vm._v("??????????????????")
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4" })
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
            [_vm._v("???????????????? ??????????????????????")]
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
            [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("??")])]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("??????")]),
        _vm._v(" "),
        _c("th", [_vm._v("?????? ??????????????????????")]),
        _vm._v(" "),
        _c("th", [_vm._v("????????????????")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("th", [_vm._v("??????")]),
        _vm._v(" "),
        _c("th", [_vm._v("?????? ??????????????????????")]),
        _vm._v(" "),
        _c("th", [_vm._v("????????????????")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);