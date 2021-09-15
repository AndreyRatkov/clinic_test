<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use  HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fullname',
        'email',
        'password',
        'role_name',
        'gender',
        'date_birth',
        'email',
        'address',
        'phone_number',
    ];

    /*
        $table->string('fullname');
        $table->string('email');//->unique()
        $table->timestamp('email_verified_at')->nullable();
        $table->string('password');
        $table->string('role_name');
        $table->string('gender');
        $table->timestamp('date_birth')->nullable();
        $table->string('email');
        $table->text('address');
        $table->string('phone_number');
    */

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
