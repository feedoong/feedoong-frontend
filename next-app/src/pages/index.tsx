import type { GetServerSideProps, NextPage } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'

import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import { getUserInfo, getUserInfoServerSide, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { AccessToken } from 'constants/auth'
import { createApi } from 'services/api'
import { getFeedsServerSide } from 'services/feeds'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'

const Home: NextPage = () => {
  const router = useRouter()

  useQuery<UserProfile>(CACHE_KEYS.me, getUserInfo, {
    enabled: requiredAuthMatcher(router.pathname),
  })

  return (
    <>
      <Head>
        <title>홈 | 인사이트가 피둥피둥</title>
      </Head>
      <RssInputView />
      <FeedsContainerView />
    </>
  )
}

export default Home

export const getServerSideProps = async (context: GetServerSideProps) => {
  try {
    const api = createApi()
    const cookies = parseCookies(context as typeof parseCookies['arguments'])

    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${cookies[AccessToken]}`

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery<UserProfile>(
      CACHE_KEYS.me,
      getUserInfoServerSide(api)
    )
    await queryClient.prefetchInfiniteQuery(
      CACHE_KEYS.feeds,
      ({ pageParam = 1 }) => getFeedsServerSide(api)(pageParam)
    )

    return {
      props: {
        /** @link https://github.com/TanStack/query/issues/1458#issuecomment-1022396964 */
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
    }
  }
}
