<template>
    <div class="app">
        <!--<Navbar></Navbar>-->
    <div class="wrapper">
        
        
        
        <Navbar v-if="!isPageLogin"></Navbar>
        <Sidebar v-if="!isPageLogin"></Sidebar>
        <!--<Sidebar v-if="isViewLeftMenu"></Sidebar>-->
        
        <!--<Topmenu v-if="isViewTopMenu"></Topmenu>-->
        
        <!--
        <div v-bind:class="{'left_padding_side_small' : isSmallSidebar, 'left_padding_side_normal' : !isSmallSidebar}"
            class="container">
            <router-view></router-view>
        </div>
        -->

        <!-- Content Wrapper. Contains page content -->
        
        <!--<div class="content-wrapper">-->
        <div v-bind:class="{'content-wrapper': !isPageLogin, 'content' : isPageLogin}">
            <!-- Content Header (Page header) -->
            <!--
            <div class="content-header">
              <div class="container-fluid">
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1 class="m-0">Dashboard</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            -->
            <!-- /.content-header -->


            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
            </section>
            
                
    



        </div>

    </div>
    </div>
</template>

<script>
import './Styles/app.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { mapState } from 'vuex'; 

export default {
    name: 'app',
    computed: {
        ...mapState({
            isSmallSidebar: state => state.isSmallSidebar
        }),
        routeName: function() {
            return this.$route.name
        },
        isViewTopMenu: function() {
            if(this.$route.name === 'login') {
                return false 
            }
            return true
        },
        isViewLeftMenu: function() {
            if(this.$route.name === 'login') {
                return false
            }
            return true
        },
        isPageLogin: function() {
            if(this.$route.name === 'login') {
                return true
            }
            return false
        },
    },
    components: {
        Navbar:     () => import('./Components/Navbar.vue'),
        Sidebar:    () => import('./Components/Sidebar'),
        Topmenu:    () => import('./Components/TopMenu'),
    },
    mounted() {
        //console.log("App cur url:" + this.$route.name)
    }
}
</script>

<style scoped>
    .left_padding_side_small {
        /*
        transition: 0.5s;
        margin-left: 80px;
        */
    }
    .left_padding_side_normal {
        /*
        transition: 0.5s;
        margin-left: 250px;
        */
    }
</style>
