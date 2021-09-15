<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\ObjectiveData;

class ObjectiveDataController extends Controller
{
    //

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

    public function getObjectiveOnNumber($pacient_id, $number) {
        $val = 0;

        $buildQuery = ObjectiveData::where('user_id',  $pacient_id)
                                    ->where('is_view', 1)
                                    ->where('number',  $number);
        $res = $buildQuery->first();
        if($res) {
            $val = $res['val_i'];
        }
        return $val;
    }

    public function getObjectivesData(Request $request) {
        $pacient_id = $request->pacient_id;
        $buildQuery1 = ObjectiveData::where('user_id',  $pacient_id)
                                    ->where('is_view', 1)
                                    ->where('number',  1);
        $m = [];
        $m['field1'] = $this->getObjectiveOnNumber($pacient_id, 1);
        $m['field2'] = $this->getObjectiveOnNumber($pacient_id, 2);
        $m['field3'] = $this->getObjectiveOnNumber($pacient_id, 3);
        $m['field4'] = $this->getObjectiveOnNumber($pacient_id, 4);
        $m['field5'] = $this->getObjectiveOnNumber($pacient_id, 5);
        $m['field6'] = $this->getObjectiveOnNumber($pacient_id, 6);
        $m['field7'] = $this->getObjectiveOnNumber($pacient_id, 7);
        $m['field8'] = $this->getObjectiveOnNumber($pacient_id, 8);
        //$m
        return response()->json(['objectives_data' => $m]);
    }

    public function addObjectivesData(Request $request) {
        $pacient_id = $request->pacient_id;
        
        /*
        Box::where('id', $request->box_id)
            ->update(['idbox'   => $request->idbox,
                    'number'            => $request->number,
                    'place'             => $request->place,
                    'scan'              => $request->scan,
            ]);
        
        */

        $res1 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 1)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res1) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 1)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 1,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }

        $res2 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 2)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res2) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 2)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 2,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }



        $res3 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 3)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res3) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 3)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 3,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }

        $res4 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 4)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res4) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 4)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 4,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }

        $res5 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 5)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res5) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 5)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 5,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }

        $res6 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 6)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res6) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 6)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 6,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }

        $res7 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 7)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res7) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 7)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 7,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }

        $res8 = ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 8)
            ->where('is_view', 1)
            ->where('val_i', $request->field1_val)->first();
        
        if(!$res8) {
            ObjectiveData::where('user_id', $pacient_id)
            ->where('number', 8)
            ->where('is_view', 1)
                ->update('is_view', 0);

            ObjectiveData::create([
                'number'    => 8,
                'val_i'     => $request->field1_val,
                'is_view'   => 1,
                'user_id'   => $pacient_id,
            ]);
        }
 

        return response()->json(['operation' => true]);
    }
}
