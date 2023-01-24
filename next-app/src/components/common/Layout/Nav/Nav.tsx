import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'

import { UserProfileAtom } from 'store/userProfile'

import * as S from './Nav.style'

import Icons from 'assets/icons'

const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()
  const { name, profileImageUrl } = useRecoilValue(UserProfileAtom)

  return (
    <S.TopNavContainer ref={ref}>
      <S.LogoButton onClick={() => router.push('/')}>
        <S.LogoImage
          priority
          src={Icons.LogoDesktop}
          alt="close-icon"
          width={32}
          height={32}
        />
        <S.Feedoong>Feedoong</S.Feedoong>
      </S.LogoButton>

      {name ? (
        <S.MyPageButton onClick={() => router.push('/mypage')}>
          <S.UserName>{`${name}님, 안녕하세요!`}</S.UserName>
          {profileImageUrl && (
            <S.UserImage
              width={32}
              height={32}
              alt="프로필 사진"
              src={profileImageUrl}
              priority
            />
          )}
        </S.MyPageButton>
      ) : (
        <S.GoToSignUpButton onClick={() => router.push('/signup')}>
          시작하기
        </S.GoToSignUpButton>
      )}
    </S.TopNavContainer>
  )
})

export default Nav
