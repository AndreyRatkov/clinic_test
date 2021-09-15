<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ObjectiveData extends Model
{
    use HasFactory;

    /*
        $table->integer('number')->unsigned()->nullable();
        $table->float('val_f', 8, 2)->nullable();
        $table->bigInteger('val_i')->unsigned()->nullable();
        $table->integer('is_view')->unsigned();
        $table->bigInteger('user_id')->unsigned();
    */

    protected $fillable = [
        'number',
        'val_f',
        'val_i',
        'is_view',
        'user_id',
    ];
    
}
