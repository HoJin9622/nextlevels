import { Separator } from '@/components/ui/separator'
import ApplicationList from '@/components/ApplicationList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <Separator />
      <ApplicationList />
      <Footer />
    </main>
  )
}
