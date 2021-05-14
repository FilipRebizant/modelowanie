<?php

namespace App\Entity;

use App\Repository\HallRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    /**
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="hall_id")
     */
    private $reservation_id;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
        $this->reservation_id = new ArrayCollection();
    }

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

    /**
     * @return Collection|Reservation[]
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setScreening($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getScreening() === $this) {
                $reservation->setScreening(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Reservation[]
     */
    public function getReservationId(): Collection
    {
        return $this->reservation_id;
    }

    public function addReservationId(Reservation $reservationId): self
    {
        if (!$this->reservation_id->contains($reservationId)) {
            $this->reservation_id[] = $reservationId;
            $reservationId->setHallId($this);
        }

        return $this;
    }

    public function removeReservationId(Reservation $reservationId): self
    {
        if ($this->reservation_id->removeElement($reservationId)) {
            // set the owning side to null (unless already changed)
            if ($reservationId->getHallId() === $this) {
                $reservationId->setHallId(null);
            }
        }

        return $this;
    }
}
