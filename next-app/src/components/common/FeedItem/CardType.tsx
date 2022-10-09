import Image from 'next/image'

import type { Item } from 'types/feeds'
import Icons from 'assets/icons'
import { getFormatDate } from 'utils'

import { Container, Title } from './CardType.style'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'

import * as S from './FeedItem.style'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { likeItem } from 'services/feeds'

interface Props {
  item: Item
}

const CardType = ({ item }: Props) => {
  const client = useQueryClient()
  const { mutate: handleLike } = useMutation(['likeItem', item.id], likeItem, {
    onSuccess: () => {
      client.invalidateQueries(['feeds'])
    },
  })

  return (
    <Container>
      <S.Body>
        <S.BodyWrapper>
          <Title>{item.title}</Title>
          <S.Contents>{item.description}</S.Contents>
        </S.BodyWrapper>
        <S.ThumbnailEmpty />
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
            onClick={() => handleLike(String(item.id))}
          />
        </Flex>
      </S.Footer>
    </Container>
  )
}

export default CardType
