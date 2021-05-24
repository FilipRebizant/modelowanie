<?php


namespace App\DataFixtures;


use App\Entity\Movie;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class MovieFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {
            $movie = new Movie();
            $movie->setTitle($this->getMovies()[$i]);
            $movie->setDescription('
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et tellus vitae est lacinia 
            pharetra non eu felis. Nullam consectetur dui nec tortor laoreet, et lobortis ligula maximus.'
            );
            $movie->setProductionYear(mt_rand(2000, 2022));
            $movie->setRating(mt_rand(1, 10));

            $manager->persist($movie);
        }
        $manager->flush();
    }

    private function getMovies(): array
    {
        return [
            'Sound of Metal',
            'Wonder Woman',
            '21 Jump Street',
            'Kingsman',
            'Forrest Gump',
            'Inception',
            'The Lord of the Rings: The Fellowship of the Ring',
            'The Lord of the Rings: The Two Towers',
            'Matrix',
            'The Dark Knight',
        ];
    }


}