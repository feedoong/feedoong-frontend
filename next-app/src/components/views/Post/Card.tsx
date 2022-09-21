import Icons from 'assets/icons'
import * as S from './Card.style'
import * as CS from 'components/common/Card/Card.style'

const Card = () => {
  return (
    <S.Container>
      <S.Body>
        <S.LeftContainer>
          <S.ImageContainer />
          <S.BodyWrapper>
            <CS.Title>홍길동의 IT이야기</CS.Title>
            <CS.Contents>{`https://medium.com/myrealtrip-product/`}</CS.Contents>
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
