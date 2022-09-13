import Icons from 'assets/icons'
import * as S from './PostContainer.style'
import Card from './Card'

function PostContainer() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>내가 등록한 채널</S.Title>
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardContainer>
    </S.Container>
  )
}

export default PostContainer
