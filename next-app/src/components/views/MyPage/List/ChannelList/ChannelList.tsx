import { useRouter } from 'next/router'

import List from '..'
import useChannelList from './hooks/useChannelList'
import { ITEMS_PER_PAGE } from 'components/views/MyPost/PostContainer.const'
import Flex from 'components/common/Flex'
import Paging from 'components/common/Paging'
import { SkeletonSubscriptionType } from 'components/common/Skeleton'
import FeedItem from 'components/common/FeedItem'
import EmptyContents from 'components/common/EmptyContents'
import type { PrivateSubscription } from 'types/subscriptions'

const ChannelList = () => {
  const router = useRouter()
  const { listData, isLoading, isEmptyList, totalCount } = useChannelList()

  const totalPage = totalCount ? Math.ceil(totalCount / ITEMS_PER_PAGE) : 1

  return (
    <>
      <List
        renderList={() =>
          isLoading
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => {
                return <SkeletonSubscriptionType key={idx} />
              })
            : listData?.map((item) => (
                <FeedItem
                  key={item.id}
                  type="subscription/private"
                  item={item as PrivateSubscription}
                />
              ))
        }
        renderEmptyContent={() =>
          isEmptyList && <EmptyContents content="구독 중인 채널이 없습니다" />
        }
      />
      <Flex style={{ width: '100%', padding: '44px 0' }} justify="center">
        <Paging
          totalPage={totalPage}
          currentPage={Number(router.query.page) || 1}
          movePage={(page: number) =>
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                page,
              },
            })
          }
        />
      </Flex>
    </>
  )
}

export default ChannelList
