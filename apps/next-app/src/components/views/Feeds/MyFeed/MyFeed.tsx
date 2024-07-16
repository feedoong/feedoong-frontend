'use client'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import FeedItem from 'components/common/FeedItem'
import Loading from 'components/common/Loading'
import { SkeletonPostType } from 'components/common/Skeleton'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getItemsUsingGET } from 'services/types/_generated/item'
import * as S from '../FeedsContainer.style'

const MyFeed = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: CACHE_KEYS.feeds,
      queryFn: ({ pageParam = 1 }) =>
        getItemsUsingGET({
          page: pageParam,
          size: 10,
        }),
      initialPageParam: 1,
      staleTime: 1000 * 60 * 5,
      getNextPageParam: (lastPage) =>
        lastPage.items.length === 10 ? lastPage.next : undefined,
    })
  const { ref, inView } = useInView({
    rootMargin: '25px',
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  const showSkeleton = isFetching && !data

  return (
    <>
      <S.CardContainer>
        {showSkeleton &&
          Array.from({ length: 10 }).map((_, idx) => {
            return <SkeletonPostType key={idx} />
          })}
        {data?.pages.map((page) =>
          page.items.map((item) => (
            <FeedItem key={item.id} type="post" item={item} />
          ))
        )}
      </S.CardContainer>
      {isFetchingNextPage && <Loading />}
      {hasNextPage && <span ref={ref} />}
    </>
  )
}

export default MyFeed
