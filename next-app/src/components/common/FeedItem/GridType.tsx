import Image from 'next/image'

import Icons from 'assets/icons'
import { colors } from 'styles/colors'
import type { Item } from 'types/feeds'

import { getFormatDate } from 'utils'

import { Container, GridTypeWrapper, Title } from './GridType.style'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'

import * as S from './FeedItem.style'

interface Props {
  item: Item
}

const GridType = ({ item }: Props) => {
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
          <Title>{item.title}</Title>
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
            <S.Date>{getFormatDate(item.publishedAt, 'YYYY.MM.DD')}</S.Date>
          </S.PostMeta>
          <Flex gap={12}>
            <S.CopyLinkButton
              alt="링크 복사"
              src={Icons.Link}
              width={16}
              height={16}
              onClick={() => copyToClipboard(item.link)}
            />
            <S.Bookmark
              alt="북마크"
              src={item.isLiked ? Icons.Bookmark : Icons.BookmarkDeactive}
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
