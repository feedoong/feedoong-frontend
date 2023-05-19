import Flex from 'components/common/Flex'
import LogoIcon from 'components/common/LogoIcon'
import { getWellKnownChannelImg } from 'utils'
import { useGetFeed } from './hooks/useGetFeed'

const FeedTitle = () => {
  const { data: feed } = useGetFeed()

  const isChannelProfileImageExist =
    feed?.channel.imageUrl || getWellKnownChannelImg(feed?.channel.url ?? '')

  return (
    <Flex align="center" gap={8}>
      {isChannelProfileImageExist && (
        <LogoIcon
          diameter={20}
          src={
            feed?.channel.imageUrl ??
            getWellKnownChannelImg(feed?.channel.url ?? '')
          }
        />
      )}
      {feed?.channel.title ?? ''}
    </Flex>
  )
}

export default FeedTitle
