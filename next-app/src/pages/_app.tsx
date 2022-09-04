import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import Nav from 'components/common/Nav'
import 'styles/reset.css'
import 'styles/font.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Nav />
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
