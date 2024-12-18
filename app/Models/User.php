<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'image'
    ];
    protected $with=['coffe'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    
    public function getAvatarUrlAttribute() {; // Menggunakan asset untuk mendapatkan URL gambar
        return $this->image ? asset('storage/' . $this->image) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";
        
    }
    public function coffe():BelongsToMany
{
    return $this->belongsToMany(Coffe::class, 'buys')->withPivot('quantity');
}
public function likes():BelongsToMany{
    return $this -> belongsToMany(Coffe::class,'likes','user_id','coffe_id');
}
}
