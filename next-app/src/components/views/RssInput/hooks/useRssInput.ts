import { type ChangeEvent, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import { isRssUrlValid } from '../RssInputContainer.utils'
import { cacheKeys } from 'services/cacheKeys'
import Toast from 'components/common/Toast'

const useRssInput = () => {
  const client = useQueryClient()

  const [url, setUrl] = useState<string | undefined>(undefined)

  const { mutate } = useMutation(['/channels'], submitRssUrl, {
    onSuccess: () => {
      setUrl(undefined)
      client.invalidateQueries(['feeds'])
      Toast.show({ content: '새로운 채널이 추가 되었습니다.' })
    },
  })

  const { data, isLoading: isPreviewLoading } = useQuery(
    cacheKeys.preview(url),
    () => checkUrlAsRss(url!),
    {
      enabled: !!isRssUrlValid(url),
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
