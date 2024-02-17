import Application from './Application'
import monsterThumb from '@/assets/monster.png'
import qrCodeThumb from '@/assets/qrcode.png'
import loveyouThumb from '@/assets/loveyou.png'
import lhHouseThumb from '@/assets/lhhouse.png'
import giftListThumb from '@/assets/giftlist.png'

const applications = [
  {
    title: '먼스터',
    description: '적금 정보를 한눈에! 즐겁게 돈 모으기',
    thumbnail: monsterThumb,
  },
  {
    title: 'QR코드',
    description: '간단 QR코드 스캐너',
    thumbnail: qrCodeThumb,
  },
  {
    title: '러브유',
    description: '사랑하는 사람의 특별한 하루하루를 놓치지 마세요',
    thumbnail: loveyouThumb,
  },
  {
    title: 'LH집마련',
    description: '분양/임대 공고문을 한눈에!',
    thumbnail: lhHouseThumb,
  },
  {
    title: 'GiftList',
    description: '간편한 선물 기록',
    thumbnail: giftListThumb,
  },
  {
    title: 'tv맛집',
    description: '티비 맛집을 한눈에!',
    thumbnail: giftListThumb,
  },
]

export default function ApplicationList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-3'>
      {applications.map((application) => (
        <Application
          key={application.title}
          title={application.title}
          description={application.description}
          thumbnail={application.thumbnail}
        />
      ))}
    </div>
  )
}
