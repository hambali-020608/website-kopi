<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;
    protected $fillable=['comment','author_id','post_id'];


    public function post():BelongsTo{
        return $this->belongsTo(Post::class,'post_id');
    }
    public function author():BelongsTo
    {
        return $this->belongsTo(User::class,'author_id');
    }
}
