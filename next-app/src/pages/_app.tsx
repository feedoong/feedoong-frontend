import type { AppProps } from 'next/app'
import Head from 'next/head'

import { getDomainName } from 'envs'
import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import Providers from 'components/common/Providers'
import { useGoogleAnalytics as GoogleAnalytics } from 'utils/hooks'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기! 크롬 새 탭에서 바로 시작하세요!"
        />
        <meta property="og:title" content="피둥피둥" />
        <meta
          property="og:description"
          content="여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기! 크롬 새 탭에서 바로 시작하세요!"
        />
        {/**
          TODO: OG IMAGE 필요
         */}
        <meta property="og:image" content={`${getDomainName()}/og_image.png`} />
      </Head>
      <Scripts />
      <GoogleAnalytics />
      <Providers pageProps={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  )
}

export default MyApp
