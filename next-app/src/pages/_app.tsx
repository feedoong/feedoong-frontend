import type { AppProps } from 'next/app'

import Layout from 'components/common/Layout'
import Scripts from 'components/common/Scripts'
import { useGoogleAnalytics as GoogleAnalytics } from 'utils/hooks'
import Providers from 'components/common/Providers'

import 'styles/reset.css'
import 'styles/font.css'
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Scripts />
      <GoogleAnalytics />
      <Providers pageProps={pageProps}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  )
}

export default MyApp
