<?php


namespace App\Service;


use App\Entity\Movie;
use App\Entity\Screening;
use App\Repository\MovieRepository;

class ScreeningService
{
    /** @var MovieRepository  */
    private $movieRepository;

    public function __construct(MovieRepository $movieRepository)
    {
        $this->movieRepository = $movieRepository;
    }

    public function getCurrentScreenings()
    {
        $tempMovies = [];
        $screenings = [];
        $movieSchedule = $this->movieRepository->getSchedule();

        /** @var Movie $movie */
        foreach ($movieSchedule as $movie) {
            /** @var Screening $screening */
            foreach ($movie->getScreenings() as $screening) {

                if (array_key_exists($screening->getStartDate()->format('Y-m-d'), $screenings)) {
                    if (!in_array($movie, $screenings[$screening->getStartDate()->format('Y-m-d')])) {
                        $screenings[$screening->getStartDate()->format('Y-m-d')][] = $movie;
                    }
                } else {
                    $screenings[$screening->getStartDate()->format('Y-m-d')][] = $movie;
                }

                array_push($tempMovies, $movie);
            }

        }
        ksort($screenings); // Fix order of days

        return $screenings;
    }
}