// const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // sentry: {
  // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
  // for client-side builds. (This will be the default starting in
  // `@sentry/nextjs` version 8.0.0.) See
  // https://webpack.js.org/configuration/devtool/ and
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
  // for more information.
  // hideSourceMaps: true,
  // },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/feed/me',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/feed/me',
        permanent: true,
      },
      {
        source: '/feed/recommended',
        destination: '/feed/recommended/channels',
        permanent: true,
      },
      {
        source: '/mypage',
        destination: '/404',
        permanent: true,
      },
    ]
  },
}

// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   silent: true, // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
//   authToken: '3af41c3ff1494798bb70976c02a128d599252003acee414d8e4dad425cad3419',
// }

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)

module.exports = nextConfig
