<?php

use Illuminate\Support\Facades\Route;
use App\Mail\AllertMail;


Route::get('/teszt-email', function () {
    $content = [
        'title' => 'Teszt email',
        'user' => 'pikkypad@gmail.com',
        'time' => now()
    ];

    Mail::to('pikkypad@gmail.com')->send(new AllertMail($content));

    return 'Teszt email elküldve!';
});
