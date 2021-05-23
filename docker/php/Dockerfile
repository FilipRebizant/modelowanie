FROM thecodingmachine/php:8.0-v4-fpm-node14
USER root
COPY ./docker/php/wait-for-it.sh /usr/bin/wait-for-it.sh
RUN chmod 755 /usr/bin/wait-for-it.sh

RUN npm install -g npm

COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY ./docker/php/entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh
WORKDIR /var/www

ENTRYPOINT ["/entrypoint.sh"]

USER docker
