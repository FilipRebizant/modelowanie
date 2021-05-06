#!/usr/bin/env bash

composer install -n
bin/console doctrine:migrations:migrate --no-interaction
bin/console doctrine:fixtures:load --no-interaction
php-fpm -F -R
exec "$@"