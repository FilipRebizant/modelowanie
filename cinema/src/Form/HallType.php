<?php

namespace App\Form;

use App\Entity\Hall;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HallType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('numberOfRows', null, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('numberOfSeats', null, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('hallNumber', null, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Hall::class,
        ]);
    }
}
