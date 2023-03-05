import Image from 'next/image'

import Anchor from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import { copyToClipboard } from '../FeedItem.utils'
import type { PrivateSubscription } from 'types/subscriptions'

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
              <Popover.Item
                icon={
                  <Image
                    src={Icons.Folder}
                    width={20}
                    height={20}
                    alt="채널 상세"
                    priority
                  />
                }
              >
                채널 상세
              </Popover.Item>
            </Anchor>
            <Popover.Item
              onClick={() => copyToClipboard(item.url)}
              icon={
                <Image
                  src={Icons.Link}
                  width={20}
                  height={20}
                  alt="링크 복사"
                  priority
                />
              }
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
