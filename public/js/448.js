(self.webpackChunk=self.webpackChunk||[]).push([[448],{1671:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>i});e(1263),e(122);function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const n={name:"BrandsList",data:function(){return{brands:{},pagination:{},remove_brand_name:"",remove_brand_id:0,errors:{}}},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},(0,e(629).rn)({cur_store_name:function(t){return t.select_store_name},cur_store_id:function(t){return t.select_store_id}})),methods:{getBrands:function(t){var a=this,e=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+e,t=t||"api/get_brand_list",axios.post(t,{store_id:this.cur_store_id}).then((function(t){console.log("contractors length:"+t.data.brands.data.length),a.brands=t.data.brands.data,a.makePagination(t.data.brands)})).catch((function(t){console.log(t)}))},makePagination:function(t){var a={current_page:t.current_page,last_page:t.last_page,prev_page_url:t.prev_page_url,next_page_url:t.next_page_url};this.pagination=a},showRemoveModal:function(t,a){this.remove_brand_name=a,this.remove_brand_id=t,$(this.$refs.modal2).modal("show")},removeBrand:function(){var t=this,a=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+a;var e={brand_id:this.remove_brand_id};axios.post("/api/remove_brand",e).then((function(a){$(t.$refs.modal2).modal("hide"),t.getBrands()})).catch((function(a){t.create_errors=a.response.data.errors}))}},mounted:function(){this.getBrands()}};const i=(0,e(1900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("h2",[t._v("Бренды")]),t._v(" "),e("div",{ref:"modal2",staticClass:"modal fade",attrs:{id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg"},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[t._v("\n                    Вы уверены, что хотите удалить бренд:"+t._s(t.remove_brand_name)+"?\n                ")]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.removeBrand}},[t._v("Удаление")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("router-link",{attrs:{to:{name:"create-brand",params:{flag:!0}}}},[t._v("Добавить бренд")])],1)]),t._v(" "),t._m(1),t._v(" "),t._l(t.brands,(function(a){return e("div",{key:a.id,staticClass:"row"},[e("div",{staticClass:"col-4"},[t._v(t._s(a.name))]),t._v(" "),e("div",{staticClass:"col-4"},[t._v(t._s(a.name2))]),t._v(" "),e("div",{staticClass:"col-2"},[e("router-link",{attrs:{to:{name:"edit-brand",params:{flag:!1,brand_id:a.id}}}},[t._v("редактировать")])],1),t._v(" "),e("div",{staticClass:"col-2"},[e("a",{attrs:{href:"#"},on:{click:function(e){return t.showRemoveModal(a.id,a.name)}}},[t._v("удалить")])])])})),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"}),t._v(" "),e("div",{staticClass:"col-4"},[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.prev_page_url},on:{click:function(a){return a.preventDefault(),t.getBrands(t.pagination.prev_page_url)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Предыдущая")])]),t._v(" "),e("li",{staticClass:"page-item disabled"},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n                        Страница "+t._s(t.pagination.current_page)+" из "+t._s(t.pagination.last_page)+"\n                    ")])]),t._v(" "),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.next_page_url},on:{click:function(a){return a.preventDefault(),t.getBrands(t.pagination.next_page_url)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Следующая")])])])])]),t._v(" "),e("div",{staticClass:"col-4"})])],2)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel2"}},[t._v("Удаление бренда")])]),t._v(" "),e("div",{staticClass:"col-6"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[t._v("Название")]),t._v(" "),e("div",{staticClass:"col-4"},[t._v("Название 2")]),t._v(" "),e("div",{staticClass:"col-4"},[t._v("Действия")])])}],!1,null,null,null).exports}}]);