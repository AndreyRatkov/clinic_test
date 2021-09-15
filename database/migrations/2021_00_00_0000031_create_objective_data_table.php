<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectiveDataTable extends Migration
{
    /*
        user_id
        number  bigInteger
        val_f  float('val_f', 8, 2);
        val_i
    */
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

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objective_data', function (Blueprint $table) {
            $table->id();

            $table->integer('number')->unsigned()->nullable();
            $table->float('val_f', 8, 2)->nullable();
            $table->bigInteger('val_i')->unsigned()->nullable();
            $table->integer('is_view')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
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
        Schema::dropIfExists('objective_data');
    }
}
