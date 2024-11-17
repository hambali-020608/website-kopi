<?php
use Illuminate\Support\Facades\Gate as FacadesGate;
use App\Http\Controllers\CoffeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\CorsMiddleware;
use App\Models\Coffe;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title'=>"Home",
        'coffe'=>Coffe::with(['likes','buys'])->get(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
       
    ]);
})->middleware(CorsMiddleware::class);

Route::post('/add',[CoffeController::class,'store'])->name('coffe.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard',[
        
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/coffe-menu',[CoffeController::class,'AllMenu'])->name('coffe.menu');


Route::get('/blog',[PostController::class,'AllPost'])->middleware(['auth', 'verified'])->name('blog');
Route::get('/blog/{post}',[PostController::class,'SinglePost'] )->middleware(['auth', 'verified']);
Route::post('/delete/{post}',[PostController::class,'DeletePost'])->name('post.delete');

Route::middleware('auth')->group(function () {
    Route::get('/post/{post}',[PostController::class,'editPost']);
    Route::get('/posting',[PostController::class,'PostForm']);
    Route::post('/posting',[PostController::class,'PostStore'])->name('post.store');
    Route::post('/comments',[PostController::class,'commentStore'])->name('comments.store');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/coffe/{coffe}/like',[CoffeController::class,'LikeCoffe'])->name('coffe.like');
});

Route::get('/add-coffe',[CoffeController::class,'PostCoffe'])->name('coffe.post');
Route::post('/add-coffe',[CoffeController::class,'CoffeStore'])->name('coffe.add');

require __DIR__.'/auth.php';
