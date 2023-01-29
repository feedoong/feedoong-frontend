import { useQuery } from '@tanstack/react-query'

import FeedItem from 'components/common/FeedItem'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getRecommendations } from 'services/recommendations'
import * as S from '../FeedsContainer.style'
import { SkeletonCardType } from 'components/common/Skeleton'

// import type { RecommendationItem } from 'types/recommendations'

const Recommendation = () => {
  const { data, isFetching } = useQuery(
    CACHE_KEYS.recommendations,
    getRecommendations
  )

  const showSkeleton = isFetching && !data

  return (
    <S.CardContainer>
      {showSkeleton &&
        Array.from({ length: 10 }).map((_, idx) => {
          return <SkeletonCardType key={idx} />
        })}
      {data?.channels.map((channel) => {
        return <FeedItem key={channel.id} type="subscription" item={channel} />
      })}
      {/* <PageTitle>최근에 등록된 아이템</PageTitle>
      {data?.items.map((item) => {
        return (
          <FeedItem
            key={item.id}
            type="recommendation"
            item={item as RecommendationItem}
          />
        )
      })} */}
    </S.CardContainer>
  )
}

export default Recommendation
