import { useMutation, useQueryClient } from '@tanstack/react-query'

import Toast from 'components/common/Toast'
import { CACHE_KEYS } from 'services/cacheKeys'
import { likePost, unlikePost } from 'services/feeds'
import type { PrivatePost } from 'types/feeds'

const useToggleLike = (item: PrivatePost) => {
  const client = useQueryClient()

  const { mutate: handleLike } = useMutation(
    CACHE_KEYS.likePost(item.id),
    !item.isLiked ? likePost : unlikePost,
    {
      onSuccess: async (data) => {
        client.invalidateQueries(CACHE_KEYS.feeds)
        client.invalidateQueries({
          predicate: ({ queryHash }) => {
            if (queryHash.includes('likedItems')) {
              return true
            }
            return false
          },
        })

        let toastMessage = '게시물이 저장되었습니다.'
        if (!data.isLiked) {
          toastMessage = '게시물 저장이 해제되었습니다.'
        }
        Toast.show({ content: toastMessage })
      },
    }
  )

  return {
    handleLike,
  }
}

export default useToggleLike
