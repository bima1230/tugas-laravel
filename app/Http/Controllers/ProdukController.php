<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product; 

class ProdukController extends Controller
{
    public function index()
    {
      $data=Product::get();
      return view('pages.produk',compact('data'));
    }

    public function destroy($id)
    {
      Product::where('id', $id)->delete();
      
      return redirect()->back();
    }
}
