import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { SkeletonCardType } from 'components/common/Skeleton'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getFeeds } from 'services/feeds'
import FeedItem from 'components/common/FeedItem'
import Loading from 'components/common/Loading'
import * as S from '../FeedsContainer.style'

const MyFeed = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(
      CACHE_KEYS.feeds,
      ({ pageParam = 1 }) => getFeeds(pageParam),
      {
        staleTime: 500,
        getNextPageParam: (lastPage) =>
          lastPage.items.length === 10 ? lastPage.next : undefined,
      }
    )
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
            return <SkeletonCardType key={idx} />
          })}
        {data?.pages.map((page) =>
          page.items.map((item) => (
            <FeedItem key={item.id} type="card" item={item} />
          ))
        )}
      </S.CardContainer>
      {isFetchingNextPage && <Loading />}
      {hasNextPage && <span ref={ref} />}
    </>
  )
}

export default MyFeed
