<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Child;  

class ChildController extends Controller
{
   
    public function child_query(Request $request)
    {
        $user = auth()->user();

        // Admin minden gyereket lát
        if ($user->role === 'admin') {
            $children = Child::with('user:id,name')->get();
        } else {
            // Szülő csak a saját gyerekeit láthatja
            $children = $user->children()->with('user:id,name')->get();
        }

        return response()->json([
            'success' => true,
            'data' => $children,
            'message' => 'Gyermekek sikeresen lekérdezve.'
        ], 200);
    }

    /**
     * 🔹 Új gyermek hozzáadása a bejelentkezett felhasználóhoz.
     */
    public function add_child(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'age' => 'required|integer|min:0'
        ]);

        $user = auth()->user();

        $child = Child::create([
            'name' => $request->name,
            'age' => $request->age,
            'user_id' => $user->id
        ]);

        return response()->json([
            'success' => true,
            'data' => $child,
            'message' => 'Gyermek sikeresen létrehozva!'
        ], 201);
    }

    /**
     * 🔹 Gyermek adatainak módosítása
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string',
            'age' => 'sometimes|required|integer|min:0'
        ]);

        $user = auth()->user();
        $child = Child::findOrFail($id);

        // Csak a saját gyerekét módosíthatja a szülő, admin mindenkit
        if ($user->id !== $child->user_id && $user->role !== 'admin') {
            return response()->json(['success' => false, 'message' => 'Hozzáférés megtagadva'], 403);
        }

        $child->update($request->only('name', 'age'));

        return response()->json([
            'success' => true,
            'data' => $child,
            'message' => 'Gyermek frissítve.'
        ], 200);
    }

    /**
     * 🔹 Gyermek törlése
     */
    public function destroy(Request $request, $id)
    {
        $user = auth()->user();
        $child = Child::findOrFail($id);

        // Csak a saját gyerekét törölheti a szülő, admin mindenkit
        if ($user->id !== $child->user_id && $user->role !== 'admin') {
            return response()->json(['success' => false, 'message' => 'Hozzáférés megtagadva'], 403);
        }

        $child->delete();

        return response()->json([
            'success' => true,
            'message' => 'Gyermek törölve.'
        ], 200);
    }
}
