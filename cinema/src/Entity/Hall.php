<?php

namespace App\Entity;

use App\Repository\HallRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HallRepository::class)
 */
class Hall
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberOfRows;

    /**
     * @ORM\Column(type="integer")
     */
    private $numberOfSeats;

    /**
     * @ORM\Column(type="integer")
     */
    private $hallNumber;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumberOfRows(): ?int
    {
        return $this->numberOfRows;
    }

    public function setNumberOfRows(int $numberOfRows): self
    {
        $this->numberOfRows = $numberOfRows;

        return $this;
    }

    public function getNumberOfSeats(): ?int
    {
        return $this->numberOfSeats;
    }

    public function setNumberOfSeats(int $numberOfSeats): self
    {
        $this->numberOfSeats = $numberOfSeats;

        return $this;
    }

    public function getHallNumber(): ?int
    {
        return $this->hallNumber;
    }

    public function setHallNumber(int $hallNumber): self
    {
        $this->hallNumber = $hallNumber;

        return $this;
    }
}
