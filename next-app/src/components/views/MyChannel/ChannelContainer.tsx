import FeedItem from 'components/common/FeedItem'
import Flex from 'components/common/Flex'
import * as S from 'components/views/MyChannel/ChannelContainer.style'

function ChannelContainer() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
      </S.Header>
      <Flex gap={20} direction="column">
        <FeedItem type="simple" />
        <FeedItem type="simple" />
        <FeedItem type="simple" />
      </Flex>
    </S.Container>
  )
}

export default ChannelContainer
