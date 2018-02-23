<?php

namespace App\Http\Controllers\Category;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
class CategoryPostController extends Controller
{
    public function index(Category $category)
    {
    	$posts=$category->post;
    	return response()->json(['posts'=>$posts,'category'=>$category],200);
    }
}
