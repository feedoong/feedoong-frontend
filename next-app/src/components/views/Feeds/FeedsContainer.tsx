import { useRouter } from 'next/router'
import { SwitchCase } from '@toss/react'

import Tab from 'components/common/Tab'
import { getSelectedTab } from 'components/common/Tab/Tab'
import MyFeed from './MyFeed'
import Recommendations from './Recommendations'

import * as S from './FeedsContainer.style'

export const FEED_TABS = [
  {
    label: '내 피드',
    value: 'home',
  },
  {
    label: '채널 둘러보기',
    value: 'recommended',
  },
]

interface Props {
  selectedTab: 'me' | 'recommended/channels' | 'recommended/posts'
}

const FeedsContainer = ({ selectedTab }: Props) => {
  const router = useRouter()

  // const selectedTab = getSelectedTab(FEED_TABS, router.query.tab as string)

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
          value={selectedTab}
          caseBy={{
            me: <MyFeed />,
            'recommended/channels': <Recommendations />,
            'recommended/posts': <Recommendations />,
          }}
          defaultComponent={<MyFeed />}
        />
      </S.FeedWrapper>
    </S.Container>
  )
}

export default FeedsContainer
