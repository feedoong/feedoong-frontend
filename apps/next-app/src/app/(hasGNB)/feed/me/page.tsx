import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

import { SkeletonPostType } from 'components/common/Skeleton'
import { getQueryClient } from 'core/getQueryClient'
import { itemQueries } from 'entities/item/api'
import { checkLoggedIn } from 'shared/utils/checkLoggedIn'
import MyFeed from 'views/myFeed'

const FeedMePage: NextPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(itemQueries.list())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={Array.from({ length: 10 }).map((_, index) => (
          <SkeletonPostType key={index} />
        ))}
      >
        <MyFeed isLoggedIn={checkLoggedIn(cookies())} />
      </Suspense>
    </HydrationBoundary>
  )
}

export default FeedMePage
