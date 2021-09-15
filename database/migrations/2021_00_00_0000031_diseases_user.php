<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DiseasesUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseases_user', function (Blueprint $table) {
            $table->id();
            
            $table->bigInteger('disease_id')->unsigned()->nullable();
            $table->foreign('disease_id')
                ->references('id')
                ->on('diseases');
            
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
            
            //date_archive
            $table->timestamp('date_archive')->nullable();

            $table->integer('is_view')->unsigned();
            
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
        Schema::dropIfExists('diseases_user');
    }
}
