import Icons from 'assets/icons'
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
import { FeedItem } from 'shared/ui/FeedItem'
import { getFormatDate, getWellKnownChannelImg } from 'utils'
import { useRouter } from 'next/navigation'

interface Props extends UserItemDTO {
  isSomeoneLoggedIn: boolean
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
  isSomeoneLoggedIn,
  ...rest
}: Props) => {
  const router = useRouter()
  const { handleLike } = useToggleLike({ id, isLiked })
  const { handleRead } = useReadPost({ id })

  const goToChannelPage = (channelId: number) => {
    router.push(`/channels/${channelId}`)
  }

  return (
    <FeedItem.Container>
      <FeedItem.Body>
        <Flex gap={6} direction="column" style={{ marginRight: '20px' }}>
          <Anchor href={link} target="_blank" onClick={() => handleRead(id)}>
            <FeedItem.Title>{title}</FeedItem.Title>
          </Anchor>
          <Anchor href={link} target="_blank" onClick={() => handleRead(id)}>
            <FeedItem.Contents>{description}</FeedItem.Contents>
          </Anchor>
        </Flex>
        {imageUrl && (
          <FeedItem.Thumbnail src={imageUrl} width={90} height={90} />
        )}
      </FeedItem.Body>

      <FeedItem.Footer>
        <Flex gap={8}>
          <LogoIcon
            diameter={getDiameterByType('card')}
            src={channelImageUrl ?? getWellKnownChannelImg(String(link))}
          />
          <FeedItem.ChannelTitle onClick={() => goToChannelPage(channelId)}>
            {channelTitle}
          </FeedItem.ChannelTitle>

          <FeedItem.SubText>
            {getFormatDate(publishedAt, 'YYYY.MM.DD')}
          </FeedItem.SubText>
        </Flex>

        <Flex gap={8}>
          {isSomeoneLoggedIn && (
            <FeedItem.ImageButton
              alt="북마크"
              src={isLiked ? Icons.Bookmark : Icons.BookmarkDeactive}
              width={16}
              height={16}
              onClick={() => handleLike(String(id))}
              priority
            />
          )}
          <FeedItem.ImageButton
            alt="링크 복사"
            src={Icons.Link}
            width={16}
            height={16}
            onClick={() => copyToClipboard(String(link))}
            priority
          />
        </Flex>
      </FeedItem.Footer>
    </FeedItem.Container>
  )
}
