<template>
    <div class="container">


        

        <!-- #modal1 Edit  -->

        <div class="modal fade" id="exampleModal1" ref="modal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">Редактирование</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <div class="form-group">
                            <label for="fullname">ФИО</label>
                            <input type="text" class="form-control" name="fullname" v-model="user_info.fullname">
                            <p class="text-danger" v-text="create_errors.fullname"></p>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" name="email" v-model="user_info.email">
                            <p class="text-danger" v-text="create_errors.email"></p>
                        </div>

                        
                        <div class="form-group">
                            <label for="gender">Пол</label>
                            <b-form-select name="gender" v-model="user_info.gender" :options="optionsGender"></b-form-select>
                            <p class="text-danger" v-text="create_errors.gender"></p>
                        </div>
                        
                        <div class="form-group">
                            <label for="date_birth">Дата рождения</label>
                            <b-form-datepicker  v-model="user_info.date_birth"
                                                id="datepicker-placeholder-create2" 
                                                placeholder="Выбор даты" 
                                                locale="ru"></b-form-datepicker>
                            <p class="text-danger" v-text="create_errors.date_birth"></p>
                        </div>

                        <div class="form-group">
                            <label for="address">Адрес</label>
                            <input type="text" class="form-control" name="address" v-model="user_info.address">
                            <p class="text-danger" v-text="create_errors.address"></p>
                        </div>

                        <div class="form-group">
                            <label for="phone_number">Телефон</label>
                            <input type="text" class="form-control" name="phone_number" v-model="user_info.phone_number">
                            <p class="text-danger" v-text="create_errors.phone_number"></p>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendUpdateUser" class="btn btn-secondary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal1 end -->




        <h2 v-if="cur_template === 'patients_all' || cur_template === 'patients_on_doctor'" >Пациенты</h2>
        <h2 v-if="cur_template === 'doctors'" >Врачи</h2>
        <h2 v-if="cur_template === 'managers'" >Менеджеры</h2>

        <div class="modal fade" id="exampleModal2" ref="modal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        
                        <h5 v-if="cur_template === 'patients_all' || cur_template === 'patients_on_doctor'"
                             class="modal-title" id="exampleModalLabel2">Удаление пациента</h5>
                        <h5 v-if="cur_template === 'doctors'"
                             class="modal-title" id="exampleModalLabel2">Удаление врача</h5>
                        <h5 v-if="cur_template === 'managers'"
                             class="modal-title" id="exampleModalLabel2">Удаление менеджера</h5>
                    
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        
                    </div>
                    
                    <div class="modal-body">
                        Вы уверены, что хотите удалить:{{remove_user_name}}?
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="removeUser" class="btn btn-secondary">Удаление</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            
            <!-- patients_all, patients_on_doctor, doctors, managers -->
            <!-- doctor, manager -->
            <div class="col-6" v-if="cur_template === 'patients_all' || cur_template === 'patients_on_doctor'">
                <router-link 
                    :to="{ name: 'create-user', params: { flag: true, role: 'patient' }}"
                    
                    >Добавить пациента</router-link>
            </div>
            <div class="col-6" v-if="cur_template === 'doctors'">
                <router-link :to="{ name: 'create-user', params: { flag: true, role: 'doctor' }}">Добавить врача</router-link>
            </div>

            <div class="col-6" v-if="cur_template === 'managers'">
                <router-link :to="{ name: 'create-user', params: { flag: true, role: 'manager' }}">Добавить менеджера</router-link>
            </div>

        </div>
        <!--
            
        -->


        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                <!--
                    //cur_template == "patients_all" "patients_on_doctor"
                -->  
                    <div v-if="cur_template === 'patients_on_doctor'">

                        <label for="item_search">Поиск</label>
                        <input type="text"
                                @input="changeValueInput($event, 'items')"  
                                placeholder='Search'  
                                class='form-control' 
                                name='item_search' v-model='item_search'>
                    </div>
                </h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Дата создания</th>
                            <th>Дата посл. посещения</th>
                            
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>

                        <!-- 
                            $table->string('fullname');
                            $table->string('email');//->unique()
                            $table->timestamp('email_verified_at')->nullable();
                            $table->string('password');
                            $table->string('role_name');
                            $table->string('gender');
                            $table->timestamp('date_birth')->nullable();
                            $table->text('address');
                            $table->string('phone_number');
                        -->
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.fullname }}</td>
                            <td>{{ user.created_at }}</td>
                            <td>{{ user.date_last_in }}</td>
                            
                            <td>
                                <router-link 
                                    v-if="cur_template === 'patients_on_doctor' || cur_template === 'patients_all'"
                                    :to="{ name: 'detail-user', params: { user_id: user.id }}">детализация</router-link>
                                
                                <a v-if="cur_template === 'doctors' || cur_template === 'managers'" 
                                    v-on:click="showEditModal(user.id)" href="#">Редактировать</a>
                                
                                <a v-on:click="showRemoveModal(user.id, user.name)" href="#">удалить</a>
                                <!-- doctors, managers -->
                                <!--<router-link :to="{ name: 'edit-user', params: { flag: false , user_id: user.id }}">редактировать</router-link>-->
                                <!--<a v-on:click="showRemoveModal(user.id, user.name)" href="#">удалить</a>-->
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>ФИО</th>
                            <th>Дата создания</th>
                            <th>Дата посл. посещения</th>
                            
                            <th>Действия</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>


        <!--
        <div class="row">
            <div class="col-3">Имя</div>
            <div class="col-4">Email</div>
            <div class="col-3">Роль</div>
            <div class="col-3">Действия</div>
            
        </div>
        <div v-for="user in users" :key="user.id" class="row">
            <div class="col-4">{{ user.name }}</div>
            <div class="col-4">{{ user.email }}</div>
            <div class="col-4">{{ user.role_name }}</div>
            <div class="col-2"><router-link :to="{ name: 'edit-user', params: { flag: false , user_id: user.id }}">редактировать</router-link></div>
            <div class="col-2"><a v-on:click="showRemoveModal(user.id, user.name)" href="#">удалить</a></div>
        </div>
        -->

        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li :class="{ disabled: !pagination.prev_page_url }"
                        @click.prevent="getUsers(pagination.prev_page_url)"
                        class="page-item">
                        <a class="page-link" href="#">Предыдущая</a>
                    </li>
                    <li class="page-item disabled">
                        <a class="page-link" href="#">
                            Страница {{ pagination.current_page }} из {{ pagination.last_page }}
                        </a>
                    </li>
                    <li :class="{ disabled: !pagination.next_page_url }"
                        @click.prevent="getUsers(pagination.next_page_url)"
                        class="page-item">
                        <a class="page-link" href="#">Следующая</a>
                    </li>
                  </ul>
                </nav>
                <!--<b-pagination-nav :link-gen="linkGen" :number-of-pages="2" use-router></b-pagination-nav>-->
            </div>
            <div class="col-4"></div>
        </div>

    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { mapState } from 'vuex';
import { BFormSelect } from 'bootstrap-vue'
import { BFormDatepicker } from 'bootstrap-vue'

export default {
    name: 'UsersList',
    components: {
        BFormSelect,
        BFormDatepicker
    },
    data() {
        return {
            users: {},
            pagination: {},
            remove_user_name: "",
            remove_user_id: 0,
            cur_template: this.$route.params.template,//patients_all, patients_on_doctor, doctors, managers
            user_info: {
                patient_id: null,
                fullname: "",
                email:    "",
                role_name:   "",
                gender: "",
                date_birth: "",
                address: "",
                phone_number: "",
            },
            optionsGender: [
                { value: "man", text: 'Мужской' },
                { value: "female", text: 'Женский' }
            ],
            create_errors: {

            },


            item_search: "",
            timer: null,
            lastValue: "",
            lastCollection: "",
            
        }
    },
    computed: {
        
    },
    methods: {


        showEditModal(user_id) {
            $(this.$refs.modal1).modal('show')
            this.getUserInfo(user_id)
        },
        getUserInfo(user_id) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const page_url = '/api/detail_user_short_info'
            
            //detail_user_short_info
            
            axios.post(page_url, {"user_id": user_id }).then((response) => {
                
                //this.user_info = response.data.user
                
                this.user_info.patient_id = response.data.user.id
                this.user_info.fullname = response.data.user.fullname

                this.user_info.email = response.data.user.email
                this.user_info.role_name = response.data.user.role_name
                this.user_info.gender = response.data.user.gender
                this.user_info.date_birth = response.data.user.date_birth
                this.user_info.address = response.data.user.address
                this.user_info.phone_number = response.data.user.phone_number

                /*
                    fullname: "",
                    email:    "",
                    role_name:   "",
                    gender: "",
                    date_birth: "",
                    address: "",
                    phone_number: "",
                */

            }).catch((errors) => {
                console.log(errors)
            })

        },
        sendUpdateUser() {
            const token = localStorage.getItem('token')
            //localStorage.removeItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            axios.post('/api/update_user', this.user_info).then((response) => {
                //
                $(this.$refs.modal1).modal('hide')

                if(this.cur_template == "patients_all") {
                    this.getPatientsAll()
                }
                if(this.cur_template == "patients_on_doctor") {
                    this.getPatientsOnDoctor()
                }
                if(this.cur_template == "doctors") {
                    this.getDoctors()
                }
                if(this.cur_template == "managers") {
                    this.getManagers()
                }

                //this.getUsers()
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
        getUsers(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_user_list'
            //this.cur_store_id

            axios.post(page_url, { }).then((response) => {
                //console.log('contractors length:'+response.data.users.data.length)
                this.users = response.data.users.data
                this.makePagination(response.data.users)
            }).catch((errors) => {
                console.log(errors)
            })
        },
        getPatientsAll(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_patients_all'
            let par = { "item_search": this.item_search }
            axios.post(page_url, par).then((response) => {
                //console.log('contractors length:'+response.data.users.data.length)
                this.users = response.data.users.data
                this.makePagination(response.data.users)
            }).catch((errors) => {
                console.log(errors)
            })
        },
        getPatientsOnDoctor(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_patients_on_doctor'
            let par = { "item_search": this.item_search }
            axios.post(page_url, par).then((response) => {
                //console.log('contractors length:'+response.data.users.data.length)
                this.users = response.data.users.data
                this.makePagination(response.data.users)
            }).catch((errors) => {
                console.log(errors)
            })
        },
        getDoctors(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_doctors'
            let par = { }
            axios.post(page_url, par).then((response) => {
                //console.log('contractors length:'+response.data.users.data.length)
                this.users = response.data.users.data
                this.makePagination(response.data.users)
            }).catch((errors) => {
                console.log(errors)
            })
        },
        getManagers(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_managers'
            let par = { }
            axios.post(page_url, par).then((response) => {
                //console.log('contractors length:'+response.data.users.data.length)
                this.users = response.data.users.data
                this.makePagination(response.data.users)
            }).catch((errors) => {
                console.log(errors)
            })
        },
        makePagination(response) {
            let pagination = {
                current_page: response.current_page,
                last_page: response.last_page,
                prev_page_url: response.prev_page_url,
                next_page_url: response.next_page_url
            }
            this.pagination = pagination
        },
        
        /*
            remove_user_h
        */

        showRemoveModal(user_id, user_name) {
            this.remove_user_name = user_name 
            this.remove_user_id = user_id 

            $(this.$refs.modal2).modal('show')
            
        },
        removeUser() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            var formData = { "user_id" : this.remove_user_id } 
            axios.post('/api/remove_user_h', formData).then((response) => {
                //this.resetFormEdit()
                $(this.$refs.modal2).modal('hide')
                
                if(this.cur_template == "patients_all") {
                    this.getPatientsAll()
                }
                if(this.cur_template == "patients_on_doctor") {
                    this.getPatientsOnDoctor()
                }
                if(this.cur_template == "doctors") {
                    this.getDoctors()
                }
                if(this.cur_template == "managers") {
                    this.getManagers()
                }

                //this.getUsers()
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },

        //Search
        startTimer() {
            this.timer = setInterval(() => {
                if(this.lastCollection === "items") {
                    //cur_template == "patients_all" "patients_on_doctor" 
                    if(this.cur_template == "patients_all") {
                        this.getPatientsAll()
                    }
                    if(this.cur_template == "patients_on_doctor") {
                        this.getPatientsOnDoctor()
                    }
                    if(this.cur_template == "doctors") {
                        this.getDoctors()
                    }
                    if(this.cur_template == "managers") {
                        this.getManagers()
                    }

                }
                this.stopTimer()
            }, 1000)
        },
        stopTimer() {
            clearTimeout(this.timer)
        },
        changeValueInput(e, collec) {
            //.event.target.value.length
            //console.log("event.target.value:" + parseFloat(event.target.value))
            this.lastValue = e.target.value;
            this.lastCollection = collec

            this.stopTimer()
            this.startTimer()
        }
    },
    mounted() {
        //patients_all, patients_on_doctor, doctors, managers
        //console.log("UsersList loaded: "+this.cur_template)
        if(this.cur_template == "patients_all") {
            this.getPatientsAll()
        }
        if(this.cur_template == "patients_on_doctor") {
            this.getPatientsOnDoctor()
        }
        if(this.cur_template == "doctors") {
            this.getDoctors()
        }
        if(this.cur_template == "managers") {
            this.getManagers()
        }
        //this.getUsers()
    }
}
</script>






<!--
    $table->bigInteger('store_id')->unsigned();
    $table->foreign('store_id')
        ->references('id')
        ->on('stores');
    $table->string('name', 40);
    $table->text('description')->nullable();
    $table->integer('contractor_type')->unsigned();
-->