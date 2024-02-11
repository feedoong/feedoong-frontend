import { useQuery } from '@tanstack/react-query'

import FeedItem from 'components/common/FeedItem'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getRecommendedPosts } from 'services/recommendations'
import { SkeletonPostType } from 'components/common/Skeleton'
import * as S from '../FeedsContainer.style'

const RecommendedPosts = () => {
  const { data, isFetching } = useQuery(
    CACHE_KEYS.recommended(['posts']),
    getRecommendedPosts
  )

  const showSkeleton = isFetching && !data

  return (
    <S.CardContainer>
      {showSkeleton &&
        Array.from({ length: 10 }).map((_, idx) => {
          return <SkeletonPostType key={idx} />
        })}
      {data?.items.map((item) => (
        <FeedItem key={item.id} type="post" item={item} />
      ))}
    </S.CardContainer>
  )
}

export default RecommendedPosts
