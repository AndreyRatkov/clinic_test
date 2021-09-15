<template>
    
    <nav class="main-header navbar navbar-expand navbar-white navbar-light " >
        
        <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
            <!--
            <li class="nav-item">
                <img src="/img/logo.png" width="300" height="150" alt="" class="img-thumbnail">
            </li>
            -->
          <!--
          <li class="nav-item d-none d-sm-inline-block">
            <a href="../../index3.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Contact</a>
          </li>
          -->
        </ul>





        <ul class="navbar-nav ml-auto ">
            <!-- Navbar Search -->
            <li class="nav-item">
              <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                <!--<i class="fas fa-search"></i>-->
              </a>

            </li>

            <li v-if="role === 'super_admin' && cur_store_name !== ''" class="nav-item">
                <a class="nav-link"  href="#" role="button">
                    
                </a>
            </li>

            <li v-if="role === 'super_admin' && cur_store_name === ''" class="nav-item">
                <a class="nav-link"  href="#" role="button">
                    
                </a>
            </li>

            <li class="nav-item "  v-if="role !== ''">
                <a class="nav-link active" v-on:click="logout" href="#">Logout</a>
            </li>

        </ul>




    </nav>
    
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'navbar',
    computed: {
        ...mapState({
            role: state => state.role,
            cur_store_name: state => state.select_store_name,
        })/*,
        isView: function() {
            if(this.$route.name === 'login') {
                return false
            }
            return true
        }
        */
    },
    methods: {
        logout() {
            const token = localStorage.getItem('token')

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            //axios.post('api/logout', {'Bearer token' : token}, { headers }).then((response) => {
            axios.post('/api/logout', {}).then((response) => {
                //localStorage.setItem('token', response.data.token)
                this.$store.commit('SetRole', '')
                localStorage.removeItem('token')
                this.$router.push('/login')
                
            }).catch((errors) => {
                this.errors = errors.response.data.errors
            })
        }
    },
}
</script>

