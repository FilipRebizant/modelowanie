<?php

namespace App\Form;

use App\Entity\Movie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MovieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', null, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('description', null, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('rating', IntegerType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('productionYear', IntegerType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Movie::class,
        ]);
    }
}
