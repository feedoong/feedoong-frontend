import Image from 'next/image'

import { AddButton } from 'components/common/FeedItem/Channel/Channel.style'
import PrivateFeedItemPopover from 'components/common/FeedItem/Popovers/PrivateFeedItemPopover'
import { subscribeChannel } from 'features/channel'
import { useGetUserProfile } from 'features/user/userProfile'
import { useCheckLoginModal } from 'features/auth/checkLogin'
import { useGetFeed } from './hooks/useGetFeed'

import Icons from 'assets/icons'

const ChannelSubscription = () => {
  const { data: feed } = useGetFeed()
  const channel = feed.channel

  const { openLoginModal, renderModal } = useCheckLoginModal()
  const { data: user } = useGetUserProfile()

  return channel.isSubscribed ? (
    <PrivateFeedItemPopover item={channel} />
  ) : (
    <>
      <AddButton
        onClick={() => {
          if (!user) {
            // TODO: 일관되게 로그인 모달을 띄우는 방법을 정의하기
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
      {/* TODO: @toss/use-overlay */}
      {renderModal()}
    </>
  )
}

export default ChannelSubscription
