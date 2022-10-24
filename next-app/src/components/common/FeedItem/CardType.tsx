import Image from 'next/image'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { Item } from 'types/feeds'
import Icons from 'assets/icons'
import { getFormatDate } from 'utils'
import { likeItem, submitViewedItem } from 'services/feeds'

import { Container, Title } from './CardType.style'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'
import Anchor from '../Anchor'
import { CACHE_KEYS } from 'services/cacheKeys'
import Toast from '../Toast'

import * as S from './FeedItem.style'

interface Props {
  item: Item
}

const CardType = ({ item }: Props) => {
  const client = useQueryClient()
  const { mutate: handleLike } = useMutation(
    CACHE_KEYS.likeItem(item.id),
    likeItem,
    {
      onSuccess: (data) => {
        client.invalidateQueries(CACHE_KEYS.feeds)
        client.invalidateQueries({
          predicate: ({ queryKey }) => queryKey[0] === CACHE_KEYS.likedItems,
        })
        let toastMessage = '게시물이 저장되었습니다.'
        if (!data.isLiked) {
          toastMessage = '게시물 저장이 해제되었습니다.'
        }
        Toast.show({ content: toastMessage })
      },
    }
  )
  const { mutate: handleRead } = useMutation(
    CACHE_KEYS.viewItem(item.id),
    submitViewedItem
  )

  return (
    <Container>
      <S.Body>
        <S.BodyWrapper>
          <Anchor
            href={item.link}
            target="_blank"
            onClick={() => handleRead(item.id)}
          >
            <Title>{item.title}</Title>
          </Anchor>
          <Anchor
            href={item.link}
            target="_blank"
            onClick={() => handleRead(item.id)}
          >
            <S.Contents>{item.description}</S.Contents>
          </Anchor>
        </S.BodyWrapper>
        <S.ThumbnailEmpty />
      </S.Body>
      <Divider />
      <S.Footer>
        <S.PostMeta>
          <img
            alt="채널 로고"
            src={item.channelImageUrl ?? Icons.Account}
            width={20}
            height={20}
          />
          <S.Author>{item.channelTitle}</S.Author>
          <S.Date>{getFormatDate(item.publishedAt, 'YYYY.MM.DD')}</S.Date>
        </S.PostMeta>
        <Flex gap={12} align="center">
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
