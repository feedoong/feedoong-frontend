import { useRouter } from 'next/router'

import { colors } from 'styles/colors'
import type { Item } from 'types/feeds'
import { getFormatDate } from 'utils'
import { copyToClipboard } from './FeedItem.utils'
import Flex from '../Flex'
import Divider from '../Divider'
import Anchor from '../Anchor'
import useToggleLike from './hooks/useToggleLike'
import useReadPost from './hooks/useReadPost'

import * as S from './FeedItem.style'
import {
  Container,
  Description,
  GridTypeWrapper,
  Title,
} from './GridType.style'

import Icons from 'assets/icons'

interface Props {
  item: Item
}

const GridType = ({ item }: Props) => {
  const { handleLike } = useToggleLike(item)
  const { handleRead } = useReadPost(item)

  const { pathname } = useRouter()
  const isDetailPage = pathname === '/mypage/posts'

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
              <Title isViewed={item.isViewed} isImageExist={!!item.imageUrl}>
                {item.title}
              </Title>
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
              {isDetailPage ? (
                <S.Author href={item.link} target="_blank">
                  {item.channelTitle}
                </S.Author>
              ) : (
                <S.Author
                  isGridType
                  href={'/mypage/channels/' + item.channelId.toString()}
                >
                  {item.channelTitle}
                </S.Author>
              )}
              <S.Date>{getFormatDate(item.publishedAt, 'YYYY.MM.DD')}</S.Date>
            </S.PostMeta>
            <Flex gap={12} align="center">
              <S.CopyLinkButton
                alt="링크 복사"
                src={Icons.Link}
                width={16}
                height={16}
                onClick={() => copyToClipboard(item.link)}
                priority
              />
              <S.Bookmark
                alt="북마크"
                src={item.isLiked ? Icons.Bookmark : Icons.BookmarkDeactive}
                width={16}
                height={16}
                onClick={() => handleLike(String(item.id))}
                priority
              />
            </Flex>
          </S.Footer>
        </div>
      </GridTypeWrapper>
    </Container>
  )
}

export default GridType
