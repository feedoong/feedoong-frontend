import React, { forwardRef } from 'react'
import { cookies } from 'next/headers'

import ProfilePopover from 'components/common/Layout/Nav/ProfilePopover'
import { getApiEndpoint } from 'envs'
import * as S from 'components/common/Layout/Nav/Nav.style'
import { GoToSignUpButton } from './GoToSignUpButton'
import { LogoButton } from './LogoButton'

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

const Nav = forwardRef<HTMLDivElement>(async function Nav(props, ref) {
  const userProfile = await getUserProfile()

  return (
    <S.TopNavContainer ref={ref}>
      <LogoButton />

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
        <GoToSignUpButton />
      )}
    </S.TopNavContainer>
  )
})

export default Nav
