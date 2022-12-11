import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'
import { RecoilRoot } from 'recoil'
import { useEffect } from 'react'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

import Layout from 'components/common/Layout'
import Toast from 'components/common/Toast'
import Scripts from 'components/common/Scripts'
import { useGoogleAnalytics } from 'utils/hooks'
import { destroyTokensClientSide } from 'utils/auth'
import { CACHE_KEYS } from 'services/cacheKeys'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,

      onError: (err: unknown) => {
        if (err instanceof AxiosError) {
          const code = err.response?.data.code
          if (code === 'REFRESH_TOKEN_NOT_FOUND') {
            destroyTokensClientSide()
            queryClient.invalidateQueries(CACHE_KEYS.me)
            window.location.href = '/introduce'
          }

          Toast.show({
            type: 'error',
            content: err.response?.data.message ?? '에러가 발생했습니다.',
          })
        }
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics()

  return (
    <>
      <Scripts />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
