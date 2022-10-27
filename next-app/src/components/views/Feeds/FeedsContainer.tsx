import { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import FeedItem from 'components/common/FeedItem'
import Icons from 'assets/icons'
import * as S from './FeedsContainer.style'
import { getFeeds } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import Loading from 'components/common/Loading'

let page = 1 // TODO: 서버에서 내려주는 값 생기면 교체

const FeedsContainer = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      CACHE_KEYS.feeds,
      ({ pageParam = 1 }) => getFeeds(pageParam),
      {
        getNextPageParam: (lastPage) =>
          lastPage.items.length === 10 ? page : undefined,
      }
    )
  const { ref, inView } = useInView()

  const [selectedCategory, setSelectedCategory] = useState<
    'home' | 'recommended'
  >('home')
  const [selectedViewType, setSelectedViewType] = useState<'card' | 'grid'>(
    'card'
  )

  useEffect(() => {
    if (inView) {
      fetchNextPage()
      // TODO: 서버에서 내려주는 값 생기면 교체
      page++
    }
  }, [inView, fetchNextPage])

  const isGridView = selectedViewType === 'grid'

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.Title
              isSelected={selectedCategory === 'home'}
              onClick={() => setSelectedCategory('home')}
            >
              홈 피드
            </S.Title>
          </S.TitleWrapper>
          <S.SelectViewType>
            <S.ViewType
              alt="카드 뷰"
              src={Icons[!isGridView ? 'CardViewIcon' : 'CardViewIconDeactive']}
              isSelected={!isGridView}
              onClick={() => setSelectedViewType('card')}
              width={16}
              height={16}
            />
            <S.ViewType
              alt="그리드 뷰"
              src={Icons[isGridView ? 'GridViewIcon' : 'GridViewIconDeactive']}
              isSelected={isGridView}
              onClick={() => setSelectedViewType('grid')}
              width={16}
              height={16}
            />
          </S.SelectViewType>
        </S.Header>
        <S.CardContainer type={selectedViewType}>
          {data?.pages.map((page) =>
            page.items.map((item) => (
              <FeedItem key={item.id} type={selectedViewType} item={item} />
            ))
          )}
          {isFetchingNextPage && <Loading />}
          {hasNextPage && <span ref={ref} />}
        </S.CardContainer>
      </S.FeedWrapper>
    </S.Container>
  )
}

export default FeedsContainer
