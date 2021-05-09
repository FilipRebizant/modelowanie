FROM thecodingmachine/php:8.0-v4-fpm-node14
USER root
COPY ./docker/php/wait-for-it.sh /usr/bin/wait-for-it.sh
RUN chmod 755 /usr/bin/wait-for-it.sh
#RUN apk --update --no-cache add git bash
#RUN docker-php-ext-install pdo_mysql
COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY ./docker/php/entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh
WORKDIR /var/www

ENTRYPOINT ["/entrypoint.sh"]

USER docker
