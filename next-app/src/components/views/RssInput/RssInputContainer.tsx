import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

import Input from './Input'
import Icons from 'assets/icons'
import * as S from './RssInputContainer.style'
import { checkURLValid } from 'utils'

const RssInputContainer = () => {
  const [url, setUrl] = useState<string | undefined>(undefined)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const isRssUrlValid = (_url?: string) => {
    if (_url === undefined) {
      return true
    }
    return checkURLValid(_url)
  }

  return (
    <S.Container>
      <S.Wrapper>
        <Input isValid={isRssUrlValid(url)} onChange={handleInput} />
        <S.AddButton>
          <Image alt="add 버튼" src={Icons.Add} width={20} height={20} />
        </S.AddButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default RssInputContainer
