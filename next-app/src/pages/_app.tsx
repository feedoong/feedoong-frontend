import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import 'styles/reset.css'
import 'styles/font.css'
// import { TopNav } from 'components/common/TopNav'
import { Nav } from 'components/common/Nav/Nav'

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
