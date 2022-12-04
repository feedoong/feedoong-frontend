import { useState } from 'react'
import Image from 'next/image'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { Subscription } from 'types/subscriptions'
import { CACHE_KEYS } from 'services/cacheKeys'
import { deleteSubscription } from 'services/subscriptions'
import { colors } from 'styles/colors'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Anchor from '../Anchor'
import Popover from '../Popover'
import Toast from '../Toast'
import Dialog from '../Dialog'

import { Container, Title, Url } from './SubscriptionType.style'

import Icons from 'assets/icons'

interface Props {
  item: Subscription
}

const SubscriptionType = ({ item }: Props) => {
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
    <Container>
      <Flex justify="between">
        <Flex align="center" gap={8}>
          <img
            alt="채널 로고"
            src={item.imageUrl ?? Icons.Account}
            width={20}
            height={20}
            style={{ borderRadius: '50%' }}
          />
          <Anchor href={'/mypage/channels/' + item.id.toString()}>
            <Title>{item.title}</Title>
          </Anchor>
        </Flex>

        <Popover
          placement="bottom-start"
          render={() => (
            <Popover.Layout>
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
      </Flex>
      <Anchor href={item.url} target="_blank">
        <Url>{item.description}</Url>
      </Anchor>
    </Container>
  )
}

export default SubscriptionType
