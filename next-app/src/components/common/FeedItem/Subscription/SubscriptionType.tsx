import { AxiosError } from 'axios'
import Image from 'next/image'

import type { PrivateSubscription, Subscription } from 'types/subscriptions'
import Flex from 'components/common/Flex'
import Anchor from 'components/common/Anchor'
import Toast from 'components/common/Toast'
import LogoIcon from 'components/common/LogoIcon'
import PrivateFeedItemPopover from '../Popovers/PrivateFeedItemPopover'
import { submitRssUrl } from 'services/feeds'
import { useGetUserProfile } from 'features/user/userProfile'
import { useCheckLoginModal } from 'features/auth/checkLogin'
import { getWellKnownChannelImg } from 'utils'
import { ErrorBody, getAxiosError } from 'utils/errors'
import { getDiameterByType } from '../FeedItem.utils'

import { AddButton, Container, Title, Url } from './SubscriptionType.style'

import Icons from 'assets/icons'

type Props =
  | {
      item: Subscription
      renderAction: () => JSX.Element
      url: string
    }
  | {
      item: PrivateSubscription
      renderAction: () => JSX.Element
      url: string
    }

const SubscriptionType = ({ item, url, renderAction }: Props) => {
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

export const PublicSubscriptionType = ({ item }: { item: Subscription }) => {
  const { openLoginModal, renderModal } = useCheckLoginModal()
  const { data: user } = useGetUserProfile()

  const addChannel = async (item: Subscription) => {
    if (!user) {
      return openLoginModal()
    }

    Toast.show({
      type: 'promise',
      fetchFn: submitRssUrl({ url: item.url, feedUrl: item.feedUrl }),
      content: '새로운 채널이 추가되었어요!',
      promiseContent: {
        loading: '채널을 등록중이에요',
        error: (err: AxiosError<ErrorBody, any>) =>
          `채널 추가에 실패했어요 😅 ${getAxiosError(err).message}`,
      },
      option: { duration: 3000 },
    })
  }

  return (
    <>
      <SubscriptionType
        item={item}
        renderAction={() => (
          <AddButton onClick={() => addChannel(item)}>
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

export const PrivateSubscriptionType = ({
  item,
}: {
  item: PrivateSubscription
}) => (
  <SubscriptionType
    item={item}
    renderAction={() => <PrivateFeedItemPopover item={item as Subscription} />}
    url={item.description}
  />
)
