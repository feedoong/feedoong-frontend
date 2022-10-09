import { useQuery } from '@tanstack/react-query'

// import FeedItem from 'components/common/FeedItem'
import Flex from 'components/common/Flex'
import * as S from 'components/views/MyChannel/ChannelContainer.style'
import { getFeeds } from 'services/feeds'

function ChannelContainer() {
  // TODO: 채널 정보를 가져오는 API를 만들어야 합니다.
  const { data, isLoading } = useQuery(['feeds'], getFeeds)

  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
      </S.Header>
      <Flex gap={20} direction="column">
        {/* {isLoading
          ? '로딩 스피너'
          : data?.items.map((item) => {
              return <FeedItem type="simple" item={{}} />
            })} */}
      </Flex>
    </S.Container>
  )
}

export default ChannelContainer
