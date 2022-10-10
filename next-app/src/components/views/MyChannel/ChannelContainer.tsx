import { useQuery } from '@tanstack/react-query'

import FeedItem from 'components/common/FeedItem'
import Flex from 'components/common/Flex'
import * as S from 'components/views/MyChannel/ChannelContainer.style'
import { cacheKeys } from 'services/cacheKeys'
import { getSubscriptions } from 'services/subscriptions'

function ChannelContainer() {
  const { data, isLoading } = useQuery(
    cacheKeys.subscriptions,
    getSubscriptions
  )

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
    </S.Container>
  )
}

export default ChannelContainer
