import {
  useQueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'

import { itemQueries } from 'entities/item/api'
import MyFeed from 'views/myFeed'
import { getQueryClient } from 'core/getQueryClient'

const FeedMePage: NextPage = () => {
  const queryClient = getQueryClient()
  void queryClient.prefetchInfiniteQuery(itemQueries.list())

  return (
    <>
      <Head>
        <title>내 피드 | 인사이트가 피둥피둥</title>
      </Head>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MyFeed />
      </HydrationBoundary>
    </>
  )
}

export default FeedMePage
