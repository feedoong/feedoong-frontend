import Image from 'next/image'

import { AddButton } from 'components/common/FeedItem/Channel/Channel.style'
import PrivateFeedItemPopover from 'components/common/FeedItem/Popovers/PrivateFeedItemPopover'
import { subscribeChannel } from 'features/channel'
import type { Channel } from 'types/subscriptions'
import { useGetUserProfile } from 'features/user/userProfile'
import { useCheckLoginModal } from 'features/auth/checkLogin'

import Icons from 'assets/icons'

interface Props {
  channel: Channel
}

const ChannelSubscription = ({ channel }: Props) => {
  const { openLoginModal, renderModal } = useCheckLoginModal()

  const { data: user } = useGetUserProfile()

  return channel.isSubscribed ? (
    <PrivateFeedItemPopover item={channel} />
  ) : (
    <>
      <AddButton
        onClick={() => {
          if (!user) {
            return openLoginModal()
          }
          subscribeChannel(channel)
        }}
      >
        <Image
          src={Icons.AddMono}
          width={20}
          height={20}
          alt="채널 추가"
          priority
        />
      </AddButton>
      {renderModal()}
    </>
  )
}

export default ChannelSubscription
