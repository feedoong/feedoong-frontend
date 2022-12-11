import Image from 'next/legacy/image'

import Flex from 'components/common/Flex'
import Input from './Input'
import { isRssUrlValid } from './RssInputContainer.utils'
import { useRssInput } from './hooks'
import { ModalLayout, useModal } from 'components/common/Modal'
import Toast from 'components/common/Toast'
import Button from 'components/common/Button'

import * as S from './RssInputContainer.style'

import Icons from 'assets/icons'

const RssInputContainer = () => {
  const { handleOpen, renderModal } = useModal({
    content: (
      <ModalLayout title="RSS 수동으로 추가하기">
        <Flex direction="column" gap={12}>
          <input placeholder="블로그 URL을 입력해주세요" />
          <input placeholder="RSS URL을 입력해주세요" />
        </Flex>
        <Flex justify="end">
          <Button
            buttonStyle="secondary"
            onClick={() => {
              Toast.show({
                content: 'RSS 주소가 성공적으로 추가되었습니다.',
              })
            }}
          >
            RSS 추가하기
          </Button>
        </Flex>
      </ModalLayout>
    ),
  })

  const { url, onSubmit, handleInput, isSubmitting } = useRssInput()

  const isSubmitEnabled = !isSubmitting && isRssUrlValid(url)

  return (
    <S.Container>
      <S.Form onSubmit={(e) => isSubmitEnabled && onSubmit(e)}>
        <Flex justify="center" align="center" style={{ position: 'relative' }}>
          <Input
            name="url"
            placeholder="URL을 추가해서 피드로 모아보세요!"
            isError={!!url && !isRssUrlValid(url)}
            onChange={handleInput}
            value={url}
            renderInputIcon={({ selectedValue, clearValue }) => {
              return selectedValue ? (
                <Image
                  alt="삭제 버튼"
                  src={Icons.CancelCircle}
                  width={24}
                  height={24}
                  onClick={clearValue}
                />
              ) : (
                <Image
                  alt="RSS 직접 추가"
                  src={Icons.RssCircle}
                  width={24}
                  height={24}
                  onClick={handleOpen}
                />
              )
            }}
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
              <S.UnderLine onClick={handleOpen}>RSS 링크를 찾는 법</S.UnderLine>
              을 참고해주세요.
            </S.Error>
          )}
        </Flex>
      </S.Form>
      {renderModal()}
    </S.Container>
  )
}

export default RssInputContainer
