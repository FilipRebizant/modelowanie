<?php

namespace App\Form;

use App\Entity\User;
use Doctrine\DBAL\Types\Type;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', TextType::class, [
                'attr' => array('class' => 'form-control'),
            ])
            ->add('roles', ChoiceType::class, [
                'multiple' => true,
                'choices' => $this->getChoices(),
                'attr' => array('class' => 'form-control'),
//                'label' => 'Ocena',
            ])
            ->add('password', PasswordType::class, [
                'attr' => array('class' => 'form-control'),
            ])
            ->add('login', TextType::class, [
                'attr' => array('class' => 'form-control'),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
//            'data_class' => User::class,
        ]);
    }

    private function getChoices() {
        return [
            'Admin' => 'ROLE_ADMIN',
            'User' => 'ROLE_USER'
        ];
    }

}
