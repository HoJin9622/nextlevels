'use client'

import useContactForm from '@/hooks/useContactForm'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Button } from './ui/button'

export default function ContactForm() {
  const [form, onSubmit] = useContactForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='application'
          render={() => (
            <FormItem>
              <FormLabel>Application</FormLabel>
              <FormControl></FormControl>
              <FormDescription>Applications to contact</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='body'
          render={() => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
