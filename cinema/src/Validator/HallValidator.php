<?php


namespace App\Validator;
use Symfony\Component\HttpFoundation\Request;

class HallValidator
{
    public function validate(Request $request): void
    {
        $this->validateSeatsNumber($request);
    }

    public function validateSeatsNumber(Request $request)
    {
        $seats = $request->get('seats');
        if (!is_numeric($seats)) {
            throw new \Exception('Please enter a number');
        }
    }
}