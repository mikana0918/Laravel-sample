# docker-laravel

Build Laravel's development environment using docker.
PHP7.4/MySQL8.0/nginx/redis/node

## commands if you need
docker-compose up -d  
docker-compose exec {container} ash  
(i.e)docker-compose exec app ash && composer install


## About environment

ref: https://qiita.com/ucan-lab/items/17c806973e69792ada99

## Features

Social Authentication using Laravel Socialite  
Broadcasting using pusher/pusher-php-server  

## Build

- [Build for Mac](https://github.com/ucan-lab/docker-laravel/wiki/Build-for-Mac)
- [Build for Windows](https://github.com/ucan-lab/docker-laravel/wiki/Build-for-Windows)
