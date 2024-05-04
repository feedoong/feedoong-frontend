import { AnchorNext } from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import type { PrivateChannel } from 'types/subscriptions'
import { copyToClipboard } from '../FeedItem.utils'
import { PopoverIcons } from './icons'

interface Props {
  item: PrivateChannel
}

const PublicFeedItemPopover = ({ item }: Props) => {
  return (
    <Popover
      placement="bottom-start"
      render={() => (
        <Popover.Layout>
          <AnchorNext href={'/channels/' + item.id.toString()} shallow>
            <Popover.Item icon={PopoverIcons.채널_상세}>채널 상세</Popover.Item>
          </AnchorNext>
          <Popover.Item
            onClick={() => copyToClipboard(item.url)}
            icon={PopoverIcons.링크_복사}
          >
            링크 복사
          </Popover.Item>
        </Popover.Layout>
      )}
    >
      <span>{PopoverIcons.옵션_메뉴}</span>
    </Popover>
  )
}

export default PublicFeedItemPopover
