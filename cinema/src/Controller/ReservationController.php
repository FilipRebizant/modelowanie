<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Entity\Screening;
use App\Form\ReservationType;
use App\Repository\ReservationRepository;
use App\Repository\ScreeningRepository;
use App\Service\ReservationService;
use App\Validator\ReservationValidator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/reservations')]
class ReservationController extends AbstractController
{
    #[Route('/', name: 'reservation_index', methods: ['GET'])]
    public function index(ReservationRepository $reservationRepository): Response
    {
        return $this->render('reservation/index.html.twig', [
            'reservations' => $reservationRepository->findAllGroupByReservationNumber(),
        ]);
    }

    #[Route('/newAsync', name: 'reservation_new_async', methods: ['GET', 'POST'])]
    public function newAsync(Request $request): JsonResponse
    {
        try {
            $screeningId = $request->get('screeningId');
            $reseravtion = $this->getDoctrine()
                ->getRepository(Reservation::class)->findBy([], ['id'=> 'DESC'], 1);
            $reservationNumber = $reseravtion ?  $reseravtion[0]->getReservationNumber() + 1 : 1;
            $validator = new ReservationValidator();
            $validator->validate($request);

            $seats = $request->get('seats');
            $email = $request->get('email');
            $screening = $this->getDoctrine()
                ->getRepository(Screening::class)
                ->find($screeningId);

            $em = $this->getDoctrine()->getManager();

            foreach($seats as $seat)
            {
                $reservation = new Reservation();
                $reservation->setEmail($email);
                $reservation->setScreening($screening);
                $reservation->setReservationNumber($reservationNumber);
                $reservation->setCreatedAt(new \DateTime());
                $reservation->setSeat($seat['seat']);
                $reservation->setRow($seat['row']);

                $em->persist($reservation);
                $em->flush();
            }

            return new JsonResponse(['info' => 'Seats booked successfully'], 200);
        } catch (\Exception $exception) {
            return new JsonResponse(['error' => $exception->getMessage()], 400);
        }

    }

    #[Route('/new', name: 'reservation_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        try {
            $screeningId = $request->get('id');
            $reseravtion = $this->getDoctrine()
                ->getRepository(Reservation::class)->findBy([], ['id'=> 'DESC'], 1);
            $reservationNumber = $reseravtion ?  $reseravtion[0]->getReservationNumber() + 1 : 1;
//            $validator = new ReservationValidator();
//            $validator->validate($request);

            $seats = $request->get('seats');
            $email = $request->get('email');
            $screening = $this->getDoctrine()
                ->getRepository(Screening::class)
                ->find($screeningId);

            $em = $this->getDoctrine()->getManager();

            foreach($seats as $seat)
            {
                $reservation = new Reservation();
                $reservation->setEmail($email);
                $reservation->setScreening($screening);
                $reservation->setReservationNumber($reservationNumber);
                $reservation->setCreatedAt(new \DateTime());
                $reservation->setSeat($seat['seat']);
                $reservation->setRow($seat['row']);

                $em->persist($reservation);
                $em->flush();
            }
            $this->redirectToRoute('reservation_show', [
                'reservation_number' => $reservationNumber,
            ]);
//            return new Response(['info' => 'Seats booked successfully'], 200);
        } catch (\Exception $exception) {
            return new JsonResponse(['error' => $exception->getMessage()], 400);
        }
    }

    #[Route('/{id}', name: 'reservation_show', methods: ['GET'])]
    public function show(Reservation $reservation): Response
    {
        /** @var ReservationRepository $repository */
        $repository = $this->getDoctrine()
            ->getRepository(Reservation::class);
        $reservations = $repository->findByReservationNumber($reservation->getReservationNumber());
        $seats = [];
        $row = $reservation->getRow();
        foreach ($reservations as $reservation) {
            $seats[] = $reservation->getSeat();
        }
        return $this->render('reservation/show.html.twig', [
            'reservation' => $reservation,
            'seats' => $seats,
            'row' => $row,
        ]);
    }

    #[Route('/{id}/edit', name: 'reservation_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Reservation $reservation): Response
    {
        $form = $this->createForm(ReservationType::class, $reservation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('reservation_index');
        }

        return $this->render('reservation/edit.html.twig', [
            'reservation' => $reservation,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'reservation_delete', methods: ['POST'])]
    public function delete(Request $request, Reservation $reservation): Response
    {
        if ($this->isCsrfTokenValid('delete'.$reservation->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($reservation);
            $entityManager->flush();
        }

        return $this->redirectToRoute('reservation_index');
    }

}
