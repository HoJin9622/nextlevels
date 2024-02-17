'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  application: z.string(),
  body: z.string(),
})

export default function useContactForm() {
  const form = useForm<z.infer<typeof formSchema>>()
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return [form, onSubmit] as const
}
