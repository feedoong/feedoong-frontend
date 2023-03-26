import Image from 'next/image'
import { useRouter } from 'next/router'

import type { PrivateSubscription, Subscription } from 'types/subscriptions'
import Flex from '../Flex'
import Anchor from '../Anchor'
import { getWellKnownChannelImg } from 'utils'
import PrivateFeedItemPopover from './Popovers/PrivateFeedItemPopover'
import LogoIcon from '../LogoIcon'
import { getDiameterByType } from './FeedItem.utils'
import { submitRssUrl } from 'services/feeds'
import { getAxiosError, isAxiosError } from 'utils/errors'
import Toast from '../Toast'
import { useGetUserProfile } from 'features/user/userProfile'
import { useCheckLoginModal } from 'features/auth/checkLogin'

import { Container, Title, Url } from './SubscriptionType.style'

import Icons from 'assets/icons'

type Props =
  | {
      type: 'subscription'
      item: Subscription
    }
  | {
      type: 'subscription/private'
      item: PrivateSubscription
    }

const SubscriptionType = ({ type, item }: Props) => {
  const router = useRouter()
  const { data: user } = useGetUserProfile({
    enabled: type === 'subscription/private',
  })
  const { openLoginModal, renderModal } = useCheckLoginModal()

  const addChannel = async (item: Subscription) => {
    try {
      if (!user) {
        openLoginModal()
        return
      }
      await submitRssUrl({ url: item.url, feedUrl: item.feedUrl })

      Toast.show({ content: '새로운 채널이 추가 되었습니다.' })
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = getAxiosError(error).message
        Toast.show({
          type: 'error',
          content: `채널 추가에 실패했습니다. ${errorMessage}`,
        })
      }
    }
  }

  const routerBranch = () => {
    const isDetailPage = router.pathname.includes('[id]')
    return {
      target: isDetailPage ? '_blank' : '_self',
      href: isDetailPage ? item.url : '/channels/' + item.id.toString(),
    }
  }

  return (
    <Container>
      <Flex gap={12}>
        <LogoIcon
          diameter={getDiameterByType(type)}
          src={item.imageUrl ?? getWellKnownChannelImg(item.url)}
        />
        <Flex direction="column" style={{ width: '100%' }}>
          <Flex
            align="center"
            justify="between"
            gap={8}
            style={{ width: '100%' }}
          >
            <Anchor target={routerBranch().href} href={routerBranch().target}>
              <Title>{item.title}</Title>
            </Anchor>
            {type === 'subscription/private' ? (
              <PrivateFeedItemPopover item={item as Subscription} />
            ) : (
              <Image
                src={Icons.AddMono}
                style={{ cursor: 'pointer' }}
                onClick={() => addChannel(item)}
                width={20}
                height={20}
                alt="채널 추가"
                priority
              />
            )}
          </Flex>
          <Anchor
            target={routerBranch().target}
            href={routerBranch().href}
            style={{ width: '90%' }}
          >
            <Url>
              {type === 'subscription/private' ? item.description : item.url}
            </Url>
          </Anchor>
        </Flex>
      </Flex>
      {renderModal()}
    </Container>
  )
}

export default SubscriptionType
