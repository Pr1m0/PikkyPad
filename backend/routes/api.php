<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ChildController;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\StatisticsControler;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/children', [ChildController::class, 'child_query']);
Route::post('/children', [ChildController::class, 'add_child']);
Route::put('/children/{id}', [ChildController::class, 'update']);
Route::delete('/children/{id}', [ChildController::class, 'destroy']);

Route::get('/games', [GameController::class, 'game_query']);
Route::post('/games', [GameController::class, 'add_game']);
Route::put('/games/{id}', [GameController::class, 'update']);
Route::delete('/games/{id}', [GameController::class, 'destroy']);

Route::get('/statistics', [StatisticsControler::class, 'get_statistics']);
Route::post('/statistics', [StatisticsControler::class, 'save_statistics']);
Route::get('/user/statistics', [StatisticsControler::class, 'userStatistics']);

});


