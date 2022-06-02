<?php

namespace App\Command;

use App\Repository\ElasticSearch\ElasticMovieRepository;
use App\Repository\MovieRepository;
use Elastic\Elasticsearch\Client;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class IndexMovies extends Command
{
    protected static $defaultName = "app:initialise:movie-index";
    private MovieRepository $movieRepository;
    private Client $client;

    public function __construct(MovieRepository $movieRepository, Client $client)
    {
        $this->movieRepository = $movieRepository;
        $this->client = $client;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $this->client->indices()->delete(['index' => ElasticMovieRepository::INDEX_NAME]);
        foreach ($this->movieRepository->findAll() as $movie) {
            $screenings = $movie->getScreenings();
            $screeningTimes = [];
            foreach ($screenings as $screening) {
                $screeningTimes[] = $screening->getStartDate();
            }

            $this->client->index([
                'index' => ElasticMovieRepository::INDEX_NAME,
                'body' => [
                    'id' => $movie->getId(),
                    'title' => $movie->getTitle(),
                    'description' => $movie->getDescription(),
                    'production_year' => $movie->getProductionYear(),
                    'rating' => $movie->getRating(),
                    'screening_times' => $screeningTimes,
                ]
            ]);
        }

        return 0;
    }
}
