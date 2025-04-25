<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Child extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'age', 'user_id'];

    protected $appends = ['avatar_url'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function games()
    {
    return $this->belongsToMany(Game::class, 'child_game');
    }
    public function getAvatarUrlAttribute()
{
    return $this->avatar
            ? asset('img/avatars/' . $this->avatar)
            : asset('img/avatars/dog_avatar.jpg');
}

}
