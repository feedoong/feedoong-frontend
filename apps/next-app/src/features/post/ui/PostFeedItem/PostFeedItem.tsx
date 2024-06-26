import Icons from 'assets/icons'
import {
  copyToClipboard,
  getDiameterByType,
} from 'components/common/FeedItem/FeedItem.utils'
import Flex from 'components/common/Flex'
import LogoIcon from 'components/common/LogoIcon'
import type { UserItemDTO } from 'services/types/_generated/apiDocumentation.schemas'
import { FeedItem } from 'shared/ui/FeedItem'
import { getFormatDate, getWellKnownChannelImg } from 'utils'

interface Props extends UserItemDTO {}

export const PostFeedItem = ({
  title,
  channelImageUrl,
  link,
  imageUrl,
  description,
  channelTitle,
  publishedAt,
  isLiked,
  ...rest
}: Props) => {
  return (
    <FeedItem.Container>
      <FeedItem.Body>
        <Flex gap={6} direction="column" style={{ marginRight: '20px' }}>
          <FeedItem.Title>{title}</FeedItem.Title>
          <FeedItem.Contents>{description}</FeedItem.Contents>
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
          <FeedItem.ChannelTitle>{channelTitle}</FeedItem.ChannelTitle>

          <FeedItem.SubText>
            {getFormatDate(publishedAt, 'YYYY.MM.DD')}
          </FeedItem.SubText>
        </Flex>
        <Flex gap={8}>
          <FeedItem.ImageButton
            alt="북마크"
            src={isLiked ? Icons.Bookmark : Icons.BookmarkDeactive}
            width={16}
            height={16}
            onClick={() => console.log('')}
            priority
          />
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
