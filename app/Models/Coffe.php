<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Coffe extends Model
{
    protected $fillable=['name','category_id','price'];
    protected $with=['buys'];
 
  
    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id');
    }
    public function user():BelongsToMany
{
    return $this->belongsToMany(User::class, 'buys');
}
public function buys()
{
    return $this->hasMany(Buy::class);
}

public function likes():BelongsToMany{
    return $this -> belongsToMany(User::class,'likes','coffe_id','user_id');
}


}
