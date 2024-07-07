'use client'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { itemQueries } from 'entities/item/api'

const MyFeed = () => {
  const { data } = useSuspenseInfiniteQuery(itemQueries.list())

  console.log('!!!!! d여기', data)
  return <div></div>
}

export default MyFeed
