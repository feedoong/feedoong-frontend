import Icons from 'assets/icons'
import * as S from './Card.style'
import { colors } from 'styles/colors'

const Card = () => {
  return (
    <S.Container>
      <S.Body>
        <S.LeftContainer>
          <S.ImageContainer />
          <S.BodyWrapper>
            <S.Title>홍길동의 IT이야기</S.Title>
            <S.Contents>{`https://medium.com/myrealtrip-product/`}</S.Contents>
          </S.BodyWrapper>
        </S.LeftContainer>

        <S.OptionButton
          alt="옵션 버튼"
          src={Icons.DotsVertical}
          width={16}
          height={16}
        />
      </S.Body>
    </S.Container>
  )
}

export default Card
