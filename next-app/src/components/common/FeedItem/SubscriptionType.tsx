import type { Subscription } from 'types/subscriptions'
import Flex from '../Flex'
import Anchor from '../Anchor'
import { getWellKnownChannelImg } from 'utils'
import type { RecommendationSubscription } from 'types/recommendations'
import RecommendationPopover from './Popovers/RecommendationPopover'
import FeedItemPopover from './Popovers/FeedItemPopover'
import LogoIcon from '../LogoIcon'
import { getDiameterByType } from './FeedItem.utils'

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
