import type { ChangeEvent } from 'react'
import Image from 'next/image'

import { isRssUrlValid } from './RssInputContainer.utils'
import Input from './Input'

import Icons from 'assets/icons'

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

export default BlogUrlInput
