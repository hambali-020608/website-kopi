<?php

namespace App\Http\Controllers;

use App\Models\Coffe;
use Illuminate\Container\Attributes\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;

use function PHPUnit\Framework\returnSelf;

class CoffeController extends Controller
{
    public function store(Request $request)
{
    $user = auth()->user();
    $coffeeId = $request->input('coffe_id');
    $quantity = $request->input('quantity', 1);

    // Tambah atau update quantity di tabel membeli
    $user->coffe()->syncWithoutDetaching([
        $coffeeId => ['quantity' => FacadesDB::raw("quantity + $quantity")]
    ]);

    return response()->json(['success' => true]);
}

public function AllMenu(){
    $coffe=Coffe::all();
    $topCoffees = Coffe::withCount(['buys as total_purchases' => function ($query) {
        $query->select(FacadesDB::raw("SUM(quantity)"));
    }])
    ->orderByDesc('total_purchases')
    ->take(2) // Misalnya, ambil 2 kopi teratas
    ->get();

    $topLikeCoffes=Coffe::withCount(['likes as like'])
    ->orderByDesc('like')
    ->take(5)
    ->get();
    
    return Inertia::render('Menu',[
        'coffe'=>$coffe,
        'topCoffe'=>$topCoffees,
        'topLikeCoffe'=>$topLikeCoffes
    ]);


    

}
public function LikeCoffe(Coffe $coffe){
    if(!$coffe->likes()->where('user_id',auth()->user())->exists()){
        $coffe->likes()->attach(auth()->id());
    }
return redirect()->back();
}

public function PostCoffe(){
    return Inertia::render('AddCoffe');
}

public function CoffeStore(Request $request){
    
    Coffe::create([
        'name'=>$request->name,
        'price'=>$request->price,
        'category_id'=>$request->category,
    ]);
    return redirect()->route('coffe.menu');

}

}
