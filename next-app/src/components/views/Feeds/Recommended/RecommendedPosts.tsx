import { useQuery } from '@tanstack/react-query'

import FeedItem from 'components/common/FeedItem'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getRecommendedPosts } from 'services/recommendations'
import { SkeletonCardType } from 'components/common/Skeleton'
import * as S from '../FeedsContainer.style'
import { useGetUserProfile } from 'features/user/userProfile'
import type { Item, PrivateItem } from 'types/feeds'
import { getRefreshTokenFromCookie } from 'features/auth/token'

const RecommendedPosts = () => {
  const { data, isFetching } = useQuery(
    CACHE_KEYS.recommended(['posts']),
    getRecommendedPosts
  )

  const showSkeleton = isFetching && !data
  const { data: userProfile } = useGetUserProfile({
    enabled: !!getRefreshTokenFromCookie(),
  })

  return (
    <S.CardContainer>
      {showSkeleton &&
        Array.from({ length: 10 }).map((_, idx) => {
          return <SkeletonCardType key={idx} />
        })}
      {data?.items.map((item) => {
        return userProfile ? (
          <FeedItem
            key={item.id}
            type={userProfile ? 'card/private' : 'card'}
            item={item as PrivateItem}
          />
        ) : (
          <FeedItem key={item.id} type="card" item={item as Item} />
        )
      })}
    </S.CardContainer>
  )
}

export default RecommendedPosts
