import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'

import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import { useGoogleAnalytics } from 'utils/hooks'
import { globalQueryErrorHandler } from 'features/errors/globalQueryErrorHandler'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,

      onError: (err: unknown) => globalQueryErrorHandler(err, queryClient),
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
