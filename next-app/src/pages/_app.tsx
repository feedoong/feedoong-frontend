import type { AppProps } from 'next/app'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import Providers from 'components/common/Providers'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { useGoogleAnalytics as GoogleAnalytics } from 'utils/hooks'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

const GlobalListener: React.FC = () => {
  const router = useRouter()
  useQuery<UserProfile>(CACHE_KEYS.me, getUserInfo, {
    enabled: requiredAuthMatcher(router.pathname),
  })

  return null
}

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
        <meta property="og:image" content="" />
      </Head>
      <Scripts />
      <GoogleAnalytics />
      <Providers pageProps={pageProps}>
        <GlobalListener />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  )
}

export default MyApp
