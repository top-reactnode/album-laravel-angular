<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', 'PostController@index');
Route::post('/', 'PostController@store');
Route::delete('/{id}', 'PostController@destroy');
Route::get('/like/{id}', 'PostController@like');