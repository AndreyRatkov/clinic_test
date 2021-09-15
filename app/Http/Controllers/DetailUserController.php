<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\ObjectiveData;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DetailUserController extends Controller
{
    

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

    /*
        $table->integer('number')->unsigned()->nullable();
        $table->float('val_f', 8, 2)->nullable();
        $table->bigInteger('val_i')->unsigned()->nullable();
        $table->integer('is_view')->unsigned();
        $table->bigInteger('user_id')->unsigned();
    */

    public function getObjectiveOnNumber($patient_id, $number) {
        $val = 0;

        $buildQuery = ObjectiveData::where('user_id',  $patient_id)
                                    ->where('is_view', 1)
                                    ->where('number',  $number);
        $res = $buildQuery->first();
        //dd($res);
        if($res) {
            $val = $res['val_i'];
        }
        if($number == 1) {
            //dd($res);
        }
        return $val;
    }

    private function _getObjectivesData($patient_id) {
        
        $buildQuery1 = ObjectiveData::where('user_id',  $patient_id)
                                    ->where('is_view', 1)
                                    ->where('number',  1);
        
        $m = [];
        $m['field1'] = $this->getObjectiveOnNumber($patient_id, 1);
        $m['field2'] = $this->getObjectiveOnNumber($patient_id, 2);
        $m['field3'] = $this->getObjectiveOnNumber($patient_id, 3);
        $m['field4'] = $this->getObjectiveOnNumber($patient_id, 4);
        $m['field5'] = $this->getObjectiveOnNumber($patient_id, 5);
        $m['field6'] = $this->getObjectiveOnNumber($patient_id, 6);
        $m['field7'] = $this->getObjectiveOnNumber($patient_id, 7);
        $m['field8'] = $this->getObjectiveOnNumber($patient_id, 8);
        

        return $m;//response()->json(['objectives_data' => $m]);
    }

    public function getObjectivesData(Request $request) {
        $patient_id = $request->patient_id;
        
        $m = $this->_getObjectivesData($patient_id);
        return response()->json(['objectives_data' => $m]);
    }

    public function addObjectivesData(Request $request) {
        
        $patient_id = $request->patient_id;

        /*
        Box::where('id', $request->box_id)
            ->update(['idbox'   => $request->idbox,
                    'number'            => $request->number,
                    'place'             => $request->place,
                    'scan'              => $request->scan,
            ]);
        
        */

        $res1 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 1)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        
        if(!$res1) {
            
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 1)
            ->where('is_view', 1)
                ->update(['is_view' => 0]);
            
            ObjectiveData::create([
                'number'    => 1,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
            
        }

        $res2 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 2)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res2) {
            dd("res2");
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 2)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 2,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }



        $res3 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 3)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res3) {
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 3)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 3,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }

        $res4 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 4)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res4) {
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 4)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 4,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }

        $res5 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 5)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res5) {
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 5)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 5,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }

        $res6 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 6)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res6) {
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 6)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 6,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }

        $res7 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 7)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res7) {
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 7)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 7,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }

        $res8 = ObjectiveData::where('user_id', $patient_id)
            ->where('number', 8)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res8) {
            ObjectiveData::where('user_id', $patient_id)
            ->where('number', 8)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 8,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $patient_id,
            ]);
        }
        
        
        return response()->json(['operation' => true]);
    }

    /*
        //'diseases_user'
        $table->bigInteger('disease_id')->unsigned()->nullable();
        $table->bigInteger('user_id')->unsigned();
    */

    //#diseases_user
    /*
        $table->string('group_name', 50);
            $table->integer('group_no')->unsigned()->nullable();
            $table->integer('number')->unsigned()->nullable();
            $table->string('disease_name', 50);
    */

    private function _getDiseasesOnPatient($patient_id) {
        $diseases_user = DB::table('diseases_user')
        ->leftJoin('diseases', 'diseases.id', '=', 'diseases_user.disease_id')
        ->select('diseases_user.*', 'diseases.group_name',
                            'diseases.group_no',
                            'diseases.number',
                            'diseases.disease_name',
                )
        ->where('user_id', $patient_id)
        ->where('is_view', 1)
        ->paginate(5);

        return $diseases_user;
    }

    public function getDiseasesOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $diseases_user = $this->_getDiseasesOnPatient($patient_id);

        return response()->json(['diseases_user' => $diseases_user]);
    }
    
    public function sendDiseasePatientInArchive(Request $request) {
        DB::table('diseases_user')
        ->where('id', $request->disease_user_id)
        ->where('user_id', $request->patient_id)
        ->update([
            'is_view'  => 0,
            'date_archive'  => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json(['operation' => 1]);
    }

    public function _getDiseasesArchiveOnPatient($patient_id) {
        $diseases_user_archive = DB::table('diseases_user')
        ->leftJoin('diseases', 'diseases.id', '=', 'diseases_user.disease_id')
        ->select('diseases_user.*', 'diseases.group_name',
                            'diseases.group_no',
                            'diseases.number',
                            'diseases.disease_name',
                )
        ->where('user_id', $patient_id)
        ->where('is_view', 0)
        ->paginate(5);

        return $diseases_user_archive;
    }

    public function getDiseasesArchiveOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $diseases_user_archive = $this->_getDiseasesArchiveOnPatient($diseases_user_archive);
        return response()->json(['diseases_user_archive' => $diseases_user_archive]);
    }

    public function addDiseasesInPatient(Request $request) {

        $request->validate([
            'patient_id'    =>      ['required'],
            'disease_id'    =>      ['required'],
        ]);
        
        $patient_id = $request->patient_id;
        
        DB::table('diseases_user')->insert([
            'disease_id'    => $request->disease_id,
            'user_id'       => $patient_id,
            'is_view'       => 1,
            'created_at'    => Carbon::now()->toDateTimeString(),
        ]);
        
        return response()->json(['operation' => 1]);
    }

    /*
    
    $table->string('group_name', 50);
    $table->string('intervention_name', 50);
    $table->integer('group_no')->unsigned()->nullable();
    $table->integer('number')->unsigned()->nullable();

    */
    private function _getInterventionsOnPatient($patient_id) {
        $interventions_user = DB::table('interventions_user')
        ->leftJoin('interventions', 'interventions.id', '=', 'interventions_user.intervention_id')
        ->select('interventions_user.*', 'interventions.group_name',
                            'interventions.intervention_name',
                            'interventions.number',
                            'interventions.group_no',
                )
        ->where('user_id', $patient_id)->paginate(5);

        return $interventions_user;
    }

    public function getInterventionsOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $interventions_user = $this->_getInterventionsOnPatient($patient_id);

        return response()->json(['interventions_user' => $interventions_user]);
    }

    /*
    
    */
    public function addInterventionsInPatient(Request $request) {
        $patient_id = $request->patient_id;

        DB::table('interventions_user')->insert([
            'intervention_id'   => $request->intervention_id,
            'user_id'           => $patient_id,
            'date_intervention' => $request->date_intervention,
            'is_view'           => 1,
            'created_at'        => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json(['operation' => 1]);
    }

    //interventions_user
    //interventions


    //medicines_receptions_user
    //medicines

    /*
        $table->integer('number')->unsigned()->nullable();
        $table->string('medicine_name', 50);
    */
    public function _getMedicinesReceptionsOnPatient($patient_id) {
        //medicines_receptions_user
        $medicines_receptions_user = DB::table('medicines_receptions_user')
        ->leftJoin('medicines', 'medicines.id', '=', 'medicines_receptions_user.medicine_id')
        ->select('medicines_receptions_user.*',
                            'medicines.number',
                            'medicines.medicine_name',
                )
        ->where('user_id', $patient_id)->paginate(5);

        return $medicines_receptions_user;    
    }
    
    public function getMedicinesReceptionsOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $medicines_receptions_user = $this->_getMedicinesReceptionsOnPatient($patient_id);

        return response()->json(['medicines_receptions_user' => $medicines_receptions_user]);
    }

    /*
        $table->string('name', 150);
        $table->string('dosage', 250);
        $table->integer('status')->unsigned()->nullable();//1 , 2
        $table->bigInteger('medicine_id')->unsigned()->nullable();
        $table->foreign('medicine_id')
            ->references('id')
            ->on('medicines');
        
        $table->bigInteger('user_id')->unsigned();
        $table->foreign('user_id')
            ->references('id')
            ->on('users');
        
        //dosage
        $table->integer('is_view')->unsigned()->nullable();
    */

    public function getMedicineReceptionInfoOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $medicine_reception_id = $request->medicine_reception_id;
        //dd($medicine_reception_id);
        $medicine_reception_user = DB::table('medicines_receptions_user')
        ->leftJoin('medicines', 'medicines.id', '=', 'medicines_receptions_user.medicine_id')
        ->select('medicines_receptions_user.*',
                            'medicines.number',
                            'medicines.medicine_name',
                )
        ->where('user_id', $patient_id)
        ->where('medicines_receptions_user.id', $medicine_reception_id)->first();

        return response()->json(['medicine_reception_info' => $medicine_reception_user]);
    }

    public function addMedicinesReceptionsInPatient(Request $request) {
        $patient_id = $request->patient_id;

        $request->validate([
            'name'              =>    ['required'],
            'patient_id'        =>    ['required'],
        ]);

        DB::table('medicines_receptions_user')->insert([
            'name'          => $request->name,
            'dosage'        => $request->dosage,
            'status'        => $request->status,
            'medicine_id'   => $request->medicine_id,
            'user_id'       => $patient_id,
            'is_view'       => 1,
            'created_at'    => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json(['operation' => 1]);
    }

    public function updateMedicinesReceptionsInPatient(Request $request) {
        $patient_id = $request->patient_id;

        $request->validate([
            'name'                      =>  ['required'],
            'patient_id'                =>  ['required'],
            'medicine_reception_id'     =>  ['required'],
        ]);
        
        DB::table('medicines_receptions_user')
        ->where('id', $request->medicine_reception_id)
        ->where('user_id', $request->patient_id)
        ->update([
            'name'   => $request->name,
            'dosage'   => $request->dosage,
            'status'   => $request->status,
            'medicine_id'     =>$request->medicine_id,
            'is_view'  => 1,

        ]);

        return response()->json(['operation' => 1]);
    }

    //medicines_contraindications_user

    public function _getMedicinesContraindicationsOnPatient($patient_id) {
        $medicines_contraindications_user = DB::table('medicines_contraindications_user')
        ->leftJoin('medicines', 'medicines.id', '=', 'medicines_contraindications_user.medicine_id')
        ->select('medicines_contraindications_user.*',
                            'medicines.number',
                            'medicines.medicine_name',
                )
        ->where('user_id', $patient_id)->paginate(5);

        return $medicines_contraindications_user;    
    }
    
    public function getMedicineContraindicationInfoOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $medicine_contraindication_id = $request->medicine_contraindication_id;
        
        $medicine_contraindication_user = DB::table('medicines_contraindications_user')
        ->leftJoin('medicines', 'medicines.id', '=', 'medicines_contraindications_user.medicine_id')
        ->select('medicines_contraindications_user.*',
                            'medicines.number',
                            'medicines.medicine_name',
                )
        ->where('user_id', $patient_id)
        ->where('medicines_contraindications_user.id', $medicine_contraindication_id)->first();

        return response()->json(['medicine_contraindication_info' => $medicine_contraindication_user]);
    }

    /*
    getMedicinesContraindicationsOnPatient
    addMedicinesContraindicationsInPatient
    updateMedicinesContraindicationsInPatient
    */

    public function getMedicinesContraindicationsOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $medicines_contraindications_user = $this->_getMedicinesContraindicationsOnPatient($patient_id);

        return response()->json(['medicines_contraindications_user' => $medicines_contraindications_user]);
    }

    public function addMedicinesContraindicationsInPatient(Request $request) {
        $patient_id = $request->patient_id;

        $request->validate([
            'name'              =>    ['required'],
            'patient_id'        =>    ['required'],
        ]);

        DB::table('medicines_contraindications_user')->insert([
            'name'   => $request->name,
            'status'   => $request->status,
            'medicine_id'     =>$request->medicine_id,
            'user_id'   => $patient_id,
            'is_view'  => 1,
            'created_at'    => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json(['operation' => 1]);
    }

    public function updateMedicinesContraindicationsInPatient(Request $request) {
        $patient_id = $request->patient_id;

        $request->validate([
            'name'                      =>      ['required'],
            'patient_id'                =>      ['required'],
            'medicine_contraindication_id' =>   ['required'],
        ]);

        DB::table('medicines_contraindications_user')
        ->where('id', $request->medicine_contraindication_id)
        ->where('user_id', $request->patient_id)
        ->update([
            'name'   => $request->name,
            'status'   => $request->status,
            'medicine_id'     =>$request->medicine_id,
        ]);

        return response()->json(['operation' => 1]);
    }

    //diagnostics_user
    public function _getDiagnosticsUserOnPatient($patient_id) {
        $diagnostics_user = DB::table('diagnostics_user')
        ->leftJoin('diagnostics', 'diagnostics.id', '=', 'diagnostics_user.diagnostic_id')
        ->select('diagnostics_user.*',
                    'diagnostics.group_name',
                    'diagnostics.diagnostic_name',
                    'diagnostics.group_no',
                    'diagnostics.number',
                )
        ->where('user_id', $patient_id)->paginate(5);
        return $diagnostics_user;    
    } 

    /*
        getDiagnosticsUserOnPatient
        addDiagnosticsUserInPatient
        updateDiagnosticsInPatient
    */

    public function getDiagnosticsUserOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $diagnostics_user = $this->_getDiagnosticsUserOnPatient($patient_id);

        return response()->json(['diagnostics_user' => $diagnostics_user]);
    }

    
    public function addDiagnosticsUserInPatient(Request $request) {
        $patient_id = $request->patient_id;
        
        $request->validate([
            'patient_id'        =>  ['required'],
            'diagnostic_id'     =>  ['required'],
        ]);
        
        /*
            $table->float('val_f', 8, 2)->nullable();
            $table->integer('val_i', 8, 2)->nullable();
            $table->integer('status')->unsigned()->nullable();//1 , 2
            $table->bigInteger('diagnostic_id')->unsigned()->nullable();
        */

        DB::table('diagnostics_user')->insert([
            'val_f'         =>  $request->val_f,
            'val_i'         =>  $request->val_i,
            'status'        =>  $request->status,
            'diagnostic_id' =>  $request->diagnostic_id,
            'user_id'       =>  $patient_id,
            'is_view'       =>  1,
            'created_at'    => Carbon::now()->toDateTimeString(),
        ]);

        return response()->json(['operation' => 1]);
    }

    public function updateDiagnosticsInPatient(Request $request) {
        $patient_id = $request->patient_id;

        $request->validate([
            'name'                      =>  ['required'],
            'patient_id'                =>  ['required'],
            'diagnostic_id'             =>  ['required'],
        ]);

        DB::table('diagnostics_user')
        ->where('id', $request->diagnostic_id)
        ->where('patient_id', $request->patient_id)
        ->update([
            'name'   => $request->name,
            'status'   => $request->status,
            'medicine_id'     =>$request->medicine_id,

        ]);

        return response()->json(['operation' => 1]);
    }

    public function setDoctor(Request $request) {

        //patients_doctors
        /*
            patient_id
            doctor_id
            is_view
        */
        $request->validate([
            'patient_id'                =>  ['required'],
            'doctor_id'             =>  ['required'],
        ]);
        
        DB::table('patients_doctors')
        ->where('patient_id', $request->patient_id)
        ->where('is_view', 1)
        ->update([
            'is_view'  => 0,
        ]);

        DB::table('patients_doctors')->insert([
            'patient_id'    =>  $request->patient_id,
            'doctor_id'     =>  $request->doctor_id,
            'is_view'       =>  1,
            'created_at'    => Carbon::now()->toDateTimeString(),
        ]);
        
        return response()->json(['operation' => 1]);
    }

    public function _getDoctorOnPatient($patient_id) {
        $doctor = DB::table('patients_doctors')
        ->leftJoin('users', 'users.id', '=', 'patients_doctors.doctor_id')
        ->select('patients_doctors.*',
                    'users.fullname',
                )
        ->where('patient_id', $patient_id)->first();

        return $doctor;
    }
    

    public function getDoctorOnPatient(Request $request) {
        $patient_id = $request->patient_id;
        $doctor = $this->_getDoctorOnPatient($patient_id);
        return response()->json(['doctor' => $doctor]);
    }

    public function loadDataDetailUser(Request $request) {
        $diseases = DB::table('diseases')->get();
        $interventions = DB::table('interventions')->get();
        $medicines = DB::table('medicines')->get();
        $diagnostics = DB::table('diagnostics')->get();
        
        $user_id = $request->user_id;

        $user = DB::table('users')
        ->where('id', $user_id)
        ->select('users.fullname',
                'users.email',
                'users.gender',
                'users.date_birth',
                'users.address',
                'users.phone_number',
                )
        ->first();
        

        
        //$diseases->patient_id
        $objectives_data =                  $this->_getObjectivesData($user_id);
        $diseases_user =                    $this->_getDiseasesOnPatient($user_id);
        $interventions_user =               $this->_getInterventionsOnPatient($user_id);
        $medicines_receptions_user =        $this->_getMedicinesReceptionsOnPatient($user_id);
        $medicines_contraindications_user = $this->_getMedicinesContraindicationsOnPatient($user_id);
        $diagnostics_user =                 $this->_getDiagnosticsUserOnPatient($user_id);
        
        $doctor = $this->_getDoctorOnPatient($user_id);

        //dd($objectives_data);

        return response()->json([   'user'      => $user,   
                                    'doctor'    => $doctor,             
                                    'diseases' => $diseases,    
                                    'interventions' => $interventions,  
                                    'medicines' => $medicines,
                                    'diagnostics' => $diagnostics,
                                    
                                    'objectives_data' => $objectives_data,
                                    'diseases_user'  => $diseases_user,
                                    'interventions_user'  => $interventions_user,
                                    'medicines_receptions_user'  => $medicines_receptions_user,
                                    'medicines_contraindications_user'  => $medicines_contraindications_user,
                                    'diagnostics_user'  => $diagnostics_user, 
                                ]);
    }

    public function loadDataDetailUserMy(Request $request) {
        $diseases = DB::table('diseases')->get();
        $interventions = DB::table('interventions')->get();
        $medicines = DB::table('medicines')->get();
        $diagnostics = DB::table('diagnostics')->get();
        
        //$user_id = $request->user_id;
        $user_id = $request->user()['id'];

        $user = DB::table('users')
        ->where('id', $user_id)
        ->select('users.id',
                'users.fullname',
                'users.email',
                'users.gender',
                'users.date_birth',
                'users.address',
                'users.phone_number',
                )
        ->first();
        

        
        //$diseases->patient_id
        $objectives_data =                  $this->_getObjectivesData($user_id);
        $diseases_user =                    $this->_getDiseasesOnPatient($user_id);
        $interventions_user =               $this->_getInterventionsOnPatient($user_id);
        $medicines_receptions_user =        $this->_getMedicinesReceptionsOnPatient($user_id);
        $medicines_contraindications_user = $this->_getMedicinesContraindicationsOnPatient($user_id);
        $diagnostics_user =                 $this->_getDiagnosticsUserOnPatient($user_id);
        
        $doctor = $this->_getDoctorOnPatient($user_id);


        return response()->json([   'user'      => $user,   
                                    'doctor'    => $doctor,             
                                    'diseases' => $diseases,    
                                    'interventions' => $interventions,  
                                    'medicines' => $medicines,
                                    'diagnostics' => $diagnostics,
                                    
                                    'objectives_data' => $objectives_data,
                                    'diseases_user'  => $diseases_user,
                                    'interventions_user'  => $interventions_user,
                                    'medicines_receptions_user'  => $medicines_receptions_user,
                                    'medicines_contraindications_user'  => $medicines_contraindications_user,
                                    'diagnostics_user'  => $diagnostics_user, 
                                ]);
    }



}
