import Skeleton from 'react-loading-skeleton'
import { Suspense } from 'react'
import { range } from 'lodash-es'

import { SkeletonPostType } from 'components/common/Skeleton'
import PageContainer from 'components/common/PageContainer'
import * as S from 'components/views/MyPost/PostContainer.style'
import ChannelSubscription from './ChannalSubscription'
import FeedTitle from './FeedTitle'
import Feed from './Feed'
import FeedPagination from './FeedPagination'

function PostContainer() {
  return (
    <PageContainer>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <S.Title>
              <Suspense fallback={<Skeleton width={100} />}>
                <FeedTitle />
              </Suspense>
            </S.Title>
            <Suspense fallback={<></>}>
              <ChannelSubscription />
            </Suspense>
          </S.TitleWrapper>
        </S.Header>
        <S.CardContainer>
          <Suspense
            fallback={range(10).map((_, idx) => (
              <SkeletonPostType key={idx} />
            ))}
          >
            <Feed />
          </Suspense>
        </S.CardContainer>
        <Suspense fallback={<></>}>
          <FeedPagination />
        </Suspense>
      </S.FeedWrapper>
    </PageContainer>
  )
}

export default PostContainer
