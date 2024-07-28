'use client'
import { forwardRef, Suspense } from 'react'

import * as S from 'components/common/Layout/Nav/Nav.style'
// import ProfilePopover from 'components/common/Layout/Nav/ProfilePopover'
// import { useGetUserProfile } from 'features/user/userProfile'
// import { GoToSignUpButton } from './GoToSignUpButton'
import { LogoButton } from './LogoButton'
import { Profile } from 'components/common/Layout/Nav/Profile'
import { getRefreshTokenFromCookie } from 'features/auth/token'

// NOTE: 서버 컴포넌트로 만들면 클라 측에서 갱신이 안됨
const Nav = forwardRef<HTMLDivElement>(function Nav(props, ref) {
  // const { data: userProfile } = useGetUserProfile()

  return (
    <S.TopNavContainer ref={ref}>
      <LogoButton />

      {getRefreshTokenFromCookie() && (
        <Suspense>
          <Profile />
        </Suspense>
      )}

      {/* {userProfile?.name ? (
        <ProfilePopover>
          <S.MyPageButton>
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
        </ProfilePopover>
      ) : (
        <GoToSignUpButton />
      )} */}
    </S.TopNavContainer>
  )
})

export default Nav
