import { Separator } from '@/components/ui/separator'

import ApplicationList from '@/components/ApplicationList'

export default function Home() {
  return (
    <main>
      <header className='py-4 px-5'>
        <h1 className='font-bold text-xl'>NextLevels</h1>
      </header>
      <Separator />
      <section className='py-4 px-5'>
        <h2 className='font-medium text-lg'>Our Apps</h2>
        <ApplicationList />
      </section>
    </main>
  )
}
