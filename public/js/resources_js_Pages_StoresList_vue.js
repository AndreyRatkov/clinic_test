(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_StoresList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/StoresList.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/StoresList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'storesList',
  data: function data() {
    return {
      stores: [],
      pagination: {},
      isLoad: false,
      remove_store_name: "",
      remove_store_id: 0,
      formData: {},
      errors: {}
    };
  },
  methods: {
    getStores: function getStores(page_url) {
      var _this = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      page_url = page_url || 'api/get_store_list';
      axios.post(page_url).then(function (response) {
        console.log('stores length:' + response.data.stores.data.length);
        _this.stores = response.data.stores.data; //this.patientsPagination = response.data.patients

        _this.makePagination(response.data.stores);

        console.log("first_page_url:" + response.data.stores.first_page_url);
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
    showCreateStore: function showCreateStore() {},
    showStores: function showStores() {},
    showRemoveModal: function showRemoveModal(store_id, store_name) {
      this.remove_store_name = store_name;
      this.remove_store_id = store_id;
      $(this.$refs.modal2).modal('show');
      /*
      remove_store_name: "",
      remove_store_id: 0,
      */
      //$(this.$refs.modal2).modal('hide');
    },
    removeStore: function removeStore() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      var formData = {
        "store_id": this.remove_store_id
      };
      axios.post('/api/remove_store', formData).then(function (response) {
        //this.resetFormEdit()
        $(_this2.$refs.modal2).modal('hide'); //this.$router.push('/stores-list')

        _this2.getStores();
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    //window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    this.getStores();
  }
});

/***/ }),

/***/ "./resources/js/Pages/StoresList.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/StoresList.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoresList_vue_vue_type_template_id_9cee244e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoresList.vue?vue&type=template&id=9cee244e& */ "./resources/js/Pages/StoresList.vue?vue&type=template&id=9cee244e&");
/* harmony import */ var _StoresList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoresList.vue?vue&type=script&lang=js& */ "./resources/js/Pages/StoresList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StoresList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StoresList_vue_vue_type_template_id_9cee244e___WEBPACK_IMPORTED_MODULE_0__.render,
  _StoresList_vue_vue_type_template_id_9cee244e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/StoresList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/StoresList.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/StoresList.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoresList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoresList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/StoresList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoresList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/StoresList.vue?vue&type=template&id=9cee244e&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/StoresList.vue?vue&type=template&id=9cee244e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoresList_vue_vue_type_template_id_9cee244e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoresList_vue_vue_type_template_id_9cee244e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoresList_vue_vue_type_template_id_9cee244e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoresList.vue?vue&type=template&id=9cee244e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/StoresList.vue?vue&type=template&id=9cee244e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/StoresList.vue?vue&type=template&id=9cee244e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/StoresList.vue?vue&type=template&id=9cee244e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h2", [_vm._v("\n        Stores List Page\n    ")]),
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
                  "\n                    ???? ??????????????, ?????? ???????????? ?????????????? ??????????????:" +
                    _vm._s(_vm.remove_store_name) +
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
                    on: { click: _vm.removeStore }
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
        _c("div", { staticClass: "col-6" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "create-store", params: { flag: true } } }
              },
              [_vm._v("_Add store")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._l(_vm.stores, function(store) {
        return _c("div", { key: store.id, staticClass: "row" }, [
          _c("div", { staticClass: "col-2" }, [
            _vm._v(_vm._s(store.store_name))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-2" }, [_vm._v(_vm._s(store.email))]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _vm._v(_vm._s(store.general_fullname))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _vm._v(_vm._s(store.contact_fullname))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-1" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "edit-store",
                      params: { flag: false, store_id: store.id }
                    }
                  }
                },
                [_vm._v("edit ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-1" }, [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    return _vm.showRemoveModal(store.id, store.store_name)
                  }
                }
              },
              [_vm._v("remove")]
            )
          ])
        ])
      }),
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
                      return _vm.getStores(_vm.pagination.prev_page_url)
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
                      return _vm.getStores(_vm.pagination.next_page_url)
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
    ],
    2
  )
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
            [_vm._v("???????????????? ????????????????")]
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-2" }, [_vm._v("Store name")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-2" }, [_vm._v("Email")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [_vm._v("General fullname")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [_vm._v("Contact fullname")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-1" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);