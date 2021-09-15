<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::get('/{any}','App\Http\Controllers\AppController@index')->where('any', '.*');

/*
Route::get('/{any}', function () {
    echo 12;
    return view('welcome');
})->where('any', '.*');
*/