import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'

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
      <RssInputView />
      <FeedsContainerView />
    </>
  )
}

export default Home
