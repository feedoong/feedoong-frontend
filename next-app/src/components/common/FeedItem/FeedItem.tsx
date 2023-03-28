import { SwitchCase } from '@toss/react'

import { useGetUserProfile } from 'features/user/userProfile'
import type { Item, PrivateItem } from 'types/feeds'
import type { PrivateSubscription, Subscription } from 'types/subscriptions'
import { PrivateCardType, PublicCardType } from './Card/CardType'
import {
  PrivateSubscriptionType,
  PublicSubscriptionType,
} from './Subscription/SubscriptionType'

type Props =
  | {
      type: 'card'
      item: Item | PrivateItem
      isPrivate?: boolean
    }
  | {
      type: 'subscription'
      item: Subscription | PrivateSubscription
      isPrivate?: boolean
    }

const FeedItem = ({ type, item, isPrivate }: Props) => {
  const { data: userProfile } = useGetUserProfile()
  const _isPrivate = isPrivate ?? userProfile

  if (type === 'card') {
    return (
      <SwitchCase
        value={_isPrivate ? 'card/private' : 'card'}
        caseBy={{
          card: <PublicCardType item={item as Item} />,
          'card/private': <PrivateCardType item={item as PrivateItem} />,
        }}
        defaultComponent={null}
      />
    )
  }
  if (type === 'subscription') {
    return (
      <SwitchCase
        value={_isPrivate ? 'subscription/private' : 'subscription'}
        caseBy={{
          subscription: <PublicSubscriptionType item={item as Subscription} />,
          'subscription/private': (
            <PrivateSubscriptionType item={item as PrivateSubscription} />
          ),
        }}
        defaultComponent={null}
      />
    )
  }
  return null
}

export default FeedItem
