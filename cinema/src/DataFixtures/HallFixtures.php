<?php


namespace App\DataFixtures;


use App\Entity\Hall;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class HallFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 1; $i <= 3; $i++) {
            $hall = new Hall();
            $hall->setHallNumber($i);
            $hall->setNumberOfSeats(mt_rand(5, 10));
            $hall->setNumberOfRows(mt_rand(5, 10));

            $manager->persist($hall);
        }
        $manager->flush();
    }

}