import Application from './Application'
import monsterThumb from '@/assets/monster.png'

export default function ApplicationList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-3'>
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
      <Application
        title='먼스터'
        description='적금 정보를 한눈에! 즐겁게 돈 모으기'
        thumbnail={monsterThumb}
      />
    </div>
  )
}
