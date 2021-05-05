## Entering Application Container
    docker-compose exec php-fpm sh

### PhpMyadmin
    http://localhost:30002/
    user: root
    password: secret


# Usable commands:

## Execute fixtures
    bin/console doctrine:fixtures:load