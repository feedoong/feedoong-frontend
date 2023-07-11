import type { Dispatch, SetStateAction } from 'react'
import { type ChangeEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'

import { ModalLayout, useModal } from 'components/common/Modal'
import Toast from 'components/common/Toast'
import Button from 'components/common/Button'
import { getAxiosError, isAxiosError } from 'utils/errors'
import { CACHE_KEYS } from 'services/cacheKeys'
import { checkUrlAsDirectRss, submitRssUrl } from 'services/feeds'
import Flex from 'components/common/Flex'
import Input from '../Input'
import { isRssUrlValid } from '../RssInputContainer.utils'

import Icons from 'assets/icons'

const useRssDirectInputModal = () => {
  const client = useQueryClient()
  const [rssDirectChannelUrl, setRssDirectChannelUrl] = useState('')
  const [isPreviewLoading, setIsPreviewLoading] = useState(false)
  const [rssDirectRssUrl, setRssDirectRssUrl] = useState('')

  const onSubmit = async <T = HTMLFormElement,>(e?: React.FormEvent<T>) => {
    try {
      e?.preventDefault()
      if (!rssDirectChannelUrl || !rssDirectRssUrl) {
        Toast.show({
          type: 'error',
          content: 'URL을 입력해주세요.',
        })
        return
      }
      setIsPreviewLoading(true)
      const { url: siteUrl, feedUrl } = await checkUrlAsDirectRss({
        homeUrl: rssDirectChannelUrl,
        rssFeedUrl: rssDirectRssUrl,
      })
      mutateRss({
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

  const { mutate: mutateRss, isLoading: isRssSubmitting } = useMutation(
    ['/channels'], // 키 값 바꿔야 하나?
    submitRssUrl,
    {
      onSuccess: () => {
        setRssDirectChannelUrl('')
        setRssDirectRssUrl('')

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

  const isSubmitEnabled =
    !isRssSubmitting &&
    isRssUrlValid(rssDirectChannelUrl) &&
    isRssUrlValid(rssDirectRssUrl)

  const { handleOpen, renderModal } = useModal({
    content: (
      <ModalLayout title="RSS 수동으로 추가하기" size="large">
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
          onSubmit={(e) => isSubmitEnabled && onSubmit(e)}
        >
          <Flex direction="column" gap={12}>
            <BlogUrlInput
              url={rssDirectChannelUrl}
              onChange={handleInput(setRssDirectChannelUrl)}
            />
            <RssUrlInput
              url={rssDirectRssUrl}
              onChange={handleInput(setRssDirectRssUrl)}
            />
          </Flex>
          <Flex justify="end">
            <Button
              type="submit"
              buttonStyle={isSubmitEnabled ? 'normal' : 'disabled'}
              disabled={!isSubmitEnabled}
            >
              RSS 추가하기
            </Button>
          </Flex>
        </form>
      </ModalLayout>
    ),
  })

  return {
    handleOpen,
    renderModal,
    onSubmit,
    isSubmitting: isRssSubmitting || isPreviewLoading,
  }
}

export default useRssDirectInputModal

const handleInput =
  (setState: Dispatch<SetStateAction<string>>) =>
  (e: ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === 'string') {
      setState(e)
      return
    }
    setState(e.target.value)
  }

const BlogUrlInput = ({
  url: rssDirectChannelUrl,
  onChange,
}: {
  url: string
  onChange: (e: ChangeEvent<HTMLInputElement> | string) => void
}) => (
  <Input
    placeholder="블로그 URL을 입력해주세요"
    isError={!!rssDirectChannelUrl && !isRssUrlValid(rssDirectChannelUrl)}
    onChange={onChange}
    value={rssDirectChannelUrl}
    inputStyle={{ width: '100%' }}
    renderInputIcon={({ selectedValue, clearValue }) =>
      selectedValue && (
        <Image
          style={{ cursor: 'pointer' }}
          alt="삭제 버튼"
          src={Icons.CancelCircle}
          width={24}
          height={24}
          onClick={clearValue}
        />
      )
    }
  />
)

const RssUrlInput = ({
  url: rssDirectRssUrl,
  onChange,
}: {
  url: string
  onChange: (e: ChangeEvent<HTMLInputElement> | string) => void
}) => (
  <Input
    placeholder="RSS URL을 입력해주세요"
    isError={!!rssDirectRssUrl && !isRssUrlValid(rssDirectRssUrl)}
    onChange={onChange}
    value={rssDirectRssUrl}
    inputStyle={{ width: '100%' }}
    renderInputIcon={({ selectedValue, clearValue }) =>
      selectedValue && (
        <Image
          style={{ cursor: 'pointer' }}
          alt="삭제 버튼"
          src={Icons.CancelCircle}
          width={24}
          height={24}
          onClick={clearValue}
        />
      )
    }
  />
)
