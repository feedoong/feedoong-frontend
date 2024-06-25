import type { UserItemDTO } from 'services/types/_generated/apiDocumentation.schemas'

interface Props extends UserItemDTO {
  isPrivate: boolean
}

export const PostFeedItem = ({ isPrivate, ...rest }: Props) => {
  return (
    
  )
}
