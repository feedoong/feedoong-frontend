import Image from 'next/future/image'

import { Container, Title, Url } from './SubscriptionType.style'
import Icons from 'assets/icons'
import type { Subscription } from 'types/subscriptions'
import Flex from '../Flex'
import Anchor from '../Anchor'
import Popover from '../Popover'

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
          render={({ close, labelId, descriptionId }) => (
            <div style={{ width: 'max-content', background: 'black' }}>
              <h3 id={labelId}>Create new app</h3>
              <p id={descriptionId}>Keep the name short!</p>
              <input placeholder="Name" />
              <button onClick={close}>Create</button>
            </div>
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
