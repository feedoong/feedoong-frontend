import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import Paging from 'components/common/Paging'
import FeedItem from 'components/common/FeedItem'
import Flex from 'components/common/Flex'
import * as S from 'components/views/MyChannel/ChannelContainer.style'
import { cacheKeys } from 'services/cacheKeys'
import { getSubscriptions } from 'services/subscriptions'

function ChannelContainer() {
  const ITEMS_PER_PAGE = 10
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(
    [cacheKeys.subscriptions, { page: currentPage }],
    () => getSubscriptions(currentPage)
  )

  const totalPage = data ? Math.ceil(data.totalCount / ITEMS_PER_PAGE) : 1

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
      </S.Header>
      <Flex gap={20} direction="column">
        {isLoading
          ? '로딩 스피너'
          : data?.channels.map((item) => {
              return <FeedItem key={item.id} type="subscription" item={item} />
            })}
      </Flex>
      <Flex style={{ width: '100%', padding: '44px 0' }} justify="center">
        <Paging
          totalPage={totalPage}
          currentPage={currentPage}
          movePage={(page: number) => setCurrentPage(page)}
        />
      </Flex>
    </S.Container>
  )
}

export default ChannelContainer
