### Wymagania
* docker
* docker-compose
### Uruchomienie aplikacji
    Należy otworzyć katalog z projektem za pomocą terminala i wpisać komendę:
    "docker-compose up"
    
#### W przypadku problemów przy pierwszym uruchomieniu
    Należy zamknąć proces ctrl/cmd + C i spróbować uruchomić komendę jeszcze raz

#### W przypadku gdy poprzednie rozwiązanie nie zadziłało należy:
* zatrzymać proces ctrl/cmd + c
* zakomentować linie 13 w pliku docker/php-fpm/Dockerfile  - (ENTRYPOINT ["/entrypoint.sh"])
* uruchomić aplikację komendą "docker-compose up"
* wejść na kontener php-fpm komenda: docker-compose exec php-fpm bash
* zaintalować zależności php komendą: composer install
* zainstalować zależności js komendą: npm install
* zbudować paczki komendą: encode --dev

## Entering Application Container
    docker-compose exec php-fpm sh

### PhpMyadmin
    http://localhost:30002/
    user: root
    password: secret


# Usable commands:

## Execute fixtures
    bin/console doctrine:fixtures:load