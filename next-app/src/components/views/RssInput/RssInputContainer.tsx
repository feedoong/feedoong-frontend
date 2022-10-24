import Image from 'next/image'
import { useRef } from 'react'

import Icons from 'assets/icons'
import Flex from 'components/common/Flex'

import Input from './Input'
import { isRssUrlValid } from './RssInputContainer.utils'
import { useRssInput } from './hooks'
import * as S from './RssInputContainer.style'

const RssInputContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { url, onSubmit, handleInput, isPreviewLoading } = useRssInput({
    inputRef,
  })

  const isSubmitEnabled = !isPreviewLoading || isRssUrlValid(url)
  return (
    <S.Container>
      <form onSubmit={(e) => isSubmitEnabled && onSubmit(e)}>
        <Flex justify="center" align="center">
          <Input
            ref={inputRef}
            name="url"
            placeholder="URL을 추가해서 피드로 모아보세요!"
            isValid={isRssUrlValid(url)}
            onChange={handleInput}
            value={url}
            onKeyUp={(e) => e.key === 'Enter' && isSubmitEnabled && onSubmit(e)}
          />
          <S.AddButton
            type="submit"
            isValid={isRssUrlValid(url)}
            disabled={isPreviewLoading || !isRssUrlValid(url)}
          >
            <Image alt="add 버튼" src={Icons.Add} width={20} height={20} />
          </S.AddButton>
        </Flex>
      </form>
      {isRssUrlValid(url) === false && (
        <S.Error>
          RSS 추가를 할 수 없는 형식의 링크입니다.{' '}
          <S.UnderLine>RSS 링크를 찾는 법</S.UnderLine>을 참고해주세요.
        </S.Error>
      )}
    </S.Container>
  )
}

export default RssInputContainer
