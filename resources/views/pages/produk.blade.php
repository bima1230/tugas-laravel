@extends('adminapp.master')

@section('adminapp.content')
<section class="content">
  <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">produk</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
        <div class="container-fluid">
          <!-- Small boxes (Stat box) -->
            <table class="table"> 
                <tr>
                    <td>no</td>
                    <td>nama</td>
                    <td>harga</td>
                    <td>jumlah</td>
                    <td>aksi</td>
                </tr>
                @foreach ($data as $item)
                <tr>
                    <td>{{$loop->iteration}}</td>
                    <td>{{$item->nama}}</td>
                    <td>{{$item->harga}}</td>
                    <td>{{$item->jumlah}}</td>
                    <td><a href="produk/delete/{{$item->id}}" class="btn btn-danger">hapus</a></td>
                </tr>
                @endforeach
               
            </table>
        </div><!-- /.container-fluid -->
      </section>
      
@endsection
