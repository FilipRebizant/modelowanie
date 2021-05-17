<?php

namespace App\Repository;

use App\Entity\Movie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Movie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Movie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Movie[]    findAll()
 * @method Movie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MovieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Movie::class);
    }

    public function getSchedule()
    {
        $date = date('Y-m-d h:i:s', strtotime("+7 days"));

        return $this->createQueryBuilder('m')
            ->innerJoin('m.screenings', 's')
            ->where('s.start_date BETWEEN :today AND :n30days')
            ->setParameter('today', date('Y-m-d h:i:s'))
            ->setParameter('n30days', $date)
            ->orderBy('s.start_date', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
