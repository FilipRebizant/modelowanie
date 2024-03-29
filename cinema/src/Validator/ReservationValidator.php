<?php


namespace App\Validator;


use Symfony\Component\HttpFoundation\Request;

class ReservationValidator
{
    /** @var int  */
    private const MAX_SEATS_PER_RESERVATION = 4;

    /**
     * @param Request $request
     * @throws \Exception
     */
    public function validate(Request $request): void
    {
        $this->validateSeatsNumber($request);
        $this->validateEmail($request);
    }

    /**
     * @param Request $request
     * @throws \Exception
     */
    private function validateSeatsNumber(Request $request): void
    {
        $seats = $request->get('seats');
        if (count($seats) > self::MAX_SEATS_PER_RESERVATION) {
            throw new \Exception('Max number of seats per reservation is 4.');
        }
    }

    /**
     * @param Request $request
     * @throws \Exception
     */
    private function validateEmail(Request $request): void
    {
        $email = $request->get('email');
        if (is_null($email) || $email === '') {
            throw new \Exception('Please fill email address.');
        }
    }
}