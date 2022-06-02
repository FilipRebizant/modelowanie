<?php

declare(strict_types=1);

namespace App\Repository\ElasticSearch;

use DateTime;

class ElasticMovieRepository extends AbstractElasticRepository
{
    public const INDEX_NAME = 'movies';
    public const FILTER_BY_TITLE = 'title';
    public const FILTER_BY_DESCRIPTION = 'description';

    public function getMovies(string $query): array
    {
        if ($query) {
            $filter = [
                'multi_match' => [
                    'query' => $query,
                    'fields' => ['title', 'description'],
                ]
            ];
        } else {
            $filter = [
                'match_all' => new \stdClass()
            ];
        }

        return $this->prepareResponse(
            $this->search($filter, self::INDEX_NAME)
        );
    }

    public function getMoviesInDateRange(DateTime $from, DateTime $to): array
    {
        $query = [
            "query" => [
                "range" => [
                    'screening_time' => [
                        "gte" => $from->format('Y-m-d H:i'),
                        "lte" => $to->format('Y-m-d H:i'),
                        "format" => "yyyy-MM-dd HH:mm",
                    ]
                ]
            ]
        ];

        $queryResults = $this->search($query, self::INDEX_NAME);

        return $this->prepareResponse($queryResults);
    }

    public function prepareResponse($queryResults): array
    {
        if (!isset($queryResults['hits'])) {
            return [];
        }

        $results = [];
        foreach ($queryResults['hits']['hits'] as $result) {
            $results[] = [
                'title' => $result['_source']['title'],
                'description' => $result['_source']['description'],
                'screeningTime' => $result['_source']['screening_times'],
                'productionYear' => $result['_source']['production_year'],
                'rating' => $result['_source']['rating'],
            ];
        }

        return $results;
    }
}


/*
 *
 * Query - wyszukiwanie na podstawie liczenia "relavence"
 *
 * Filter - wyszukiwanie samego wystapienia słowa
 *
 * Term - tylko słowa kluczowe - szukane bez analizatora
    zastosownanie - daty, enumy

Match - wyszukiwanie z użyciem analizatora



*/