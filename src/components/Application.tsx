import Image from 'next/image'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'

type ApplicationProps = {
  title: string
  description: string
  thumbnail: StaticImport
  links: {
    playstore: string
    appstore: string
  }
}

export default function Application({
  title,
  description,
  thumbnail,
  links,
}: ApplicationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={thumbnail} alt='' />
      </CardContent>
      <CardFooter className='space-x-2'>
        <a href={links.appstore} target='_blank' rel='noopener noreferrer'>
          <Button>App Store</Button>
        </a>
        <a href={links.playstore} target='_blank' rel='noopener noreferrer'>
          <Button>Play Store</Button>
        </a>
      </CardFooter>
    </Card>
  )
}
