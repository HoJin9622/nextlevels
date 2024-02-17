'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  application: z.string({ required_error: 'application is required' }),
  body: z.string({ required_error: 'message is required' }),
})

export default function useContactForm() {
  const searchParams = useSearchParams()
  const application = searchParams.get('application')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(application && { application }),
    },
  })
  const onSubmit = ({ application, body }: z.infer<typeof formSchema>) => {
    const url = new URL('mailto:nextlevel99.help@gmail.com')
    url.searchParams.set('subject', `[${application}]문의`)
    url.searchParams.set('body', body)
    window.open(url)
  }

  return [form, onSubmit] as const
}
