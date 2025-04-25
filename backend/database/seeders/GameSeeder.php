<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Game;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Game::insert([
            [
                'title' => 'Memória játék',
                'description' => 'Párok megtalálása! A játék fejleszti a vizuális memóriát és a megfigyelőképességet.',
                'category' => 'Memória',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Puzzle játék',
                'description' => 'Kép kirakása! Ez a kirakós játék logikai gondolkodásra és formafelismerésre ösztönöz.',
                'category' => 'Logika',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Színező játék',
                'description' => 'Színek kiválasztása, formák színezése. Támogatja a kéz-szem koordinációt és a színfelismerést.',
                'category' => 'Kreatív',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
