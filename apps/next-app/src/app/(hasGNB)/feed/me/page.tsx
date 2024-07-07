import {
  useQueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query'
import type { NextPage } from 'next'
import Head from 'next/head'

import { itemQueries } from 'entities/item/api'
import MyFeed from 'views/myFeed'

const FeedMePage: NextPage = () => {
  void queryclient.prefetchInfiniteQuery(itemQueries.list())

  return (
    <>
      <Head>
        <title>내 피드 | 인사이트가 피둥피둥</title>
      </Head>
      <HydrationBoundary state={dehydrate(queryclient)}>
        <MyFeed />
      </HydrationBoundary>
    </>
  )
}

export default FeedMePage
