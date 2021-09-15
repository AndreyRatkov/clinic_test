require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './Router/index'
import store from './Store/index'
import App from './App.vue'

Vue.use(VueRouter)

function loggedIn() {
    return localStorage.getItem('token')
}



const app = new Vue({
    el: '#app',
    render : h => h(App),
    router,
    store,
    //components: { App }
});