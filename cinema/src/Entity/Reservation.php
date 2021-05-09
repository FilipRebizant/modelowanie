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
     * @ORM\Column(type="string", length=200, nullable=true)
     * @ORM\JoinColumn(nullable=false)
     */
    private $reservationNumber;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createTime;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="reservation_id")
     */
    private $client_id;

    /**
     * @ORM\ManyToOne(targetEntity=Hall::class, inversedBy="reservation_id")
     */
    private $hall_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReservationNumber(): ?string
    {
        return $this->reservationNumber;
    }

    public function setReservationNumber(?string $reservationNumber): self
    {
        $this->reservationNumber = $reservationNumber;

        return $this;
    }

    public function getScreening(): ?Hall
    {
        return $this->screening;
    }

    public function setScreening(?Hall $screening): self
    {
        $this->screening = $screening;

        return $this;
    }

    public function getCreateTime(): ?\DateTimeInterface
    {
        return $this->createTime;
    }

    public function setCreateTime(\DateTimeInterface $createTime): self
    {
        $this->createTime = $createTime;

        return $this;
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

    public function getHallId(): ?Hall
    {
        return $this->hall_id;
    }

    public function setHallId(?Hall $hall_id): self
    {
        $this->hall_id = $hall_id;

        return $this;
    }
}
