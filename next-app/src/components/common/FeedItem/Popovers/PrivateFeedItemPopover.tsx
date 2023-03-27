import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import Anchor from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import Dialog from 'components/common/Dialog'
import Toast from 'components/common/Toast'
import { copyToClipboard } from '../FeedItem.utils'
import { colors } from 'styles/colors'
import { CACHE_KEYS } from 'services/cacheKeys'
import { deleteSubscription } from 'services/subscriptions'
import type { Subscription } from 'types/subscriptions'
import { PopoverIcons } from './icons'

interface Props {
  item: Subscription
}

const PrivateFeedItemPopover = ({ item }: Props) => {
  const [isOpenDeleteChannelModal, setIsOpenDeleteChannelModal] =
    useState(false)

  const client = useQueryClient()

  const { mutate } = useMutation(
    CACHE_KEYS.subscription(item.id),
    () => deleteSubscription(item.id),
    {
      onSuccess: () => {
        Toast.show({ content: '구독이 해제되었습니다.' })
        client.invalidateQueries({
          // TODO: 외부에서 무효화 할 키값을 전달할 아이디어가 없어서 일단 피드 형태 cache key에 feeds를 넣어두고 이를 이용해 무효화
          predicate: ({ queryKey }) => queryKey.includes(CACHE_KEYS.feeds[0]),
        })
      },
    }
  )

  return (
    <>
      <Dialog isOpen={isOpenDeleteChannelModal}>
        <Dialog.Title>채널을 삭제하시겠습니까?</Dialog.Title>
        <Dialog.Content>
          <p>
            채널을 삭제하더라도<br></br>저장한 게시물은 남아있게 됩니다.
          </p>
        </Dialog.Content>
        <Dialog.Actions>
          <button onClick={() => setIsOpenDeleteChannelModal(false)}>
            취소
          </button>
          <button
            className="confirm"
            onClick={() => {
              mutate()
              setIsOpenDeleteChannelModal(false)
            }}
          >
            삭제
          </button>
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
              color={colors.error}
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
