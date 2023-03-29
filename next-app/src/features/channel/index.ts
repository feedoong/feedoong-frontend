import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import Toast from 'components/common/Toast'
import { CACHE_KEYS } from 'services/cacheKeys'
import { submitRssUrl } from 'services/feeds'
import { deleteChannel } from 'services/subscriptions'
import type { Channel } from 'types/subscriptions'
import type { ErrorBody } from 'utils/errors'
import { getAxiosError } from 'utils/errors'

export const subscribeChannel = async (item: Channel) => {
  Toast.show({
    type: 'promise',
    fetchFn: submitRssUrl({ url: item.url, feedUrl: item.feedUrl }),
    content: '새로운 채널이 추가되었어요!',
    promiseContent: {
      loading: '채널을 등록중이에요',
      error: (err: AxiosError<ErrorBody, any>) =>
        `채널 추가에 실패했어요 😅 ${getAxiosError(err).message}`,
    },
    option: { duration: 3000 },
  })
}

export const useUnsubscribeChannel = (item: Channel) => {
  const client = useQueryClient()

  const { mutate } = useMutation(
    CACHE_KEYS.channel(item.id),
    () => deleteChannel(item.id),
    {
      onSuccess: () => {
        Toast.show({ content: '구독이 해제되었습니다.' })
        client.invalidateQueries({
          // TODO: 외부에서 무효화 할 키값을 전달할 아이디어가 없어서 일단 피드 형태 cache key에 feeds를 넣어두고 이를 이용해 무효화
          predicate: ({ queryKey }) => queryKey.includes(CACHE_KEYS.feeds[0]),
        })
      },
    }
  )

  return mutate
}
