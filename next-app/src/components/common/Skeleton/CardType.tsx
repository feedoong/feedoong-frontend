import Skeleton from 'react-loading-skeleton'

import { Container } from 'components/common/FeedItem/Card/CardType.style'
import * as S from '../FeedItem/FeedItem.style'
import Flex from 'components/common/Flex'
import Divider from 'components/common/Divider'

const SkeletonCardType = () => {
  return (
    <Container>
      <S.Body>
        <Flex gap={10} justify="between" style={{ flex: 'auto' }}>
          <S.BodyWrapper>
            <Skeleton count={1} />
            <Skeleton height={48} />
          </S.BodyWrapper>
          <Skeleton width={80} height={80} style={{ borderRadius: 10 }} />
        </Flex>
      </S.Body>
      <Divider />
      <S.Footer>
        <S.PostMeta>
          <Skeleton circle={true} width={20} height={20} />
          <Skeleton width={120} height={19} />
          <Skeleton width={60} height={19} />
        </S.PostMeta>
        <Flex gap={12} align="center">
          <Skeleton circle={true} width={16} height={16} />
          <Skeleton circle={true} width={16} height={16} />
        </Flex>
      </S.Footer>
    </Container>
  )
}

export default SkeletonCardType
