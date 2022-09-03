import Image from 'next/image'
import * as S from './SignupContainer.style'
import Icons from 'assets/icons'

const SignUpContainer = () => {
  return (
    <S.Wrapper>
      <S.Title>인사이트가 피둥피둥</S.Title>
      <S.Subtitle>
        여기저기 둥둥 떠있는 나의 인사이트 컨텐츠들을 피둥에서 모아보기
        <br />
        크롬 새탭에서 바로 시작하세요!
      </S.Subtitle>
      <S.GoogleLoginButton>
        <S.ButtonContentsWrapper>
          <Image
            src={Icons.GoogleIcon}
            width={16}
            height={16}
            alt="구글 아이콘"
          />
          <p>구글 계정으로 3초 만에 시작하기</p>
        </S.ButtonContentsWrapper>
      </S.GoogleLoginButton>
      <S.Anchor>
        로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
      </S.Anchor>
      <S.Anchor>
        서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
      </S.Anchor>
    </S.Wrapper>
  )
}

export default SignUpContainer
