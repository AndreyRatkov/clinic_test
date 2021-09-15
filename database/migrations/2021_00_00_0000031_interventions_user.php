<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InterventionsUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interventions_user', function (Blueprint $table) {
            $table->id();
            
            $table->bigInteger('intervention_id')->unsigned()->nullable();
            $table->foreign('intervention_id')
                ->references('id')
                ->on('interventions');
            
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
            
            $table->integer('is_view')->unsigned();
            $table->timestamp('date_intervention')->nullable();
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
        Schema::dropIfExists('interventions_user');
    }
}
