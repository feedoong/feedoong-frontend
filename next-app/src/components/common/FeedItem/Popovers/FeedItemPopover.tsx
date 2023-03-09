import Image from 'next/image'

import Anchor from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import { copyToClipboard } from '../FeedItem.utils'
import type { PrivateSubscription } from 'types/subscriptions'
import { PopoverIcons } from './icons'

import Icons from 'assets/icons'

interface Props {
  item: PrivateSubscription
}

const PrivateFeedItemPopover = ({ item }: Props) => {
  return (
    <>
      <Popover
        placement="bottom-start"
        render={() => (
          <Popover.Layout>
            <Anchor href={'/channels/' + item.id.toString()}>
              <Popover.Item icon={PopoverIcons.채널_상세}>
                채널 상세
              </Popover.Item>
            </Anchor>
            <Popover.Item
              onClick={() => copyToClipboard(item.url)}
              icon={PopoverIcons.링크_복사}
            >
              링크 복사
            </Popover.Item>
          </Popover.Layout>
        )}
      >
        <span>
          <Image
            alt="옵션 메뉴"
            src={Icons.DotsVertical}
            width={16}
            height={16}
            style={{ cursor: 'pointer' }}
            priority
          />
        </span>
      </Popover>
    </>
  )
}

export default PrivateFeedItemPopover
