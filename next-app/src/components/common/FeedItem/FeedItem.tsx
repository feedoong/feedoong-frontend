import type { Item, PrivateItem } from 'types/feeds'
import type { PrivateSubscription, Subscription } from 'types/subscriptions'
import CardType from './CardType'
import SubscriptionType from './SubscriptionType'

export type FeedType = 'card' | 'subscription'

type Props =
  | {
      type: 'card'
      item: Item
    }
  | {
      type: 'card/private'
      item: PrivateItem
    }
  | {
      type: 'subscription'
      item: Subscription
    }
  | {
      type: 'subscription/private'
      item: PrivateSubscription
    }

const FeedItem = ({ type = 'card', item }: Props) => {
  if (type === 'card') {
    return <CardType type="card" item={item as Item} />
  }
  if (type === 'card/private') {
    return <CardType type="card/private" item={item as PrivateItem} />
  }
  if (type === 'subscription') {
    return <SubscriptionType type="subscription" item={item as Subscription} />
  }
  if (type === 'subscription/private') {
    return (
      <SubscriptionType
        type="subscription/private"
        item={item as PrivateSubscription}
      />
    )
  }
  return null
}

export default FeedItem
