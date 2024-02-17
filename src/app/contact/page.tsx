import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <main className='px-5 py-4 min-h-[calc(100vh-117px)]'>
      <h1 className='text-2xl font-bold'>Contact</h1>
      <p className='text-gray-600'>
        If you have any questions for us, please contact us through the form
        below.
      </p>
      <ContactForm />
    </main>
  )
}
