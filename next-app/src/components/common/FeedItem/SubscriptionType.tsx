import type { Subscription } from 'types/subscriptions'
import Flex from '../Flex'
import Anchor from '../Anchor'
import { getWellKnownChannelImg } from 'utils'
import type { RecommendationSubscription } from 'types/recommendations'
import RecommendationPopover from './Popovers/RecommendationPopover'
import FeedItemPopover from './Popovers/FeedItemPopover'

import { Container, Title, Url } from './SubscriptionType.style'

import Icons from 'assets/icons'

type Props =
  | {
      type: 'subscription'
      item: Subscription
    }
  | {
      type: 'recommend/subscription'
      item: RecommendationSubscription
    }

const SubscriptionType = ({ type, item }: Props) => {
  console.log({ type })

  return (
    <Container>
      <Flex gap={12}>
        <img
          alt="채널 로고"
          src={
            item.imageUrl ?? getWellKnownChannelImg(item.url) ?? Icons.Account
          }
          width={48}
          height={48}
          style={{ borderRadius: '12px' }}
        />
        <Flex direction="column" style={{ width: '100%' }}>
          <Flex
            align="center"
            justify="between"
            gap={8}
            style={{ width: '100%' }}
          >
            <Anchor href={'/channels/' + item.id.toString()}>
              <Title>{item.title}</Title>
            </Anchor>
            {type === 'subscription' ? (
              <FeedItemPopover item={item} />
            ) : (
              <RecommendationPopover item={item} />
            )}
          </Flex>
          <Anchor href={item.url} target="_blank" style={{ width: '90%' }}>
            <Url>{item.description}</Url>
          </Anchor>
        </Flex>
      </Flex>
    </Container>
  )
}

export default SubscriptionType
