import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import type { UserProfile } from 'services/auth'
import MyPageContainer from 'components/views/MyPage'
import { useGetUserProfile } from 'features/user/userProfile'
import { withAuthQueryServerSideProps } from 'features/auth/withAuthQueryServerSideProps'

const UserProfile: NextPage = () => {
  const router = useRouter()
  const { data: me } = useGetUserProfile()

  const myUserNamePath = `/${me?.username}`

  if (router.asPath === myUserNamePath) {
    return <MyPageContainer />
  }

  return <div>public profile</div>
}

export default UserProfile

export const getServerSideProps = withAuthQueryServerSideProps()
