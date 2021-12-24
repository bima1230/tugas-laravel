<?php

<<<<<<< HEAD
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\ProdukController;
/*/
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.content');
});

Route::get('produk',[ProdukController::class,'index']);
Route::get('produk/delete/{id}',[ProdukController::class,'destroy']);
=======
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'index']);

Route::get('category', [CategoryController::class, 'index']);
Route::delete('category/delete', [CategoryController::class, 'destroy']);

Route::get('product', [ProductController::class, 'index']);
Route::delete('product/delete', [ProductController::class, 'destroy']);

Route::get('customer', [CustomerController::class, 'index']);
Route::delete('customer/delete', [CustomerController::class, 'destroy']);
>>>>>>> 0884518 (tugas migrasi,_view_dan_delete)
