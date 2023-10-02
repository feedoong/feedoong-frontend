import { useState } from 'react'
import { useRouter } from 'next/router'
import type { QueryKey } from '@tanstack/react-query'

import Anchor from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import Dialog from 'components/common/Dialog'
import { copyToClipboard } from '../FeedItem.utils'
import type { Channel } from 'types/subscriptions'
import { PopoverIcons } from './icons'
import { useUnsubscribeChannel } from 'features/channel'
import { CACHE_KEYS } from 'services/cacheKeys'
import Button from 'components/common/Button/Button'

interface Props {
  item: Channel
}

const PrivateFeedItemPopover = ({ item }: Props) => {
  const { query } = useRouter()
  const [isOpenDeleteChannelModal, setIsOpenDeleteChannelModal] =
    useState(false)

  const unsubscribeChannel = useUnsubscribeChannel(item, ({ queryKey }) => {
    if (isQueryMatched(queryKey)) {
      return isPageMatched(queryKey, query.page ? Number(query.page) : 1)
    }
    return false

    function isQueryMatched(queryKey: QueryKey) {
      return (
        Array.isArray(queryKey[0]) &&
        typeof queryKey[1] === 'object' &&
        queryKey[0].includes(CACHE_KEYS.feeds[0])
      )
    }

    function isPageMatched(queryKey: QueryKey, currentPage = 1) {
      const pageQuery = queryKey[1] as { page: number }
      return pageQuery.page === Number(currentPage)
    }
  })

  return (
    <>
      <Dialog isOpen={isOpenDeleteChannelModal}>
        <Dialog.Title>채널 구독을 해제하시겠습니까?</Dialog.Title>
        <Dialog.Content>
          <p>
            구독을 해제하더라도<br></br>저장한 게시물은 남아있게 됩니다.
          </p>
        </Dialog.Content>
        <Dialog.Actions>
          <Button outline onClick={() => setIsOpenDeleteChannelModal(false)}>
            취소
          </Button>
          <Button
            onClick={() => {
              unsubscribeChannel()
              setIsOpenDeleteChannelModal(false)
            }}
          >
            구독 해제
          </Button>
        </Dialog.Actions>
      </Dialog>

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
            <Popover.Item
              onClick={() => setIsOpenDeleteChannelModal(true)}
              color="var(--color-error)"
              icon={PopoverIcons.구독_해제}
            >
              구독 해제
            </Popover.Item>
          </Popover.Layout>
        )}
      >
        {/* TODO: 내부의 open state를 외부로 노출 시키는 방법 (ex. render props) */}
        <span>{PopoverIcons.옵션_메뉴}</span>
      </Popover>
    </>
  )
}

export default PrivateFeedItemPopover
