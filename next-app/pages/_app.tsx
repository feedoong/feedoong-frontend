import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

import '../styles/reset.css'
import '../styles/font.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/variable/pretendardvariable.css"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
