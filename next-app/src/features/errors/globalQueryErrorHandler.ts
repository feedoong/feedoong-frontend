import type { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import Toast from 'components/common/Toast'
import { CACHE_KEYS } from 'services/cacheKeys'
import { destroyTokensClientSide } from 'utils/auth'

export const globalQueryErrorHandler = (
  err: unknown,
  queryClient: QueryClient
) => {
  if (err instanceof AxiosError) {
    const code = err.response?.data?.code
    if (
      code === 'REFRESH_TOKEN_NOT_FOUND' ||
      code === 'EXPIRED_REFRESH_TOKEN'
    ) {
      destroyTokensClientSide()
      queryClient.invalidateQueries(CACHE_KEYS.me)
    }

    window.location.href = '/introduce'

    Toast.show({
      type: 'error',
      content: err.response?.data.message ?? '에러가 발생했습니다.',
    })
  }
}
