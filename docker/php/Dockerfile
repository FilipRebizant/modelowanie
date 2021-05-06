#FROM php:fpm-alpine
FROM thecodingmachine/php:8.0-v4-fpm-node14
USER root
COPY ./docker/php/wait-for-it.sh /usr/bin/wait-for-it.sh
RUN chmod +x /usr/bin/wait-for-it.sh
#RUN apk --update --no-cache add git bash
#RUN docker-php-ext-install pdo_mysql
COPY --from=composer /usr/bin/composer /usr/bin/composer
COPY ./docker/php/entrypoint.sh /entrypoint.sh
WORKDIR /var/www



#RUN apt-get update && \
#    apt-get install -y --no-install-recommends gnupg && \
#    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
#    apt-get update && \
#    apt-get install -y --no-install-recommends nodejs && \
#    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
#    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
#    apt-get update && \
#    apt-get install -y --no-install-recommends yarn && \
#    npm install -g npm

#RUN pecl install xdebug && docker-php-ext-enable xdebug

ENTRYPOINT ["/entrypoint.sh"]

USER docker
