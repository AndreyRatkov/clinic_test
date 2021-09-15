<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PatientsDoctors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        /*
        patient_id
        doctor_id
        is_view
        */

        Schema::create('patients_doctors', function (Blueprint $table) {
            $table->id();
            
            $table->bigInteger('patient_id')->unsigned();
            $table->foreign('patient_id')
                ->references('id')
                ->on('users');
            
            $table->bigInteger('doctor_id')->unsigned();
            $table->foreign('doctor_id')
                ->references('id')
                ->on('users');
            
            $table->integer('is_view')->unsigned()->nullable();
            
            $table->timestamps();
        });



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients_doctors');
    }
}
