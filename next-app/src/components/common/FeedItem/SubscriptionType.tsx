import Image from "next/image";

import { Container, Title, Url } from './SubscriptionType.style'
import Icons from 'assets/icons'
import type { Subscription } from 'types/subscriptions'
import Flex from '../Flex'
import Anchor from '../Anchor'

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
        <Image
          alt="옵션 메뉴"
          src={Icons.DotsVertical}
          width={16}
          height={16}
          style={{ cursor: 'pointer' }}
        />
      </Flex>
      <Anchor href={item?.url} target="_blank">
        <Url>{item?.description}</Url>
      </Anchor>
    </Container>
  )
}

export default SubscriptionType
