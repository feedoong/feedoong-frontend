import { type ChangeEvent, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { checkUrlAsRss, submitRssUrl } from 'services/feeds'
import type { ErrorResponse } from 'types/common'
import { isRssUrlValid } from '../RssInputContainer.utils'

const useRssInput = () => {
  const client = useQueryClient()

  const [url, setUrl] = useState<string | undefined>(undefined)

  const { mutate } = useMutation(['/channels'], submitRssUrl, {
    onSuccess: () => {
      setUrl(undefined)
      client.invalidateQueries(['feeds'])
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      err.response?.data.exceptions.forEach((exception) => {
        alert(exception)
      })
    },
  })

  const { data } = useQuery(
    ['channels', 'preview', url],
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
  }
}

export default useRssInput
