<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->string('email');//->unique()
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role_name');
            $table->string('gender')->nullable();
            $table->timestamp('date_birth')->nullable();
            $table->text('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('position')->nullable();
            $table->timestamp('date_last_in')->nullable();

            $table->integer('is_view')->unsigned();
            //phone number
            //gender
            /*

            $table->bigInteger('doctor_id')->unsigned()->nullable();
            $table->foreign('doctor_id')
                ->references('id')
                ->on('users');
            
            */

                //->onDelete('cascade');
            $table->rememberToken();
            $table->timestamps();
        });

        /*
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
        */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
