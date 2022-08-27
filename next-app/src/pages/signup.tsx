import styled from 'styled-components'

const SignUp = () => {
  return (
    <Wrapper>
      <Title>인사이트가 피둥피둥</Title>
      <Subtitle>
        여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기
        <br />
        크롬 새탭에서 바로 시작하세요!
      </Subtitle>
      <GoogleLoginButton>[WIP 🚀] 구글 로그인 버튼 자리</GoogleLoginButton>
      <Anchor>
        로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
      </Anchor>
      <Anchor>
        서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
      </Anchor>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #212322;
`

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  color: #fff;
  text-align: center;
  margin-bottom: 11px;
`

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #ccc;
  text-align: center;
`

const GoogleLoginButton = styled.button`
  margin: 40px 0;
`

const Anchor = styled.a`
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  color: #8c8c8c;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export default SignUp
