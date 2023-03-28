import { useRouter } from 'next/router'

import type { Item, PrivateItem } from 'types/feeds'
import { getFormatDate, getWellKnownChannelImg } from 'utils'
import { copyToClipboard, getDiameterByType } from '../FeedItem.utils'
import Flex from 'components/common/Flex'
import Divider from 'components/common/Divider'
import Anchor from 'components/common/Anchor'
import LogoIcon from 'components/common/LogoIcon'
import useToggleLike from '../hooks/useToggleLike'
import useReadPost from '../hooks/useReadPost'
import * as S from '../FeedItem.style'

import { CardActions, Container, Title } from './CardType.style'

import Icons from 'assets/icons'

/**
 * TODO: 북마크 상태 변경 시 깜빡임 문제
 * @param item
 * @constructor
 */

export const PrivateCardType = ({ item }: { item: PrivateItem }) => {
  const { handleLike } = useToggleLike(item)
  const { handleRead } = useReadPost(item)

  const { pathname } = useRouter()

  const { channelHref, target } = routerBranch(pathname, item)

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
          <LogoIcon
            diameter={getDiameterByType('card')}
            src={item.channelImageUrl ?? getWellKnownChannelImg(item.link)}
          />
          <S.Author href={channelHref} target={target}>
            {item.channelTitle}
          </S.Author>
          <S.Date>{getFormatDate(item.publishedAt, 'YYYY.MM.DD')}</S.Date>
        </S.PostMeta>
        <CardActions>
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
        </CardActions>
      </S.Footer>
    </Container>
  )
}

export const PublicCardType = ({ item }: { item: Item }) => {
  const { pathname } = useRouter()

  const { channelHref, target } = routerBranch(pathname, item)

  return (
    <Container>
      <S.Body>
        <Flex gap={10} justify="between" style={{ flex: 'auto' }}>
          <S.BodyWrapper>
            <Anchor href={item.link} target="_blank">
              <Title>{item.title}</Title>
            </Anchor>
            <Anchor href={item.link} target="_blank">
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
          <LogoIcon
            diameter={getDiameterByType('card')}
            src={item.channelImageUrl ?? getWellKnownChannelImg(item.link)}
          />
          <S.Author href={channelHref} target={target}>
            {item.channelTitle}
          </S.Author>
          <S.Date>{getFormatDate(item.publishedAt, 'YYYY.MM.DD')}</S.Date>
        </S.PostMeta>
        <CardActions>
          <S.CopyLinkButton
            alt="링크 복사"
            src={Icons.Link}
            width={16}
            height={16}
            onClick={() => copyToClipboard(item.link)}
            priority
          />
        </CardActions>
      </S.Footer>
    </Container>
  )
}

const routerBranch = (pathname: string, item: Item) => {
  const isDetailPage = pathname.includes('[id]')
  return {
    target: isDetailPage ? '_blank' : undefined,
    channelHref: isDetailPage
      ? item.link
      : '/channels/' + item.channelId.toString(),
  }
}
