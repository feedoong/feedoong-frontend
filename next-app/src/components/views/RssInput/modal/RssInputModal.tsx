import Image from 'next/image'

import Button from 'components/common/Button'
import Divider from 'components/common/Divider'
import Flex from 'components/common/Flex'
import * as S from './RssInputModal.styles'

import Icons from 'assets/icons'

interface Props {
  title: string
  submitButtonText: string
  onSubmit: VoidFunction
  description?: React.ReactNode
  onClose?: VoidFunction
}

const RssInputModal: React.FC<Props> = ({
  title,
  description,
  submitButtonText,
  onSubmit,
  onClose,
}) => {
  const handleSubmit = () => {
    onSubmit()
    // onClose?.()
  }

  return (
    <S.Container>
      <S.Header align="center" justify="between">
        <S.Title>{title}</S.Title>
        <Image
          onClick={onClose}
          src={Icons.Close}
          alt="close-icon"
          width="12"
          height="12"
        />
      </S.Header>
      <Divider />
      <S.Body>
        <Flex direction="column" gap={12}>
          <input placeholder="블로그 URL을 입력해주세요" />
          <input placeholder="RSS URL을 입력해주세요" />
        </Flex>
        <Flex justify="end">
          <Button buttonStyle="secondary" onClick={handleSubmit}>
            {submitButtonText}
          </Button>
        </Flex>
      </S.Body>
    </S.Container>
  )
}

export default RssInputModal
