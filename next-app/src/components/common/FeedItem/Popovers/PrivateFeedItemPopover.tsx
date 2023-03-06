import Image from 'next/image'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import Anchor from 'components/common/Anchor'
import Popover from 'components/common/Popover'
import { copyToClipboard } from '../FeedItem.utils'
import Dialog from 'components/common/Dialog'
import { colors } from 'styles/colors'
import { CACHE_KEYS } from 'services/cacheKeys'
import { deleteSubscription } from 'services/subscriptions'
import Toast from 'components/common/Toast'
import type { Subscription } from 'types/subscriptions'

import Icons from 'assets/icons'

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
          predicate: ({ queryKey }) => queryKey[0] === CACHE_KEYS.subscriptions,
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
          <button className="confirm" onClick={() => mutate()}>
            삭제
          </button>
        </Dialog.Actions>
      </Dialog>
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
            <Popover.Item
              onClick={() => setIsOpenDeleteChannelModal(true)}
              color={colors.error}
              icon={
                <Image
                  src={Icons.TrashCan}
                  width={20}
                  height={20}
                  alt="채널 삭제"
                  priority
                />
              }
            >
              채널 삭제
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
