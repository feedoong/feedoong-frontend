import { useMutation, useQueryClient } from '@tanstack/react-query'
import produce from 'immer'

import { CACHE_KEYS } from 'services/cacheKeys'
import { submitViewedPost } from 'services/feeds'
import type { Feed, Post, SubmitViewedPost } from 'types/feeds'
import { mergeObjectsByMutate } from 'utils/common'

interface PrevDataType {
  pages: Feed[]
  pageParams: Array<number | null>
}

const useReadPost = (item: Post) => {
  const client = useQueryClient()

  const { mutate: handleRead } = useMutation(
    CACHE_KEYS.viewItem(item.id),
    submitViewedPost,
    {
      onSuccess: (data, variables) => {
        client.setQueryData<PrevDataType>(CACHE_KEYS.feeds, (prev) => {
          if (!prev) {
            return
          }
          return getAfterReadData(prev, data, variables)
        })
      },
    }
  )

  return {
    handleRead,
  }
}

export default useReadPost

function getAfterReadData(
  prev: PrevDataType,
  data: SubmitViewedPost,
  variables: number
) {
  return produce(prev, (draft) => {
    const targetItem = draft.pages
      .flatMap((page) => page.items)
      .find((item) => item.id === variables)

    if (targetItem) {
      mergeObjectsByMutate(targetItem, data)
    }
    return draft
  })
}
