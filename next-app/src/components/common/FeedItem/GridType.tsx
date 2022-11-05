import { colors } from 'styles/colors'
import type { Item } from 'types/feeds'
import { getFormatDate } from 'utils'
import {
  Container,
  Description,
  GridTypeWrapper,
  Title,
} from './GridType.style'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'
import * as S from './FeedItem.style'
import Anchor from '../Anchor'
import useToggleLike from './hooks/useToggleLike'

import Icons from 'assets/icons'

interface Props {
  item: Item
}

const GridType = ({ item }: Props) => {
  const { handleRead, handleLike } = useToggleLike(item)

  return (
    <Container>
      {item.imageUrl && (
        <div
          style={{
            height: '160px',
            backgroundColor: colors.gray300,
          }}
        >
          <img
            alt="채널 로고"
            src={item.imageUrl}
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      <GridTypeWrapper imageUrl={item.imageUrl}>
        <Flex
          gap={8}
          direction="column"
          style={{ height: !!item.imageUrl ? 'auto' : '206px' }}
        >
          <S.Body>
            <Anchor
              href={item.link}
              target="_blank"
              onClick={() => handleRead(item.id)}
            >
              <Title isImageExist={!!item.imageUrl}>{item.title}</Title>
            </Anchor>
          </S.Body>
          {!item.imageUrl && <Description>{item.description}</Description>}
        </Flex>
        <div>
          <Divider mb={12} />
          <S.Footer>
            <S.PostMeta>
              <img
                alt="채널 로고"
                src={item.channelImageUrl ?? Icons.Account}
                width={20}
                height={20}
              />
              <S.Author isGridType>{item.channelTitle}</S.Author>
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
        </div>
      </GridTypeWrapper>
    </Container>
  )
}

export default GridType
