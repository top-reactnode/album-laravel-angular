<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Post;

class PostController extends Controller
{
    public function index() {
        return Post::all();
    }

    public function store(Request $request) {
        $post = new Post();
        
        $path = $request->file('file')->store('images', 'public');

        $post->name      = $request->name;
        $post->email     = $request->email;
        $post->title    = $request->title;
        $post->subtitle = $request->subtitle;
        $post->message  = $request->message;
        $post->file   = $path;
        $post->likes     = 0;

        $post->save();
        
        return response($post, 200);
    }

    public function destroy($id) {
        $post = Post::find($id);
        if (isset($post)) {
            Storage::disk('public')->delete($post->file);
            $post->delete();
            return 204;
        }
        return response('Post not found', 404);
    }

    public function like($id) {
        $post = Post::find($id);
        if (isset($post)) {
            $post->likes++;
            $post->save();
            return $post;
        }
        return response('ID not found', 404);
    }

}
