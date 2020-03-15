<?php

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
use Illuminate\Auth\Middleware\Authenticate;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/', function () {return view('welcome');});
Route::get('/login', 'Auth\LoginController@index')->middleware('auth');
Route::get('/register', 'Auth\RegisterController@index')->middleware('auth');




Route::get('pusher', function () {return view('pusher');});

Route::get('/public-event', function(){
    broadcast(new \App\Events\PublicEvent);
    return 'public';
});

// ソーシャルログイン向けリダイレクト・コールバック
Route::get ( '/redirect/{service}', 'SocialAuthController@redirect' );
Route::get ( '/callback/{service}', 'SocialAuthController@callback' );

