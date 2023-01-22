import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CACHE_KEYS } from 'services/cacheKeys'
import { submitViewedItem } from 'services/feeds'
import type { Feed, Item } from 'types/feeds'

interface PrevDataType {
  pages: Feed[]
  pageParams: Array<number | null>
}

const useReadPost = (item: Item) => {
  const client = useQueryClient()

  const { mutate: handleRead } = useMutation(
    CACHE_KEYS.viewItem(item.id),
    submitViewedItem,
    {
      onSuccess: (data, variables) => {
        client.setQueryData<PrevDataType>(CACHE_KEYS.feeds, (prev) => {
          if (prev) {
            return {
              ...prev,
              pages: prev.pages.map((page) => {
                return {
                  ...page,
                  items: page.items.map((item) => {
                    return item.id === variables ? { ...item, ...data } : item
                  }),
                }
              }),
            }
          }
        })
      },
    }
  )

  return {
    handleRead,
  }
}

export default useReadPost
