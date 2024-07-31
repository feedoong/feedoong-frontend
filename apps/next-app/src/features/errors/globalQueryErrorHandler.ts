import type { Query, QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import Toast from 'components/common/Toast'
import { PRIVATE_ROUTE, ROUTE } from 'constants/route'
import { userQueries } from 'entities/user/api'
import { CACHE_KEYS } from 'services/cacheKeys'
import { RESPONSE_CODE } from 'types/common'
import { isServer } from 'utils'
import { destroyTokensClientSide } from 'utils/auth'

export const globalQueryErrorHandler = (
  err: unknown,
  query: Query<unknown, unknown, unknown>,
  queryClient: QueryClient
) => {
  if (err instanceof AxiosError) {
    const code = err.response?.data?.code

    if (isDestroyTokenError(code)) {
      destroyTokensClientSide()
      queryClient.invalidateQueries(userQueries.me())
    }
    const isClient = !isServer()
    const ignoreToast = query.meta?.ignoreToast

    if (isClient && !ignoreToast) {
      Toast.show({
        type: 'error',
        content: err.response?.data.message ?? '에러가 발생했습니다.',
      })
    }

    if (isClient && isPrivatePath()) {
      goToIntroducePage()
    }
  }
}

const goToIntroducePage = () => {
  const isClient = !isServer()
  if (isClient) {
    window.location.href = ROUTE.INTRODUCE
  }
}

const isPrivatePath = () =>
  Object.values(PRIVATE_ROUTE).find((path) =>
    window.location.pathname.includes(path)
  )

const isDestroyTokenError = (code: string) =>
  [
    RESPONSE_CODE.REFRESH_TOKEN_NOT_FOUND,
    RESPONSE_CODE.EXPIRED_REFRESH_TOKEN,
  ].includes(code)
