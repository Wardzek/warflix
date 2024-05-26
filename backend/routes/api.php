<?php

use App\Http\Controllers\ProjectController;
use App\Http\Controllers\HobbyController;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::post('/projects', [ProjectController::class, 'store']);
});

Route::middleware('api')->group(function () {
    Route::get('/hobbies', [HobbyController::class, 'index']);
});
