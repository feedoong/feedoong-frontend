import type { ChangeEvent } from 'react'
import Image from 'next/image'

import Input from './Input'
import { isRssUrlValid } from './RssInputContainer.utils'

import Icons from 'assets/icons'

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

export default RssUrlInput
