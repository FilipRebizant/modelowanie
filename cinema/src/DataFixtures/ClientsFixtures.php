<?php


namespace App\DataFixtures;


use App\Entity\Client;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ClientsFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 25; $i++) {
            $client = new Client();
            $client->setEmail("emailAddress$i@email.com");

            $manager->persist($client);
        }
        $manager->flush();
    }
}