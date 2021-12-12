<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\UserController;

// public api
Route::post('/contact',[ContactController::class,'contact']);
Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::get('/redirect',[PaymentController::class,'redirect']);
Route::get('/instamojo/{user_id}/{pro_id}/{name}/{purpose}/{amount}/{phone}/{email}',[PaymentController::class,'instamojo']);
Route::get('/TechSy/{pid}/{status}',[PaymentController::class,'paymentStore']);




// Route::get('/submit',[PaymentController::class,'submit']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
