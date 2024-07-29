import type { NextPage } from 'next'

import UserPageContainer from 'components/views/UserPage'
import { withPrefetchUser } from 'features/auth/withAuthQueryServerSideProps'

const UserProfile: NextPage = () => {
  return <UserPageContainer />
}

export default UserProfile

export const getServerSideProps = withPrefetchUser
