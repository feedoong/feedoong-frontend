import type { NextPage } from 'next'
import Head from 'next/head'

import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import { withAuthQueryServerSideProps } from 'features/auth/withAuthQueryServerSideProps'
import { useGetUserProfile } from 'features/user/userProfile'

const Home: NextPage = () => {
  useGetUserProfile()

  return (
    <>
      <Head>
        <title>게시물 둘러보기 | 인사이트가 피둥피둥</title>
      </Head>
      <RssInputView />
      <FeedsContainerView />
    </>
  )
}

export default Home

export const getServerSideProps = withAuthQueryServerSideProps()

export const config = {
  runtime: 'edge',
}
