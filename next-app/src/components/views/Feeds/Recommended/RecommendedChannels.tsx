import { useQuery } from '@tanstack/react-query'

import FeedItem from 'components/common/FeedItem'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getRecommendedChannels } from 'services/recommendations'
import { SkeletonSubscriptionType } from 'components/common/Skeleton'
import * as S from '../FeedsContainer.style'

const RecommendedChannels = () => {
  const { data, isFetching } = useQuery(
    CACHE_KEYS.recommended(['channels']),
    getRecommendedChannels
  )

  const showSkeleton = isFetching && !data

  return (
    <S.CardContainer>
      {showSkeleton &&
        Array.from({ length: 10 }).map((_, idx) => {
          return <SkeletonSubscriptionType key={idx} />
        })}
      {data?.channels.map((channel) => {
        return <FeedItem key={channel.id} type="subscription" item={channel} />
      })}
    </S.CardContainer>
  )
}

export default RecommendedChannels
