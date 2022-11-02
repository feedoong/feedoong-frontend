import { type ChangeEvent, useState, RefObject } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import { CACHE_KEYS } from 'services/cacheKeys'
import Toast from 'components/common/Toast'
import { getAxiosError, isAxiosError } from 'utils/errors'

interface Props {
  inputRef: RefObject<HTMLInputElement>
}

const useRssInput = ({ inputRef }: Props) => {
  const client = useQueryClient()

  const [url, setUrl] = useState<string | undefined>()

  const { mutate, isLoading: isSubmitting } = useMutation(
    ['/channels'],
    submitRssUrl,
    {
      onSuccess: () => {
        // TODO: null과 undefined와 ""를 구분해야 한다.
        // setUrl(undefined)
        // if (inputRef.current) {
        //   inputRef.current.removeAttribute('value')
        // }
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

  const onSubmit = async <T = HTMLFormElement>(e: React.FormEvent<T>) => {
    try {
      e.preventDefault()
      if (!url) {
        Toast.show({
          type: 'error',
          content: 'URL을 입력해주세요.',
        })
        return
      }
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
    }
  }

  return {
    url,
    onSubmit,
    handleInput,
    isSubmitting,
  }
}

export default useRssInput
