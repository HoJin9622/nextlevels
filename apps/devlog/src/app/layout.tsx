import './globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

import Header from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://devlog.nextlevels.net/'),
  title: "Jin's Tech Blog: 기술적 사고와 경험의 공유",
  description:
    "Jin's Tech Blog는 코드와 기술을 통해 생각하는 방법과 기술적인 사고를 공유하는 블로그입니다.",
  openGraph: {
    title: "Jin's Tech Blog: 기술적 사고와 경험의 공유", // 사이트의 제목
    description:
      "Jin's Tech Blog는 코드와 기술을 통해 생각하는 방법과 기술적인 사고를 공유하는 블로그입니다.", // 사이트 설명
    siteName: "Jin's Tech Blog: 기술적 사고와 경험의 공유",
    locale: 'ko', // 사이트의 언어 선택
    type: 'website', // 사이트의 종류
    url: 'https://devlog.nextlevels.net/', // 사이트의 대표 url
  },
  twitter: {
    title: "Jin's Tech Blog: 기술적 사고와 경험의 공유",
    description:
      "Jin's Tech Blog는 코드와 기술을 통해 생각하는 방법과 기술적인 사고를 공유하는 블로그입니다.",
    card: 'summary_large_image',
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="max-w-screen-lg mx-auto">{children}</main>
      </body>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GTAG}');
        `}
      </Script>
    </html>
  );
}
