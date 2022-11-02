import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'
import type { AxiosError } from 'axios'

import 'styles/reset.css'
import 'styles/font.css'

import Layout from 'components/common/Layout'
import type { ErrorResponse } from 'types/common'
import Toast from 'components/common/Toast'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
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
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
