<template>
    <div class="container">
        <ul class="nav justify-content-end">
            <li class="nav-ite">{{ cur_store_name }}</li>
            <li class="nav-item">
                {{ role }}
            </li>    
            <li class="nav-item">
                {{ role }}<a class="nav-link active" v-on:click="logout" aria-current="page" href="#">Logout</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> -->
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'home',
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
            console.log("tok:"+token)
            //localStorage.removeItem('token')
            //this.formData
            //const token2 = "89350fc9536dfef3b0bc02b1725b971a7fc7c3ca78defb6c25411df12efcadf9"
            const headers = { 
              "Authorization": "Bearer my-token" + token
            };

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            //axios.post('api/logout', {'Bearer token' : token}, { headers }).then((response) => {
            axios.post('/api/logout', {}).then((response) => {
                //localStorage.setItem('token', response.data.token)
                this.$store.commit('SetRole', '')
                localStorage.removeItem('token')
                this.$router.push('/login')
                

                //response.data.user.role_name
                //
            }).catch((errors) => {
                this.errors = errors.response.data.errors
            })
        }
    },
    mounted() {
        //console.log("cur url:"+this.$route.name)
        //localStorage.removeItem('token')
    }
}
</script>