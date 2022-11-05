import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'

import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
import Top from 'components/views/Main/Top'
import Main from 'components/views/Main'
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

const Home: NextPage = () => {
  const { data: userProfile, isLoading } = useQuery<UserProfile>(
    CACHE_KEYS.me,
    getUserInfo
  )

  if (isLoading) {
    return null
  }
  // TODO: flicking 해소하기
  if (!userProfile) {
    return (
      <>
        <Top />
        <Main />
      </>
    )
  }
  return (
    <>
      <Head>
        <title>홈 | 인사이트가 피둥피둥</title>
      </Head>
      <RssInputView />
      <FeedsContainerView />
    </>
  )
}

export default Home
