<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Child;  

class ChildController extends Controller
{
   
    //  public function index(Request $request)
    //  {
        
    //     $user = $request->user();
    //      $children = $user->children;  
    //      return response()->json(['success' => true, 'data' => $children, 'message' => 'Gyermekek lekérdezve'], 200);
    //  }
    
    public function child_query (Request $request)
{
    // Teszthez bejelentkezés ellenőrzése
    if (!$request->user()) {
        return response()->json([
            'success' => false,
            'message' => 'Hiba: Nincs bejelentkezett felhasználó.'
        ], 401);
    }

    // Ellenőrizzük, hogy auth() működik-e
    $user = auth()->user();
    if (!$user) {
        return response()->json([
            'success' => false,
            'message' => 'Hiba: A felhasználó nem található.'
        ], 401);
    }

    // Gyermekek lekérdezése
    $children = $user->children;
    return response()->json([
        'success' => true,
        'data' => $children,
        'message' => 'Gyermekek sikeresen lekérdezve.'
    ], 200);
}

    
    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required|string',
    //         'age' => 'required|integer|min:0'
    //     ]);

       
    //     $child = Child::create([
    //         'name' => $request->name,
    //         'age' => $request->age,
    //         'user_id' => $request->user()->id
    //     ]);

    //     return response()->json(['success' => true, 'data' => $child, 'message' => 'Gyermek létrehozva'], 201);
    // }

    public function add_child(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'age' => 'required|integer|min:0'
    ]);

    // Teszthez bejelentkezés ellenőrzése
    if (!$request->user()) {
        return response()->json([
            'success' => false,
            'message' => 'Hiba: Nincs bejelentkezett felhasználó.'
        ], 401);
    }

    $user = auth()->user();
    if (!$user) {
        return response()->json([
            'success' => false,
            'message' => 'Hiba: A felhasználó nem található.'
        ], 401);
    }

    // Gyermek mentése
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


       public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string',
            'age' => 'sometimes|required|integer|min:0'
        ]);

        $child = Child::findOrFail($id);

        if ($request->user()->id !== $child->user_id) {
            return response()->json(['success' => false, 'message' => 'Hozzáférés megtagadva'], 403);
        }

        $child->update($request->only('name', 'age'));

        return response()->json(['success' => true, 'data' => $child, 'message' => 'Gyermek frissítve'], 200);
    }

    
    public function destroy(Request $request, $id)
    {
        $child = Child::findOrFail($id);

        
        if ($request->user()->id !== $child->user_id) {
            return response()->json(['success' => false, 'message' => 'Hozzáférés megtagadva'], 403);
        }

        $child->delete();

        return response()->json(['success' => true, 'message' => 'Gyermek törölve'], 200);
    }
}
