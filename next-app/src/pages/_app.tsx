import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'
import type { AxiosError } from 'axios'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

import type { ErrorResponse } from 'types/common'
import Layout from 'components/common/Layout'
import Toast from 'components/common/Toast'
import Scripts from 'components/common/Scripts'
import useGoogleAnalytics from 'hooks/useGoogleAnalytics'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,

      onError: (err: unknown) => {
        Toast.show({
          type: 'error',
          content:
            (err as AxiosError<ErrorResponse>).response?.data.message ??
            '에러가 발생했습니다.',
        })
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
