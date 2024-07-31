import type { NextPage } from 'next'

import ChannelDetailView from 'components/views/Channel/ChannelDetailContainer'
import { withPrefetchUser } from 'features/auth/withAuthQueryServerSideProps'

const ChannelDetail: NextPage = () => {
  return <ChannelDetailView />
}

export default ChannelDetail

export const getServerSideProps = withPrefetchUser
