import type { Item } from 'types/feeds'
import type {
  RecommendationItem,
  RecommendationSubscription,
} from 'types/recommendations'
import type { Subscription } from 'types/subscriptions'
import CardType from './CardType'
import SubscriptionType from './SubscriptionType'

export type FeedType = 'card' | 'subscription'

type Props =
  | {
      type: 'card'
      item: Item
    }
  | {
      type: 'recommend/card'
      item: RecommendationItem
    } // 아직 미구현
  | {
      type: 'subscription'
      item: Subscription
    }
  | {
      type: 'recommend/subscription'
      item: Subscription
    }

const FeedItem = ({ type = 'card', item }: Props) => {
  if (type === 'card') {
    return <CardType type="card" item={item as Item} />
  }
  if (type === 'recommend/subscription') {
    return (
      <SubscriptionType
        type="recommend/subscription"
        item={item as RecommendationSubscription}
      />
    )
  }
  if (type === 'subscription') {
    return <SubscriptionType type="subscription" item={item as Subscription} />
  }
  return null
}

export default FeedItem
