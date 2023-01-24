import { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'

import FeedItem from 'components/common/FeedItem'
import { getFeeds } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import { SkeletonCardType } from 'components/common/Skeleton'
import Loading from 'components/common/Loading'
import EmptyContents from 'components/common/EmptyContents'
import Tab from 'components/common/Tab'
import { getSelectedTab } from 'components/common/Tab/Tab'

import * as S from './FeedsContainer.style'

export const FEED_TABS = [
  {
    label: '내 피드',
    value: 'home',
  },
  {
    label: '둘러보기',
    value: 'recommended',
  },
]

const FeedsContainer = () => {
  const router = useRouter()

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

  const selectedTab = getSelectedTab(FEED_TABS, router.query.tab as string)

  console.log({ selectedTab })

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <Tab
              tabData={FEED_TABS}
              selectedTab={selectedTab}
              onClick={(tab) => {
                router.push({
                  pathname: router.pathname,
                  query: { tab: tab.value },
                })
              }}
            />
          </S.TitleWrapper>
        </S.Header>
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
        {data?.pages[0].items.length === 0 && (
          <EmptyContents content="구독 중인 채널이 없습니다!" />
        )}
        {isFetchingNextPage && <Loading />}
        {hasNextPage && <span ref={ref} />}
      </S.FeedWrapper>
    </S.Container>
  )
}

export default FeedsContainer
