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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'

export default function ContactForm() {
  const [form, onSubmit] = useContactForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 py-4'>
        <FormField
          control={form.control}
          name='application'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Application</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='먼스터'>먼스터</SelectItem>
                    <SelectItem value='QR코드'>QR코드</SelectItem>
                    <SelectItem value='러브유'>러브유</SelectItem>
                    <SelectItem value='LH집마련'>LH집마련</SelectItem>
                    <SelectItem value='GiftList'>GiftList</SelectItem>
                    <SelectItem value='tv맛집'>tv맛집</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Applications to contact</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='body'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Please fill out your inquiry'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
