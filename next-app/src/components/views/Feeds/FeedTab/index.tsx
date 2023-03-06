import { useRouter } from 'next/router'
import { SwitchCase } from '@toss/react'

import { SubTab, Tab, TabContainer, VerticalDivider } from './styles'
import Flex from 'components/common/Flex'
import { FEED_ROUTE } from 'constants/route'

const FeedTab = () => {
  const router = useRouter()

  const pathnameMatcher = (path: string) => {
    return router.pathname.includes(path)
  }

  return (
    <TabContainer>
      <Tab
        isSelected={pathnameMatcher(FEED_ROUTE.MY_FEED)}
        onClick={() => router.push(FEED_ROUTE.MY_FEED)}
      >
        내 피드
      </Tab>
      <Tab
        fullWidth={pathnameMatcher(FEED_ROUTE.RECOMMENDED_FEED)}
        isSelected={pathnameMatcher(FEED_ROUTE.RECOMMENDED_FEED)}
        onClick={() => {
          if (pathnameMatcher(FEED_ROUTE.RECOMMENDED_FEED)) {
            return
          }
          router.push(FEED_ROUTE.RECOMMENDED_CHANNELS)
        }}
      >
        <SwitchCase
          value={pathnameMatcher(FEED_ROUTE.RECOMMENDED_FEED).toString()}
          caseBy={{
            true: (
              <Flex align="center" gap={10}>
                <span>둘러보기</span>
                <VerticalDivider />
                <Flex gap={10}>
                  <SubTab
                    isSelected={pathnameMatcher(
                      FEED_ROUTE.RECOMMENDED_CHANNELS
                    )}
                    onClickCapture={(e) => {
                      e.stopPropagation()
                      router.push(FEED_ROUTE.RECOMMENDED_CHANNELS)
                    }}
                  >
                    채널
                  </SubTab>
                  <SubTab
                    isSelected={pathnameMatcher(FEED_ROUTE.RECOMMENDED_POSTS)}
                    onClickCapture={(e) => {
                      e.stopPropagation()
                      router.push(FEED_ROUTE.RECOMMENDED_POSTS)
                    }}
                  >
                    게시물
                  </SubTab>
                </Flex>
              </Flex>
            ),
          }}
          defaultComponent={<span>둘러보기</span>}
        />
      </Tab>
    </TabContainer>
  )
}

export default FeedTab
