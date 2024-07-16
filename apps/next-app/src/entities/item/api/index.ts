import { infiniteQueryOptions } from '@tanstack/react-query'
import type { AxiosInstance } from 'axios'

import { getFeeds, getFeedsServerSide } from 'services/feeds'
// import { getItemsUsingGET } from 'services/types/_generated/item'

export const itemQueries = {
  all: () => ['item'],
  list: (api?: AxiosInstance) =>
    infiniteQueryOptions({
      queryKey: [...itemQueries.all(), 'list'],
      queryFn: ({ pageParam }) => {
        if (api) {
          return getFeedsServerSide(api)(pageParam)
        }
        return getFeeds(pageParam)
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.items.length === 10 ? lastPage.next : undefined
      },
    }),
}
