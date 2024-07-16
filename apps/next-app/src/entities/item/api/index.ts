import { infiniteQueryOptions } from '@tanstack/react-query'

import { getFeeds } from 'services/feeds'
// import { getItemsUsingGET } from 'services/types/_generated/item'

export const itemQueries = {
  all: () => ['item'],
  list: () =>
    infiniteQueryOptions({
      queryKey: [...itemQueries.all(), 'list'],
      queryFn: ({ pageParam }) => {
        return getFeeds(pageParam)
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.items.length === 10 ? lastPage.next : undefined
      },
    }),
}
