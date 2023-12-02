import Image from 'next/image'

type Props = {
  name: string
  description: string
  googlePlay: string
  appStore: string
  thumbnail: string
}

export default function App({
  name,
  description,
  googlePlay,
  appStore,
  thumbnail,
}: Props) {
  return (
    <div className='flex flex-col shadow-lg rounded'>
      <div className='aspect-video relative'>
        <Image
          src={thumbnail}
          alt={name}
          fill={true}
          className='object-contain'
        />
      </div>
      <div className='px-5 flex flex-col'>
        <div className='flex-1'>
          <h3 className='font-bold text-lg mb-3'>{name}</h3>
          <div className='text-gray-500 text-sm'>{description}</div>
        </div>
        <div className='flex gap-1 justify-between'>
          <div className='relative flex-1 h-14 lg:h-16'>
            <a href={googlePlay} target='_blank' rel='noopener noreferrer'>
              <Image
                src='/google-play.png'
                alt='google play'
                fill={true}
                className='object-contain'
              />
            </a>
          </div>
          <div className='relative flex-1 h-14 lg:h-16'>
            <a href={appStore} target='_blank' rel='noopener noreferrer'>
              <Image
                src='/app-store.svg'
                alt='google play'
                fill={true}
                className='object-contain'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
