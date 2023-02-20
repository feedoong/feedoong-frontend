import { useRouter } from 'next/router'

import List from '..'
import usePostList from './hooks/usePostList'
import { ITEMS_PER_PAGE } from 'components/views/MyPost/PostContainer.const'
import Flex from 'components/common/Flex'
import Paging from 'components/common/Paging'
import EmptyContents from 'components/common/EmptyContents'
import { SkeletonCardType } from 'components/common/Skeleton'
import FeedItem from 'components/common/FeedItem'

const PostList = () => {
  const router = useRouter()
  const { listData, isLoading, isEmptyList, totalCount } = usePostList()

  const totalPage = totalCount ? Math.ceil(totalCount / ITEMS_PER_PAGE) : 1

  return (
    <>
      <List
        renderList={() =>
          isLoading
            ? Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => {
                return <SkeletonCardType key={idx} />
              })
            : listData?.map((item) => (
                <FeedItem key={item.id} type="card" item={item} />
              ))
        }
        renderEmptyContent={() =>
          isEmptyList && <EmptyContents content="저장한 게시물이 없습니다" />
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

export default PostList
