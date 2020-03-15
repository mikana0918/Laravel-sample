<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //今後、パスワードは平分で保存しない
        $dataSet = [
            ['name' => 'user1', 'email' => 'user1@user.com', 'password' => 'secret'],
            ['name' => 'user2', 'email' => 'user2@user.com', 'password' => 'secret'],
            ['name' => 'user3', 'email' => 'user3@user.com', 'password' => 'secret'],
            ['name' => 'user4', 'email' => 'user4@user.com', 'password' => 'secret'],
            ['name' => 'user5', 'email' => 'user5@user.com', 'password' => 'secret'],
            ['name' => 'user6', 'email' => 'user6@user.com', 'password' => 'secret'],
            ['name' => 'user7', 'email' => 'user7@user.com', 'password' => 'secret'],
            ['name' => 'user8', 'email' => 'user8@user.com', 'password' => 'secret'],
            ['name' => 'user9', 'email' => 'user9@user.com', 'password' => 'secret'],
            ['name' => 'user10', 'email' => 'user10@user.com', 'password' => 'secret']
        ];

        foreach ($dataSet as $data) {
            factory(App\User::class)->create($data);
        }
    }
}
