import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import qs from 'query-string'
import Cookies from 'js-cookie'
import humps from 'humps'

import profile from 'store/atoms/profile'
import { submitAccessToken } from 'services/auth'
import api from 'services/api'
import { cacheKeys } from 'services/cacheKeys'

const Oauth = () => {
  const router = useRouter()

  const setProfile = useSetRecoilState(profile)

  useQuery(
    cacheKeys.signup,
    () => submitAccessToken(parseAccessToken(router.asPath)),
    {
      onSuccess: (response) => {
        Cookies.set('token', response.accessToken, {
          expires: 7,
          secure: true,
          sameSite: 'lax',
        })
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.accessToken}`
        setProfile({
          name: response.name,
          profileImageUrl: response.profileImageUrl,
          email: response.email,
        })
        router.replace('/')
      },
      onError: () => {
        alert('로그인에 실패했습니다. 다시 시도해주세요.')
        router.replace('/')
      },
    }
  )

  return null
}

export default Oauth

const parseAccessToken = (asPath: string) => {
  const { fragmentIdentifier } = qs.parseUrl(asPath, {
    parseFragmentIdentifier: true,
  })
  if (!fragmentIdentifier) {
    throw new Error('No fragment identifier')
  }
  const query = humps.camelizeKeys(qs.parse(fragmentIdentifier)) as {
    accessToken: string
    authuser: string
    expiresIn: string
    prompt: string
    scope: string
    tokenType: string
  }
  return query.accessToken
}
