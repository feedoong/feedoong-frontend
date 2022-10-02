import Image from 'next/image'

import Icons from 'assets/icons'
import { colors } from 'styles/colors'
import * as S from './FeedItem.style'
import { Container, GridTypeWrapper, Title } from './GridType.style'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'

const GridType = () => {
  return (
    <Container>
      <div
        style={{
          height: '160px',
          backgroundColor: colors.gray300,
        }}
      />
      <GridTypeWrapper>
        <S.Body>
          <Title>제주 온 태국인 관광객 60% ‘입국 불허’…이탈자도 늘어</Title>
        </S.Body>
        <Divider />
        <S.Footer>
          <S.PostMeta>
            <Image
              alt="네이버 로고"
              src={Icons.NaverIcon}
              width={20}
              height={20}
            />
            <S.Author>네이버 뉴스</S.Author>
            <S.Date>2022.08.21</S.Date>
          </S.PostMeta>
          <Flex gap={12}>
            <S.CopyLinkButton
              alt="링크 복사"
              src={Icons.Link}
              width={16}
              height={16}
              onClick={() => copyToClipboard('url')}
            />
            <S.Bookmark
              alt="북마크"
              src={Icons.BookmarkDeactive}
              width={16}
              height={16}
            />
          </Flex>
        </S.Footer>
      </GridTypeWrapper>
    </Container>
  )
}

export default GridType
