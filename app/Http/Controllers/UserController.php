<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Store;
use Illuminate\Validation\ValidationException;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Http\Controllers\AccessController as Access;
use Mail;

class UserController extends Controller
{
    
    public function getPatientsForDoctor(Request $request) {
        //$doctor_id = $request->doctor_id;
        
        $doctor_id = $request->user()['id'];
        

        //$store_id = Access::getStoreId($request->user()['id'], $request->store_id);
        //Access::IsAccess($request->user()['role_name'], "getUsersForStore");
        //$users = User::where('doctor_id', $doctor_id)->where('is_view', 1)->paginate(10);
        
        
        $users = [];

        //DB::enableQueryLog(); // Enable query log

        // Your Eloquent query executed by using get()



        $build = DB::table('patients_doctors')
                    ->Join('users', 'users.id', '=', 'patients_doctors.patient_id')
                    ->select(
                                'users.*',
                            )
                    ->where('patients_doctors.doctor_id', $doctor_id)
                    ->where('patients_doctors.is_view', 1);
        
        if(isset($request->item_search) && strlen($request->item_search) > 0) {
            $item_search = "%".$request->item_search."%";
            //$build->where('users.fullname','LIKE', '%{$item_search}%');
            $build->where('users.fullname','LIKE', $item_search);
            //$build->whereLike('fullname', $item_search);
        }
        
        $users = $build->paginate(10);

        /*
            //diseases_user
            $_user_id = 12;
            $diseases_user = DB::table('users')
                ->Join('diseases_user', 'diseases_user.user_id', '=', 'user.id')
                ->Join('diseases', 'diseases.id', '=', 'diseases_user.disease_id')
                ->select('diseases.*')
                ->where('users.id', $_user_id);

            searchGroupNo($search_groups_no, $m)
        */

        //dd(DB::getQueryLog());

        return response()->json(['users' => $users]);
    }

    private function searchGroupNo($search_groups_no, $m) {
        foreach ($m as $value) {
            if(array_search($value['group_no'], $search_groups_no)) {
                return true;
            }
        }
        return false;
    }

    public function getPatientsForManager(Request $request) {
        $doctor_id = $request->doctor_id;
        //$store_id = Access::getStoreId($request->user()['id'], $request->store_id);
        //Access::IsAccess($request->user()['role_name'], "getUserList");
        //dd(1111111);
        $users = User::where('role_name', 'patient')->where('is_view', 1)->paginate(10);

        return response()->json(['users' => $users]);
    }

    public function getDoctors(Request $request) {
        $doctor_id = $request->doctor_id;
        //$store_id = Access::getStoreId($request->user()['id'] , $request->store_id);
        //Access::IsAccess($request->user()['role_name'], "getUserList");

        $users = User::where('role_name', 'doctor')->where('is_view', 1)->paginate(10);

        return response()->json(['users' => $users]);
    }
    public function getManagers(Request $request) {
        $doctor_id = $request->doctor_id;
        $users = User::where('role_name', 'manager')->where('is_view', 1)->paginate(10);

        return response()->json(['users' => $users]);
    }

    //public function remove
    public function removeUserH(Request $request) {
        //Access::IsAccess($request->user()['role_name'], "removeUser");
        $request->validate([
            'user_id'       =>    ['required'],
        ]);
        
        $user_id = $request->user_id;
        
        User::where('id', $user_id)
            ->update([
                'is_view'          => 0,
            ]);
        

        return response()->json(['operation' => true]);
    }

    public function getMyInfo(Request $request) {
        $user_id = $request->user()['id'];
        
        $user = User::where('id', $user_id)->first();
        
        return response()->json(['user' => $user]);
    }

    public function myInfoUpdate(Request $request) {
        $user_id = $request->user()['id'];

        $request->validate([
            'fullname'              =>    ['required'],
            'email'                 =>    ['required'],
        ]);

        User::where('id', $user_id)
            ->update([
                'fullname'          => $request->fullname,
                'gender'            => $request->gender,
                'date_birth'        => $request->date_birth,
                'address'           => $request->address,
                'phone_number'      => $request->phone_number,
                'position'      => $request->position,
            ]);

        return response()->json(['operation' => true]);
    }

    /*

    public function addAdminUser(Request $request) {
        Access::IsAccess($request->user()['role_name'], "addAdminUser");

        $store_id = Access::getStoreId($request->user()['id'], $request->store_id);

        $request->validate([
            'name'            =>    ['required'],
            'email'           =>    ['required', 'email','unique:users'],
            'password'        =>    ['required', 'min:1'],
        ]);
        
        $role_name = "admin_store";
    
        User::create([
            'name'        => $request->name,
            'email'       => $request->email,
            'password'    => Hash::make($request->password),
            'role_name'   => $request->role_name,
            'store_id'    => $store_id,
        ]);
        return response()->json(['operation' => true]);
    }

    */

    

    public function addManagerUser(Request $request) {
        //Access::IsAccess($request->user()['role_name'], "addManagerUser");
        

        //dd($request);
        $request->validate([
            'fullname'        =>   ['required'],
            'email'           =>   ['required', 'email','unique:users'],
            'password'        =>   ['required', 'min:1'],
            'role_name'       =>   ['required'],
            
        ]);
        
        $role_name = "";

        if($request->role_name == 'patient') {
            $role_name = "patient";
        }

        if($request->role_name == 'doctor') {
            $role_name = "doctor";
        }
        
        if($request->role_name == 'manager') {
            $role_name = "manager";
        }

        /*
            $table->string('fullname');
            $table->string('email');//->unique()
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role_name');
            $table->string('gender');
            $table->timestamp('date_birth')->nullable();
            $table->text('address');
            $table->string('phone_number');
        */

        $new_user = User::create([
            'fullname'          => $request->fullname,
            'email'         => $request->email,
            'password'      => Hash::make($request->password),
            'role_name'     => $role_name,
            'gender'        => $request->gender,
            'date_birth'    => $request->date_birth,
            'address'       => $request->address,
            'phone_number'  => $request->phone_number,
            'position'  => $request->position,
            'is_view'   => 1
        ]);
        
        if($request->user()['role_name'] == 'doctor') {

            DB::table('patients_doctors')->insert([
                'patient_id'    =>  $new_user['id'],
                'doctor_id'     =>  $request->user()['id'],
                'is_view'       =>  1,
                'created_at'    => Carbon::now()->toDateTimeString(),
            ]);
        }
            

        /*
        $to_name = 'TO_NAME';
        $to_email = 'andrei.angydev@gmail.com';
        $data = array('name'=>$request->fullname, "body" => "Test mail");
        Mail::send('emails', $data, function($message) use ($to_name, $to_email) {
            $message->to($to_email, $to_name)->subject('Artisans Web Testing Mail');
            //$message->from('FROM_EMAIL_ADDRESS','Artisans Web');
            $message->from('andrei.angydev@gmail.com','Artisans Web');
        });
        */

        /*
            Просто перейдите к файлу vendor \ swiftmailer \ lib \ classes \ Swift \ Transport \ StreamBuffer.php и закомментируйте код $ options = []; и вставьте код $ options ['ssl'] = array ('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true);

            Теперь это сработает с тобой, потому что это сработало и для меня.
        */

        return response()->json(['operation' => true, 'user' => $new_user]);
    }

    public function updateUser(Request $request) {
        //Access::IsAccess($request->user()['role_name'], "updateUser");
        
        $user_id = $request->patient_id;

        $request->validate([
            'fullname'              =>    ['required'],
            'patient_id'            =>    ['required'],
        ]);
        

        User::where('id', $user_id)
            ->update([
                'fullname'          => $request->fullname,
                'gender'            => $request->gender,
                'date_birth'        => $request->date_birth,
                'address'           => $request->address,
                'phone_number'      => $request->phone_number,
            ]);

        return response()->json(['operation' => true]);
    }

    

    public function detailUser(Request $request) {
        //Access::IsAccess($request->user()['role_name'], "detailUser");
        
        $request->validate([
            'user_id'      =>    ['required'],
        ]);
        
        $user = User::where('id', $request->user_id)->first();
        
        return response()->json(['user' => $user]);
    }

    public function removeUser(Request $request) {
        Access::IsAccess($request->user()['role_name'], "removeUser");
        $request->validate([
            'user_id'       =>    ['required'],
        ]);

        User::where('id', $request->user_id)->delete();
        return response()->json(['operation' => true]);
    }

    

    /* Authentification */

    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            //'device_name' => 'required',
        ]);
        
        //$user = User::where('email', $request->email)->first();
        $user = User::where('email', $request->email)->where('is_view', 1)->first();
        
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        
        User::where('id', $user['id'])
            ->update([
                'date_last_in'      => Carbon::now()->toDateTimeString(),
            ]);

        //date_last_in Carbon::now()->toDateTimeString()

        //return $user->createToken($request->device_name)->plainTextToken;
        return response()->json(['token' => $user->createToken($request->device_name)->plainTextToken, 'user'=> $user]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        //Auth::user()->token()->delete();
        return response()->json(['msg' => 'Logout Successfull']);
    }

    public function test(Request $request)
    {
        //dd(Hash::make('111111'));
        return response()->json(['msg' => Hash::make('111111')]);
    }



}
