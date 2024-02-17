import { Separator } from '@/components/ui/separator'
import monsterThumb from '@/assets/monster.png'
import Application from '@/components/Application'

export default function Home() {
  return (
    <main>
      <header className='py-4 px-5'>
        <h1 className='font-bold text-xl'>NextLevels</h1>
      </header>
      <Separator />
      <section className='py-4 px-5'>
        <h2 className='font-medium text-lg'>Our Apps</h2>
        <Application
          title='먼스터'
          description='적금 정보를 한눈에! 즐겁게 돈 모으기'
          thumbnail={monsterThumb}
        />
      </section>
    </main>
  )
}
