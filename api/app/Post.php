<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Post extends Model
{
	use SoftDeletes;
	const HOT=false;
	protected $dates=['delete_at'];
    protected $fillable =[
    	'title','content','image','views','hot','order'
    ];
    public function isHot()
    {
    	return $this->hot===Post::HOT;
    }
}
