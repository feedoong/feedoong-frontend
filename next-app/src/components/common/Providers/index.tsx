import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RecoilRoot } from 'recoil'

import { globalQueryErrorHandler } from 'features/errors/globalQueryErrorHandler'

interface Props {
  children: React.ReactNode
  pageProps: any
}

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

const Providers = ({ pageProps, children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>{children}</RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Providers
