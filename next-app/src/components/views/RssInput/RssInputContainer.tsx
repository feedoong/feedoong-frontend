import Image from 'next/legacy/image'
import { useRef } from 'react'

import Flex from 'components/common/Flex'
import Input from './Input'
import { isRssUrlValid } from './RssInputContainer.utils'
import { useRssInput } from './hooks'

import * as S from './RssInputContainer.style'

import Icons from 'assets/icons'

const RssInputContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { url, onSubmit, handleInput, isSubmitting } = useRssInput()

  const isSubmitEnabled = !isSubmitting && isRssUrlValid(url)

  return (
    <S.Container>
      <S.Form onSubmit={(e) => isSubmitEnabled && onSubmit(e)}>
        <Flex justify="center" align="center" style={{ position: 'relative' }}>
          <Input
            ref={inputRef}
            name="url"
            placeholder="URL을 추가해서 피드로 모아보세요!"
            isError={!!url && !isRssUrlValid(url)}
            onChange={handleInput}
            value={url}
          />
          <S.AddButton
            type="submit"
            isValid={isRssUrlValid(url)}
            disabled={!isSubmitEnabled}
          >
            <Image
              alt="add 버튼"
              src={Icons.Add}
              width={20}
              height={20}
              priority
            />
          </S.AddButton>
          {!!url && isRssUrlValid(url) === false && (
            <S.Error>
              RSS 추가를 할 수 없는 형식의 링크입니다.{' '}
              <S.UnderLine>RSS 링크를 찾는 법</S.UnderLine>을 참고해주세요.
            </S.Error>
          )}
        </Flex>
      </S.Form>
    </S.Container>
  )
}

export default RssInputContainer
