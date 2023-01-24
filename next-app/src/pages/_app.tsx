import type { AppProps } from 'next/app'
import { useSetRecoilState } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import Providers from 'components/common/Providers'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'
import { UserProfileAtom } from 'store/userProfile'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { useGoogleAnalytics as GoogleAnalytics } from 'utils/hooks'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

const GlobalListener: React.FC = () => {
  const router = useRouter()
  const setUserProfile = useSetRecoilState(UserProfileAtom)
  const { data: userProfile } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo,
    {
      enabled: requiredAuthMatcher(router.pathname),
    }
  )

  if (userProfile) {
    setUserProfile(userProfile)
  }

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
