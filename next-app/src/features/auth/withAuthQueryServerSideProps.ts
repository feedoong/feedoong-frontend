import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { parseCookies } from 'nookies'

import { getUserInfoServerSide, UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { setAuthorizationHeader } from 'features/auth/token'
import { createApi } from 'services/api'
import { AccessToken } from 'constants/auth'

export type GetServerSidePropsContextWithAuthClient =
  GetServerSidePropsContext & {
    queryClient: QueryClient
    api: ReturnType<typeof createApi>
  }

export const withAuthQueryServerSideProps = (
  getServerSidePropsFunc?: GetServerSideProps
) => {
  return async (context: GetServerSidePropsContextWithAuthClient) => {
    try {
      const api = createApi()
      context.api = api
      const cookies = parseCookies(context as typeof parseCookies['arguments'])

      setAuthorizationHeader(api, cookies[AccessToken], { type: 'Bearer' })

      const queryClient = new QueryClient()
      context.queryClient = queryClient

      await queryClient.prefetchQuery<UserProfile>(
        CACHE_KEYS.me,
        getUserInfoServerSide(api),
        {
          staleTime: Infinity,
        }
      )

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
          JSON.stringify(dehydrate(context.queryClient))
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
