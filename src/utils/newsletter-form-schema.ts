import { z } from 'zod'

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, forneça um endereço de e-mail válido' }),
  name: z
    .string()
    .min(3, { message: 'Precisa ter mais de 3 caracteres' })
    .max(20, { message: 'Precisa ter menos de 20 caracteres' }),
})

export type createNewsLetterFormData = z.infer<typeof newsletterFormSchema>
