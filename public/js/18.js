(self.webpackChunk=self.webpackChunk||[]).push([[18],{18:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});s(1263),s(122);const e={name:"storesList",data:function(){return{stores:[],pagination:{},isLoad:!1,remove_store_name:"",remove_store_id:0,formData:{},errors:{}}},methods:{getStores:function(t){var a=this,s=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+s,t=t||"api/get_store_list",axios.post(t).then((function(t){console.log("stores length:"+t.data.stores.data.length),a.stores=t.data.stores.data,a.makePagination(t.data.stores),console.log("first_page_url:"+t.data.stores.first_page_url)})).catch((function(t){console.log(t)}))},makePagination:function(t){var a={current_page:t.current_page,last_page:t.last_page,prev_page_url:t.prev_page_url,next_page_url:t.next_page_url};this.pagination=a},showCreateStore:function(){},showStores:function(){},showRemoveModal:function(t,a){this.remove_store_name=a,this.remove_store_id=t,$(this.$refs.modal2).modal("show")},removeStore:function(){var t=this,a=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+a;var s={store_id:this.remove_store_id};axios.post("/api/remove_store",s).then((function(a){$(t.$refs.modal2).modal("hide"),t.getStores()})).catch((function(a){t.create_errors=a.response.data.errors}))}},mounted:function(){this.getStores()}};const i=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("h2",[t._v("\n        Stores List Page\n    ")]),t._v(" "),s("div",{ref:"modal2",staticClass:"modal fade",attrs:{id:"exampleModal2",tabindex:"-1","aria-labelledby":"exampleModalLabel2","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg"},[s("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),s("div",{staticClass:"modal-body"},[t._v("\n                    Вы уверены, что хотите удалить магазин:"+t._s(t.remove_store_name)+"?\n                ")]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.removeStore}},[t._v("Удаление")])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"}),t._v(" "),s("div",{staticClass:"col-6"},[s("router-link",{attrs:{to:{name:"create-store",params:{flag:!0}}}},[t._v("_Add store")])],1)]),t._v(" "),t._m(1),t._v(" "),t._l(t.stores,(function(a){return s("div",{key:a.id,staticClass:"row"},[s("div",{staticClass:"col-2"},[t._v(t._s(a.store_name))]),t._v(" "),s("div",{staticClass:"col-2"},[t._v(t._s(a.email))]),t._v(" "),s("div",{staticClass:"col-3"},[t._v(t._s(a.general_fullname))]),t._v(" "),s("div",{staticClass:"col-3"},[t._v(t._s(a.contact_fullname))]),t._v(" "),s("div",{staticClass:"col-1"},[s("router-link",{attrs:{to:{name:"edit-store",params:{flag:!1,store_id:a.id}}}},[t._v("edit ")])],1),t._v(" "),s("div",{staticClass:"col-1"},[s("a",{attrs:{href:"#"},on:{click:function(s){return t.showRemoveModal(a.id,a.store_name)}}},[t._v("remove")])])])})),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"}),t._v(" "),s("div",{staticClass:"col-4"},[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination"},[s("li",{staticClass:"page-item",class:{disabled:!t.pagination.prev_page_url},on:{click:function(a){return a.preventDefault(),t.getStores(t.pagination.prev_page_url)}}},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Предыдущая")])]),t._v(" "),s("li",{staticClass:"page-item disabled"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("\n                        Страница "+t._s(t.pagination.current_page)+" из "+t._s(t.pagination.last_page)+"\n                    ")])]),t._v(" "),s("li",{staticClass:"page-item",class:{disabled:!t.pagination.next_page_url},on:{click:function(a){return a.preventDefault(),t.getStores(t.pagination.next_page_url)}}},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Следующая")])])])])]),t._v(" "),s("div",{staticClass:"col-4"})])],2)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel2"}},[t._v("Удаление магазина")])]),t._v(" "),s("div",{staticClass:"col-6"},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-2"},[t._v("Store name")]),t._v(" "),s("div",{staticClass:"col-2"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-3"},[t._v("General fullname")]),t._v(" "),s("div",{staticClass:"col-3"},[t._v("Contact fullname")]),t._v(" "),s("div",{staticClass:"col-1"}),t._v(" "),s("div",{staticClass:"col-1"})])}],!1,null,null,null).exports}}]);