import { type ChangeEvent, useState, RefObject } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import { isRssUrlValid } from '../RssInputContainer.utils'
import { CACHE_KEYS } from 'services/cacheKeys'
import Toast from 'components/common/Toast'
import { getAxiosError, isAxiosError } from 'utils/errors'

interface Props {
  inputRef: RefObject<HTMLInputElement>
}

const useRssInput = ({ inputRef }: Props) => {
  const client = useQueryClient()

  const [url, setUrl] = useState<string>()

  const { mutate } = useMutation(['/channels'], submitRssUrl, {
    onSuccess: () => {
      // TODO: null과 undefined와 ""를 구분해야 한다.
      setUrl(undefined)
      if (inputRef.current) {
        inputRef.current.removeAttribute('value')
        // console.log(inputRef.current)
      }
      // FIXME: 캐시 만료가 안됨
      client.invalidateQueries(CACHE_KEYS.feeds)
      Toast.show({ content: '새로운 채널이 추가 되었습니다.' })
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        const errorMessage = getAxiosError(err).exceptions.join(', ')
        Toast.show({
          type: 'error',
          content: `채널 추가에 실패했습니다. ${errorMessage}`,
        })
      }
    },
  })

  const { data, isLoading: isPreviewLoading } = useQuery(
    CACHE_KEYS.preview(url),
    () => checkUrlAsRss(url!),
    {
      enabled: !!isRssUrlValid(url), // url이 유효한지 검사하는 조건이 정확하지 않음
      onError: () => {}, // TODO: 불필요한 요청 줄이는 방법 생각해보기
    }
  )

  const handleInput = (e: ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === 'string') {
      setUrl(e)
      return
    }
    setUrl(e.target.value)
  }

  const onSubmit = <T = HTMLFormElement>(e: React.FormEvent<T>) => {
    e.preventDefault()
    mutate({
      url: url,
      feedUrl: data?.feedUrl,
    })
  }

  return {
    url,
    onSubmit,
    handleInput,
    isPreviewLoading,
  }
}

export default useRssInput
