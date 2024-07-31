'use client'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import Loading from 'components/common/Loading'
import { itemQueries } from 'entities/item/api'
import { PostFeedItem } from 'features/post/ui/PostFeedItem'

import * as S from './MyFeed.style'

interface Props {
  isLoggedIn: boolean
}

const MyFeed = ({ isLoggedIn }: Props) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useSuspenseInfiniteQuery(itemQueries.list())

  const { ref, inView } = useInView({ rootMargin: '25px' })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  return (
    <>
      <S.CardContainer>
        {data?.pages.map((page) =>
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
