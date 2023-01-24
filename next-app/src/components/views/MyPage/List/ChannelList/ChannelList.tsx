import { useRouter } from 'next/router'

import List from '..'
import useChannelList from './hooks/useChannelList'
import { ITEMS_PER_PAGE } from 'components/views/MyPost/PostContainer.const'
import Flex from 'components/common/Flex'
import Paging from 'components/common/Paging'

const ChannelList = () => {
  const router = useRouter()
  const { listData, isLoading, isEmptyList, emptyContent, totalCount } =
    useChannelList()

  const totalPage = totalCount ? Math.ceil(totalCount / ITEMS_PER_PAGE) : 1

  return (
    <>
      <List
        type="channel"
        listData={listData}
        isLoading={isLoading}
        isEmptyList={isEmptyList}
        emptyContent={emptyContent}
        itemsPerPage={ITEMS_PER_PAGE}
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
