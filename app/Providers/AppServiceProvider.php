<?php

namespace App\Providers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Inertia::share('flash', function () {
            return [
                'success' => session('success'),
            ];
        });
        Gate::define('update-post', function (User $user, Post $post) {
            // Admin bisa mengedit semua post, user biasa hanya post miliknya
            return $user->role === 'admin' || $user->id === $post->author_id;
        });
    
        Gate::define('delete-post', function (User $user, Post $post) {
            // Admin bisa menghapus semua post, user biasa hanya post miliknya
            return $user->role === 'admin' || $user->id === $post->author_id;
        });
    }
}
