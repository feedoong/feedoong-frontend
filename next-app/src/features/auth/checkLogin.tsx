import { useRouter } from 'next/router'
import styled from 'styled-components'

import Button from 'components/common/Button'
import Flex from 'components/common/Flex'
import { ModalLayout, useModal } from 'components/common/Modal'
import { getTypographyStyles } from 'styles/fonts'
import { ROUTE } from 'constants/route'

export const useCheckLoginModal = () => {
  const router = useRouter()

  const { handleOpen, renderModal, handleClose } = useModal({
    content: (
      <ModalLayout size="small" hasHeader={false}>
        <Flex direction="column" gap={12}>
          <Headline2_B color="var(--color-gray-900)">
            로그인이 필요합니다
          </Headline2_B>
          <Body1_M color="var(--color-gray-600)">
            로그인 페이지로 이동하시겠습니까?
          </Body1_M>
        </Flex>
        <Flex justify="end">
          <Button
            type="button"
            buttonStyle="normal"
            onClick={() => handleClose()}
          >
            취소
          </Button>
          <Button
            type="button"
            buttonStyle="secondary"
            onClick={() => router.push(ROUTE.SIGN_UP)}
          >
            로그인
          </Button>
        </Flex>
      </ModalLayout>
    ),
  })

  return {
    openLoginModal: handleOpen,
    renderModal,
  }
}

// TODO: 임시로 작성. Typography 컴포넌트로 추상화 필요
const Headline2_B = styled.div<{ color?: string }>`
  ${getTypographyStyles('Headline2_B')}

  color: ${({ color }) => color};
`

const Body1_M = styled.div<{ color?: string }>`
  ${getTypographyStyles('Body1_M')}

  color: ${({ color }) => color};
`
