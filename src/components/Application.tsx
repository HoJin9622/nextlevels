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
}

export default function Application({
  title,
  description,
  thumbnail,
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
        <Button>App Store</Button>
        <Button>Play Store</Button>
      </CardFooter>
    </Card>
  )
}
