import type { NextPage } from 'next'
import MyPageContainer from 'components/views/UserPage/MyPage'

import type { UserProfile } from 'services/auth'
import { withAuthQueryServerSideProps } from 'features/auth/withAuthQueryServerSideProps'
import { useCheckIsMyProfile } from 'features/user/useCheckIsMyProfile'

const UserProfile: NextPage = () => {
  const isMyProfile = useCheckIsMyProfile()

  if (isMyProfile) {
    return <MyPageContainer />
  }
  return <div>public profile</div>
}

export default UserProfile

export const getServerSideProps = withAuthQueryServerSideProps()
