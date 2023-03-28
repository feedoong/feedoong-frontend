import { SwitchCase } from '@toss/react'

import { useGetUserProfile } from 'features/user/userProfile'
import type { Post, PrivatePost } from 'types/feeds'
import type { PrivateChannel, Channel } from 'types/subscriptions'
import { PrivatePostType, PublicPostType } from './Post'
import { PrivateChannelType, PublicChannelType } from './Channel'

type Props =
  | {
      type: 'post'
      item: Post | PrivatePost
      isPrivate?: boolean
    }
  | {
      type: 'channel'
      item: Channel | PrivateChannel
      isPrivate?: boolean
    }

const FeedItem = ({ type, item, isPrivate }: Props) => {
  const { data: userProfile } = useGetUserProfile()
  const _isPrivate = isPrivate ?? userProfile

  if (type === 'post') {
    return (
      <SwitchCase
        value={_isPrivate ? 'post/private' : 'post'}
        caseBy={{
          post: <PublicPostType item={item as Post} />,
          'post/private': <PrivatePostType item={item as PrivatePost} />,
        }}
        defaultComponent={null}
      />
    )
  }
  if (type === 'channel') {
    return (
      <SwitchCase
        value={_isPrivate ? 'channel/private' : 'channel'}
        caseBy={{
          channel: <PublicChannelType item={item as Channel} />,
          'channel/private': (
            <PrivateChannelType item={item as PrivateChannel} />
          ),
        }}
        defaultComponent={null}
      />
    )
  }
  return null
}

export default FeedItem
