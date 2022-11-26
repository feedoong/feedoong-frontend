import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'

import RssInputView from 'components/views/RssInput'
import FeedsContainerView from 'components/views/Feeds/FeedsContainer'
// import Top from 'components/views/Main/Top' // TODO: 메인 페이지에서는 제거하고 추후 복구
// import Main from 'components/views/Main' // TODO: 메인 페이지에서는 제거하고 추후 복구
import { getUserInfo, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

const Home: NextPage = () => {
  useQuery<UserProfile>(CACHE_KEYS.me, getUserInfo) // initialize user info

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
