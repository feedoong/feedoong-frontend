import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, type ChangeEvent } from 'react'

import Notification from 'components/common/Notification'
import { CACHE_KEYS } from 'services/cacheKeys'
import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import { getAxiosError, isAxiosError } from 'utils/errors'
import { ChannelToast } from '../RssInputContainer.utils'

const useRssInput = () => {
  const client = useQueryClient()
  // state 하나에만 전체 로직이 의존하므로 좋지 않은 구조인듯함
  // 상태 관리 하는 부분과 data fetch 하는 부분을 분리해야할듯
  const [url, setUrl] = useState('')
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)

  const { mutate, isLoading: isSubmitting } = useMutation(
    ['/channels'],
    submitRssUrl,
    {
      onSuccess: () => {
        setUrl('')
        client.invalidateQueries(CACHE_KEYS.feeds)
        Notification.show({
          title: '채널 등록 완료',
          content: (
            <p>
              등록 완료된 채널은 내 프로필 &gt; 등록한 채널 에서 확인할 수
              있습니다.
            </p>
          ),
        })
      },
      onError: (err) => {
        if (isAxiosError(err)) {
          const errorMessage = getAxiosError(err).message

          ChannelToast.failAddChannel(errorMessage)
        }
      },
    }
  )

  const handleInput = (e: ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === 'string') {
      setUrl(e)
      return
    }
    setUrl(e.target.value)
  }

  /**
   * @description preventDefault를 사용할 필요가 있을 때는 이벤트 객체를 넣어줄 것
   */
  const onSubmit = async <T = HTMLFormElement,>(e?: React.FormEvent<T>) => {
    try {
      e?.preventDefault()

      setIsPreviewLoading(true)
      const { url: siteUrl, feedUrl } = await checkUrlAsRss(url)

      mutate({ url: siteUrl, feedUrl })
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = getAxiosError(error).message

        ChannelToast.failAddChannel(errorMessage)
      }
    } finally {
      setIsPreviewLoading(false)
    }
  }

  return {
    url,
    onSubmit,
    handleInput,
    isSubmitting: isSubmitting || isPreviewLoading,
  }
}

export default useRssInput
