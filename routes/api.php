<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', 'App\Http\Controllers\UserController@logout')->name('logout.api');
    
    Route::post('/detail_user_short_info', 'App\Http\Controllers\UserController@detailUser')->name('detail_user_short_info');

    Route::post('/get_patients_all', 'App\Http\Controllers\UserController@getPatientsForManager')->name('get_patients_for_manager');
    Route::post('/create_user', 'App\Http\Controllers\UserController@addManagerUser')->name('create_user');

    Route::post('/get_patients_on_doctor', 'App\Http\Controllers\UserController@getPatientsForDoctor')->name('get_patients_for_doctor');
    Route::post('/get_doctors', 'App\Http\Controllers\UserController@getDoctors')->name('get_doctors');
    Route::post('/get_managers', 'App\Http\Controllers\UserController@getManagers')->name('get_managers');
    Route::post('/update_user', 'App\Http\Controllers\UserController@updateUser')->name('update_user');
    Route::post('/remove_user_h', 'App\Http\Controllers\UserController@removeUserH')->name('remove_user_h');
    
    Route::post('/get_my_info', 'App\Http\Controllers\UserController@getMyInfo')->name('get_my_info');
    
    Route::post('/my_info_update', 'App\Http\Controllers\UserController@myInfoUpdate')->name('my_info_update');

    Route::post('/set_doctor', 'App\Http\Controllers\DetailUserController@setDoctor')->name('set_doctor');
    
    Route::post('/get_doctor_on_patient', 'App\Http\Controllers\DetailUserController@getDoctorOnPatient')->name('get_doctor_on_patient');

    Route::post('/get_objectives_data', 'App\Http\Controllers\DetailUserController@getObjectivesData')->name('get_objectives_data');
    Route::post('/add_objectives_data', 'App\Http\Controllers\DetailUserController@addObjectivesData')->name('add_objectives_data');

    Route::post('/get_diseases_on_patient', 'App\Http\Controllers\DetailUserController@getDiseasesOnPatient')->name('get_diseases_on_patient');
    Route::post('/add_diseases_in_patient', 'App\Http\Controllers\DetailUserController@addDiseasesInPatient')->name('add_diseases_in_patient');
    
    Route::post('/send_disease_patient_in_archive', 'App\Http\Controllers\DetailUserController@sendDiseasePatientInArchive')->name('send_disease_patient_in_archive');
    
    Route::post('/get_diseases_archive_on_patient', 'App\Http\Controllers\DetailUserController@getDiseasesArchiveOnPatient')->name('get_diseases_archive_on_patient');

    Route::post('/load_data_detail_user', 'App\Http\Controllers\DetailUserController@loadDataDetailUser')->name('load_data_detail_user');
    
    Route::post('/load_data_detail_user_my', 'App\Http\Controllers\DetailUserController@loadDataDetailUserMy')->name('load_data_detail_user_my');

    Route::post('/get_interventions_on_patient', 'App\Http\Controllers\DetailUserController@getInterventionsOnPatient')->name('get_interventions_on_patient');
    Route::post('/add_interventions_in_patient', 'App\Http\Controllers\DetailUserController@addInterventionsInPatient')->name('add_interventions_in_patient');

    
    Route::post('/get_medicines_receptions_on_patient', 'App\Http\Controllers\DetailUserController@getMedicinesReceptionsOnPatient')->name('get_medicines_receptions_on_patient');
    Route::post('/add_medicines_receptions_in_patient', 'App\Http\Controllers\DetailUserController@addMedicinesReceptionsInPatient')->name('add_medicines_receptions_in_patient');
    Route::post('/update_medicines_receptions_in_patient', 'App\Http\Controllers\DetailUserController@updateMedicinesReceptionsInPatient')->name('update_medicines_receptions_in_patient');
    
    Route::post('/get_medicine_reception_info_on_patient', 'App\Http\Controllers\DetailUserController@getMedicineReceptionInfoOnPatient')->name('get_medicine_reception_info_on_patient');
    
    Route::post('/get_medicine_contraindication_info_on_patient', 'App\Http\Controllers\DetailUserController@getMedicineContraindicationInfoOnPatient')->name('get_medicine_contraindication_info_on_patient');

    
    Route::post('/get_medicines_contraindications_on_patient', 'App\Http\Controllers\DetailUserController@getMedicinesContraindicationsOnPatient')->name('get_medicines_contraindications_on_patient');
    Route::post('/add_medicines_contraindications_in_patient', 'App\Http\Controllers\DetailUserController@addMedicinesContraindicationsInPatient')->name('add_medicines_contraindications_in_patient');
    Route::post('/update_medicines_contraindications_in_patient', 'App\Http\Controllers\DetailUserController@updateMedicinesContraindicationsInPatient')->name('update_medicines_contraindications_in_patient');

    Route::post('/get_diagnostics_user_on_patient', 'App\Http\Controllers\DetailUserController@getDiagnosticsUserOnPatient')->name('get_diagnostics_user_on_patient');
    Route::post('/add_diagnostics_user_in_patient', 'App\Http\Controllers\DetailUserController@addDiagnosticsUserInPatient')->name('add_diagnostics_user_in_patient');
    Route::post('/update_diagnostics_in_patient', 'App\Http\Controllers\DetailUserController@updateDiagnosticsInPatient')->name('update_diagnostics_in_patient');


});


Route::post('/login', 'App\Http\Controllers\UserController@login')->name('login.api');
Route::post('/test', 'App\Http\Controllers\UserController@test')->name('test.api');