import Skeleton from 'react-loading-skeleton'

import Flex from '../Flex'
import Anchor from '../Anchor'
import { Container } from '../FeedItem/Channel/Channel.style'

const ChannelType = () => {
  return (
    <Container>
      <Flex justify="between">
        <Flex align="center" gap={8}>
          <Anchor target="_blank">
            <Skeleton height={10} />
          </Anchor>
        </Flex>
      </Flex>
      <Anchor target="_blank">
        <Skeleton height={10} />
      </Anchor>
    </Container>
  )
}

export default ChannelType
