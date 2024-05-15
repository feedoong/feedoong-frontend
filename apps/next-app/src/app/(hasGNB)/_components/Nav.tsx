import React, { forwardRef } from 'react'
// import { useRouter } from 'next/navigation'
import { cookies } from 'next/headers'

import ProfilePopover from 'components/common/Layout/Nav/ProfilePopover'
import LogoDesktopNoBackground from 'components/common/LogoDesktop'
import { getApiEndpoint } from 'envs'
import * as S from 'components/common/Layout/Nav/Nav.style'

async function getUserProfile() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')
  if (!accessToken) {
    return null
  }

  const res = await fetch(`${getApiEndpoint()}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status !== 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const NavForApp = forwardRef<HTMLDivElement>(
  async function TopNavBar(props, ref) {
    const userProfile = await getUserProfile()

    // const router = useRouter()
    // const { data: userProfile } = useGetUserProfile()

    return (
      <S.TopNavContainer ref={ref}>
        <S.LogoButton
        // onClick={() => router.push('/')}
        >
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
          <S.GoToSignUpButton
          // onClick={() => router.push(ROUTE.SIGN_UP)}
          // onClick={() => {
          //   console.log('click')
          // }}
          >
            피둥 시작하기
          </S.GoToSignUpButton>
        )}
      </S.TopNavContainer>
    )
  }
)

export default NavForApp
