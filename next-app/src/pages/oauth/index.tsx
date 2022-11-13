import { useRouter } from 'next/router'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import qs from 'query-string'
import Cookies from 'js-cookie'
import humps from 'humps'

import { submitAccessToken } from 'services/auth'
import api from 'services/api'
import { CACHE_KEYS } from 'services/cacheKeys'
import { AccessToken, RefreshToken } from 'constants/auth'

const Oauth = () => {
  const router = useRouter()
  const client = useQueryClient()

  useQuery(
    CACHE_KEYS.signup,
    () => submitAccessToken(parseAccessToken(router.asPath)),
    {
      onSuccess: (response) => {
        Cookies.set(RefreshToken, response.refreshToken, {
          expires: 20,
          sameSite: 'lax',
        })

        Cookies.set(AccessToken, response.accessToken, {
          expires: 7,
          secure: true,
          sameSite: 'lax',
        })
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.accessToken}`

        client.setQueryData(CACHE_KEYS.me, response)
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
