import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Paging from 'components/common/Paging'
import FeedItem from 'components/common/FeedItem'
import Flex from 'components/common/Flex'
import * as S from 'components/views/MyChannel/ChannelContainer.style'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getSubscriptions } from 'services/subscriptions'
import Loading from 'components/common/Loading'
import { SkeletonSubscriptionType } from 'components/common/Skeleton'

function ChannelContainer() {
  const ITEMS_PER_PAGE = 10
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(
    [CACHE_KEYS.subscriptions, { page: currentPage }],
    () => getSubscriptions(currentPage)
  )

  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
      </S.Header>
      <Flex gap={20} direction="column">
        {isLoading ? (
          <Flex direction="column" style={{ width: '100%' }} gap={20}>
            {Array.from({ length: 10 }).map((_, idx) => {
              return <SkeletonSubscriptionType key={idx} />
            })}
          </Flex>
        ) : (
          <>
            {data?.channels.map((item) => {
              return <FeedItem key={item.id} type="subscription" item={item} />
            })}
            <Flex style={{ width: '100%', padding: '44px 0' }} justify="center">
              <Paging
                totalPage={totalPage}
                currentPage={currentPage}
                movePage={(page: number) => setCurrentPage(page)}
              />
            </Flex>
          </>
        )}
      </Flex>
    </S.Container>
  )
}

export default ChannelContainer
