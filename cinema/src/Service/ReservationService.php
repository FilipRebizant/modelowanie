<?php


namespace App\Service;


use App\Repository\ScreeningRepository;
use Symfony\Component\HttpFoundation\Request;

class ReservationService
{
    /** @var ScreeningRepository  */
    private $screeningRepository;

    public function __construct(ScreeningRepository $screeningRepository)
    {
        $this->screeningRepository = $screeningRepository;
    }

    /** @var int  */
    private const NUMBER_OF_HALL_ZONES = 3;

    public function getAvailableScreenings(Request $request): array
    {
        $screenings = $this->screeningRepository->getClosestScreenings();
        $numberOfRequiredSeats = (int)$request->get('number_of_required_seats');
        $preferredZone = (int)$request->get('preferred_zone');
        $availableScreenings = [];
        foreach ($screenings as $screening) {
            $reservations = $screening->getReservations();
            $hall = $screening->getHall();
            $maxRows = $hall->getNumberOfRows();
            $maxSeats = $hall->getNumberOfSeats();
            $numberOfRowsPerZone = (int)round($maxRows / self::NUMBER_OF_HALL_ZONES);
            $availableSpots = [];
            for ($r = 1; $r <= $maxRows; $r++) {
                for ($s = 1; $s <= $maxSeats; $s++) {
                    $availableSpots[$r][$s] = [
                        'seat' => $s,
                        'row' => $r,
                    ];
                }
            }
            // Remove already taken spots (row + seat) from available spots
            foreach ($reservations as $reservation) {
                $seat = $reservation->getSeat();
                $row = $reservation->getRow();
                unset($availableSpots[$row][$seat]);
            }

            $minRow = $preferredZone * $numberOfRowsPerZone;
            $maxRow = $minRow + $numberOfRowsPerZone;
            $seatsToBeBooked = [];
            $previousSpot = 0;
            foreach ($availableSpots as $currentRow => $availableSeat) {
                if ($minRow <= $currentRow && $maxRow >= $currentRow) { // If we are in desired zone of hall

                    foreach ($availableSeat as $key => $seat) {
                        if (
                            count($seatsToBeBooked) < $numberOfRequiredSeats
                            && $key == $previousSpot + 1
                            && $key !== count($seat)
                        ) {
                            $seatsToBeBooked[] = $seat;
                            $previousSpot = $key;
                        } else if (count($seatsToBeBooked) === $numberOfRequiredSeats) {
                            break;
                        } else {
                            $seatsToBeBooked = [];
                            $seatsToBeBooked[] = $seat;
                            $previousSpot = $key;
                        }
                    }
                }
                if (count($seatsToBeBooked) === $numberOfRequiredSeats) {
                    break;
                }
                // Optimization, we don't need to iterate any longer, we won't match criteria
                if ($currentRow === $maxRow) {
                    break;
                }
            }
            if (count($seatsToBeBooked) === $numberOfRequiredSeats) {
                $availableScreenings[] = [
                    'screening' => $screening,
                    'seatsToBeBooked' => $seatsToBeBooked,
                ];
            }
        }

        return $availableScreenings;
    }
}