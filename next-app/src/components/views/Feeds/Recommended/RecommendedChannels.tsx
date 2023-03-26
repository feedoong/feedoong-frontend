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
        return (
          <FeedItem
            key={channel.id}
            type="subscription"
            item={channel}
            // TODO: 추후 로그인 시 각 채널 구독 여부 확인 가능해지면 제거
            isPrivate={false}
          />
        )
      })}
    </S.CardContainer>
  )
}

export default RecommendedChannels
