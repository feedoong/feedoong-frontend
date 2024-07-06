import { infiniteQueryOptions } from '@tanstack/react-query'

import { getItemsUsingGET } from 'services/types/_generated/item'

export const itemQueries = {
  all: () => ['item'],
  list: () =>
    infiniteQueryOptions({
      queryKey: [...itemQueries.all(), 'list'],
      queryFn: ({ pageParam }) => {
        return getItemsUsingGET({ page: pageParam, size: 10 })
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
        console.log(lastPage, lastPageParam)
        const hasNextPage = lastPage?.length === 20
        return hasNextPage ? lastPageParam + 1 : undefined
      },
    }),
}
