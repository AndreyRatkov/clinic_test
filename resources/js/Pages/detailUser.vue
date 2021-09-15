<template>
    <div class="container">

        <!-- #modal2 Edit  -->

        <div class="modal fade" id="exampleModal2" ref="modal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">Редактирование</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <div class="form-group">
                            <label for="fullname">ФИО</label>
                            <input type="text" class="form-control" name="fullname" v-model="patient_info.fullname">
                            <p class="text-danger" v-text="create_errors.fullname"></p>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" class="form-control" name="email" v-model="patient_info.email">
                            <p class="text-danger" v-text="create_errors.email"></p>
                        </div>

                        
                        <div class="form-group">
                            <label for="gender">Пол</label>
                            <b-form-select name="gender" v-model="patient_info.gender" :options="optionsGender"></b-form-select>
                            <p class="text-danger" v-text="create_errors.gender"></p>
                        </div>
                        
                        <div class="form-group">
                            <label for="date_birth">Дата рождения</label>
                            <b-form-datepicker  v-model="patient_info.date_birth"
                                                id="datepicker-placeholder-create2" 
                                                placeholder="Выбор даты" 
                                                locale="ru"></b-form-datepicker>
                            <p class="text-danger" v-text="create_errors.date_birth"></p>
                        </div>

                        <div class="form-group">
                            <label for="address">Адрес</label>
                            <input type="text" class="form-control" name="address" v-model="patient_info.address">
                            <p class="text-danger" v-text="create_errors.address"></p>
                        </div>

                        <div class="form-group">
                            <label for="phone_number">Телефон</label>
                            <input type="text" class="form-control" name="phone_number" v-model="patient_info.phone_number">
                            <p class="text-danger" v-text="create_errors.phone_number"></p>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendUpdateUser" class="btn btn-secondary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal2 end -->

        <!-- #modal3 Add ObjectiveData  -->
        
        <div class="modal fade" id="exampleModal3" ref="modal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel3">Редактирование</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        <!--
                            number:
                            Систолическое АД	Числовое    :1
                            Диастолическое АД	Числовое    :2
                            Пульс	Числовое                :3
                            Курение	Имеется/Отсутствует     :4
                            Вес	Числовое                    :5
                            Рост	Числовое                :6
                            Окружность талии	Числовое    :7

                            objectives_data.field1
                        -->
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="field1">Систолическое АД</label>
                                    <input type="text" class="form-control" name="field1" v-model="objectives_data.field1">
                                    <p class="text-danger" v-text="objectives_data_errors.field1"></p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="field2">Диастолическое АД</label>
                                    <input type="text" class="form-control" name="field2" v-model="objectives_data.field2">
                                    <p class="text-danger" v-text="objectives_data_errors.field2"></p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="field3">Пульс</label>
                                    <input type="text" class="form-control" name="field3" v-model="objectives_data.field3">
                                    <p class="text-danger" v-text="objectives_data_errors.field3"></p>
                                </div>
                            </div>
                            <div class="col-6">
                                
                                <label for="field4">Курение</label>
                                <b-form-select name="field4" v-model="objectives_data.field4" :options="optionsSmoking"></b-form-select>
                                <p class="text-danger" v-text="objectives_data_errors.field4"></p>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="field5">Вес</label>
                                    <input type="text" class="form-control" name="field5" v-model="objectives_data.field5">
                                    <p class="text-danger" v-text="objectives_data_errors.field5"></p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="field6">Рост</label>
                                    <input type="text" class="form-control" name="field6" v-model="objectives_data.field6">
                                    <p class="text-danger" v-text="objectives_data_errors.field6"></p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="field7">Окружность талии</label>
                                    <input type="text" class="form-control" name="field7" v-model="objectives_data.field7">
                                    <p class="text-danger" v-text="objectives_data_errors.field7"></p>
                                </div>
                            </div>
                            <div class="col-6">
                                
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendObjectivesData" class="btn btn-secondary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- #modal3 End  -->

        <!-- #modal4 Add DiseaseUser  -->
        <div class="modal fade" id="exampleModal4" ref="modal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel4">Добавление диагноза</h5>
                    
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <div class="form-group">
                            <label for="gender">Группа</label>
                            <b-form-select name="gender"
                                v-on:change="parserPartDiseases()" 
                                v-model="group_diseases" 
                                :options="groups_diseases"></b-form-select>
                            
                        </div>
                        
                        <div class="form-group">
                            <label for="selected_disease_id">Диагноз</label>
                            <b-form-select name="selected_disease_id" v-model="selected_disease_id" :options="part_diseases"></b-form-select>
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendDiseaseInPatient" class="btn btn-secondary">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- #modal4 End  -->

        <!-- #modal5 Add InterventionsUser  -->
        <div class="modal fade" id="exampleModal5" ref="modal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel5">Добавление вмешательство</h5>
                    
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <div class="form-group">
                            <label for="gender">Группа</label>
                            <b-form-select name="gender"
                                v-on:change="parserPartInterventions()" 
                                v-model="group_interventions" 
                                :options="groups_interventions"></b-form-select>
                            
                        </div>
                        
                        <div class="form-group">
                            <label for="selected_intervention_id">Вмешательство</label>
                            <b-form-select name="selected_intervention_id" v-model="selected_intervention_id" :options="part_interventions"></b-form-select>
                        </div>
                        
                        <label for="delivery_date">Дата вмешательства</label>
                        <b-form-datepicker  v-model="interventions_user_data.date_intervention"
                                            id="datepicker-placeholder-create2" 
                                            placeholder="Выбор даты" 
                                            locale="ru"></b-form-datepicker>


                        <!--
                            interventions_user_data.date_intervention
                        -->

                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendAddInterventionsInPatient" class="btn btn-secondary">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- #modal5 End  -->

        <!-- #modal6 Add MedicinesReceptions -->
        <div class="modal fade" id="exampleModal6" ref="modal6" tabindex="-1" aria-labelledby="exampleModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="isAddMedicinesReceptions" class="modal-title" id="exampleModalLabel6">Добавление приема</h5>
                        <h5 v-if="!isAddMedicinesReceptions" class="modal-title" id="exampleModalLabel6">Редактирование приема</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <!-- 
                        name: "",
                        dosage: "",
                        status: 0,
                        medicine_id: null,
                        patient_id: null,
                        -->

                        <div class="form-group">
                            <label for="name">Название лекарства</label>
                            <input type="text" class="form-control" name="name" v-model="medicines_receptions_data.name">
                            <p class="text-danger" v-text="medicines_receptions_data_errors.name"></p>
                        </div>

                        <div class="form-group">
                            <label for="dosage">Доза, кратность приема</label>
                            <input type="text" class="form-control" name="dosage" v-model="medicines_receptions_data.dosage">
                            <p class="text-danger" v-text="medicines_receptions_data_errors.dosage"></p>
                        </div>

                        <div class="form-group" v-if="role === 'doctor'">
                            <label for="selected_reception_medicine_id">Группа лекарственных препаратов</label>
                            <b-form-select name="selected_reception_medicine_id" v-model="selected_reception_medicine_id" :options="medicines"></b-form-select>
                        </div>

                        <!--
                            selected_reception_medicine_id
                        -->

                    </div>
                    <div class="modal-footer">
                        <button v-if="isAddMedicinesReceptions" type="button" v-on:click="sendMedicinesReceptionsInPatient" class="btn btn-secondary">Добавить</button>

                        <button v-if="!isAddMedicinesReceptions" type="button" v-on:click="sendEditMedicinesReceptionsInPatient" class="btn btn-secondary">Сохранить</button>

                        
                    </div>
                </div>
            </div>
        </div>
        <!-- #modal6 End -->

        <!-- #modal7 Add MedicinesContraindications -->
        <div class="modal fade" id="exampleModal7" ref="modal7" tabindex="-1" aria-labelledby="exampleModalLabel7" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="isAddMedicinesContraindications" class="modal-title" id="exampleModalLabel7">Добавление противопоказания</h5>
                        <h5 v-if="!isAddMedicinesContraindications" class="modal-title" id="exampleModalLabel7">Редактирование противопоказания</h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <!--
                        name: "",
                        status: 0,
                        medicine_id: null,
                        patient_id: null,
                        -->

                        <div class="form-group">
                            <label for="name">Название лекарства</label>
                            <input type="text" class="form-control" name="name" v-model="medicines_contraindications_data.name">
                            <p class="text-danger" v-text="medicines_contraindications_data_errors.name"></p>
                        </div>

                        <div class="form-group" v-if="role === 'doctor'">
                            <label for="selected_medicine_contraindication_id">Группа лекарственных препаратов</label>
                            <b-form-select name="selected_medicine_contraindication_id" v-model="selected_medicine_contraindication_id" :options="medicines"></b-form-select>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button v-if="isAddMedicinesContraindications" type="button" v-on:click="sendMedicinesContraindicationsInPatient" class="btn btn-secondary">Добавить</button>
                        <button v-if="!isAddMedicinesContraindications" type="button" v-on:click="sendEditMedicinesContraindicationsInPatient" class="btn btn-secondary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- #modal7 End -->

        <!-- #modal8 Add diagnostics_user_data -->
        <!--
            val_f: 0,
            val_i: 0,
            status: 1,
            diagnostic_id: null,
            patient_id: null,
        -->

        <div class="modal fade" id="exampleModal8" ref="modal8" tabindex="-1" aria-labelledby="exampleModalLabel8" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel8">Добавление диагноза</h5>
                    
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <div class="form-group">
                            <label for="part_diagnostics">Группа</label>
                            <b-form-select name="part_diagnostics"
                                v-on:change="parserPartDiagnostics()" 
                                v-model="group_diagnostics" 
                                :options="groups_diagnostics"></b-form-select>
                            
                        </div>
                        
                        <div class="form-group">
                            <label for="selected_diagnostic_id">Диагностика</label>
                            <b-form-select name="selected_diagnostic_id" 
                                        v-on:change="changeDiagnostic()"
                                        v-model="selected_diagnostic_id" :options="part_diagnostics"></b-form-select>
                        </div>



                        <div class="form-group" v-if="isViewDiagnostic_val_i">
                            <label for="val_f">Значение</label>
                            <input type="text" class="form-control" name="val_f" v-model="diagnostics_user_data.val_f">
                            <p class="text-danger" v-text="diagnostics_user_data_errors.val_f"></p>
                        </div>
                        
                        <div class="form-group" v-if="isViewDiagnostic_val_f">
                            <label for="val_i">Значение</label>
                            <input type="text" class="form-control" name="val_i" v-model="diagnostics_user_data.val_i">
                            <p class="text-danger" v-text="diagnostics_user_data_errors.val_i"></p>
                        </div>
                        
                        <!--
                        isViewDiagnostic_val_i
                        isViewDiagnostic_val_f
                        isViewDiagnostic_yes_no
                        isViewDiagnostic_left_right
                        isViewDiagnostic_others
                        -->

                        <div class="form-group" v-if="isViewDiagnostic_yes_no">
                            <label for="options1_diagnostic_value">Значение</label>
                            <b-form-select name="options1_diagnostic_value" v-model="options1_diagnostic_value" :options="options1Diagnostic"></b-form-select>
                        </div>
                        
                        <div class="form-group" v-if="isViewDiagnostic_left_right">
                            <label for="options2_diagnostic_value">Значение</label>
                            <b-form-select name="options2_diagnostic_value" v-model="options2_diagnostic_value" :options="options2Diagnostic"></b-form-select>
                        </div>
                        
                        <div class="form-group" v-if="isViewDiagnostic_others">
                            <label for="options3_diagnostic_value">Значение</label>
                            <b-form-select name="options3_diagnostic_value" v-model="options3_diagnostic_value" :options="options3Diagnostic"></b-form-select>
                        </div>
                        

                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendAddDiagnosticsInPatient" class="btn btn-secondary">Добавить</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- #modal8 End -->

        <!-- #modal9 Doctor -->

        <div class="modal fade" id="exampleModal9" ref="modal9" tabindex="-1" aria-labelledby="exampleModalLabel9" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel9">Выбор врача</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        <label for="doctor_search">Поиск</label>
                        <input type="text"
                                @input="changeValueInput($event, 'doctord')"  
                                placeholder='Search'  
                                class='form-control' 
                                name='doctor_search' v-model='doctor_search'>

                        <div v-for="item in doctors" :key="item.id" class="row" >
                            <div class="col-3">{{ item.fullname }}</div>
                            <div class="col-1">
                                <a v-on:click="selectDoctor(item.id, item.fullname)" href="#">Выбрать</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4">
                                <nav aria-label="Page navigation example">
                                  <ul class="pagination">
                                    <li :class="{ disabled: !doctorsPagination.prev_page_url }"
                                        @click.prevent="getDoctors(doctorsPagination.prev_page_url)"
                                        class="page-item">
                                        <a class="page-link" href="#">Предыдущая</a>
                                    </li>
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#">
                                            Страница {{ doctorsPagination.current_page }} из {{ doctorsPagination.last_page }}
                                        </a>
                                    </li>
                                    <li :class="{ disabled: !doctorsPagination.next_page_url }"
                                        @click.prevent="getDoctors(doctorsPagination.next_page_url)"
                                        class="page-item">
                                        <a class="page-link" href="#">Следующая</a>
                                    </li>
                                  </ul>
                                </nav>

                            </div>
                            <div class="col-4"></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!--<button type="button" v-on:click="selectStore" class="btn btn-secondary">Select</button>-->
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- #modal9 End -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Основные данные
                </h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        ФИО:{{ patient_info.fullname }}
                    </div>
                    <div class="col-6">
                        Email: {{ patient_info.email }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        Пол:{{ patient_info.gender }}
                    </div>
                    <div class="col-6">
                        Дата рождения: {{ patient_info.date_birth }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        Пол:{{ patient_info.address }}
                    </div>
                    <div class="col-6">
                        Номер телефона: {{ patient_info.phone_number }}
                    </div>
                </div>
                <div class="row" v-if="role === 'patient' || role === 'manager'">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalPatientInfo()" 
                            type="button" 
                            id="button-addon2">Редактировать</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- #modal10 Send Archive Disease -->
        <div class="modal fade" id="exampleModal10" ref="modal10" tabindex="-1" aria-labelledby="exampleModalLabel10" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        
                        <h5 class="modal-title" id="exampleModalLabel10">Отправление в архив</h5>
                        

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        
                    </div>
                    
                    <div class="modal-body">
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" v-on:click="sendDiseasePatientInArchive" class="btn btn-secondary">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal10 end -->


        <!-- #modal11 getDiseasesArchiveOnPatient -->

        <div class="modal fade" id="exampleModal11" ref="modal11" tabindex="-1" aria-labelledby="exampleModalLabel11" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel11">Архив заболеваний</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        <!--
                        <label for="doctor_search">Поиск</label>
                        <input type="text"
                                @input="changeValueInput($event, 'doctord')"  
                                placeholder='Search'  
                                class='form-control' 
                                name='doctor_search' v-model='doctor_search'>
                        -->
                        <div v-for="item in diseases_user_archive" :key="item.id" class="row" >
                            
                            <div class="col-3">{{ item.disease_name }}</div>
                            <div class="col-3">{{ item.group_name }}</div>
                            <div class="col-3">{{ item.created_at }}</div>
                            
                        </div>



                        <table id="table_diseases" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Группа</th>
                                    <th>Дата снятия</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!--
                                    'diseases.group_name',
                                    'diseases.group_no',
                                    'diseases.number',
                                    'diseases.disease_name'

                                    pagination_diseases_user_archive
                                -->
                                <tr v-for="item in diseases_user_archive" :key="item.id">
                                    <td>{{ item.disease_name }}</td>
                                    <td>{{ item.group_name }}</td>
                                    <td>{{ item.date_archive }}</td>
                                </tr>

                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Название</th>
                                    <th>Группа</th>
                                    <th>Дата снятия</th>
                                </tr>
                            </tfoot>
                        </table>



                        <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4">
                                <nav aria-label="Page navigation example">
                                  <ul class="pagination">
                                    <li :class="{ disabled: !pagination_diseases_user_archive.prev_page_url }"
                                        @click.prevent="getDiseasesArchiveOnPatient(pagination_diseases_user_archive.prev_page_url)"
                                        class="page-item">
                                        <a class="page-link" href="#">Предыдущая</a>
                                    </li>
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#">
                                            Страница {{ pagination_diseases_user_archive.current_page }} из {{ pagination_diseases_user_archive.last_page }}
                                        </a>
                                    </li>
                                    <li :class="{ disabled: !pagination_diseases_user_archive.next_page_url }"
                                        @click.prevent="getDiseasesArchiveOnPatient(pagination_diseases_user_archive.next_page_url)"
                                        class="page-item">
                                        <a class="page-link" href="#">Следующая</a>
                                    </li>
                                  </ul>
                                </nav>
                            </div>
                            <div class="col-4"></div>
                        </div>


                        
                    </div>
                    <div class="modal-footer">
                        <!--<button type="button" v-on:click="selectStore" class="btn btn-secondary">Select</button>-->
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- #modal11 end -->

        <!--
            
            Систолическое АД	Числовое    :1
            Диастолическое АД	Числовое    :2
            Пульс	Числовое                :3
            Курение	Имеется/Отсутствует     :4
            Вес	Числовое                    :5
            Рост	Числовое                :6
            Окружность талии	Числовое    :7
            
            objectives_data.field1
            
        -->
        
        <!-- Objectives_data start -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Объективные данные
                </h3>
            </div>
            <div class="card-body">
                <div class="row" v-if="role === 'patient' || role === 'manager'">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalAddObjectivesDataForPatient()" 
                            type="button" 
                            id="button-addon2">Изменить</button>
                    </div>
                
                </div>

                <div class="row">
                    <div class="col-6">
                        Систолическое АД: {{ objectives_data.field1 }}
                    </div>
                    <div class="col-6">
                        Диастолическое АД: {{ objectives_data.field2 }}
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        Пульс:{{ objectives_data.field3 }}
                    </div>
                    <div class="col-6">
                        Курение: <span v-if="objectives_data.field4">Да</span><span v-if="objectives_data.field4">Нет</span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        Вес:{{ objectives_data.field5 }}
                    </div>
                    <div class="col-6">
                        Рост: {{ objectives_data.field6 }}
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-6">
                        Окружность талии:{{ objectives_data.field7 }}
                    </div>
                    <div class="col-6">
                        
                    </div>
                </div>

                <div class="row">
                    
                </div>
            </div>
        </div>

        <!--  -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Врач
                </h3>
            </div>
            <div class="card-body">
                
                <input type="text" class="form-control" 
                    placeholder="Выбор врача" 
                    aria-label="Выбор врача" 
                    aria-describedby="button-addon2" 
                    v-model="doctor_name" 
                    readonly 
                    >
                <button class="btn btn-outline-secondary"
                    v-on:click="showSelectDoctor()" 
                    type="button" 
                    id="button-addon2">Список</button>    

            </div>
        </div>

        <!-- 
            <input type="text" class="form-control" 
                placeholder="Выбор поставщика" 
                aria-label="Выбор поставщика" 
                aria-describedby="button-addon2" 
                v-model="formCreateData.supplier_name" 
                readonly 
                >
            <button class="btn btn-outline-secondary"
                v-on:click="showSelectSupplier()" 
                type="button" 
                id="button-addon2">Список</button>
            <p class="text-danger" v-text="create_errors.supplier_id"></p>
         -->

        <!-- Disease -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Заболевания
                </h3>
            </div>
            <div class="card-body">

                <div class="row" v-if="role === 'doctor' || role === 'manager'">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalAddDiseaseForPatient()" 
                            type="button" 
                            id="button-addon2">Добавить</button>
                    </div>
                </div>

                <table id="table_diseases" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Группа</th>
                            <th>Дата назначения</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--
                            'diseases.group_name',
                            'diseases.group_no',
                            'diseases.number',
                            'diseases.disease_name'
                        -->
                        <tr v-for="disease_user in diseases_user" :key="disease_user.id">
                            <td>{{ disease_user.disease_name }}</td>
                            <td>{{ disease_user.group_name }}</td>
                            <td>{{ disease_user.created_at }}</td>
                            <td>
                                <a v-on:click="showSendDiseaseInArchive(disease_user.id)" href="#">в архив</a>
                            </td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Название</th>
                            <th>Группа</th>
                            <th>Дата назначения</th>
                            <th>Действия</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li :class="{ disabled: !pagination_diseases_user.prev_page_url }"
                            @click.prevent="getDiseasesOnPatient(pagination_diseases_user.prev_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Предыдущая</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">
                                Страница {{ pagination_diseases_user.current_page }} из {{ pagination_diseases_user.last_page }}
                            </a>
                        </li>
                        <li :class="{ disabled: !pagination_diseases_user.next_page_url }"
                            @click.prevent="getDiseasesOnPatient(pagination_diseases_user.next_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Следующая</a>
                        </li>
                      </ul>
                    </nav>
                </div>
                <div class="col-4"></div>
            </div>
        </div>



        <!-- interventions_user -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Вмешательства
                </h3>
            </div>
            <div class="card-body">

                <div class="row" v-if="role === 'doctor' || role === 'manager'">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalAddInterventionsInPatient()" 
                            type="button" 
                            id="button-addon2">Добавить</button>
                    </div>
                </div>

                <table id="table_diseases" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Группа</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--
                            'group_name' => $mass[$i]['group'],
                            'intervention_name' => $mass[$i]['name'],
                            'group_no' => $mass[$i]['group_no'],
                            'number' => $mass[$i]['no'],
                            'date_intervention'
                        -->
                        <tr v-for="intervention_user in interventions_user" :key="intervention_user.id">
                            <td>{{ intervention_user.intervention_name }}</td>
                            <td>{{ intervention_user.group_name }}</td>
                            <td>{{ intervention_user.date_intervention }}</td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Название</th>
                            <th>Группа</th>
                            <th>Дата</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li :class="{ disabled: !pagination_interventions_user.prev_page_url }"
                            @click.prevent="getInterventionsOnPatient(pagination_interventions_user.prev_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Предыдущая</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">
                                Страница {{ pagination_interventions_user.current_page }} из {{ pagination_interventions_user.last_page }}
                            </a>
                        </li>
                        <li :class="{ disabled: !pagination_interventions_user.next_page_url }"
                            @click.prevent="getInterventionsOnPatient(pagination_interventions_user.next_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Следующая</a>
                        </li>
                      </ul>
                    </nav>
                </div>
                <div class="col-4"></div>
            </div>
        </div>

        <!--
            this.medicines_receptions_data
            pagination_medicines_receptions_user
            sendMedicinesReceptionsInPatient
            showModalAddMedicinesReceptionsInPatient
        -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Медикаментозная терапия
                </h3>
            </div>
            <div class="card-body">

                <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalAddMedicinesReceptionsInPatient()" 
                            type="button" 
                            id="button-addon2">Добавить</button>
                    </div>
                </div>

                <table id="table_diseases" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Название лек-ва</th>
                            <th>Дозировка</th>
                            <th>Группа лек. преп.</th>
                            <th>Дата</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--
                            showModalEditMedicinesReceptionsInPatient

                            $table->string('name', 150);
                            $table->string('dosage', 250);
                            $table->string('medicine_name', 50);
                            'created_at'
                        -->
                        <tr v-for="item in medicines_receptions_user" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.dosage }}</td>
                            <td>{{ item.medicine_name }}</td>
                            <td>{{ item.created_at }}</td>
                            <td>
                                <a v-on:click="showModalEditMedicinesReceptionsInPatient(item.id)" href="#">редактировать</a>
                            </td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Название лек-ва</th>
                            <th>Дозировка</th>
                            <th>Группа лек. преп.</th>
                            <th>Дата</th>
                            <th>Действия</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li :class="{ disabled: !pagination_medicines_receptions_user.prev_page_url }"
                            @click.prevent="getMedicinesReceptionsOnPatient(pagination_medicines_receptions_user.prev_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Предыдущая</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">
                                Страница {{ pagination_medicines_receptions_user.current_page }} из {{ pagination_medicines_receptions_user.last_page }}
                            </a>
                        </li>
                        <li :class="{ disabled: !pagination_medicines_receptions_user.next_page_url }"
                            @click.prevent="getMedicinesReceptionsOnPatient(pagination_medicines_receptions_user.next_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Следующая</a>
                        </li>
                      </ul>
                    </nav>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
        


        <!--
            showModalAddMedicinesContraindicationsInPatient,
            medicines_contraindications_user
            pagination_medicines_contraindications_user
        -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Противопоказания
                </h3>
            </div>
            <div class="card-body">

                <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalAddMedicinesContraindicationsInPatient()" 
                            type="button" 
                            id="button-addon2">Добавить</button>
                    </div>
                </div>

                <table id="table_diseases" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Название лек-ва</th>
                            <th>Группа лек. преп.</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--
                            $table->string('name', 150);
                            $table->string('medicine_name', 50);
                        -->
                        <tr v-for="item in medicines_contraindications_user" :key="item.id">
                            <td>{{ item.name }}</td>
                            <td>{{ item.medicine_name }}</td>
                            <td>
                                <a v-on:click="showModalEditMedicinesContraindicationsInPatient(item.id)" href="#">редактировать</a>
                            </td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Название лек-ва</th>
                            <th>Группа лек. преп.</th>
                            <th>Действия</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li :class="{ disabled: !pagination_medicines_receptions_user.prev_page_url }"
                            @click.prevent="getMedicinesContraindicationsOnPatient(pagination_medicines_receptions_user.prev_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Предыдущая</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">
                                Страница {{ pagination_medicines_receptions_user.current_page }} из {{ pagination_medicines_receptions_user.last_page }}
                            </a>
                        </li>
                        <li :class="{ disabled: !pagination_medicines_receptions_user.next_page_url }"
                            @click.prevent="getMedicinesContraindicationsOnPatient(pagination_medicines_receptions_user.next_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Следующая</a>
                        </li>
                      </ul>
                    </nav>
                </div>
                <div class="col-4"></div>
            </div>
        </div>

        <!--
            getDiagnosticsOnPatient
            showModalAddDiagnosticsInPatient
            diagnostics_user
            pagination_diagnostics_user


            $table->string('group_name', 50);
            $table->string('diagnostic_name', 50);

        -->

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Диагностика
                </h3>
            </div>
            <div class="card-body">

                <div class="row" v-if="role === 'doctor' || role === 'manager'">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button class="btn btn-outline-secondary"
                            v-on:click="showModalAddDiagnosticsInPatient()" 
                            type="button" 
                            id="button-addon2">Добавить</button>
                    </div>
                </div>

                <table id="table_diseases" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Диагностика</th>
                            <th>Группа</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in diagnostics_user" :key="item.id">
                            <td>{{ item.diagnostic_name }}</td>
                            <td>{{ item.group_name }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Диагностика</th>
                            <th>Группа</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li :class="{ disabled: !pagination_diagnostics_user.prev_page_url }"
                            @click.prevent="getMedicinesContraindicationsOnPatient(pagination_diagnostics_user.prev_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Предыдущая</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">
                                Страница {{ pagination_diagnostics_user.current_page }} из {{ pagination_diagnostics_user.last_page }}
                            </a>
                        </li>
                        <li :class="{ disabled: !pagination_diagnostics_user.next_page_url }"
                            @click.prevent="getMedicinesContraindicationsOnPatient(pagination_diagnostics_user.next_page_url)"
                            class="page-item">
                            <a class="page-link" href="#">Следующая</a>
                        </li>
                      </ul>
                    </nav>
                </div>
                <div class="col-4"></div>
            </div>
        </div>




        <!--
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    title
                </h3>
            </div>
            <div class="card-body">
                content
            </div>
        </div>
        -->

        <!--
        <div class="card">
            <div class="card-header">
              <h3 class="card-title">
                  title
                  
                  <label for="item_search">Поиск</label>
                        <input type="text"
                                @input="changeValueInput($event, 'items')"  
                                placeholder='Search'  
                                class='form-control' 
                                name='item_search' v-model='item_search'>
                  
              </h3>
            </div>
            <div class="card-body">
                content
                
                <table id="example1" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Рег. номер</th>
                            <th>Артикл</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                            <td>{{ product.registry_number }}</td>
                            <td>{{ product.article }}</td>
                            <td>
                                <router-link :to="{ name: 'edit-product', params: { flag: false , product_id: product.id }}">редактировать</router-link>
                                <a v-on:click="showRemoveModal(product.id, product.name)" href="#">удалить</a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Рег. номер</th>
                            <th>Артикл</th>
                            <th>Действия(s)</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        -->

    </div>
</template>

<script>

import { mapState } from 'vuex'
import { BFormSelect } from 'bootstrap-vue'
import { BFormDatepicker } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'detailUser',
    components: {
        BFormSelect,
        BFormDatepicker
    },
    data() {
        return {
            param_user_id: this.$route.params.user_id,
            patient_info: {
                patient_id: this.$route.params.user_id,
                fullname: "",
                email:    "",
                role_name:   "",
                gender: "",
                date_birth: "",
                address: "",
                phone_number: "",
            },
            
            /*
                number:
                Систолическое АД	Числовое    :1
                Диастолическое АД	Числовое    :2
                Пульс	Числовое                :3
                Курение	Имеется/Отсутствует     :4
                Вес	Числовое                    :5
                Рост	Числовое                :6
                Окружность талии	Числовое    :7
            */

            objectives_data: {
                field1: 0,
                field2: 0,
                field3: 0,
                field4: 0,
                field5: 0,
                field6: 0,
                field7: 0
            },
            
            doctors:[],
            doctorsPagination: {},
            doctor_search: "",
            doctor_id: null,
            doctor_name: "",

            diseases_user: [],
            pagination_diseases_user: [],
            base_diseases: [],
            groups_diseases: [],
            group_diseases: 0,
            part_diseases: [],
            selected_disease_id: 0,


            //InterventionsUser
            interventions_user: [],
            pagination_interventions_user: [],
            base_interventions: [],
            groups_interventions: [],
            group_interventions: 0,
            part_interventions: [],
            selected_intervention_id: 0,
            
            /*
            'intervention_id'   => $request->intervention_id,
            'user_id'   => $patient_id,
            'date_intervention'  => $request->date_intervention,
            */

            //interventions_user_data.date_intervention

            interventions_user_data: {
                intervention_id: null,
                patient_id: null,
                date_intervention: null,
                status: 0,
            },
            

            //medicines_receptions_user
            isAddMedicinesReceptions: true,
            base_medicines: [],
            medicines: [],
            medicines_receptions_user: [],
            pagination_medicines_receptions_user: [],
            medicines: [],
            pagination_medicines: [],
            selected_reception_medicine_id: null,
            medicines_receptions_data: {
                medicine_reception_id: null,
                name: "",
                dosage: "",
                status: 0,
                medicine_id: null,
                patient_id: null,
            },
            medicines_receptions_data_errors: {

            },
            medicine_reception_id: null,
            //medicines_receptions 

            //get_medicines_contraindications_on_patient
            isAddMedicinesContraindications: true,
            medicines_contraindications_user: [],
            pagination_medicines_contraindications_user: [],
            selected_medicine_contraindication_id: null,
            medicines_contraindications_data: {
                medicine_contraindication_id: null,
                name: "",
                status: 0,
                medicine_id: null,
                patient_id: null,
            },
            medicines_contraindications_data_errors: [], 


            /*
            'val_f'         =>  $request->val_f,
            'val_i'         =>  $request->val_i,
            'status'        =>  $request->status,
            'diagnostic_id' =>  $request->diagnostic_id,
            'user_id'       =>  $patient_id,
            */

            base_diagnostics: [],
            groups_diagnostics: [],
            group_diagnostics: 0,
            part_diagnostics: [],

            pagination_diagnostics_user: [],
            diagnostics_user: [],
            selected_diagnostic_id: null,
            diagnostics_user_data: {
                val_f: 0,
                val_i: 0,
                status: 1,
                diagnostic_id: null,
                patient_id: null,
            },
            diagnostics_user_data_errors: [],
            /* 
                'name'   => $request->name,
                'dosage'   => $request->dosage,
                'status'   => $request->status,
                'medicine_id'     => $request->medicine_id,
                'patient_id'   => $patient_id,
                'is_view'  => 1,
            */

            optionsSmoking: [
                { value: 0, text: 'Нет' },
                { value: 1, text: 'Да' }
            ],
            objectives_data_errors: {

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

            /*
            Да - 1 / Нет - 0 
            Правый - 1 /Левый - 0
            Проходимы - 1 /Дисфункция - 0
            */
            options1Diagnostic: [
                { value: 0, text: "Нет" },
                { value: 1, text: "Да" }
            ],
            options2Diagnostic: [
                { value: 0, text: "Левый" },
                { value: 1, text: "Правый" }
            ],
            options3Diagnostic: [
                { value: 0, text: "Дисфункция" },
                { value: 1, text: "Проходимы" }
            ],
            //options1_diagnostic_value
            options1_diagnostic_value: 0,
            options2_diagnostic_value: 0,
            options3_diagnostic_value: 0,

            mas_i : [1,4,5,10,11,14,15,18,19,28,29,30,31,32,33,34,35,36,37,39,44,53],
            mas_f : [2,3,6,7,8,9,12,13,16,17,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60],    
            mas_yes_no : [20,21,22,23,24,25,26],
            mas_left_right : [27],
            mas_others : [38],

            for_archive_disease_user_id: null,
            diseases_user_archive: null,
            pagination_diseases_user_archive: null,
        }       
    },
    computed: {
        ...mapState({
            role: state => state.role,//patient, doctor, manager
        }),

        /*
        isViewDiagnostic_val_i
        isViewDiagnostic_val_f
        isViewDiagnostic_yes_no
        isViewDiagnostic_left_right
        isViewDiagnostic_others
        */

        isViewDiagnostic_val_i: function() {
             let ret = false
             
             if(this.selected_diagnostic_id != null){
                
                let searchF = diagnostic_id => (element, index, array) => {
                    return element['id'] === diagnostic_id;
                }
                let v = this.base_diagnostics.filter(searchF(this.selected_diagnostic_id))
                //console.log(v[0]['number'])

                if(this.mas_i.indexOf(v[0]['number']) != -1) {
                    ret = true
                }
             }
             return ret
        },
        isViewDiagnostic_val_f: function() {
             let ret = false
             if(this.selected_diagnostic_id != null) {

                let searchF = diagnostic_id => (element, index, array) => {
                    return element['id'] === diagnostic_id;
                }
                let v = this.base_diagnostics.filter(searchF(this.selected_diagnostic_id))

                if(this.mas_f.indexOf(v[0]['number']) != -1) {
                    ret = true 
                }
             }
             return ret
        },
        isViewDiagnostic_yes_no: function() {
             let ret = false
             if(this.selected_diagnostic_id != null){

                let searchF = diagnostic_id => (element, index, array) => {
                    return element['id'] === diagnostic_id;
                }
                let v = this.base_diagnostics.filter(searchF(this.selected_diagnostic_id))

                 if(this.mas_yes_no.indexOf(v[0]['number']) != -1) {
                    ret = true 
                 }
             }
             return ret
        },
        isViewDiagnostic_left_right: function() {
             let ret = false
             if(this.selected_diagnostic_id != null){

                let searchF = diagnostic_id => (element, index, array) => {
                    return element['id'] === diagnostic_id;
                }
                let v = this.base_diagnostics.filter(searchF(this.selected_diagnostic_id))

                if(this.mas_left_right.indexOf(v[0]['number']) != -1) {
                    ret = true 
                }
             }
             return ret
        },
        isViewDiagnostic_others: function() {
            let ret = false
            if(this.selected_diagnostic_id != null){

                let searchF = diagnostic_id => (element, index, array) => {
                    return element['id'] === diagnostic_id;
                }
                let v = this.base_diagnostics.filter(searchF(this.selected_diagnostic_id))

                if(this.mas_others.indexOf(v[0]['number']) != -1) {
                   ret = true 
                }
            }
            return ret
        }
    },
    methods: {
        
        showSelectDoctor() {
            this.getDoctors()
            $(this.$refs.modal9).modal('show')

        },
        selectDoctor(doctor_id, doctor_name) {
            this.doctor_id = doctor_id
            this.doctor_name = doctor_name
            
            //this.param_user_id

            $(this.$refs.modal9).modal('hide')

            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const page_url = '/api/set_doctor'
            var data = { "patient_id" : this.param_user_id,
                            "doctor_id": this.doctor_id
                        }
            axios.post(page_url, data).then((response) => {
                
                
            }).catch((errors) => {
                console.log(errors)
            })
        },
        getDoctors(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_doctors'

            var data = {  }
            axios.post(page_url, data).then((response) => {
                
                this.doctors = response.data.users.data
                this.makePagination(response.data.users, 'doctors')
                
            }).catch((errors) => {
                console.log(errors)
            })
        },
        //get_doctor
        getDoctorOnPatient() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const page_url = '/api/get_doctor_on_patient'

            var data = {  }
            axios.post(page_url, data).then((response) => {
                if(response.data.doctor != null) {
                    this.doctor_id = response.data.doctor.doctor_id
                    this.doctor_name = response.data.doctor.fullname
                }
                
            }).catch((errors) => {
                console.log(errors)
            })
        },

        showModalPatientInfo() {
            $(this.$refs.modal2).modal('show')
        },
        sendUpdateUser() {
            const token = localStorage.getItem('token')
            //localStorage.removeItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            axios.post('/api/update_user', this.patient_info).then((response) => {
                
                $(this.$refs.modal2).modal('hide')

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
        //get_objectives_data
        loadObjectivesData() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            axios.post('/api/get_objectives_data', { "patient_id": this.patient_info.patient_id }).then((response) => {
                
                
                this.objectives_data.field1 = response.data.objectives_data.field1
                this.objectives_data.field2 = response.data.objectives_data.field2
                this.objectives_data.field3 = response.data.objectives_data.field3
                this.objectives_data.field4 = response.data.objectives_data.field4
                this.objectives_data.field5 = response.data.objectives_data.field5
                this.objectives_data.field6 = response.data.objectives_data.field6
                this.objectives_data.field7 = response.data.objectives_data.field7

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },

        showModalAddObjectivesDataForPatient() {
            $(this.$refs.modal3).modal('show')
        },

        sendObjectivesData() {
            const token = localStorage.getItem('token')
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            var sendData = {
                "patient_id": this.patient_info.patient_id,
                "field1_val"    : this.objectives_data.field1,
                "field2_val"    : this.objectives_data.field2,
                "field3_val"    : this.objectives_data.field3,
                "field4_val"    : this.objectives_data.field4,
                "field5_val"    : this.objectives_data.field5,
                "field6_val"    : this.objectives_data.field6,
                "field7_val"    : this.objectives_data.field7
            }
            console.log(sendData);
            axios.post('/api/add_objectives_data', sendData).then((response) => {
                //this.resetFormCreate()
                //this.$router.push('/users-list')
                $(this.$refs.modal3).modal('hide')
                this.loadObjectivesData()
                
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
        makePagination(response, typePagination) {
            let pagination = {
                current_page: response.current_page,
                last_page: response.last_page,
                prev_page_url: response.prev_page_url,
                next_page_url: response.next_page_url
            }
            if(typePagination == 'diseases_user') {
                this.pagination_diseases_user = pagination
            }
            if(typePagination == 'interventions_user') {
                this.pagination_interventions_user = pagination
            }
            if(typePagination == 'medicines_receptions_user') {
                this.pagination_medicines_receptions_user = pagination
            }
            if(typePagination == 'medicines_contraindications_user') {
                this.pagination_medicines_contraindications_user = pagination
            }
            if(typePagination == 'diagnostics_user') {
                this.pagination_diagnostics_user = pagination
            }

            if(typePagination == 'doctors') {
                this.doctorsPagination = pagination
            }

            if(typePagination == 'diseases_user_archive') {
                pagination_diseases_user_archive = pagination
            }

            //medicines_contraindications_user
            //this.pagination = pagination
        },
        //


        showModalAddDiseaseForPatient() {
            $(this.$refs.modal4).modal('show')
        },


        getDiseasesOnPatient(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_diseases_on_patient'

            axios.post(page_url, {"patient_id": this.patient_info.patient_id }).then((response) => {
                //console.log('contractors length:' + response.data.storage_locations.data.length)
                //this.storage_locations = response.data.storage_locations.data
                this.diseases_user = response.data.diseases_user.data
                this.makePagination(response.data.diseases_user, 'diseases_user')
            }).catch((errors) => {
                console.log(errors)
            })
        },

        sendDiseaseInPatient() {
            const token = localStorage.getItem('token')
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            var sendData = {
                "patient_id": this.patient_info.patient_id,
                "disease_id": this.selected_disease_id
            }

            axios.post('/api/add_diseases_in_patient', sendData).then((response) => {
                //this.resetFormCreate()
                //this.$router.push('/users-list')
                $(this.$refs.modal4).modal('hide')
                this.getDiseasesOnPatient()

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },

        showSendDiseaseInArchive(disease_user_id) {
            
            this.for_archive_disease_user_id = disease_user_id
            $(this.$refs.modal10).modal('show')

        },
        //send_disease_patient_in_archive
        sendDiseasePatientInArchive() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            var sendData = {
                "patient_id": this.patient_info.patient_id,
                "disease_user_id": this.for_archive_disease_user_id
            }

            axios.post('/api/send_disease_patient_in_archive', sendData).then((response) => {
                $(this.$refs.modal10).modal('hide')
                this.getDiseasesOnPatient()
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })

        },

        //diseases_user_archive
        //
        getDiseasesArchiveOnPatient(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_diseases_archive_on_patient'
            var sendData = {

            }
            axios.post(page_url, sendData).then((response) => {

                this.diseases_user_archive = response.data.diseases_user_archive.data
                this.makePagination(response.data.diseases_user_archive, 'diseases_user_archive')

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })

            //diseases_user_archive
        },

        



        //#interventions
        /*
        interventions_user: [],
        pagination_interventions_user: [],
        base_interventions: [],
        groups_interventions: [],
        group_interventions: 0,
        part_interventions: [],
        selected_intervention_id: 0,


        get_interventions_on_patient
        add_interventions_in_patient
        */

        showModalAddInterventionsInPatient() {
            $(this.$refs.modal5).modal('show')
        },
        getInterventionsOnPatient(page_url) {
            //get_medicines_receptions_on_patient
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_interventions_on_patient'

            axios.post(page_url, {"patient_id": this.patient_info.patient_id }).then((response) => {
                
                this.interventions_user = response.data.interventions_user.data
                this.makePagination(response.data.interventions_user, 'interventions_user')
                $(this.$refs.modal5).modal('hide')

            }).catch((errors) => {
                console.log(errors)
            })
        },   

        sendAddInterventionsInPatient() {
            const token = localStorage.getItem('token')
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            this.interventions_user_data.status = 1
            this.interventions_user_data.patient_id = this.patient_info.patient_id
            this.interventions_user_data.intervention_id = this.selected_intervention_id
            var sendData = this.interventions_user_data

            axios.post('/api/add_interventions_in_patient', sendData).then((response) => {
                
                this.getInterventionsOnPatient()
                $(this.$refs.modal5).modal('hide')

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },


        //#Medicines
        getMedicinesReceptionsOnPatient(page_url) {
            //get_medicines_receptions_on_patient
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_medicines_receptions_on_patient'

            axios.post(page_url, {"patient_id": this.patient_info.patient_id }).then((response) => {
                //medicines_receptions_user
                //console.log(response.data.medicines_receptions_user)
                this.medicines_receptions_user = response.data.medicines_receptions_user.data
                this.makePagination(response.data.medicines_receptions_user, 'medicines_receptions_user')
            }).catch((errors) => {
                console.log(errors)
            })
        },

        
        getMedicineReceptionInfoOnPatient(medicine_reception_id) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const page_url = '/api/get_medicine_reception_info_on_patient'

            this.medicines_receptions_data.medicine_reception_id = medicine_reception_id

            axios.post(page_url, {"patient_id": this.patient_info.patient_id, "medicine_reception_id": medicine_reception_id }).then((response) => {
                this.medicines_receptions_data.name = response.data.medicine_reception_info.name
                this.medicines_receptions_data.dosage = response.data.medicine_reception_info.dosage
                this.medicines_receptions_data.patient_id = response.data.medicine_reception_info.user_id
                this.medicines_receptions_data.medicine_id = response.data.medicine_reception_info.medicine_id
                this.selected_reception_medicine_id = response.data.medicine_reception_info.medicine_id
                //response.data.medicine_reception_info
                
            }).catch((errors) => {
                console.log(errors)
            })

        },

        showModalEditMedicinesReceptionsInPatient(medicine_reception_id) {
            this.isAddMedicinesReceptions = false
            $(this.$refs.modal6).modal('show')
            this.getMedicineReceptionInfoOnPatient(medicine_reception_id)
            
        },

        //isAddMedicinesReceptions = true
        showModalAddMedicinesReceptionsInPatient() {
            this.isAddMedicinesReceptions = true
            this.selected_reception_medicine_id = null
            this.medicines_receptions_data.medicine_id = null
            this.medicines_receptions_data.name = ""
            this.medicines_receptions_data.dosage = ""

            $(this.$refs.modal6).modal('show')
        },
        sendMedicinesReceptionsInPatient() {
            const token = localStorage.getItem('token')
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            /*
                medicines_receptions_data: {
                    name: "",
                    dosage: "",
                    status: 0,
                    medicine_id: null,
                    patient_id: null,
                }

            */
            this.medicines_receptions_data.status = 1
            this.medicines_receptions_data.patient_id = this.patient_info.patient_id
            this.medicines_receptions_data.medicine_id = this.selected_reception_medicine_id


            var sendData = this.medicines_receptions_data

            axios.post('/api/add_medicines_receptions_in_patient', sendData).then((response) => {
                $(this.$refs.modal6).modal('hide')
                this.getMedicinesReceptionsOnPatient()

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
        sendEditMedicinesReceptionsInPatient() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            //selected_reception_medicine_id
            this.medicines_receptions_data.status = 1
            this.medicines_receptions_data.patient_id = this.patient_info.patient_id
            this.medicines_receptions_data.medicine_id = this.selected_reception_medicine_id
            var sendData = this.medicines_receptions_data

            axios.post('/api/update_medicines_receptions_in_patient', sendData).then((response) => {
                $(this.$refs.modal6).modal('hide')
                this.getMedicinesReceptionsOnPatient()

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })

        },


        //get_medicines_contraindications_on_patient
        getMedicinesContraindicationsOnPatient(page_url) {
            
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_medicines_contraindications_on_patient'

            axios.post(page_url, {"patient_id": this.patient_info.patient_id }).then((response) => {
                this.medicines_contraindications_user = response.data.medicines_contraindications_user.data
                this.makePagination(response.data.medicines_contraindications_user, 'medicines_contraindications_user')
            }).catch((errors) => {
                console.log(errors)
            })
        },
        

        getMedicineContraindicationInfoOnPatient(medicine_contraindication_id) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const page_url = '/api/get_medicine_contraindication_info_on_patient'

            this.medicines_contraindications_data.medicine_contraindication_id = medicine_contraindication_id

            axios.post(page_url, {"patient_id": this.patient_info.patient_id, "medicine_contraindication_id": medicine_contraindication_id }).then((response) => {
                this.medicines_contraindications_data.name = response.data.medicine_contraindication_info.name
                
                this.medicines_contraindications_data.patient_id = response.data.medicine_contraindication_info.user_id
                this.medicines_contraindications_data.medicine_id = response.data.medicine_contraindication_info.medicine_id
                this.selected_medicine_contraindication_id = response.data.medicine_contraindication_info.medicine_id
                
                
            }).catch((errors) => {
                console.log(errors)
            })
        },

        showModalEditMedicinesContraindicationsInPatient(medicine_contraindication_id) {
            this.isAddMedicinesContraindications = false
            $(this.$refs.modal7).modal('show')
            this.getMedicineContraindicationInfoOnPatient(medicine_contraindication_id)
        },

        showModalAddMedicinesContraindicationsInPatient() {
            this.isAddMedicinesContraindications = true
            this.medicines_contraindications_data.medicine_id = null
            this.medicines_contraindications_data.name = ""
            this.selected_medicine_contraindication_id = null
            $(this.$refs.modal7).modal('show')
        },

        sendMedicinesContraindicationsInPatient() {
            const token = localStorage.getItem('token')
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            

            this.medicines_contraindications_data.status = 1
            this.medicines_contraindications_data.patient_id = this.patient_info.patient_id
            this.medicines_contraindications_data.medicine_id = this.selected_medicine_contraindication_id

            var sendData = this.medicines_contraindications_data

            axios.post('/api/add_medicines_contraindications_in_patient', sendData).then((response) => {
                
                $(this.$refs.modal7).modal('hide')
                this.getMedicinesContraindicationsOnPatient()

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },
        //update_medicines_contraindications_in_patient
        sendEditMedicinesContraindicationsInPatient() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            this.medicines_contraindications_data.status = 1
            this.medicines_contraindications_data.patient_id = this.patient_info.patient_id
            this.medicines_contraindications_data.medicine_id = this.selected_medicine_contraindication_id
            var sendData = this.medicines_contraindications_data

            axios.post('/api/update_medicines_contraindications_in_patient', sendData).then((response) => {
                $(this.$refs.modal7).modal('hide')
                this.getMedicinesContraindicationsOnPatient()

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },

        

        getDiagnosticsOnPatient(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/get_diagnostics_user_on_patient'

            axios.post(page_url, {"patient_id": this.patient_info.patient_id }).then((response) => {
                
                this.diagnostics_user = response.data.diagnostics_user.data
                this.makePagination(response.data.diagnostics_user, 'diagnostics_user')
            }).catch((errors) => {
                console.log(errors)
            })
        },


        showModalAddDiagnosticsInPatient() {
            $(this.$refs.modal8).modal('show')
        },

        sendAddDiagnosticsInPatient() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            

            this.diagnostics_user_data.status = 1
            this.diagnostics_user_data.patient_id = this.patient_info.patient_id
            this.diagnostics_user_data.diagnostic_id = this.selected_diagnostic_id
            //diagnostics_user_data
            var sendData = this.diagnostics_user_data

            axios.post('/api/add_diagnostics_user_in_patient', sendData).then((response) => {
                
                $(this.$refs.modal8).modal('hide')
                this.getDiagnosticsOnPatient()

            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },

        sendUpdateDiagnosticsInPatient() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            
            /*
                'val_f'         =>  $request->val_f,
                'val_i'         =>  $request->val_i,
                'status'        =>  $request->status,
                'diagnostic_id' =>  $request->diagnostic_id,
                'user_id'       =>  $patient_id,
            */

            this.diagnostics_user_data.status = 2
            this.diagnostics_user_data.patient_id = this.patient_info.patient_id
            var sendData = this.diagnostics_user_data

            axios.post('/api/update_diagnostics_in_patient', sendData).then((response) => {
                
            }).catch((errors) => {
                this.create_errors = errors.response.data.errors
            })
        },

        changeDiagnostic() {

        },

        parserGroupDiseases() {
            

            var flags = []
            var output = []
            var l = this.base_diseases.length

            for(var i=0; i<l; i++) {
                if( flags[this.base_diseases[i].group_no]) continue;
                flags[this.base_diseases[i].group_no] = true;
                output.push({ "value" : this.base_diseases[i].group_no, "text": this.base_diseases[i].group_name});
            }

            this.groups_diseases = output
        },
        parserMedicines(){
            var output = []
            var l = this.base_medicines.length
            for(var i=0; i<l; i++) {
                output.push({ "value" : this.base_medicines[i].id, "text": this.base_medicines[i].medicine_name});
            }
            this.medicines = output
        },
        parserPartDiseases() {
            

            let startsWith = group_diseases => (element, index, array) => {
                return element['group_no'] === group_diseases;
            }

            //addressBook.filter(startsWith(wordToCompare));
            //this.base_diseases.filter(el => el[] > 6)
            
            var arr_temp = []
            var output = []
            arr_temp = this.base_diseases.filter(startsWith(this.group_diseases))
            
            var l = arr_temp.length
            for(var i=0; i<l; i++) {
                output.push({ "value" : arr_temp[i].id, "text": arr_temp[i].disease_name});
            }
            
            this.part_diseases = output

            //console.log("part_diseases:")
            //console.log(this.part_diseases)
        },

        //interventions_user
        parserGroupInterventions() {
            
            var flags = []
            var output = []
            var l = this.base_interventions.length

            for(var i=0; i<l; i++) {
                if( flags[this.base_interventions[i].group_no]) continue;
                flags[this.base_interventions[i].group_no] = true;
                output.push({ "value" : this.base_interventions[i].group_no, "text": this.base_interventions[i].group_name});
            }

            this.groups_interventions = output
        },

        parserPartInterventions() {

            /*
            'group_name' => $mass[$i]['group'],
                'intervention_name' => $mass[$i]['name'],
                'group_no' => $mass[$i]['group_no'],
                'number' => $mass[$i]['no'],
            */

            let startsWith = group_interventions => (element, index, array) => {
                return element['group_no'] === group_interventions;
            }
            var arr_temp = []
            var output = []
            arr_temp = this.base_interventions.filter(startsWith(this.group_interventions))
            var l = arr_temp.length
            for(var i=0; i<l; i++) {
                output.push({ "value" : arr_temp[i].id, "text": arr_temp[i].intervention_name});
            }

            this.part_interventions = output
        },


        parserGroupDiagnostics() {
            //this.base_diagnostics
            /*
            base_diagnostics: [],
            groups_diagnostics: [],
            group_diagnostics: 0,
            part_diagnostics: [],
            */

            var flags = []
            var output = []
            var l = this.base_diagnostics.length

            for(var i=0; i<l; i++) {
                if( flags[this.base_diagnostics[i].group_no]) continue;
                flags[this.base_diagnostics[i].group_no] = true;
                output.push({ "value" : this.base_diagnostics[i].group_no, "text": this.base_diagnostics[i].group_name});
            }

            this.groups_diagnostics = output
        },

        parserPartDiagnostics() {
            let startsWith = group_diagnostics => (element, index, array) => {
                return element['group_no'] === group_diagnostics;
            }

            /*

                let searchF = group_diagnostics => (element, index, array) => {
                    return element['group_no'] === group_diagnostics;
                }
                this.base_diagnostics.filter(searchF(this.group_diagnostics))

                'group_name' => $mass[$i]['group'],
                'diagnostic_name' => $mass[$i]['name'],
                'group_no' => $mass[$i]['group_no'],
                'number' => $mass[$i]['no'],
            */
            var arr_temp = []
            var output = []
            arr_temp = this.base_diagnostics.filter(startsWith(this.group_diagnostics))
            var l = arr_temp.length
            for(var i=0; i<l; i++) {
                output.push({ "value" : arr_temp[i].id, "text": arr_temp[i].diagnostic_name});
            }

            this.part_diagnostics = output
        },

        loadDataDetailUser(page_url) {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            page_url = page_url || '/api/load_data_detail_user'

            axios.post(page_url, {"user_id": this.param_user_id }).then((response) => {

                if(response.data.doctor != null) {
                    this.doctor_id = response.data.doctor.doctor_id
                    this.doctor_name = response.data.doctor.fullname
                }
                
                this.patient_info.fullname = response.data.user.fullname
                this.patient_info.email = response.data.user.email
                this.patient_info.gender = response.data.user.gender
                this.patient_info.date_birth = response.data.user.date_birth
                this.patient_info.address = response.data.user.address
                this.patient_info.phone_number = response.data.user.phone_number

                this.base_diseases = response.data.diseases
                this.base_medicines = response.data.medicines
                this.base_interventions = response.data.interventions
                this.base_diagnostics = response.data.diagnostics

                this.parserGroupDiseases()
                this.parserMedicines()
                this.parserGroupInterventions()
                this.parserGroupDiagnostics()
                
                this.objectives_data = response.data.objectives_data
                this.diseases_user = response.data.diseases_user.data
                this.makePagination(response.data.diseases_user, 'diseases_user')
                this.interventions_user = response.data.interventions_user.data
                this.makePagination(response.data.interventions_user, 'interventions_user')
                this.medicines_receptions_user = response.data.medicines_receptions_user.data
                this.makePagination(response.data.medicines_receptions_user, 'medicines_receptions_user')
                this.medicines_contraindications_user = response.data.medicines_contraindications_user.data
                this.makePagination(response.data.medicines_contraindications_user, 'medicines_contraindications_user')
                this.diagnostics_user = response.data.diagnostics_user.data
                this.makePagination(response.data.diagnostics_user, 'diagnostics_user')
                
                
            }).catch((errors) => {
                console.log(errors)
            })
        },

        loadDataDetailUserMy() {
            const token = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
            const page_url = '/api/load_data_detail_user_my'

            axios.post(page_url, {  }).then((response) => {

                if(response.data.doctor != null) {
                    this.doctor_id = response.data.doctor.doctor_id
                    this.doctor_name = response.data.doctor.fullname
                }
                
                this.patient_info.fullname = response.data.user.fullname
                this.patient_info.email = response.data.user.email
                this.patient_info.gender = response.data.user.gender
                this.patient_info.date_birth = response.data.user.date_birth
                this.patient_info.address = response.data.user.address
                this.patient_info.phone_number = response.data.user.phone_number

                this.patient_info.patient_id = response.data.user.id
                this.param_user_id = response.data.user.id

                this.base_diseases = response.data.diseases
                this.base_medicines = response.data.medicines
                this.base_interventions = response.data.interventions
                this.base_diagnostics = response.data.diagnostics

                this.parserGroupDiseases()
                this.parserMedicines()
                this.parserGroupInterventions()
                this.parserGroupDiagnostics()
                
                this.objectives_data = response.data.objectives_data
                this.diseases_user = response.data.diseases_user.data
                this.makePagination(response.data.diseases_user, 'diseases_user')
                this.interventions_user = response.data.interventions_user.data
                this.makePagination(response.data.interventions_user, 'interventions_user')
                this.medicines_receptions_user = response.data.medicines_receptions_user.data
                this.makePagination(response.data.medicines_receptions_user, 'medicines_receptions_user')
                this.medicines_contraindications_user = response.data.medicines_contraindications_user.data
                this.makePagination(response.data.medicines_contraindications_user, 'medicines_contraindications_user')
                this.diagnostics_user = response.data.diagnostics_user.data
                this.makePagination(response.data.diagnostics_user, 'diagnostics_user')
                
                
            }).catch((errors) => {
                console.log(errors)
            })
        }

    },
    mounted() {
        
        //param_user_id
        //this.loadDataDetailUser()
        
        if(this.role === 'patient') {
            this.loadDataDetailUserMy()
        } else {
            this.loadDataDetailUser()
        }
    }

}
</script>