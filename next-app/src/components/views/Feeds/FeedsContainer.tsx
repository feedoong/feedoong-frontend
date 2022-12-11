import { useEffect, useState, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import { useVirtualizer } from '@tanstack/react-virtual'
import Loading from 'components/common/Loading'
import FeedItem from 'components/common/FeedItem'
import EmptyContents from 'components/common/EmptyContents'
import { getFeeds } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import { SkeletonCardType, SkeletonGridType } from 'components/common/Skeleton'

import * as S from './FeedsContainer.style'

import Icons from 'assets/icons'

const FeedsContainer = () => {
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
  const { ref, inView } = useInView({ rootMargin: '25px' })
  const scrollRef = useRef<HTMLDivElement>(null)

  const [selectedCategory, setSelectedCategory] = useState<
    'home' | 'recommended'
  >('home')
  const [selectedViewType, setSelectedViewType] = useState<'card' | 'grid'>(
    'card'
  )

  const itemVirtualizer = useVirtualizer({
    count: data?.pages[0].totalCount || 0,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 100,
    overscan: 5,
  })
  const allItems = data?.pages.flatMap((d) => d.items) || []
  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage()
  //   }
  // }, [inView, fetchNextPage])

  useEffect(() => {
    const [lastItem] = [...itemVirtualizer.getVirtualItems()].reverse()

    if (!lastItem) {
      return
    }

    if (
      inView
      // &&
      // data?.pages[0].totalCount &&
      // lastItem.index >= data?.pages[0].totalCount - 1
    ) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  const isGridView = selectedViewType === 'grid'
  const showSkeleton = isFetching && !data
  // console.log(allItems)
  return (
    <S.Container ref={scrollRef}>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.Title
              $isSelected={selectedCategory === 'home'}
              onClick={() => setSelectedCategory('home')}
            >
              홈 피드
            </S.Title>
          </S.TitleWrapper>
          <S.SelectViewType>
            <S.ViewType
              alt="카드 뷰"
              src={Icons[!isGridView ? 'CardViewIcon' : 'CardViewIconDeactive']}
              $isSelected={!isGridView}
              onClick={() => setSelectedViewType('card')}
              width={16}
              height={16}
            />
            <S.ViewType
              alt="그리드 뷰"
              src={Icons[isGridView ? 'GridViewIcon' : 'GridViewIconDeactive']}
              $isSelected={isGridView}
              onClick={() => setSelectedViewType('grid')}
              width={16}
              height={16}
            />
          </S.SelectViewType>
        </S.Header>
        <S.CardContainer type={selectedViewType}>
          {showSkeleton &&
            Array.from({ length: 10 }).map((_, idx) => {
              const Card = isGridView ? SkeletonGridType : SkeletonCardType
              return <Card key={idx} />
            })}
          {/* {data?.pages.map((page) =>
            page.items.map((item) => (
              <FeedItem key={item.id} type={selectedViewType} item={item} />
            ))
          )} */}
          {itemVirtualizer.getVirtualItems().map((virtualRow) => {
            console.log(virtualRow)
            const item = allItems[virtualRow.index]
            if (item) {
              return (
                <FeedItem key={item.id} type={selectedViewType} item={item} />
              )
            }
          })}
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
