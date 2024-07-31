'use client'
import { useSuspenseQuery } from '@tanstack/react-query'

import { userQueries } from 'entities/user/api'
import ProfilePopover from './ProfilePopover'

import * as S from './Nav.style'

export const Profile = () => {
  const { data: profile } = useSuspenseQuery({
    ...userQueries.me(),
    retry: false,
    meta: { ignoreToast: true },
  })

  return (
    <ProfilePopover>
      <S.MyPageButton>
        <S.UserName>{`${profile.name}님, 안녕하세요!`}</S.UserName>
        {profile.profileImageUrl && (
          <S.UserImage
            width={32}
            height={32}
            alt="프로필 사진"
            src={profile.profileImageUrl}
            priority
          />
        )}
      </S.MyPageButton>
    </ProfilePopover>
  )
}
