import Image from 'next/future/image'

import { Container, Title, Url } from './SubscriptionType.style'
import Icons from 'assets/icons'
import type { Subscription } from 'types/subscriptions'
import Flex from '../Flex'
import Anchor from '../Anchor'
import Popover from '../Popover'
import { colors } from 'styles/colors'
import { copyToClipboard } from './FeedItem.utils'

console.log({ Popover })

interface Props {
  item?: Subscription
}

const SubscriptionType = ({ item }: Props) => {
  return (
    <Container>
      <Flex justify="between">
        <Flex align="center" gap={8}>
          <img
            alt="채널 로고"
            src={item?.imageUrl ?? Icons.Account}
            width={20}
            height={20}
            style={{ borderRadius: '50%' }}
          />
          <Anchor href={item?.url} target="_blank">
            <Title>{item?.title}</Title>
          </Anchor>
        </Flex>
        <Popover
          render={() => (
            <Popover.Layout>
              <Popover.Item
                onClick={() => copyToClipboard(item?.url ?? '')}
                icon={
                  <Image
                    src={Icons.Link}
                    width={20}
                    height={20}
                    alt="링크 복사"
                  />
                }
              >
                링크 복사
              </Popover.Item>
              <Popover.Item
                color={colors.error}
                icon={
                  <Image
                    src={Icons.TrashCan}
                    width={20}
                    height={20}
                    alt="채널 삭제"
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
            />
          </span>
        </Popover>
      </Flex>
      <Anchor href={item?.url} target="_blank">
        <Url>{item?.description}</Url>
      </Anchor>
    </Container>
  )
}

export default SubscriptionType
