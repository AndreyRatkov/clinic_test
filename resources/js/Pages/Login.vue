<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Вход в личный кабинет</div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="email">Электр. почта</label>
                                <input type="text" class="form-control" name="email" v-model="formData.email">
                                <p class="text-danger" v-text="errors.email"></p>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" class="form-control" name="password" v-model="formData.password">
                                <p class="text-danger" v-text="errors.password"></p>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <button @click="login" class="btn btn-primary">Войти</button>
                                    </div>
                                </div>
                                <!--
                                <div class="col-md-6 text-right">
                                    <router-link to="/register">Create New Account!</router-link>
                                </div>
                                -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'login',
    data() {
        return {
            isLoad: false,
            formData: {
                email: '',
                password: '',
                device_name: 'browser',
                _token: '',
            },
            errors: {

            }
        }
        
    },
    computed: {
        ...mapState({
            count: state => state.count
        }),
    },
    methods: {
        /*
            localStorage.setItem('token', response.data)
        */
        login(){
            this.formData._token = window.Laravel.csrfToken
            axios.post('api/login', this.formData).then((response) => {
                
                //JSON.stringify(
                //console.log('login role:' + response.data.user['role_name'])
                const role = response.data.user['role_name']
                localStorage.setItem('token', response.data.token)
                this.$store.commit('SetRole', response.data.user['role_name'])
                
                if(role === 'patient') {
                    this.$router.push({ 
                        name: 'detail-user', 
                        params: { user_id: response.data.user['id']} 
                    })
                }

                if(role === 'doctor') {
                    this.$router.push({ name: 'users-list', params: { template: 'patients_on_doctor' } })
                }

                if(role === 'manager') {
                    this.$router.push({ name: 'users-list', params: { template: 'patients_all' } })
                }

                //patient, doctor, manager
                /*
                    this.$router.push({ 
                        name: 'detail-user', 
                        params: { user_id: response.data.user.id} 
                    })

                    this.$router.push({ name: 'doctors-list', params: { template: 'doctors' } })

                    this.$router.push({ name: 'users-list', params: { template: 'managers' } })
                */

                //response.data.user.role_name
                //
            }).catch((errors) => {
                console.log("errors1")
                this.errors = errors.response.data.errors
            })
        },
        test() {
            axios.post('api/test', this.formData).then((response) => {
                //localStorage.setItem('token', response.data.token)
                //$store.commit('SetRole', response.data.user.role_name)
                //this.$router.push('/stores-list')
                console.log("pass_hash:"+response.data.msg)
                //response.data.user.role_name
                //
            }).catch((errors) => {
                this.errors = errors.response.data.errors
            })
        }
    },
    mounted() {
        //console.log('loaded Login page')
        //this.test()
        //console.log(localStorage)
    }
    
}
</script>