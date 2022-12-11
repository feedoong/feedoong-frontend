import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CACHE_KEYS } from 'services/cacheKeys'
import { submitViewedItem } from 'services/feeds'
import type { Item } from 'types/feeds'

const useReadPost = (item: Item) => {
  const client = useQueryClient()

  const { mutate: handleRead } = useMutation(
    CACHE_KEYS.viewItem(item.id),
    submitViewedItem,
    {
      onSuccess: () => client.invalidateQueries(CACHE_KEYS.feeds),
    }
  )

  return {
    handleRead,
  }
}

export default useReadPost
