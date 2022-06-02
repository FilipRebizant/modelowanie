<?php

namespace App\Repository\ElasticSearch;

use Elastic\Elasticsearch\Client;
use \Elastic\Elasticsearch\Response\Elasticsearch;

class AbstractElasticRepository
{
    protected Client $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    protected function search(array $query, string $index): Elasticsearch
    {
        $params = [
            'index' => $index,
            'body' => [
                'query' => $query
            ],
        ];

        return $this->client->search($params);
    }
}
