import Application from './Application'
import monsterThumb from '@/assets/monster.png'
import qrCodeThumb from '@/assets/qrcode.png'
import loveyouThumb from '@/assets/loveyou.png'
import lhHouseThumb from '@/assets/lhhouse.png'
import giftListThumb from '@/assets/giftlist.png'
import tvfoodThumb from '@/assets/tvfood.png'

const applications = [
  {
    title: '먼스터',
    description: '적금 정보를 한눈에! 즐겁게 돈 모으기',
    thumbnail: monsterThumb,
    links: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.nextlevel.monster',
      appstore:
        'https://apps.apple.com/us/app/%EB%A8%BC%EC%8A%A4%ED%84%B0-%EC%A0%81%EA%B8%88-%EC%A0%95%EB%B3%B4%EB%A5%BC-%ED%95%9C-%EB%88%88%EC%97%90-%EC%A6%90%EA%B2%81%EA%B2%8C-%EB%8F%88-%EB%AA%A8%EC%9C%BC%EA%B8%B0/id1580728197',
    },
  },
  {
    title: 'QR코드',
    description: '간단 QR코드 스캐너',
    thumbnail: qrCodeThumb,
    links: {
      playstore:
        'https://play.google.com/store/apps/details?id=com.nextlevel.simpleqr',
      appstore:
        'https://apps.apple.com/us/app/qr%EC%BD%94%EB%93%9C-%EA%B0%84%EB%8B%A8-qr%EC%BD%94%EB%93%9C-%EC%8A%A4%EC%BA%90%EB%84%88/id1605619998',
    },
  },
  {
    title: '러브유',
    description: '사랑하는 사람의 특별한 하루하루를 놓치지 마세요',
    thumbnail: loveyouThumb,
    links: {
      playstore:
        'https://play.google.com/store/apps/details?id=net.nextlevels.loveyou',
      appstore:
        'https://apps.apple.com/us/app/%EB%9F%AC%EB%B8%8C%EC%9C%A0-%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94-%EC%82%AC%EB%9E%8C%EC%9D%98-%ED%8A%B9%EB%B3%84%ED%95%9C-%ED%95%98%EB%A3%A8%ED%95%98%EB%A3%A8%EB%A5%BC-%EB%86%93%EC%B9%98%EC%A7%80%EB%A7%88%EC%84%B8%EC%9A%94/id1619522329',
    },
  },
  {
    title: 'LH집마련',
    description: '분양/임대 공고문을 한눈에!',
    thumbnail: lhHouseThumb,
    links: {
      playstore:
        'https://play.google.com/store/apps/details?id=net.nextlevels.lhhouse',
      appstore:
        'https://apps.apple.com/us/app/lh%EC%A7%91%EB%A7%88%EB%A0%A8-%EB%B6%84%EC%96%91-%EC%9E%84%EB%8C%80-%EA%B3%B5%EA%B3%A0%EB%AC%B8%EC%9D%84-%ED%95%9C%EB%88%88%EC%97%90/id6444668977',
    },
  },
  {
    title: 'GiftList',
    description: '간편한 선물 기록',
    thumbnail: giftListThumb,
    links: {
      playstore:
        'https://play.google.com/store/apps/details?id=net.nextlevels.giftlist',
      appstore:
        'https://apps.apple.com/us/app/giftlist-easy-record-gifts/id1659901477',
    },
  },
  {
    title: 'tv맛집',
    description: '티비 맛집을 한눈에!',
    thumbnail: tvfoodThumb,
    links: {
      playstore:
        'https://play.google.com/store/apps/details?id=net.nextlevels.tvfood',
      appstore:
        'https://apps.apple.com/us/app/tv%EB%A7%9B%EC%A7%91-%ED%8B%B0%EB%B9%84-%EB%A7%9B%EC%A7%91%EC%9D%84-%ED%95%9C%EB%88%88%EC%97%90/id6465684526',
    },
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
          links={application.links}
        />
      ))}
    </div>
  )
}
