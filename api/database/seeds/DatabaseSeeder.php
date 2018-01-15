<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       	factory(App\User::class,20)->create();
       	factory(App\Post::class,20)->create();
       	factory(App\Category::class,10)->create();
    }
}
