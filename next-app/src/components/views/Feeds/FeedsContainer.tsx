import Image from 'next/image'
import Card from 'components/common/Card'
import Icons from 'assets/icons'
import * as S from './FeedsContainer.style'

const FeedsContainer = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>홈 피드</S.Title>
        <S.SelectViewType>
          <S.ViewType
            alt="카드 뷰"
            src={Icons.CardViewIcon}
            width={16}
            height={16}
          />
          <S.ViewType
            alt="그리드 뷰"
            src={Icons.GridViewIcon}
            width={16}
            height={16}
          />
        </S.SelectViewType>
      </S.Header>
      <S.CardContainer>
        <Card />
        <Card />
        <Card />
      </S.CardContainer>
    </S.Container>
  )
}

export default FeedsContainer
