import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { SkeletonPostType } from 'components/common/Skeleton'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getFeeds } from 'services/feeds'
import FeedItem from 'components/common/FeedItem'
import Loading from 'components/common/Loading'
import * as S from '../FeedsContainer.style'
import useIntersectionObserver from 'hooks/useIntersectionObserver'

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
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // intersecting때 원하는 액션
        fetchNextPage()
        observer.unobserve(entry.target)
      }
    })
  }

  // observe가 필요한 영역 ref에 setTarget
  const { setTarget } = useIntersectionObserver({
    onIntersect,
  })

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
      {hasNextPage && <span ref={setTarget} />}
    </>
  )
}

export default MyFeed
