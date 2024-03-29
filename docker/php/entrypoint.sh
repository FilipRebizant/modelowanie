#!/usr/bin/env bash

composer install -n
npm install
encore --dev
php bin/console doctrine:migrations:migrate --no-interaction
php-fpm -F -R
exec "$@"