import { infiniteQueryOptions } from '@tanstack/react-query'

import { getItemsUsingGET } from 'services/types/_generated/item'

export const itemQueries = {
  all: () => ['item'],
  list: () =>
    infiniteQueryOptions({
      queryKey: [...itemQueries.all(), 'list'],
      queryFn: ({ pageParam = 1 }) => {
        return getItemsUsingGET({
          page: pageParam,
          size: 10,
        })
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.items.length === 10 ? lastPage.next : undefined
      },
    }),
}
