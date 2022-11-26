import Toast from 'components/common/Toast'
import * as S from 'components/views/Main/Top/Top.style'
const Top = () => {
  return (
    <S.Wrapper>
      <S.Title>인사이트가 피둥피둥</S.Title>
      <S.Subtitle>
        여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기
        <br />
        크롬 새탭에서 바로 시작하세요!
      </S.Subtitle>
      <S.GoogleLoginButton
        onClick={() => {
          Toast.show({
            content: '아직 준비 중인 기능입니다! 조금만 기다려주세요 :)',
          })
        }}
      >
        크롬에 추가하기
      </S.GoogleLoginButton>
    </S.Wrapper>
  )
}

export default Top
