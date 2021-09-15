<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DiagnosticsUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   

        /*
            Да - 1 / Нет - 0 
            Правый - 1 /Левый - 0
            Проходимы - 1 /Дисфункция - 0
            
        */

        Schema::create('diagnostics_user', function (Blueprint $table) {
            $table->id();
            //$table->string('name', 150);
            
            $table->float('val_f', 8, 2)->nullable();
            $table->integer('val_i')->nullable();
            
            $table->integer('status')->unsigned()->nullable();//1 , 2
            
            $table->bigInteger('diagnostic_id')->unsigned()->nullable();
            $table->foreign('diagnostic_id')
                ->references('id')
                ->on('diagnostics');
            
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
            
            $table->integer('is_view')->unsigned()->nullable();
            
            //$table->timestamp('date_intervention')->nullable();
            //date_intervention
            
            
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
        Schema::dropIfExists('diagnostics_user');
    }
}
