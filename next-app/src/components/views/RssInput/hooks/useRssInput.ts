import { type ChangeEvent, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import { isRssUrlValid } from '../RssInputContainer.utils'
import { CACHE_KEYS } from 'services/cacheKeys'
import Toast from 'components/common/Toast'

const useRssInput = () => {
  const client = useQueryClient()

  const [url, setUrl] = useState<string | undefined>(undefined)

  const { mutate } = useMutation(['/channels'], submitRssUrl, {
    onSuccess: () => {
      setUrl(undefined)
      client.invalidateQueries(CACHE_KEYS.feeds)
      Toast.show({ content: '새로운 채널이 추가 되었습니다.' })
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hi')
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
