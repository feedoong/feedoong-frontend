import { useRouter } from 'next/navigation'

import Anchor from 'components/common/Anchor'
import {
  copyToClipboard,
  getDiameterByType,
} from 'components/common/FeedItem/FeedItem.utils'
import useReadPost from 'components/common/FeedItem/hooks/useReadPost'
import useToggleLike from 'components/common/FeedItem/hooks/useToggleLike'
import Flex from 'components/common/Flex'
import LogoIcon from 'components/common/LogoIcon'
import type { UserItemDTO } from 'services/types/_generated/apiDocumentation.schemas'
import { getFormatDate, getWellKnownChannelImg } from 'utils'

import * as S from './PostFeedItem.style'

import Icons from 'assets/icons'

interface Props extends UserItemDTO {
  isLoggedIn: boolean
}

export const PostFeedItem = ({
  id,
  title,
  channelId,
  channelImageUrl,
  link,
  imageUrl,
  description,
  channelTitle,
  publishedAt,
  isLiked,
  isLoggedIn,
}: Props) => {
  const router = useRouter()
  const { handleLike } = useToggleLike({ id, isLiked })
  const { handleRead } = useReadPost({ id })

  const goToChannelPage = (channelId: number) => {
    router.push(`/channels/${channelId}`)
  }

  return (
    <S.Container>
      <S.Body>
        <Flex gap={6} direction="column" style={{ marginRight: '20px' }}>
          <Anchor href={link} target="_blank" onClick={() => handleRead(id)}>
            <S.Title>{title}</S.Title>
          </Anchor>
          <Anchor href={link} target="_blank" onClick={() => handleRead(id)}>
            <S.Contents>{description}</S.Contents>
          </Anchor>
        </Flex>
        {imageUrl && <S.Thumbnail src={imageUrl} width={90} height={90} />}
      </S.Body>

      <S.Footer>
        <Flex gap={8}>
          <LogoIcon
            diameter={getDiameterByType('card')}
            src={channelImageUrl ?? getWellKnownChannelImg(String(link))}
          />
          <S.ChannelTitle onClick={() => goToChannelPage(channelId)}>
            {channelTitle}
          </S.ChannelTitle>

          <S.SubText>{getFormatDate(publishedAt, 'YYYY.MM.DD')}</S.SubText>
        </Flex>

        <Flex gap={8}>
          {isLoggedIn && (
            <S.ImageButton
              alt="북마크"
              src={isLiked ? Icons.Bookmark : Icons.BookmarkDeactive}
              width={16}
              height={16}
              onClick={() => handleLike(String(id))}
              priority
            />
          )}
          <S.ImageButton
            alt="링크 복사"
            src={Icons.Link}
            width={16}
            height={16}
            onClick={() => copyToClipboard(String(link))}
            priority
          />
        </Flex>
      </S.Footer>
    </S.Container>
  )
}
