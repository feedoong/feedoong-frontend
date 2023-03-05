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
            <button onClick={() => router.push('/feed/me')}>내 피드</button>
            <button onClick={() => router.push('/feed/recommended/channels')}>
              둘러보기 - 채널
            </button>
            <button onClick={() => router.push('/feed/recommended/posts')}>
              둘러보기 - 게시물
            </button>
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
