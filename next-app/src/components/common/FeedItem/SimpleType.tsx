import Image from 'next/future/image'

import { Container, Title, Url } from './SimpleType.style'
import Icons from 'assets/icons'
import Flex from '../Flex'

const SimpleType = () => {
  return (
    <Container>
      <Flex justify="between">
        <Flex align="center" gap={8}>
          <Image
            alt="네이버 로고"
            src={Icons.NaverIcon}
            width={20}
            height={20}
          />
          <Title>
            내가 등록한 채널 타이틀은 최대 1줄까지 노출 가능, 1줄이 넘어가면 말
            줄임표 적용을 해주세요.
          </Title>
        </Flex>
        <Image
          alt="옵션 메뉴"
          src={Icons.DotsVertical}
          width={16}
          height={16}
          style={{ cursor: 'pointer' }}
        />
      </Flex>
      <Url>{`https://medium.com/myrealtrip-product/`}</Url>
    </Container>
  )
}

export default SimpleType
