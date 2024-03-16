import React, { forwardRef } from 'react'
import { useRouter } from 'next/navigation'

import { useGetUserProfile } from 'features/user/userProfile'
import ProfilePopover from './ProfilePopover'
import { ROUTE } from 'constants/route'
import LogoDesktopNoBackground from 'components/common/LogoDesktop'

import * as S from './Nav.style'

const Nav = forwardRef<HTMLDivElement>(function TopNavBar(props, ref) {
  const router = useRouter()
  const { data: userProfile } = useGetUserProfile()

  return (
    <S.TopNavContainer ref={ref}>
      <S.LogoButton onClick={() => router.push('/')}>
        <LogoDesktopNoBackground color={'var(--color-black)'} />
        <S.Feedoong>Feedoong</S.Feedoong>
      </S.LogoButton>

      {userProfile?.name ? (
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
        <S.GoToSignUpButton onClick={() => router.push(ROUTE.SIGN_UP)}>
          피둥 시작하기
        </S.GoToSignUpButton>
      )}
    </S.TopNavContainer>
  )
})

export default Nav
