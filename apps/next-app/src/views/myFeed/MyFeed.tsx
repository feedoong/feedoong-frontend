'use client'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

import { itemQueries } from 'entities/item/api'
import { PostFeedItem } from 'features/post/ui/PostFeedItem'
import Loading from 'components/common/Loading'

import * as S from './MyFeed.style'

interface Props {
  isLoggedIn: boolean
}

const MyFeed = ({ isLoggedIn }: Props) => {
  const {
    data: itemList,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useSuspenseInfiniteQuery(itemQueries.list())

  const { ref, inView } = useInView({ rootMargin: '25px' })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  return (
    <>
      <S.CardContainer>
        {itemList.pages.map((page) =>
          page.items.map((item) => (
            <PostFeedItem key={item.id} {...item} isLoggedIn={isLoggedIn} />
          ))
        )}
      </S.CardContainer>
      {isFetchingNextPage && <Loading />}
      {hasNextPage && <span ref={ref} />}
    </>
  )
}

export default MyFeed
