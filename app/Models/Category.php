<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $table='categories';
    public function Post():HasMany
    {
        return $this->hasMany(Post::class,'category_id');
    }
}
