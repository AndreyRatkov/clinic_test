(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_createGroupProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createGroupProduct.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createGroupProduct.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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


 // define the tree-item component

Vue.component("tree-item", {
  template: "<li>\n                <div\n                  :class=\"{bold: isFolder}\"\n                  @click=\"toggle\"\n                  @dblclick=\"makeFolder\">\n                  {{ item.name }}\n                  <span v-if=\"isFolder\">[{{ isOpen ? \"-\" : \"+\" }}]</span>\n                </div>\n                <ul v-show=\"isOpen\" v-if=\"isFolder\">\n                  <tree-item\n                    class=\"item\"\n                    v-for=\"(child, index) in item.children\"\n                    :key=\"index\"\n                    :item=\"child\"\n                    @make-folder=\"$emit('make-folder', $event)\"\n                    @add-item=\"$emit('add-item', $event)\"\n                  ></tree-item>\n                  <li class=\"add\" @click=\"$emit('add-item', item)\">+</li>\n                </ul>\n            </li>",
  props: {
    item: Object
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  computed: {
    isFolder: function isFolder() {
      return this.item.children && this.item.children.length;
    }
  },
  methods: {
    toggle: function toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function makeFolder() {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    }
  }
});
var treeData = {
  name: "My Tree",
  children: [{
    name: "hello"
  }, {
    name: "wat"
  }, {
    name: "child folder",
    children: [{
      name: "child folder",
      children: [{
        name: "hello"
      }, {
        name: "wat"
      }]
    }, {
      name: "hello"
    }, {
      name: "wat"
    }, {
      name: "child folder",
      children: [{
        name: "hello"
      }, {
        name: "wat"
      }]
    }]
  }]
};
var demo = new Vue({
  el: "#demo",
  data: {
    treeData: treeData
  },
  methods: {
    makeFolder: function makeFolder(item) {
      Vue.set(item, "children", []);
      this.addItem(item);
    },
    addItem: function addItem(item) {
      item.children.push({
        name: "new stuff"
      });
    }
  }
});
/*
    
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'createGroupProduct',
  data: function data() {
    return {
      isLoad: false,
      param_group_product_id: this.$route.params.group_product_id,
      isViewCreate: this.$route.params.flag,
      formData: {},
      formCreateData: {
        name: "",
        description: "",
        group_product_id: null,
        store_id: 0,
        id: 0
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
    /*
        name:               "",
        description:        "",
        group_product_id:   0,
        store_id:           0,
        id:                 0,
    */
    resetFormCreate: function resetFormCreate() {
      this.formCreateData.group_product_id = null;
      this.formCreateData.id = 0;
      this.formCreateData.store_id = 0;
      this.formCreateData.name = "";
      this.formCreateData.description = "";
    },
    sendData: function sendData() {
      if (this.isViewCreate) {
        console.log("sendCreateGroupProduct");
        this.sendCreateGroupProduct();
      } else {
        console.log("sendUpdateGroupProduct");
        this.sendEditGroupProduct();
      }
    },
    sendCreateGroupProduct: function sendCreateGroupProduct() {
      var _this = this;

      var token = localStorage.getItem('token'); //localStorage.removeItem('token')

      this.formCreateData.store_id = this.cur_store_id;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      axios.post('/api/create_group_product', this.formCreateData).then(function (response) {
        _this.resetFormCreate();

        _this.$router.push('/group-products-list');
      })["catch"](function (errors) {
        _this.create_errors = errors.response.data.errors;
      });
    },
    sendEditGroupProduct: function sendEditGroupProduct() {
      var _this2 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      this.formCreateData.id = this.param_group_product_id;
      axios.post('/api/update_group_product', this.formCreateData).then(function (response) {
        _this2.resetFormCreate();

        _this2.$router.push('/group-products-list');
      })["catch"](function (errors) {
        _this2.create_errors = errors.response.data.errors;
      });
    },
    getDetailGroupProduct: function getDetailGroupProduct() {
      var _this3 = this;

      var token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; //console.log()

      /*
      name:               "",
      description:        "",
      group_product_id:   0,
      store_id:           0,
      id:                 0,
      */

      axios.post('/api/detail_group_product_info', {
        "id": this.param_group_product_id,
        "store_id": this.cur_store_id
      }).then(function (response) {
        _this3.formCreateData.name = response.data.group_product.name;
        _this3.formCreateData.description = response.data.group_product.description;
        _this3.formCreateData.group_product_id = response.data.group_product.group_product_id;
      })["catch"](function (errors) {
        _this3.create_errors = errors.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    if (!this.isViewCreate) {
      this.getDetailContractor();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/createGroupProduct.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/createGroupProduct.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createGroupProduct_vue_vue_type_template_id_5f7bc056___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGroupProduct.vue?vue&type=template&id=5f7bc056& */ "./resources/js/Pages/createGroupProduct.vue?vue&type=template&id=5f7bc056&");
/* harmony import */ var _createGroupProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGroupProduct.vue?vue&type=script&lang=js& */ "./resources/js/Pages/createGroupProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _createGroupProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _createGroupProduct_vue_vue_type_template_id_5f7bc056___WEBPACK_IMPORTED_MODULE_0__.render,
  _createGroupProduct_vue_vue_type_template_id_5f7bc056___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/createGroupProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/createGroupProduct.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/createGroupProduct.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createGroupProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createGroupProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createGroupProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createGroupProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/createGroupProduct.vue?vue&type=template&id=5f7bc056&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/createGroupProduct.vue?vue&type=template&id=5f7bc056& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createGroupProduct_vue_vue_type_template_id_5f7bc056___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createGroupProduct_vue_vue_type_template_id_5f7bc056___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createGroupProduct_vue_vue_type_template_id_5f7bc056___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./createGroupProduct.vue?vue&type=template&id=5f7bc056& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createGroupProduct.vue?vue&type=template&id=5f7bc056&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createGroupProduct.vue?vue&type=template&id=5f7bc056&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/createGroupProduct.vue?vue&type=template&id=5f7bc056& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      ? _c("h2", [_vm._v("\n        Создание группы продуктов \n    ")])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isViewCreate
      ? _c("h2", [
          _vm._v(
            '\n        Редактируем группу продуктов: "' +
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
      _c("label", { attrs: { for: "group_product_id" } }, [
        _vm._v("Родительская группа")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.group_product_id,
            expression: "formCreateData.group_product_id"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "group_product_id" },
        domProps: { value: _vm.formCreateData.group_product_id },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.formCreateData,
              "group_product_id",
              $event.target.value
            )
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.group_product_id) }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "description" } }, [_vm._v("Описание")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.formCreateData.description,
            expression: "formCreateData.description"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "text", name: "description" },
        domProps: { value: _vm.formCreateData.description },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.formCreateData, "description", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("p", {
        staticClass: "text-danger",
        domProps: { textContent: _vm._s(_vm.create_errors.description) }
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