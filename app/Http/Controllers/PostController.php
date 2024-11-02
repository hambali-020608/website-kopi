<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Auth\Access\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate as FacadesGate;
use Inertia\Inertia;

class PostController extends Controller
{
        public function AllPost(){
            $posts = Post::latest()->get();

    return Inertia::render('Blog', [
        'post' => $posts->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'author'=>$post->author,
                'category'=>$post->category,
                'content' => $post->content,
                'authorAvatar' => $post->author->image ? asset('storage/' . $post->author->image) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png",
            ];
        }),
    ]);
        }

        public function SinglePost(Post $post) {
            $post->comments->transform(function ($comment) {
                $comment->avatar = $comment->author->image 
                ? asset('storage/' . $comment->author->image) 
                : 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png'; // Menggunakan asset untuk mendapatkan URL gambar
            return $comment;
            });
            
             return Inertia::render('SinglePost',[
                'can'=>[
                    'deletePost'=>FacadesGate::allows('delete-post',$post)
                ],
                 'post'=>$post,
                 'comment'=>$post->comments,
                 'commentCount'=>$post->comments->count()
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


    public function PostForm(){
        return Inertia::render('PostingForm');
        }

        public function PostStore(Request $request){
           auth()->user()->post()->create([
            'title'=>$request->title,
            'category_id'=>$request->category,
            'content'=>$request->content,
           ]);
           return redirect()->route('blog')->with('success', 'Post created successfully.');
        }
    public function DeletePost(Post $post){
        if (FacadesGate::denies('delete-post', $post)) {
            return redirect()->back()->with('error', 'You are not authorized to edit this post.');
        }
        $post->delete();
        return redirect('blog');

    }

    public function editPost(Post $post){
        return Inertia::render('EditPost',compact('post'));

    }
    
}
