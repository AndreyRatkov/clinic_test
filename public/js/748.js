(self.webpackChunk=self.webpackChunk||[]).push([[748],{3748:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(629);a(1263),a(122);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const s={name:"createBrand",data:function(){return{contractors:[],pagination:{},isLoad:!1,param_brand_id:this.$route.params.brand_id,isViewCreate:this.$route.params.flag,formData:{},formCreateData:{name:"",name2:""},create_errors:{},edit_errors:{},errors:{}}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},(0,r.rn)({cur_store_id:function(e){return e.select_store_id}})),methods:{resetFormCreate:function(){this.formCreateData.name="",this.formCreateData.store_id=0,this.formCreateData.name2=""},sendData:function(){this.isViewCreate?(console.log("sendCreateBrand"),this.sendCreateBrand()):(console.log("sendUpdateBrand"),this.sendEditBrand())},sendCreateBrand:function(){var e=this,t=localStorage.getItem("token");this.formCreateData.store_id=this.cur_store_id,axios.defaults.headers.common.Authorization="Bearer "+t,axios.post("/api/create_brand",this.formCreateData).then((function(t){e.resetFormCreate(),e.$router.push("/brands-list")})).catch((function(t){e.create_errors=t.response.data.errors}))},sendEditBrand:function(){var e=this,t=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+t,this.formCreateData.brand_id=this.param_brand_id,axios.post("/api/update_brand",this.formCreateData).then((function(t){e.resetFormCreate(),e.$router.push("/brands-list")})).catch((function(t){e.create_errors=t.response.data.errors}))},getDetailBrand:function(){var e=this,t=localStorage.getItem("token");axios.defaults.headers.common.Authorization="Bearer "+t,console.log(),axios.post("/api/detail_brand_info",{brand_id:this.param_brand_id,store_id:this.cur_store_id}).then((function(t){e.formCreateData.name=t.data.brand.name,e.formCreateData.name2=t.data.brand.name2})).catch((function(t){e.create_errors=t.response.data.errors}))}},mounted:function(){this.isViewCreate||this.getDetailBrand()}};const i=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e.isViewCreate?a("h2",[e._v("\n        Создание бренда \n    ")]):e._e(),e._v(" "),e.isViewCreate?e._e():a("h2",[e._v('\n        Редактируем бренд: "'+e._s(e.formCreateData.name)+'" \n    ')]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Название")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreateData.name,expression:"formCreateData.name"}],staticClass:"form-control",attrs:{type:"text",name:"name"},domProps:{value:e.formCreateData.name},on:{input:function(t){t.target.composing||e.$set(e.formCreateData,"name",t.target.value)}}}),e._v(" "),a("p",{staticClass:"text-danger",domProps:{textContent:e._s(e.create_errors.name)}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name2"}},[e._v("Название 2")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formCreateData.name2,expression:"formCreateData.name2"}],staticClass:"form-control",attrs:{type:"text",name:"name2"},domProps:{value:e.formCreateData.name2},on:{input:function(t){t.target.composing||e.$set(e.formCreateData,"name2",t.target.value)}}}),e._v(" "),a("p",{staticClass:"text-danger",domProps:{textContent:e._s(e.create_errors.name2)}})]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[e.isViewCreate?a("button",{staticClass:"btn btn-primary",on:{click:e.sendData}},[e._v("Создать")]):e._e(),e._v(" "),e.isViewCreate?e._e():a("button",{staticClass:"btn btn-primary",on:{click:e.sendData}},[e._v("Сохранить")])])])])])}),[],!1,null,null,null).exports}}]);