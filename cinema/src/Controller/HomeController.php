<?php


namespace App\Controller;

use App\Entity\Movie;
use App\Entity\Screening;
use App\Repository\MovieRepository;
use App\Repository\ScreeningRepository;
use App\Service\ReservationService;
use App\Service\ScreeningService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /** @var MovieRepository  */
    private $movieRepository;

    /**
     * @var ScreeningRepository
     */
    private $screeningRepository;

    public function __construct(MovieRepository $movieRepository, ScreeningRepository $screeningRepository)
    {
        $this->movieRepository = $movieRepository;
        $this->screeningRepository = $screeningRepository;
    }

    /**
     * @Route("/", name="homepage")
     */
    public function index(): Response
    {
        $screeningService = new ScreeningService($this->movieRepository);
        $screenings = $screeningService->getCurrentScreenings();
        $now = new \DateTime();
        return $this->render('home/index.html.twig', [
            'screenings' => $screenings,
            'availableScreenings' => [],
            'now' => $now->format('Y-m-d H:i:s'),
        ]);
    }

    #[Route('/new_quick', name: 'reservation_new_quick', methods: ['GET|POST'])]
    public function newQuickReservation(Request $request): Response
    {
        $reservationService = new ReservationService($this->screeningRepository);
        $availableScreenings = $reservationService->getAvailableScreenings($request);

        $screeningService = new ScreeningService($this->movieRepository);
        $screenings = $screeningService->getCurrentScreenings();
        $now = new \DateTime();
        if (count($availableScreenings) === 0) {
            $this->addFlash('danger', 'No available screenings for given criterias.');
        }

        return $this->render('home/index.html.twig', [
            'screenings' => $screenings,
            'availableScreenings' => $availableScreenings,
            'now' => $now->format('Y-m-d H:i:s'),
        ]);
    }

}