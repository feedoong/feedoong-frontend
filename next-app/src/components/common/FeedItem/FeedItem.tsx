import type { Item } from 'types/feeds'
import type { Subscription } from 'types/subscriptions'
import CardType from './CardType'
import GridType from './GridType'
import SubscriptionType from './SubscriptionType'

export type FeedType = 'card' | 'grid' | 'subscription'

type Props =
  | {
      type: Omit<FeedType, 'subscription'>
      item: Item
    }
  | {
      type: 'subscription'
      item: Subscription
    }

const FeedItem = ({ type = 'card', item }: Props) => {
  if (type === 'card') {
    return <CardType item={item as Item} />
  }
  if (type === 'grid') {
    return <GridType item={item as Item} />
  }
  if (type === 'subscription') {
    return <SubscriptionType item={item as Subscription} />
  }
  return null
}

export default FeedItem
