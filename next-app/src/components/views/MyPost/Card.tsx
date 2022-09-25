import Icons from 'assets/icons'
import * as S from 'components/common/FeedItem/FeedItem.style'
import * as CS from 'components/common/FeedItem/FeedItem.style'

const Card = () => {
  return (
    <S.PostContainer>
      <S.PostBody>
        <S.LeftContainer>
          <S.ImageContainer />
          <S.PostBodyWrapper>
            <CS.Title>홍길동의 IT이야기</CS.Title>
            <CS.Contents>{`https://medium.com/myrealtrip-product/`}</CS.Contents>
          </S.PostBodyWrapper>
        </S.LeftContainer>

        <S.OptionButton
          alt="옵션 버튼"
          src={Icons.DotsVertical}
          width={16}
          height={16}
        />
      </S.PostBody>
    </S.PostContainer>
  )
}

export default Card
