import type { Item } from 'types/feeds'
import { getFormatDate } from 'utils'
import { Container, Title } from './CardType.style'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'
import Anchor from '../Anchor'
import * as S from './FeedItem.style'
import useToggleLike from './hooks/useToggleLike'

import Icons from 'assets/icons'

interface Props {
  item: Item
}

/**
 * TODO: 북마크 상태 변경 시 깜빡임 문제
 * @param item
 * @constructor
 */

const CardType = ({ item }: Props) => {
  const { handleRead, handleLike } = useToggleLike(item)

  return (
    <Container>
      <S.Body>
        <Flex gap={10} justify="between" style={{ flex: 'auto' }}>
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
          {item.imageUrl && (
            <S.Thumbnail src={item.imageUrl} width={80} height={80} />
          )}
        </Flex>
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
