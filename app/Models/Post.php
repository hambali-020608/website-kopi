<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    protected $table='posts';
    protected $with=['category'];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id');
    }
}
