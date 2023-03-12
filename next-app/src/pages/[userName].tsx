import type { GetServerSideProps, NextPage } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'

import { getUserInfoServerSide, UserProfile } from 'services/auth'
import MyPageContainer from 'components/views/MyPage'
import { CACHE_KEYS } from 'services/cacheKeys'
import { setAuthorizationHeader } from 'features/auth/token'
import { createApi } from 'services/api'
import { AccessToken } from 'constants/auth'
import { useGetUserProfile } from 'features/user/userProfile'

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const api = createApi()
    const cookies = parseCookies(context as typeof parseCookies['arguments'])

    setAuthorizationHeader(api, cookies[AccessToken], { type: 'Bearer' })

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery<UserProfile>(
      CACHE_KEYS.me,
      getUserInfoServerSide(api),
      {
        staleTime: Infinity,
      }
    )

    return {
      props: {
        /** @link https://github.com/TanStack/query/issues/1458#issuecomment-1022396964 */
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
    }
  }
}
