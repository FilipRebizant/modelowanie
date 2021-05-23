<?php

namespace App\Repository;

use App\Entity\Screening;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Screening|null find($id, $lockMode = null, $lockVersion = null)
 * @method Screening|null findOneBy(array $criteria, array $orderBy = null)
 * @method Screening[]    findAll()
 * @method Screening[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScreeningRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Screening::class);
    }

    /**
     * @return Screening[]
     */
    public function getClosestScreenings(): array
    {
        $currentDate = new \DateTime();
        $from = new \DateTime($currentDate->format('Y-m-d H:i:s'));
        $to = new \DateTime($currentDate->format('Y-m-d') . '23:59:59');
        return $this->createQueryBuilder('s')
            ->andWhere('s.start_date BETWEEN :from AND :to')
            ->setParameters([
                'from' => $from,
                'to' => $to,
            ])
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return Screening[] Returns an array of Screening objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Screening
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
