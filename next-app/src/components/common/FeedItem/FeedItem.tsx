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
      currentPage?: number
    }
  | {
      type: 'subscription'
      item: Subscription
      currentPage?: number
    }

const FeedItem = ({ type = 'card', item, currentPage = 1 }: Props) => {
  if (type === 'card') {
    return <CardType item={item as Item} currentPage={currentPage} />
  }
  if (type === 'grid') {
    return <GridType item={item as Item} currentPage={currentPage} />
  }
  if (type === 'subscription') {
    return <SubscriptionType item={item as Subscription} />
  }
  return null
}

export default FeedItem
