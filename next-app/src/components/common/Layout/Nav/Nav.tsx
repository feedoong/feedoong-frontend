import React, { forwardRef, type Dispatch, type SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

import { getUserInfo, type UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { requiredAuthMatcher } from 'features/auth/requiredAuthMatcher'

import * as S from './Nav.style'

import Icons from 'assets/icons'

const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()
  const { data: userProfile } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo,
    {
      // TODO: 단일 포인트로 모아서 관리할 수 있는 방법 있는지 찾아보기
      enabled: requiredAuthMatcher(router.pathname),
    }
  )
  const name = userProfile?.name
  const profileImageUrl = userProfile?.profileImageUrl

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
