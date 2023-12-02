import App from './App'

type Props = {
  apps: {
    name: string
    description: string
    googlePlay: string
    appStore: string
    thumbnail: string
  }[]
}

export default function AppList({ apps }: Props) {
  return (
    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {apps.map((app) => (
        <App
          key={app.name}
          name={app.name}
          description={app.description}
          appStore={app.appStore}
          googlePlay={app.googlePlay}
          thumbnail={app.thumbnail}
        />
      ))}
    </div>
  )
}
