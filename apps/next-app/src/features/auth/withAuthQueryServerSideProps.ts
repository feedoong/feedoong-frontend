import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

import type { feedoongApi } from 'services/api'
import type { UserProfile } from 'services/auth'
import { CACHE_KEYS } from 'services/cacheKeys'
import { getUserInfoUsingGET } from 'services/types/_generated/user'

export type GetServerSidePropsContextWithAuthClient =
  GetServerSidePropsContext & {
    queryClient: QueryClient
    api: ReturnType<typeof feedoongApi>
  }

export const withAuthQueryServerSideProps = (
  getServerSidePropsFunc?: GetServerSideProps
) => {
  return async (context: GetServerSidePropsContextWithAuthClient) => {
    try {
      const queryClient = new QueryClient()
      context.queryClient = queryClient

      await queryClient.prefetchQuery<UserProfile>({
        queryKey: CACHE_KEYS.me,
        queryFn: getUserInfoUsingGET,
      })

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
