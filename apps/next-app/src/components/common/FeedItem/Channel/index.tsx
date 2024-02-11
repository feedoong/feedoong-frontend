import Image from 'next/image'

import type { PrivateChannel, Channel } from 'types/subscriptions'
import Flex from 'components/common/Flex'
import Anchor from 'components/common/Anchor'
import LogoIcon from 'components/common/LogoIcon'
import PrivateFeedItemPopover from '../Popovers/PrivateFeedItemPopover'
import { useGetUserProfile } from 'features/user/userProfile'
import { useCheckLoginModal } from 'features/auth/checkLogin'
import { getWellKnownChannelImg } from 'utils'
import { getDiameterByType } from '../FeedItem.utils'
import { useSubscribeChannel } from 'features/channel'

import { AddButton, Container, Title, Url } from './Channel.style'

import Icons from 'assets/icons'

type Props =
  | {
      item: Channel
      renderAction: () => JSX.Element
      url: string
    }
  | {
      item: PrivateChannel
      renderAction: () => JSX.Element
      url: string
    }

const ChannelType = ({ item, url, renderAction }: Props) => {
  const routerBranch = () => {
    return {
      target: undefined,
      channelHref: '/channels/' + item.id.toString(),
    }
  }
  return (
    <Container>
      <Flex gap={12}>
        <LogoIcon
          diameter={getDiameterByType('subscription')}
          src={item.imageUrl ?? getWellKnownChannelImg(item.url)}
        />
        <Flex direction="column" style={{ width: '100%' }}>
          <Flex
            align="center"
            justify="between"
            gap={8}
            style={{ width: '100%' }}
          >
            <Anchor
              target={routerBranch().target}
              href={routerBranch().channelHref}
            >
              <Title>{item.title}</Title>
            </Anchor>
            {renderAction()}
          </Flex>
          <Anchor
            target={routerBranch().target}
            href={routerBranch().channelHref}
            style={{ width: '90%' }}
          >
            <Url>{url}</Url>
          </Anchor>
        </Flex>
      </Flex>
    </Container>
  )
}

export const PublicChannelType = ({ item }: { item: Channel }) => {
  const { openLoginModal, renderModal } = useCheckLoginModal()
  const { mutate: subscribeChannel } = useSubscribeChannel()
  const { data: user } = useGetUserProfile()

  return (
    <>
      <ChannelType
        item={item}
        renderAction={() => (
          <AddButton
            onClick={() => {
              if (!user) {
                return openLoginModal()
              }
              subscribeChannel(item)
            }}
          >
            <Image
              src={Icons.AddMono}
              width={20}
              height={20}
              alt="채널 추가"
              priority
            />
          </AddButton>
        )}
        url={item.url}
      />
      {renderModal()}
    </>
  )
}

export const PrivateChannelType = ({ item }: { item: PrivateChannel }) => (
  <ChannelType
    item={item}
    renderAction={() => <PrivateFeedItemPopover item={item as Channel} />}
    url={item.description}
  />
)
