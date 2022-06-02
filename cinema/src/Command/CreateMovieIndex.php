<?php

namespace App\Command;

use App\Repository\ElasticSearch\ElasticMovieRepository;
use App\Repository\MovieRepository;
use Elastic\Elasticsearch\ClientBuilder;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class CreateMovieIndex extends Command
{
    protected static $defaultName = "app:create:movie-index";

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $client = ClientBuilder::create()
            ->setHosts(['elasticsearch:9200'])
            ->build();

        $client->indices()->create([
            'index' => ElasticMovieRepository::INDEX_NAME,
            'body' => [
                'settings' => [
                    'number_of_shards' => 2,
                    'number_of_replicas' => 3,
                ]
            ],
        ]);

        return 0;
    }
}
