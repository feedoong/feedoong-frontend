import { useMutation } from '@tanstack/react-query'

import { CACHE_KEYS } from 'services/cacheKeys'
import { submitViewedItem } from 'services/feeds'
import type { Item } from 'types/feeds'

const useReadPost = (item: Item) => {
  const { mutate: handleRead } = useMutation(
    CACHE_KEYS.viewItem(item.id),
    submitViewedItem
  )

  return {
    handleRead,
  }
}

export default useReadPost
