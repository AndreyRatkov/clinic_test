<template>
    <div class="container">
        <h2 v-if="isViewCreate">
            Добавление <span v-if="param_role_name === 'patient'">пациента</span>
                       <span v-if="param_role_name === 'doctor'">врача</span>
                       <span v-if="param_role_name === 'manager'">менеджера</span> 
        </h2>

        <h2 v-if="!isViewCreate">
            О себе 
        </h2>

        <!--
            fullname: "",
            position: "",
            email:    "",
            role_name:   "",
            password: "",
            confirm_password: "",
            gender: "",
            date_birth: "",
            address: "",
            phone_number: "",
        -->

        <div class="form-group">
            <label for="fullname">ФИО</label>
            <input type="text" class="form-control" name="fullname" v-model="formCreateData.fullname">
            <p class="text-danger" v-text="create_errors.fullname"></p>
        </div>
        <div class="form-group" v-if="param_role_name === 'doctor'">
            <label for="position">Должность</label>
            <input type="text" class="form-control" name="position" v-model="formCreateData.position">
            <p class="text-danger" v-text="create_errors.position"></p>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" name="email" v-model="formCreateData.email">
            <p class="text-danger" v-text="create_errors.email"></p>
        </div>
        <!--
        <div class="form-group">
            <label for="role_name">Роль</label>
            <b-form-select name="role_name" v-model="formCreateData.role_name" :options="optionsRole"></b-form-select>
            <p class="text-danger" v-text="create_errors.role_name"></p>
        </div>
        -->

        <div class="form-group" v-if="isViewCreate">
            <label for="password">Пароль</label>
            <input type="text" class="form-control" name="password" v-model="formCreateData.password">
            <p class="text-danger" v-text="create_errors.password"></p>
        </div>
        
        <div class="form-group" v-if="isViewCreate">
            <label for="confirm_password">Подтверждение пароля</label>
            <input type="text" class="form-control" name="confirm_password" v-model="formCreateData.confirm_password">
            <p class="text-danger" v-text="create_errors.confirm_password"></p>
        </div>

        <div class="form-group">
            <label for="gender">Пол</label>
            <b-form-select name="gender" v-model="formCreateData.gender" :options="optionsGender"></b-form-select>
            <p class="text-danger" v-text="create_errors.gender"></p>
        </div>

        <div class="form-group">
            <label for="date_birth">Дата рождения</label>
            <b-form-datepicker  v-model="formCreateData.date_birth"
                                id="datepicker-placeholder-create2" 
                                placeholder="Выбор даты" 
                                locale="ru"></b-form-datepicker>
            <p class="text-danger" v-text="create_errors.date_birth"></p>
        </div>

        <div class="form-group">
            <label for="address">Адрес</label>
            <input type="text" class="form-control" name="address" v-model="formCreateData.address">
            <p class="text-danger" v-text="create_errors.address"></p>
        </div>

        <div class="form-group">
            <label for="phone_number">Телефон</label>
            <input type="text" class="form-control" name="phone_number" v-model="formCreateData.phone_number">
            <p class="text-danger" v-text="create_errors.phone_number"></p>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <button v-if="isViewCreate" @click="sendData" class="btn btn-primary">Создать</button>
                    <button v-if="!isViewCreate" @click="sendData" class="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>

    </div>
</template>





<script>

import { mapState } from 'vuex'
import { BFormSelect } from 'bootstrap-vue'
import { BFormDatepicker } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/*
    $table->string('fullname');
    $table->string('email');//->unique()
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->string('role_name');
    $table->string('gender');
    $table->timestamp('date_birth')->nullable();
    $table->text('address');
    $table->string('phone_number');
*/

export default {
    name: 'createUser',
    components: {
        BFormSelect,
        BFormDatepicker
    },
    data() {
        return {
            users: [],
            pagination:{},
            isLoad: false,
            param_user_id: this.$route.params.user_id,
            isViewCreate: this.$route.params.flag,
            param_role_name: this.$route.params.role,

            formData: {
                
            },
            formCreateData: {
                fullname: "",
                email:    "",
                role_name:   "",
                password: "",
                confirm_password: "",
                gender: "",
                date_birth: "",
                address: "",
                phone_number: "",
                position: "",
            },
            create_errors: {
                
            },
            optionsRole: [
                
                { value: "manager", text: 'Менеджер' },
                { value: "admin", text:   'Администратор' }
            ],
            optionsGender: [
                { value: "man", text: 'Мужской' },
                { value: "female", text: 'Женский' }
            ],
            edit_errors: {
                
            },
            errors: {

            }
        }
    },
    computed: {
        ...mapState({
            
            role: state => state.role,//patient, doctor, manager
        }),
    },
    computed: {
        /*
        
        */
        /* 
        isViewCreate: this.$route.params.flag,
        */
    },
    methods: {
        resetFormCreate() {
            this.formCreateData.name = ""
            this.formCreateData.role_name = ""
            this.formCreateData.email = ""
            this.formCreateData.password = ""

        },
        sendData() {
            if(this.isViewCreate) {
                console.log("sendCreateUser")
                this.sendCreateUser()
            } else {
                console.log("MyInfoUpdate")
                this.MyInfoUpdate()
            }
        },
        sendCreateUser() {
            const token = localStorage.getItem('token')
            //localStorage.removeItem('token')
            this.formCreateData.role_name = this.param_role_name
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            
            
            axios.post('/api/create_user', this.formCreateData).then((response) => {
                this.resetFormCreate()
                //this.$router.push('/users-list')
                /*
                this.$router.push({
                    name: 'users-list',
                    params: { template: 'patients_all' }
                })
                response.data.user.id
                
                */
                //patient, doctor, manager
                /*
                    this.$router.push({ 
                        name: 'detail-user', 
                        params: { user_id: response.data.user.id} 
                    })

                    this.$router.push({ name: 'doctors-list', params: { template: 'doctors' } })

                    this.$router.push({ name: 'users-list', params: { template: 'managers' } })
                */

                if(this.param_role_name === 'patient') {
                    this.$router.push({ 
                        name: 'detail-user', 
                        params: { user_id: response.data.user.id} 
                    })
                }
                
                if(this.param_role_name === 'doctor') {
                    this.$router.push({ name: 'doctors-list', params: { template: 'doctors' } })
                }
                
                if(this.param_role_name === 'manager') {
                    this.$router.push({ name: 'users-list', params: { template: 'managers' } })
                }
                
                //role - текущий авторизованный пользователь

                //patients_all
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
                //this.create_errors = errors.data
            })
            
        },
        sendEditUser() {
            /*
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            this.formCreateData.user_id = this.param_user_id
            axios.post('/api/update_user', this.formCreateData).then((response) => {
                this.resetFormCreate()
                this.$router.push('/users-list')
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
            */
        },
        getDetailUser() {
            
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            axios.post('/api/detail_user_short_info', { "user_id": this.param_user_id }).then((response) => {
                
                this.formCreateData.fullname = response.data.user.fullname
                this.formCreateData.role_name = response.data.user.role_name
                this.formCreateData.email = response.data.user.email
                this.formCreateData.gender = response.data.user.gender
                this.formCreateData.date_birth = response.data.user.date_birth
                this.formCreateData.address = response.data.user.address
                this.formCreateData.phone_number = response.data.user.phone_number            

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
            
        },
        getMyInfo() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            axios.post('/api/get_my_info', {}).then((response) => {
                
                this.formCreateData.fullname = response.data.user.fullname
                this.formCreateData.role_name = response.data.user.role_name
                this.formCreateData.email = response.data.user.email
                this.formCreateData.gender = response.data.user.gender
                this.formCreateData.date_birth = response.data.user.date_birth
                this.formCreateData.address = response.data.user.address
                this.formCreateData.phone_number = response.data.user.phone_number            

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
        MyInfoUpdate() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            this.formCreateData.user_id = this.param_user_id
            axios.post('/api/my_info_update', this.formCreateData).then((response) => {
                //this.resetFormCreate()
                //{ name: 'about-i', params: { flag: false, role: role } }
                //this.$router.push({ name: 'about-i', params: { flag: false, role: this.param_role_name } })
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
    },
    mounted() {
        //console.log("this.$route.params.role_name:"+this.$route.params.role);
        if(!this.isViewCreate) {
            this.getMyInfo()
            //this.getDetailUser()
        }
    }
}

</script>