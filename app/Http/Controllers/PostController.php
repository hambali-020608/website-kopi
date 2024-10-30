<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
        public function AllPost(){
            return Inertia::render('Blog',[
                'post'=>Post::all()
            ]);
        }

        public function SinglePost(Post $post) {
            $post->load('comments.author');
            
             return Inertia::render('SinglePost',[
         
                 'post'=>$post,
                 'comment'=>$post->comments
             ]);
         }

        public function commentStore(Request $request){
            Comment::create([
                'comment'=>$request->comment,
                'author_id'=>auth()->id(),
                'post_id'=>$request->posting,
            ]);
            
            return redirect()->back()->with('success', 'Komentar berhasil ditambahkan.');
        }
}
