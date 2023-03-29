import type { AxiosError } from 'axios'

import Toast from 'components/common/Toast'
import { submitRssUrl } from 'services/feeds'
import type { Channel } from 'types/subscriptions'
import type { ErrorBody } from 'utils/errors'
import { getAxiosError } from 'utils/errors'

export const addChannel = async (item: Channel) => {
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
