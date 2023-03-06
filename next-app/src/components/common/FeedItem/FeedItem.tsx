import { SwitchCase } from '@toss/react'

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
  return (
    <SwitchCase
      value={type}
      caseBy={{
        card: <CardType type="card" item={item as Item} />,
        'card/private': (
          <CardType type="card/private" item={item as PrivateItem} />
        ),
        subscription: (
          <SubscriptionType type="subscription" item={item as Subscription} />
        ),
        'subscription/private': (
          <SubscriptionType
            type="subscription/private"
            item={item as PrivateSubscription}
          />
        ),
      }}
      defaultComponent={null}
    />
  )
}

export default FeedItem
