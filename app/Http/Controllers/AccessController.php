<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Models\User;

class AccessController extends Controller
{
    //
    public static $m_access = [
        "getBoxList"        => ["super_admin" => true, "admin" => true],
        "getStoreList"      => ["super_admin" => true],
        "detailStoreInfo"   => ["super_admin" => true],
        "createStore"       => ["super_admin" => true],
        "updateStore"       => ["super_admin" => true],
        "removeStore"       => ["super_admin" => true],

        "getUsersForStore" => ["super_admin" => true, "admin" => true],
        "getUserList" => ["super_admin" => true, "admin" => true],
        "createUser" => ["super_admin" => true, "admin" => true],
        "addAdminUser" => ["super_admin" => true, "admin" => true],
        "addManagerUser" => ["super_admin" => true, "admin" => true],
        "updateUser" => ["super_admin" => true, "admin" => true],
        "detailUser" => ["super_admin" => true, "admin" => true],
        "removeUser" => ["super_admin" => true, "admin" => true],
        "removeAdminUser" => ["super_admin" => true, "admin" => true],
        "removeManagerUser" => ["super_admin" => true, "admin" => true],
        
        "LoadData" => ["super_admin" => true, "admin" => true],
        "ClearData" => ["super_admin" => true, "admin" => true],
        "ViewDataDebug" => ["super_admin" => true, "admin" => true],
        
    ];

    public static function IsAccess($role, $method) {
        //print_r($m_access);
        if(isset(self::$m_access[$method]) && isset(self::$m_access[$method][$role])) {
            return true;
        } else {
            throw ValidationException::withMessages([
                'access' => ['У Вас нет доступа.'],
            ]); 
        }
    }

    public static function getStoreId($user_id, $default_store_id) {
        $user = User::where('id', $user_id)->first();
        if($user['role_name'] == 'admin' || $user['role_name'] == 'manager') {
            return $user['store_id'];
        } else {
            return $default_store_id;
        }
    }

}
