import type { NextPage } from 'next'

import UserPagePageContainer from 'components/views/UserPage'
import type { UserProfile } from 'services/auth'
import { withAuthQueryServerSideProps } from 'features/auth/withAuthQueryServerSideProps'

const UserProfile: NextPage = () => {
  return <UserPagePageContainer />
}

export default UserProfile

export const getServerSideProps = withAuthQueryServerSideProps()
