<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ClientRepository::class)
 */
class Client
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
    private $email;

    /**
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="client_id")
     */
    private $reservation_id;

    public function __construct()
    {
        $this->reservation_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

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
            $reservationId->setClientId($this);
        }

        return $this;
    }

    public function removeReservationId(Reservation $reservationId): self
    {
        if ($this->reservation_id->removeElement($reservationId)) {
            // set the owning side to null (unless already changed)
            if ($reservationId->getClientId() === $this) {
                $reservationId->setClientId(null);
            }
        }

        return $this;
    }
}
