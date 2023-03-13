import { useRouter } from 'next/router'

import { useGetUserProfile } from './userProfile'

export const useCheckIsMyProfile = () => {
  const router = useRouter()
  const { data: me } = useGetUserProfile()

  const myUserNamePath = `/${me?.username}`

  return router.asPath === myUserNamePath
}
