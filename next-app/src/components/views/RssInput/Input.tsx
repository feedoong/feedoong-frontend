import * as S from './RssInputContainer.style'

interface Props {
  isValid?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ isValid, onChange }: Props) => {
  return (
    <S.InputWrapper isValid={isValid}>
      <S.Input
        type="text"
        placeholder="URL을 추가해서 피드로 모아보세요!"
        onChange={onChange}
      />
    </S.InputWrapper>
  )
}

export default Input
