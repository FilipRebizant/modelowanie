<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    /** @var UserPasswordEncoderInterface  */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $manager->persist($this->createAdmin());
        $manager->persist($this->createStandardUser());
        $manager->flush();
    }

    private function createAdmin(): User
    {
        $user = new User();
        $user->setLogin('admin');
        $user->setEmail('admin@cinema.com');
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'admin'
        ));
        $user->setRoles([
            'ROLE_ADMIN',
        ]);

        return $user;
    }

    private function createStandardUser(): User
    {
        $user = new User();
        $user->setLogin('manager');
        $user->setEmail('manager@cinema.com');
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'manager'
        ));
        $user->setRoles([
            'ROLE_USER',
        ]);

        return $user;
    }
}
