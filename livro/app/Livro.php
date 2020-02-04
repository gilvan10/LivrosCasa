<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;


class Livro extends Model
{

    use SoftDeletes;
    protected $fillable = ['ds_livro','id_usuario'];
    //protected $dates = ['deleted_at'];


    public static function listaLivros($paginate){

        $listaLivros = DB::table('livros')
            ->join('users','users.id','=','livros.id_usuario')
            ->select('livros.id','livros.de_livro','livros.usuario')
            ->paginate($paginate);

        return $listaLivros;
    }
}
