import Skeleton from 'react-loading-skeleton'

import {
  Container,
  GridTypeWrapper,
} from 'components/common/FeedItem/GridType.style'
import Flex from 'components/common/Flex'
import * as S from '../FeedItem/FeedItem.style'
import Divider from 'components/common/Divider'

const SkeletonGridType = () => {
  return (
    <Container>
      <GridTypeWrapper>
        <Flex gap={8} direction="column" style={{ height: '206px' }}>
          <Skeleton width={160} height={26} />
          <Skeleton width={263} height={168} />
        </Flex>
        <div>
          <Divider mb={12} />
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
        </div>
      </GridTypeWrapper>
    </Container>
  )
}

export default SkeletonGridType
