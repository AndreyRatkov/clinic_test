(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_createStore_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStore.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStore.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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


/*
    $table->string('store_name', 50);
    $table->string('address', 200);
    $table->string('site_url', 150);
    $table->string('email', 100);
    $table->string('inn', 50);
    $table->string('general_fullname', 100);
    $table->string('contact_fullname', 100);
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'createStore',
  data: function data() {
    return {
      stores: [],
      pagination: {},
      isLoad: false,
      param_store_id: this.$route.params.store_id,
      isViewCreate: this.$route.params.flag,
      formData: {},
      formCreateData: {
        store_name: "",
        address: "",
        site_url: "",
        email: "",
        inn: "",
        general_fullname: "",
        contact_fullname: ""
      },
      create_errors: {},
      formEditData: {
        id: -1,
        store_name: "",
        address: "",
        site_url: "",
        email: "",
        inn: "",
        general_fullname: "",
        contact_fullname: ""
      },
      edit_errors: {},
      errors: {}
    };
  },
  computed: {
    /*
    ...mapState({
        isViewCreate: state => state.isViewCreate
    }),
    */

    /* isViewCreate: this.$route.params.flag,
    store_id: this.$route.params.store_id */
  },
  methods: {
    resetFormCreate: function resetFormCreate() {
      this.formCreateData.store_name = "";
      this.formCreateData.address = "";
      this.formCreateData.site_url = "";
      this.formCreateData.email = "";
      this.formCreateData.inn = "";
      this.formCreateData.general_fullname = "";
      this.formCreateData.contact_fullname = "";
    },
    resetFormEdit: function resetFormEdit() {
      this.formEditData.id = -1;
      this.formEditData.store_name = "";
      this.formEditData.address = "";
      this.formEditData.site_url = "";
      this.formEditData.email = "";
      this.formEditData.inn = "";
      this.formEditData.general_fullname = "";
      this.formEditData.contact_fullname = "";
    },
    sendData: function sendData() {
      if (this.isViewCreate) {
        console.log("sendCreateStore");
        this.sendCreateStore();
      } else {
        console.log("sendUpdateStore");
        this.sendEditStore();
      }
    },
    sendCreateStore: function sendCreateStore() {
      var _this = this;

      var token = localStorage.getItem('token'); //localStorage.removeItem('token')

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.post('/api/create_store', this.formCreateData).then(function (response) {
        //axios.post('/api/create_store', {}).then((response) => {

        /*
        this.$store.commit('SetRole', '')
        localStorage.removeItem('token')
        */
        _this.resetFormCreate();

        _this.$router.push('/stores-list');
      })["catch"](function (errors) {
        _this.create_errors = errors.response.data.errors;
      });
    },
    sendEditStore: function sendEditStore() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      this.formCreateData.id = this.param_store_id;
      axios.post('/api/update_store', this.formCreateData).then(function (response) {
        _this2.resetFormEdit();

        _this2.$router.push('/stores-list');
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    },
    getDetailStore: function getDetailStore() {
      var _this3 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.post('/api/detail_store_info', {
        "store_id": this.param_store_id
      }).then(function (response) {
        _this3.formCreateData.store_name = response.data.store.store_name;
        _this3.formCreateData.address = response.data.store.address;
        _this3.formCreateData.site_url = response.data.store.site_url;
        _this3.formCreateData.email = response.data.store.email;
        _this3.formCreateData.inn = response.data.store.inn;
        _this3.formCreateData.general_fullname = response.data.store.general_fullname;
        _this3.formCreateData.contact_fullname = response.data.store.contact_fullname;
      })["catch"](function (errors) {
        _this3.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    if (!this.isViewCreate) {
      this.getDetailStore();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/createStore.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/createStore.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStore_vue_vue_type_template_id_d910c868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore.vue?vue&type=template&id=d910c868& */ "./resources/js/Pages/createStore.vue?vue&type=template&id=d910c868&");
/* harmony import */ var _createStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStore.vue?vue&type=script&lang=js& */ "./resources/js/Pages/createStore.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _createStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createStore_vue_vue_type_template_id_d910c868___WEBPACK_IMPORTED_MODULE_0__.render,
  _createStore_vue_vue_type_template_id_d910c868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/createStore.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/createStore.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/createStore.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createStore.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStore.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/createStore.vue?vue&type=template&id=d910c868&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/createStore.vue?vue&type=template&id=d910c868& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStore_vue_vue_type_template_id_d910c868___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStore_vue_vue_type_template_id_d910c868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createStore_vue_vue_type_template_id_d910c868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createStore.vue?vue&type=template&id=d910c868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStore.vue?vue&type=template&id=d910c868&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStore.vue?vue&type=template&id=d910c868&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createStore.vue?vue&type=template&id=d910c868& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      ? _c("h2", [_vm._v("\n        Create Store \n    ")])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isViewCreate
      ? _c("h2", [
          _vm._v(
            '\n        Edit Store "' +
              _vm._s(_vm.formCreateData.store_name) +
              '" \n    '
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "store_name" } }, [_vm._v("Store name")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.store_name,
            expression: "formCreateData.store_name"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "store_name" },
        domProps: { value: _vm.formCreateData.store_name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "store_name", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.store_name) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "address" } }, [_vm._v("Address")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.address,
            expression: "formCreateData.address"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "address" },
        domProps: { value: _vm.formCreateData.address },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "address", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.address) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "site_url" } }, [_vm._v("Url")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.site_url,
            expression: "formCreateData.site_url"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "site_url" },
        domProps: { value: _vm.formCreateData.site_url },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "site_url", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.site_url) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.email,
            expression: "formCreateData.email"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "email" },
        domProps: { value: _vm.formCreateData.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "email", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.email) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "inn" } }, [_vm._v("Inn")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.inn,
            expression: "formCreateData.inn"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "inn" },
        domProps: { value: _vm.formCreateData.inn },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "inn", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.inn) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "general_fullname" } }, [
        _vm._v("General fullname")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.general_fullname,
            expression: "formCreateData.general_fullname"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "general_fullname" },
        domProps: { value: _vm.formCreateData.general_fullname },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.formCreateData,
              "general_fullname",
              $event.target.value
            )
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.general_fullname) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "contact_fullname" } }, [
        _vm._v("Contact fullname")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.contact_fullname,
            expression: "formCreateData.contact_fullname"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "contact_fullname" },
        domProps: { value: _vm.formCreateData.contact_fullname },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.formCreateData,
              "contact_fullname",
              $event.target.value
            )
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.contact_fullname) }
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
                [_vm._v("Create store")]
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isViewCreate
            ? _c(
                "button",
                { staticClass: "btn btn-primary", on: { click: _vm.sendData } },
                [_vm._v("Save store")]
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