<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Statistics;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatisticsControler extends Controller
{
    public function get_statistics()
    {
        $statistics = Statistics::all();

        return response()->json([
            'success' => true,
            'data' => $statistics,
            'message' => 'Statisztikák sikeresen lekérdezve.'
        ], 200);
    }

    public function save_statistics(Request $request)
{
    $request->validate([
        'game_id' => 'required|exists:games,id',
        'child_id' => 'required|exists:children,id', 
        'score' => 'required|integer',
        'play_time' => 'required|integer'
    ]);

    $statistic = Statistics::create($request->all());

    return response()->json([
        'success' => true,
        'data' => $statistic,
        'message' => 'Statisztikai adat mentve.'
    ], 201);
}
public function userStatistics(Request $request)
{
    $user = Auth::user();

    if (!$user) {
        return response()->json([
            'success' => false,
            'message' => 'Nincs bejelentkezett felhasználó.'
        ], 401);
    }

    
    $statistics = Statistics::whereIn('child_id', $user->children()->pluck('id'))->get();

    return response()->json([
        'success' => true,
        'data' => $statistics,
        'message' => 'Felhasználó gyermekeinek statisztikái sikeresen lekérdezve.'
    ], 200);
}
}
