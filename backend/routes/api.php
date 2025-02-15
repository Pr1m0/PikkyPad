<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChildController;
use App\Http\Controllers\AuthController;

Route::get('/children', [ChildController::class, 'index']);
Route::post('/children', [ChildController::class, 'store']);
Route::put('/children/{id}', [ChildController::class, 'update']);
Route::delete('/children/{id}', [ChildController::class, 'destroy']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
