import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { userQueries } from 'entities/user/api'
import { asyncLocalStorage } from 'shared/libs/context'
import { isServer } from 'utils'
import { getAccessTokenFromCookie } from './token'

export type GetServerSidePropsContextWithAuthClient = GetServerSidePropsContext

// 서버 사이드 렌더링 시 컨텍스트를 설정하는 미들웨어
export function withRequestContext(
  handler: (context: GetServerSidePropsContext) => Promise<any>
) {
  return async (context: GetServerSidePropsContext) => {
    if (isServer()) {
      return asyncLocalStorage.run({ req: context.req }, () => handler(context))
    }
    return handler(context)
  }
}

// NOTE: prefetch 로직을 서버 컴포넌트에서 좀 더 적절히 구현하기
export const withPrefetchUser = withRequestContext(async () => {
  try {
    if (!getAccessTokenFromCookie()) {
      return {
        props: {},
      }
    }

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(userQueries.me())

    const dehydratedState = JSON.parse(JSON.stringify(dehydrate(queryClient)))

    return {
      props: {
        dehydratedState,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
    }
  }
})

export const withAuthQueryServerSideProps = (
  getServerSidePropsFunc?: GetServerSideProps
) => {
  return async (context: GetServerSidePropsContextWithAuthClient) => {
    try {
      const queryClient = new QueryClient()

      await queryClient.prefetchQuery(userQueries.me())

      if (!getServerSidePropsFunc) {
        const dehydratedState = JSON.parse(
          JSON.stringify(dehydrate(queryClient))
        )
        return {
          props: {
            dehydratedState,
          },
        }
      } else {
        const { props } = (await getServerSidePropsFunc(context)) as {
          props: {
            [key: string]: any
          }
        }

        const dehydratedState = JSON.parse(
          JSON.stringify(dehydrate(queryClient))
        )

        return {
          props: {
            ...(props ?? {}),
            dehydratedState,
          },
        }
      }
    } catch (error) {
      console.log(error)
      return {
        props: {},
      }
    }
  }
}
