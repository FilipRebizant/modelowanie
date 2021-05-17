<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 */
class Reservation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reservationNumber;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer")
     */
    private $seat;

    /**
     * @ORM\Column(type="integer", name="row_seat")
     */
    private $row;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Screening", inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $screening;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReservationNumber(): ?string
    {
        return $this->reservationNumber;
    }

    public function setReservationNumber(string $reservationNumber): self
    {
        $this->reservationNumber = $reservationNumber;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param mixed $createdAt
     */
    public function setCreatedAt($createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getClientId(): ?Client
    {
        return $this->client_id;
    }

    public function setClientId(?Client $client_id): self
    {
        $this->client_id = $client_id;

        return $this;
    }

    public function setSeat(int $seat): self
    {
        $this->seat = $seat;

        return $this;
    }

    public function setRow(int $row): self
    {
        $this->row = $row;

        return $this;
    }

    public function __toString()
    {
        return (string) $this->id;
    }

    public function getSeat()
    {
        return $this->seat;
    }

    public function getRow()
    {
        return $this->row;
    }

    public function getScreening(): ?Screening
    {
        return $this->screening;
    }

    public function setScreening(?Screening $screening): self
    {
        $this->screening = $screening;

        return $this;
    }

}
