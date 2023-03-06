import type { GetServerSideProps, NextPage } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Head from 'next/head'
import { parseCookies } from 'nookies'

import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import { getUserInfoServerSide, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { AccessToken } from 'constants/auth'
import { createApi } from 'services/api'
import { useGetUserProfile } from 'features/user/userProfile'
import { setAuthorizationHeader } from 'features/auth/token'

const Home: NextPage = () => {
  useGetUserProfile()

  return (
    <>
      <Head>
        <title>게시물 둘러보기 | 인사이트가 피둥피둥</title>
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

    setAuthorizationHeader(api, cookies[AccessToken], { type: 'Bearer' })

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery<UserProfile>(
      CACHE_KEYS.me,
      getUserInfoServerSide(api),
      {
        staleTime: Infinity,
      }
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