import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
import * as Cookies from 'js-cookie'

const store = new Vuex.Store({
    plugins: 
        [createPersistedState({
            /*
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
            */
            /*
            paths: ['login.tokens'],
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, {expires: 365})
            */
            storage: {
                getItem: (key) => Cookies.get(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                  Cookies.set(key, value, { expires: 3, secure: true }),
                removeItem: (key) => Cookies.remove(key),
              },
          })],
    state: {
        count: 0,
        isSmallSidebar: false,
        role: "",//super_admin,admin,manager
        isViewCreate: true,
        select_store_id: -1,
        select_store_name: "",
        product_add: {
            document_receipt_id:        null,
            brand_id:                   null,
            supplier_id:                null,
            investor_id:                null,
            group_product_id:           null,
            group_node1_id:             null,
            group_node2_id:             null,
            group_node3_id:             null,
            disassembly_auto_id:        null,
            storage_location_product_id:null,
            document_receipt_name:      "",
            brand_name:                 "",
            supplier_name:              "",
            investor_name:              "",
            group_product_name:         "",
            group_node1_name:           "",
            group_node2_name:           "",
            group_node3_name:           "",
            disassembly_auto_name:      "",
            storage_location_product_name: ""
        },
    },
    mutations: {
        SaveProduct(state, m) {
            state.product_add.brand_id = m.brand_id
            state.product_add.brand_name = m.brand_name



            state.product_add.document_receipt_id = m.document_receipt_id
            state.product_add.brand_id = m.brand_id
            state.product_add.supplier_id = m.supplier_id
            state.product_add.investor_id = m.investor_id
            state.product_add.group_product_id = m.group_product_id
            state.product_add.group_node1_id = m.group_node1_id
            state.product_add.group_node2_id = m.group_node2_id
            state.product_add.group_node3_id = m.group_node3_id
            state.product_add.disassembly_auto_id = m.disassembly_auto_id
            state.product_add.storage_location_product_id = m.storage_location_product_id
            
            
            state.product_add.document_receipt_name = m.document_receipt_name
            state.product_add.brand_name = m.brand_name
            state.product_add.supplier_name = m.supplier_name
            state.product_add.investor_name = m.investor_name
            state.product_add.group_product_name = m.group_product_name
            state.product_add.group_node1_name = m.group_node1_name
            state.product_add.group_node2_name = m.group_node2_name
            state.product_add.group_node3_name = m.group_node3_name
            state.product_add.disassembly_auto_name = m.disassembly_auto_name
            state.product_add.storage_location_product_name = m.storage_location_product_name
            
        },



        INCREMENT(state) {
            state.count++
        },
        SmallSidebar(state) {
            state.isSmallSidebar = true
        },
        NormalSidebar(state) {
            state.isSmallSidebar = false
        },
        SetRole(state, role) {
            state.role = role
        },
        GetRole(state) {
            return state.role
        },
        SetViewCreate(state, val) {
            state.isViewCreate = val
        },
        //SetStore(state, {store_id, store_name}) {
        SetStore(state, m) {
            state.select_store_id = m._store_id
            state.select_store_name = m._store_name
            
            
        },
        SetStoreTest(state, store_id) {
            console.log("step0 SetStoreTest:" + store_id)
        }
    },
    actions: {}
})

export default store;