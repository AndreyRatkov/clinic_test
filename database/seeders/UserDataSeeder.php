<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        DB::table('users')->insert([
            'medicine_name' => $mass[$i]['name'],
            'number' => $mass[$i]['number'],
        ]);
        DB::table('users')->insert([
            'fullname'          => $request->fullname,
            'email'         => $request->email,
            'password'      => Hash::make($request->password),
            'role_name'     => $role_name,
            'gender'        => $request->gender,
            'date_birth'    => $request->date_birth,
            'address'       => $request->address,
            'phone_number'  => $request->phone_number,
        ]);
        Hash::make('111111')
        */
        $role_name = "manager";
        DB::table('users')->insert([
            'fullname'          => "Первый менеджер",
            'email'         => "test@test.com",
            'password'      => Hash::make(111111),
            'role_name'     => $role_name,
        ]);

    }
}
