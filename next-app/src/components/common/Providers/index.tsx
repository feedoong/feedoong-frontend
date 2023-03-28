import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { globalQueryErrorHandler } from 'features/errors/globalQueryErrorHandler'

interface Props {
  children: React.ReactNode
  pageProps: any
}

const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Providers
