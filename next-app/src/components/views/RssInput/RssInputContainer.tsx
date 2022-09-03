import Icons from 'assets/icons'
import Image from 'next/image'
import * as S from './RssInputContainer.style'

const RssInputContainer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="URL을 추가해서 피드로 모아보세요!"
          />
        </S.InputWrapper>
        <S.AddButton>
          <Image alt="add 버튼" src={Icons.Add} width={20} height={20} />
        </S.AddButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default RssInputContainer
