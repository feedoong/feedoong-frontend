import type { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import Toast from 'components/common/Toast'
import { CACHE_KEYS } from 'services/cacheKeys'
import { RESPONSE_CODE } from 'types/common'
import { isServer } from 'utils'
import { destroyTokensClientSide } from 'utils/auth'

export const globalQueryErrorHandler = (
  err: unknown,
  queryClient: QueryClient
) => {
  if (err instanceof AxiosError) {
    const code = err.response?.data?.code

    if (isDestroyTokenError(code)) {
      destroyTokensClientSide()
      queryClient.invalidateQueries(CACHE_KEYS.me)
    }
    goToIntroducePage()

    Toast.show({
      type: 'error',
      content: err.response?.data.message ?? '에러가 발생했습니다.',
    })
  }
}

const goToIntroducePage = () => {
  const isClient = !isServer()
  if (isClient) {
    window.location.href = '/introduce'
  }
}

const isDestroyTokenError = (code: string) =>
  [
    RESPONSE_CODE.REFRESH_TOKEN_NOT_FOUND,
    RESPONSE_CODE.EXPIRED_REFRESH_TOKEN,
  ].includes(code)
