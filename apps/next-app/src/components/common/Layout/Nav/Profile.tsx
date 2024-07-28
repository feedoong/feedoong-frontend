import { useSuspenseQuery } from '@tanstack/react-query'
import router from 'next/router'

import { ROUTE } from 'constants/route'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getUserInfoUsingGET } from 'services/types/_generated/user'
import ProfilePopover from './ProfilePopover'

import * as S from './Nav.style'

export const Profile = () => {
  const { data: userProfile } = useSuspenseQuery({
    queryKey: CACHE_KEYS.me,
    queryFn: getUserInfoUsingGET,
  })

  return userProfile?.name ? (
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
  )
}
