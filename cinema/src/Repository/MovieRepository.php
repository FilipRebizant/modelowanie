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
        $today = new \DateTimeImmutable();
        $nextWeek = $today->modify("+7 day");

        $today = $today->format('Y-m-d H:i:s');
        $nextWeek = $nextWeek->format('Y-m-d') . ' 23:59:59';

        $res=  $this->createQueryBuilder('m')
            ->innerJoin('m.screenings', 's')
            ->where('s.start_date BETWEEN :today AND :nextWeek')
            ->setParameter('today', $today)
            ->setParameter('nextWeek', $nextWeek)
            ->orderBy('s.start_date', 'ASC')
            ->getQuery()
            ->getResult();
        $test = 1;
        return $res;
    }
}
