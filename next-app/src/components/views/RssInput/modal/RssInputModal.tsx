import Button from 'components/common/Button'
import * as S from './RssInputModal.styles'

interface Props {
  title: string
  description: string
  yesButtonText: string
  noButtonText: string
  onSubmit: VoidFunction
  onClose?: VoidFunction
}

const RssInputModal: React.FC<Props> = ({
  title,
  description,
  yesButtonText,
  noButtonText,
  onSubmit,
  onClose,
}) => {
  const handleSubmit = () => {
    onSubmit()
    onClose?.()
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>
        <S.Text>{description}</S.Text>
      </S.Description>
      <S.Submit>
        <S.Cancel onClick={onClose}>{noButtonText}</S.Cancel>
        <Button buttonStyle="primary" onClick={handleSubmit}>
          {yesButtonText}
        </Button>
      </S.Submit>
    </S.Container>
  )
}

export default RssInputModal
