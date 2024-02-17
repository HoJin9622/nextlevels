import Link from 'next/link'
import { Separator } from './ui/separator'

export default function Header() {
  return (
    <>
      <header className='py-4 px-5 flex justify-between items-center'>
        <Link href='/'>
          <h1 className='font-bold text-xl'>NextLevels</h1>
        </Link>
        <nav className='font-medium'>
          <Link href='/contact'>Contact</Link>
        </nav>
      </header>
      <Separator />
    </>
  )
}
