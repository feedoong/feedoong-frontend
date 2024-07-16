import { useRouter } from 'next/router'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import qs from 'query-string'
import humps from 'humps'
import { useEffect } from 'react'

import { submitAccessToken } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import {
  setAccessTokenToCookie,
  setRefreshTokenToCookie,
} from 'features/auth/token'

const Oauth = () => {
  const router = useRouter()
  const client = useQueryClient()

  const { data, isError } = useQuery({
    queryKey: CACHE_KEYS.signup,
    queryFn: () => submitAccessToken(parseAccessToken(router.asPath)),
  })

  useEffect(() => {
    if (data) {
      setRefreshTokenToCookie(data.refreshToken)
      setAccessTokenToCookie(data.accessToken)
      client.setQueryData(CACHE_KEYS.me, data)
      router.replace('/')
    }
  }, [data])

  useEffect(() => {
    if (isError) {
      alert('로그인에 실패했습니다. 다시 시도해주세요.')
      router.replace('/')
    }
  }, [isError])

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
