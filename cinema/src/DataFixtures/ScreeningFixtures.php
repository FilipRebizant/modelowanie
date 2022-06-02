<?php


namespace App\DataFixtures;


use App\Entity\Screening;
use App\Repository\HallRepository;
use App\Repository\MovieRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ScreeningFixtures extends Fixture
{
    private $hallRepository;

    private $movieRepository;

    public function __construct(HallRepository $hallRepository, MovieRepository $movieRepository)
    {
        $this->hallRepository = $hallRepository;
        $this->movieRepository = $movieRepository;
    }

    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager)
    {
        $halls = $this->hallRepository->findAll();
        $movies = $this->movieRepository->findAll();
        for ($i = 0; $i < 20; $i++) {

            $screening = new Screening();
            $screening->setHall($halls[mt_rand(0, count($halls) - 1)]);
            $screening->addMovie($movies[mt_rand(0, count($movies) - 1)]);
            $screening->setPrice(mt_rand(5, 20));
            $date = new \DateTime(sprintf("%s days", random_int(0, 6)));
            $date->setTime(mt_rand(12, 20), '0');
            $screening->setStartDate($date);

            $manager->persist($screening);
        }
        $manager->flush();
    }

    private function getScreeningMinutes(): array
    {
        return [
            '12:00:00',
            '15:00:00',
            '18:30:00',
            '20:00:00'
        ];
    }
}