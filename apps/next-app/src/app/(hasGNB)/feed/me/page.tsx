import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'
import { cookies } from 'next/headers'

import { itemQueries } from 'entities/item/api'
import MyFeed from 'views/myFeed'
import { getQueryClient } from 'core/getQueryClient'
import { feedoongApi } from 'services/api'
import { setAuthorizationHeader } from 'features/auth/token'
import { useCheckLoggedIn } from 'shared/hooks/useCheckLoggedIn'

const FeedMePage: NextPage = () => {
  const api = feedoongApi()
  const cookieStore = cookies()
  const isLoggedIn = useCheckLoggedIn(cookieStore)
  const accessToken = `${cookieStore.get('accessToken')?.value}`

  setAuthorizationHeader(api, accessToken, { type: 'Bearer' })

  const queryClient = getQueryClient()
  void queryClient.prefetchInfiniteQuery(itemQueries.list(api))

  return (
    <>
      <Head>
        <title>내 피드 | 인사이트가 피둥피둥</title>
      </Head>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MyFeed isLoggedIn={isLoggedIn} />
      </HydrationBoundary>
    </>
  )
}

export default FeedMePage
