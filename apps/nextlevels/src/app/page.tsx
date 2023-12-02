import AppList from '@/components/AppList'
import React from 'react'

const apps = [
  {
    name: '먼스터',
    description:
      '적금·예금 특판을 한 눈에, 세상에서 제일 쉬운 돈 돈 모으기!\n먼스터가 꼭 필요한 내용만 알려드릴게요.',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.nextlevel.monster',
    appStore:
      'https://apps.apple.com/us/app/%EB%A8%BC%EC%8A%A4%ED%84%B0-%EC%A0%81%EA%B8%88-%EC%A0%95%EB%B3%B4%EB%A5%BC-%ED%95%9C-%EB%88%88%EC%97%90-%EC%A6%90%EA%B2%81%EA%B2%8C-%EB%8F%88-%EB%AA%A8%EC%9C%BC%EA%B8%B0/id1580728197',
    thumbnail: '/monster.png',
  },
  {
    name: 'QR코드',
    description: '간단 QR코드 스캐너는 무료 QR코드 스캔 앱입니다.',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.nextlevel.simpleqr',
    appStore:
      'https://apps.apple.com/us/app/qr%EC%BD%94%EB%93%9C-%EA%B0%84%EB%8B%A8-qr%EC%BD%94%EB%93%9C-%EC%8A%A4%EC%BA%90%EB%84%88/id1605619998',
    thumbnail: '/qrcode.png',
  },
  {
    name: '러브유',
    description: '사랑하는 사람의 특별한 하루하루를 놓치지마세요',
    googlePlay:
      'https://play.google.com/store/apps/details?id=net.nextlevels.loveyou',
    appStore:
      'https://apps.apple.com/us/app/%EB%9F%AC%EB%B8%8C%EC%9C%A0-%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94-%EC%82%AC%EB%9E%8C%EC%9D%98-%ED%8A%B9%EB%B3%84%ED%95%9C-%ED%95%98%EB%A3%A8%ED%95%98%EB%A3%A8%EB%A5%BC-%EB%86%93%EC%B9%98%EC%A7%80%EB%A7%88%EC%84%B8%EC%9A%94/id1619522329',
    thumbnail: '/loveyou.png',
  },
  {
    name: 'LH집마련',
    description: '귀찮았던 LH 청약센터 공고문 확인!\nLH집마련이 해결해드려요~',
    googlePlay:
      'https://play.google.com/store/apps/details?id=net.nextlevels.lhhouse',
    appStore:
      'https://apps.apple.com/us/app/lh%EC%A7%91%EB%A7%88%EB%A0%A8-%EB%B6%84%EC%96%91-%EC%9E%84%EB%8C%80-%EA%B3%B5%EA%B3%A0%EB%AC%B8%EC%9D%84-%ED%95%9C%EB%88%88%EC%97%90/id6444668977',
    thumbnail: '/lhhouse.png',
  },
  {
    name: 'GiftList',
    description:
      '여러분이 가진 모든 소중한 선물을 기록하세요!\n누가 어떤 선물을 받았는지, 어떤 선물을 받았는지 확인하세요.\n물론, 여러분은 또한 그 대가로 무엇을 했는지 기록할 수 있습니다!',
    googlePlay:
      'https://play.google.com/store/apps/details?id=net.nextlevels.giftlist',
    appStore:
      'https://apps.apple.com/us/app/giftlist-easy-record-gifts/id1659901477',
    thumbnail: '/giftlist.png',
  },
  {
    name: 'SimpleToDo',
    description:
      ' Stay organized and on top of your tasks with our easy-to-use TO DO list app!',
    googlePlay:
      'https://play.google.com/store/apps/details?id=net.nextlevels.simpletodo',
    appStore:
      'https://apps.apple.com/us/app/simpletodo-create-easy-todo/id1667845766',
    thumbnail: '/simpletodo.png',
  },
]

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto pt-5 px-5'>
      <h1 className='font-bold text-2xl mb-5'>넥스트레블&apos;s App List</h1>
      <AppList apps={apps} />
    </main>
  )
}
