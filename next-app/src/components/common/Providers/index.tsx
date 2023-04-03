import {
  Hydrate,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

import { globalQueryErrorHandler } from 'features/errors/globalQueryErrorHandler'

interface Props {
  children: React.ReactNode
  pageProps: any
}

const Providers = ({ pageProps, children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,

            onError: (err: unknown) =>
              globalQueryErrorHandler(err, queryClient),
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default Providers
