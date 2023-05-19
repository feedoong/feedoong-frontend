import Flex from 'components/common/Flex'
import { useGetFeed } from './hooks/useGetFeed'
import Paging from 'components/common/Paging'

const FeedPagination = () => {
  const { currentPage, setCurrentPage, totalPage } = useGetFeed()

  return (
    <Flex justify="center" style={{ width: '100%', padding: '44px 0' }}>
      <Paging
        totalPage={totalPage}
        currentPage={currentPage}
        movePage={(page: number) => setCurrentPage(page)}
      />
    </Flex>
  )
}

export default FeedPagination
