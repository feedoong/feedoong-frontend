import type { Item } from 'types/feeds'
import type { RecommendationItem } from 'types/recommendations'
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
      type: 'recommendation'
      item: RecommendationItem
    }
  | {
      type: 'subscription'
      item: Subscription
    }

const FeedItem = ({ type = 'card', item }: Props) => {
  if (type === 'card') {
    return <CardType item={item as Item} />
  }
  if (type === 'recommendation') {
    return <CardType item={item as RecommendationItem} />
  }
  if (type === 'subscription') {
    return <SubscriptionType item={item as Subscription} />
  }
  return null
}

export default FeedItem
