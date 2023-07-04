import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import { getDomainName } from 'envs'
import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import Providers from 'components/common/Providers'
import { useGoogleAnalytics as GoogleAnalytics } from 'utils/hooks'
import 'styles/reset.css'
import 'styles/font.css'
import 'styles/global.css'
import 'styles/dark.css'
import 'styles/light.css'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
          key="viewport"
        />
        <meta
          name="description"
          content="여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기! 크롬 새 탭에서 바로 시작하세요!"
        />
        <meta property="og:title" content="피둥피둥" />
        <meta
          property="og:description"
          content="여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기! 크롬 새 탭에서 바로 시작하세요!"
        />
        <meta property="og:image" content={`${getDomainName()}/og_image.png`} />
        <link rel="shortcut icon" href="/logo-desktop.svg" />
      </Head>
      <Scripts />
      <GoogleAnalytics />
      <Providers pageProps={pageProps}>
        <Layout>
          <Toaster containerStyle={{ bottom: '60px' }} />
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  )
}

export default MyApp
