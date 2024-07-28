import { SkeletonTheme } from 'react-loading-skeleton'
import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'

import { getDomainName } from 'envs'
import Scripts from 'components/common/Scripts'
import Layout from 'components/common/Layout'
import ColorModeScript from 'components/common/ColorModeScript'
// import { useGoogleAnalytics as GoogleAnalytics } from 'utils/hooks' // TODO: app dir로 전부 전환 후 수정 필요
import StyledComponentsRegistry from '../styles/registry'
import Providers from './providers'
import 'styles/dark.css'
import 'styles/light.css'
import 'styles/reset.css'
import 'styles/font.css'
import 'styles/global.css'
import 'react-loading-skeleton/dist/skeleton.css'

const Toaster = dynamic(
  () => import('react-hot-toast').then((mod) => mod.Toaster),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'Feedoong',
  description:
    '여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기!',
  icons: {
    icon: '/logo-desktop.svg',
    shortcut: '/logo-desktop.svg',
  },
  openGraph: {
    title: '피둥피둥',
    description:
      '여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기! 크롬 새 탭에서 바로 시작하세요!',
    images: `${getDomainName()}/og_image.png`,
    locale: 'ko_KR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/variable/pretendardvariable.css"
        />
        <ColorModeScript />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Layout>
              <Toaster containerStyle={{ bottom: '60px' }} />
              <SkeletonTheme
                baseColor="var(--color-gray-200)"
                highlightColor="var(--color-gray-200)"
              >
                {children}
                <div id="dialog" />
                <div id="modal" />
              </SkeletonTheme>
            </Layout>
          </Providers>
          <Scripts />
          {/* <GoogleAnalytics /> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
