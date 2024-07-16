import { forwardRef } from 'react'

import * as S from 'components/common/Layout/Nav/Nav.style'
import ProfilePopover from 'components/common/Layout/Nav/ProfilePopover'
import { GoToSignUpButton } from './GoToSignUpButton'
import { LogoButton } from './LogoButton'
import { getUserInfoUsingGET } from 'services/types/_generated/user'

const Nav = forwardRef<HTMLDivElement>(async function Nav(props, ref) {
  let userProfile = null
  try {
    userProfile = await getUserInfoUsingGET()
  } catch (error) {
    console.error(error)
  }

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
