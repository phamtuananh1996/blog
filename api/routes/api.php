<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('users', 'User\UserController',['except'=>['create','edit']]);

Route::resource('categories', 'Category\CategoryController',['except'=>['create','edit']]);

Route::resource('posts', 'Post\PostController',['except'=>['create','edit']]);

Route::resource('posts/filter/{filter}/{amount}', 'Post\PostFilterController',['only'=>'index']);

Route::resource('category.posts', 'Category\CategoryPostController',['only'=>'index']);