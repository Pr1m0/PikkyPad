<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChildController;


Route::get('/children', [ChildController::class, 'index']);
Route::post('/children', [ChildController::class, 'store']);
Route::put('/children/{id}', [ChildController::class, 'update']);
Route::delete('/children/{id}', [ChildController::class, 'destroy']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
