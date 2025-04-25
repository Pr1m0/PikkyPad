<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Game extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'category'
    ];

    protected $appends = ['image_url','puzzle_image_url'];



    public function children()
    {
    return $this->belongsToMany(Child::class, 'child_game');
    }

    public function getImageUrlAttribute()
    {
        return $this->image
            ? asset('storage/img/games/' . $this->image)
            : null;
    }

    public function getPuzzleImageUrlAttribute()
    {
    return asset('/img/games/puzzle/lionpuzzle.jpg');
    }


}
