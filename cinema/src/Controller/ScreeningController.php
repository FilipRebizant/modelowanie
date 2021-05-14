<?php

namespace App\Controller;

use App\Entity\Screening;
use App\Form\ScreeningType;
use App\Repository\ScreeningRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/screening')]
class ScreeningController extends AbstractController
{
    #[Route('/', name: 'screening_index', methods: ['GET'])]
    public function index(ScreeningRepository $screeningRepository): Response
    {
        return $this->render('screening/index.html.twig', [
            'screenings' => $screeningRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'screening_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $screening = new Screening();
        $form = $this->createForm(ScreeningType::class, $screening);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($screening);
            $entityManager->flush();

            return $this->redirectToRoute('screening_index');
        }

        return $this->render('screening/new.html.twig', [
            'screening' => $screening,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'screening_show', methods: ['GET'])]
    public function show(Screening $screening): Response
    {
        return $this->render('screening/show.html.twig', [
            'screening' => $screening,
        ]);
    }

    #[Route('/{id}/edit', name: 'screening_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Screening $screening): Response
    {
        $form = $this->createForm(ScreeningType::class, $screening);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('screening_index');
        }

        return $this->render('screening/edit.html.twig', [
            'screening' => $screening,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'screening_delete', methods: ['POST'])]
    public function delete(Request $request, Screening $screening): Response
    {
        if ($this->isCsrfTokenValid('delete'.$screening->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($screening);
            $entityManager->flush();
        }

        return $this->redirectToRoute('screening_index');
    }
}
