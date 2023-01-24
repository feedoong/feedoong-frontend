import Anchor from 'components/common/Anchor'
import * as S from 'components/views/Introduce/Top/Top.style'
import { FEEDOONG_EXTENSION_URL } from 'constants/url'

const Top = () => {
  return (
    <S.Wrapper>
      <S.Title>인사이트가 피둥피둥</S.Title>
      <S.Subtitle>
        여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기
        <br />
        크롬 새탭에서 바로 시작하세요!
      </S.Subtitle>
      <Anchor href={FEEDOONG_EXTENSION_URL} target="_blank">
        <S.GoogleLoginButton>크롬에 추가하기</S.GoogleLoginButton>
      </Anchor>
    </S.Wrapper>
  )
}

export default Top
