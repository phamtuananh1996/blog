<?php

namespace App;
use App\Category;
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

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function isHot()
    {
    	return $this->hot===Post::HOT;
    }

}
