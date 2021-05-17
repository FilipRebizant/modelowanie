<?php


namespace App\Controller;

use App\Entity\Movie;
use App\Entity\Screening;
use App\Repository\MovieRepository;
use App\Repository\ScreeningRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index(
        ScreeningRepository $screeningRepository,
        MovieRepository $moviesRepository
    ): Response
    {
        $tempMovies = [];
        $screenings = [];
        $movieSchedule = $moviesRepository->getSchedule();

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

        return $this->render('home/index.html.twig', ['screenings' => $screenings]);
    }
}