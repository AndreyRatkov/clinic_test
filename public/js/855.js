(self.webpackChunk=self.webpackChunk||[]).push([[855],{1855:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});a(1263),a(122);function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const i={name:"ProductsList",data:function(){return{products:{},pagination:{},remove_product_name:"",remove_product_id:0,item_search:"",timer:null,lastValue:"",lastCollection:"",errors:{}}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,a(629).rn)({cur_store_name:function(t){return t.select_store_name},cur_store_id:function(t){return t.select_store_id}})),methods:{getProducts:function(t){var e=this,a=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+a,t=t||"api/get_product_list",axios.post(t,{store_id:this.cur_store_id,item_search:this.item_search}).then((function(t){e.products=t.data.products.data,e.makePagination(t.data.products)})).catch((function(t){console.log(t)}))},makePagination:function(t){var e={current_page:t.current_page,last_page:t.last_page,prev_page_url:t.prev_page_url,next_page_url:t.next_page_url};this.pagination=e},showRemoveModal:function(t,e){this.remove_product_name=e,this.remove_product_id=t,$(this.$refs.modal2).modal("show")},removeProduct:function(){var t=this,e=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+e;var a={product_id:this.remove_contractor_id};axios.post("/api/remove_product",a).then((function(e){$(t.$refs.modal2).modal("hide"),t.getProducts()})).catch((function(e){t.create_errors=e.response.data.errors}))},startTimer:function(){var t=this;this.timer=setInterval((function(){"items"===t.lastCollection&&t.getProducts(),t.stopTimer()}),1e3)},stopTimer:function(){clearTimeout(this.timer)},changeValueInput:function(t,e){this.lastValue=t.target.value,this.lastCollection=e,this.stopTimer(),this.startTimer()}},mounted:function(){this.getProducts()}};const o=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[t._v("Запчасти")]),t._v(" "),a("div",{ref:"modal2",staticClass:"modal fade",attrs:{id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),a("div",{staticClass:"modal-body"},[t._v("\n                    Вы уверены, что хотите удалить запчасть:"+t._s(t.remove_product_name)+"?\n                ")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.removeProduct}},[t._v("Удаление")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("router-link",{attrs:{to:{name:"create-product",params:{flag:!0}}}},[t._v("Добавление запчасти")])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"item_search"}},[t._v("Поиск")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item_search,expression:"item_search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search",name:"item_search"},domProps:{value:t.item_search},on:{input:[function(e){e.target.composing||(t.item_search=e.target.value)},function(e){return t.changeValueInput(e,"items")}]}})])]),t._v(" "),t._m(1),t._v(" "),t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v(t._s(e.registry_number))]),t._v(" "),a("div",{staticClass:"col-4"},[t._v(t._s(e.article))]),t._v(" "),a("div",{staticClass:"col-2"},[a("router-link",{attrs:{to:{name:"edit-product",params:{flag:!1,product_id:e.id}}}},[t._v("редактировать")])],1),t._v(" "),a("div",{staticClass:"col-2"},[a("a",{attrs:{href:"#"},on:{click:function(a){return t.showRemoveModal(e.id,e.name)}}},[t._v("удалить")])])])})),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"}),t._v(" "),a("div",{staticClass:"col-4"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.prev_page_url},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.prev_page_url)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Предыдущая")])]),t._v(" "),a("li",{staticClass:"page-item disabled"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n                        Страница "+t._s(t.pagination.current_page)+" из "+t._s(t.pagination.last_page)+"\n                    ")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.next_page_url},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.next_page_url)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Следующая")])])])])]),t._v(" "),a("div",{staticClass:"col-4"})])],2)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel2"}},[t._v("Удаление запчасти")])]),t._v(" "),a("div",{staticClass:"col-6"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._v("Рег. номер")]),t._v(" "),a("div",{staticClass:"col-4"},[t._v("Артикл")]),t._v(" "),a("div",{staticClass:"col-4"},[t._v("Действия")])])}],!1,null,null,null).exports}}]);