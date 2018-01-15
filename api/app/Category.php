<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
	use SoftDeletes;
	protected $dates=['delete_at'];
    protected $fillable =[
    	'name','parent_id','order','description'
    ];
}
