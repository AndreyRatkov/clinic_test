<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class DiseasesUserController extends Controller
{
    //
    public function getDiseases(Request $request) {
        /*
        ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'contacts.phone', 'orders.price')
        */
        $pacient_id = $request->pacient_id;
        $diseases_user = DB::table('diseases_user')
        ->leftJoin('diseases', 'diseases.id', '=', 'diseases_user.disease_id')
        ->select('diseases_user.*', 'diseases.disease_group_name',
                            'diseases.disease_group_no',
                            'diseases.number',
                            'diseases.disease_name',
                )
        ->where('user_id', $pacient_id)->paginate(5);

        /*
        $table->string('group_name', 50);
        $table->integer('group_no')->unsigned()->nullable();
        $table->integer('number')->unsigned()->nullable();
        $table->string('disease_name', 50);
        */
        return response()->json(['diseases_user' => $diseases_user]);
    }
    
    public function addDiseases(Request $request) {
        $pacient_id = $request->pacient_id;

        DB::table('diseases_user')::create([
            'disease_id'   => $request->disease_id,
            'user_id'   => $pacient_id,
        ]);

        return response()->json(['operation' => 1]);
    }

}
