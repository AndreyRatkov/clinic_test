<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MedicinesContraindicationsUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicines_contraindications_user', function (Blueprint $table) {
            $table->id();
            
            $table->string('name', 150);
            $table->integer('status')->unsigned()->nullable();//1 , 2

            $table->bigInteger('medicine_id')->unsigned()->nullable();
            $table->foreign('medicine_id')
                ->references('id')
                ->on('medicines');
            
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
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
        Schema::dropIfExists('medicines_contraindications_user');
    }
}
