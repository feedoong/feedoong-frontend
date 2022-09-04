import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import GlobalFonts from '../styles/fonts'

import 'styles/reset.css'
import 'styles/font.css'
import { Nav } from 'components/common/Nav/Nav'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalFonts />
          <Nav />
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
