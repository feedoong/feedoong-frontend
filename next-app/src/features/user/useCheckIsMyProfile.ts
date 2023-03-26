import { useRouter } from 'next/router'

import { useGetUserProfileIfHasToken } from './userProfile'

export const useCheckIsMyProfile = () => {
  const router = useRouter()
  const { data: me } = useGetUserProfileIfHasToken()

  return router.query.userName === me?.username
}
