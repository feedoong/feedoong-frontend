import type { NextPage } from 'next'
import Head from 'next/head'

import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getFeedsServerSide } from 'services/feeds'
import { useGetUserProfile } from 'features/user/userProfile'
import type { GetServerSidePropsContextWithAuthClient } from 'features/auth/withAuthQueryServerSideProps'
import { withAuthQueryServerSideProps } from 'features/auth/withAuthQueryServerSideProps'

const Home: NextPage = () => {
  useGetUserProfile()

  return (
    <>
      <Head>
        <title>내 피드 | 인사이트가 피둥피둥</title>
      </Head>
      <RssInputView />
      <FeedsContainerView />
    </>
  )
}

export default Home

export const getServerSideProps = withAuthQueryServerSideProps(
  async (context) => {
    const _context = context as GetServerSidePropsContextWithAuthClient

    await _context.queryClient.prefetchInfiniteQuery(
      CACHE_KEYS.feeds,
      ({ pageParam = 1 }) => getFeedsServerSide(_context.api)(pageParam)
    )

    return { props: {} }
  }
)
