<?php

namespace App\Repository;

use App\Entity\Reservation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Reservation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reservation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reservation[]    findAll()
 * @method Reservation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Reservation::class);
    }

    /**
      * @return Reservation[] Returns an array of Reservation objects
    */
    public function findByReservationNumber($reservationNumber)
    {
        return $this->createQueryBuilder('r')
            ->where('r.reservationNumber = :reservation_number')
            ->setParameter('reservation_number', $reservationNumber)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * @return Reservation[] Returns an array of Reservation objects
     */
    public function findAllGroupByReservationNumber()
    {
        return $this->createQueryBuilder('r')
            ->select('r.reservationNumber, MIN(r.id) as id')
            ->addGroupBy('r.reservationNumber')
            ->getQuery()
            ->getResult()
            ;
    }

}
