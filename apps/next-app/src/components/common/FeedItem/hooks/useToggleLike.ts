import { useMutation, useQueryClient } from '@tanstack/react-query'

import Toast from 'components/common/Toast'
import { CACHE_KEYS } from 'services/cacheKeys'
import { likePost, unlikePost } from 'services/feeds'
import type { PrivatePost } from 'types/feeds'

// TODO: 추후에 useToggleLike 자체를 재작성해야 함. 임시로 인자 타입 변경
const useToggleLike = (item: { id: number; isLiked: boolean }) => {
  const client = useQueryClient()

  const { mutate: handleLike } = useMutation({
    mutationKey: CACHE_KEYS.likePost(item.id),
    mutationFn: !item.isLiked ? likePost : unlikePost,
    onSuccess: async (data) => {
      client.invalidateQueries({ queryKey: CACHE_KEYS.feeds })
      client.invalidateQueries({
        predicate: ({ queryHash }) => {
          if (
            queryHash.includes('likedItems') ||
            queryHash.includes('likedPosts')
          ) {
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
  })

  return {
    handleLike,
  }
}

export default useToggleLike
