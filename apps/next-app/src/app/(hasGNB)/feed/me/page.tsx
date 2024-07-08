import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { cookies } from 'next/headers'
import { Suspense } from 'react'

import { itemQueries } from 'entities/item/api'
import MyFeed from 'views/myFeed'
import { getQueryClient } from 'core/getQueryClient'
import { feedoongApi } from 'services/api'
import { setAuthorizationHeader } from 'features/auth/token'
import { checkLoggedIn } from 'shared/utils/checkLoggedIn'
import { SkeletonPostType } from 'components/common/Skeleton'

const FeedMePage: NextPage = () => {
  const api = feedoongApi()
  const cookieStore = cookies()
  const accessToken = `${cookieStore.get('accessToken')?.value}`

  setAuthorizationHeader(api, accessToken, { type: 'Bearer' })

  const queryClient = getQueryClient()
  void queryClient.prefetchInfiniteQuery(itemQueries.list(api))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={Array.from({ length: 10 }).map((_, index) => (
          <SkeletonPostType key={index} />
        ))}
      >
        <MyFeed isLoggedIn={checkLoggedIn(cookieStore)} />
      </Suspense>
    </HydrationBoundary>
  )
}

export default FeedMePage
