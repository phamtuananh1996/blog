<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'content'=>$faker->paragraph,
        'image'=>$faker->imageUrl($width = 640, $height = 480),
        'author'=>function ()
        {
        	return factory(App\User::class)->create()->id;
        },
        'category_id'=>function ()
        {
        	return factory(App\Category::class)->create()->id;
        }
    ];
});
