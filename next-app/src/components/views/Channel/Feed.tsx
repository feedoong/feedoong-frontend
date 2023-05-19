import FeedItem from 'components/common/FeedItem'
import { useGetFeed } from './hooks/useGetFeed'

const Feed = () => {
  const { data: feed } = useGetFeed()

  return (
    <>
      {feed?.items.map((item) => (
        <FeedItem key={item.id} type="post" item={item} />
      ))}
    </>
  )
}

export default Feed
