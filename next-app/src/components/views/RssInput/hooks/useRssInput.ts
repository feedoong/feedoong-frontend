import { type ChangeEvent, useState, RefObject } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import Toast from 'components/common/Toast'
import { getAxiosError, isAxiosError } from 'utils/errors'

const useRssInput = () => {
  const client = useQueryClient()

  const [url, setUrl] = useState('')
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)

  const { mutate, isLoading: isSubmitting } = useMutation(
    ['/channels'],
    submitRssUrl,
    {
      onSuccess: () => {
        setUrl('')
        client.invalidateQueries(CACHE_KEYS.feeds)
        Toast.show({ content: '새로운 채널이 추가 되었습니다.' })
      },
      onError: (err) => {
        if (isAxiosError(err)) {
          const errorMessage = getAxiosError(err).message
          Toast.show({
            type: 'error',
            content: `채널 추가에 실패했습니다. ${errorMessage}`,
          })
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
  const onSubmit = async <T = HTMLFormElement>(e?: React.FormEvent<T>) => {
    try {
      e?.preventDefault()
      if (!url) {
        Toast.show({
          type: 'error',
          content: 'URL을 입력해주세요.',
        })
        return
      }
      setIsPreviewLoading(true)
      const { url: siteUrl, feedUrl } = await checkUrlAsRss(url)
      mutate({
        url: siteUrl,
        feedUrl,
      })
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = getAxiosError(error).message
        Toast.show({
          type: 'error',
          content: `채널 추가에 실패했습니다. ${errorMessage}`,
        })
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
