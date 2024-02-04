/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { createNewsLetterFormData, newsletterFormSchema } from '@/utils'
import { Button, Input, Section } from '@/components'

import styles from './NewsletterSection.module.scss'

export const NewsletterSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createNewsLetterFormData>({
    resolver: zodResolver(newsletterFormSchema),
  })

  const onSubmit = (data: createNewsLetterFormData) => {
    //data to send to data base or trigger mails API
    console.log('Form value = ', data)
  }

  return (
    <Section ariaLabel="Seção da nossa Newsletter">
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3>Assine nossa newsletter</h3>
        <p>
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </p>

        <div className={styles.inputContent}>
          <Input
            error={!!errors.name}
            errorMessage={errors.name?.message ? errors.name.message : ' '}
            htmlFor="name"
            label="Nome"
            {...register('name')}
          />

          <Input
            error={!!errors.email}
            errorMessage={errors.email?.message ? errors.email.message : ' '}
            htmlFor="email"
            label="Email"
            {...register('email')}
          />
        </div>

        <Button text="Assinar Newsletter" type="submit" />
      </form>

      <div className={styles.animation}></div>
    </Section>
  )
}
