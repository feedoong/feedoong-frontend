import { useRouter } from 'next/router'
import { SwitchCase } from '@toss/react'

import MyFeed from './MyFeed'
import RecommendedChannels from './Recommended/RecommendedChannels'
import RecommendedPosts from './Recommended/RecommendedPosts'
import FeedTab from './FeedTab'
import { FEED_ROUTE } from 'constants/route'

import * as S from './FeedsContainer.style'

const FeedsContainer = () => {
  const router = useRouter()

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            <FeedTab />
          </S.TitleWrapper>
        </S.Header>
        <SwitchCase
          value={router.pathname}
          caseBy={{
            [FEED_ROUTE.MY_FEED]: <MyFeed />,
            [FEED_ROUTE.RECOMMENDED_CHANNELS]: <RecommendedChannels />,
            [FEED_ROUTE.RECOMMENDED_POSTS]: <RecommendedPosts />,
          }}
          defaultComponent={<MyFeed />}
        />
      </S.FeedWrapper>
    </S.Container>
  )
}

export default FeedsContainer
