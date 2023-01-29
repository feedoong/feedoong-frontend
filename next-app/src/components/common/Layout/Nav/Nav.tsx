import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'

import { useGetUserProfile } from 'features/user/userProfile'

import * as S from './Nav.style'

import Icons from 'assets/icons'

const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()
  const { data: userProfile } = useGetUserProfile()

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

      {userProfile?.name ? (
        <S.MyPageButton onClick={() => router.push('/mypage')}>
          <S.UserName>{`${userProfile.name}님, 안녕하세요!`}</S.UserName>
          {userProfile.profileImageUrl && (
            <S.UserImage
              width={32}
              height={32}
              alt="프로필 사진"
              src={userProfile.profileImageUrl}
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
