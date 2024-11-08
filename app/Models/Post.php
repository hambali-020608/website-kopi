<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    protected $table='posts';
    protected $fillable =['title','category_id','author_id','content'];
    protected $with=['category','author',''];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    public function author():BelongsTo
    {
            return $this->belongsTo(User::class,'author_id');
    }

    public function comments():HasMany
    {
        return $this->hasMany(Comment::class,'post_id');
    }
}
