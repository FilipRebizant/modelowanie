FROM thecodingmachine/php:8.0-v4-fpm-node14
USER root
COPY ./docker/php/wait-for-it.sh /usr/bin/wait-for-it.sh
RUN chmod +x /usr/bin/wait-for-it.sh
COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY ./docker/php/entrypoint.sh /entrypoint.sh
WORKDIR /var/www

ENTRYPOINT ["/entrypoint.sh"]

USER docker
