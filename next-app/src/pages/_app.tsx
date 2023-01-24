import type { AppProps } from 'next/app'

import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import { useGoogleAnalytics } from 'utils/hooks'
import Providers from 'components/common/Providers'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics()

  return (
    <>
      <Scripts />
      <Providers pageProps={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  )
}

export default MyApp
