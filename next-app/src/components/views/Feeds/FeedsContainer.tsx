import { useRouter } from 'next/router'
import { SwitchCase } from '@toss/react'

import MyFeed from './MyFeed'
import RecommendedChannels from './Recommended/RecommendedChannels'
import RecommendedPosts from './Recommended/RecommendedPosts'

import * as S from './FeedsContainer.style'

const FeedsContainer = () => {
  const router = useRouter()

  return (
    <S.Container>
      <S.FeedWrapper>
        <S.Header>
          <S.TitleWrapper>
            {/* <Tab
              tabData={FEED_TABS}
              selectedTab={selectedTab}
              onClick={(tab) => {
                router.push({
                  pathname: router.pathname,
                  query: { tab: tab.value },
                })
              }}
            /> */}
          </S.TitleWrapper>
        </S.Header>
        <SwitchCase
          value={router.pathname}
          caseBy={{
            '/feed/me': <MyFeed />,
            '/feed/recommended/channels': <RecommendedChannels />,
            '/feed/recommended/posts': <RecommendedPosts />,
          }}
          defaultComponent={<MyFeed />}
        />
      </S.FeedWrapper>
    </S.Container>
  )
}

export default FeedsContainer
