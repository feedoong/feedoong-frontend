// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

import { isProduction } from 'utils'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://fb11edb49f624c6e8164745e5dfff3a2@o4504110823899137.ingest.sentry.io/4504110827175936',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  enabled: isProduction(),
  beforeSend(event, hint) {
    if (event.exception) {
      fetch(
        'https://hooks.slack.com/services/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',
        {
          method: 'POST',
          body: JSON.stringify({
            username: 'Sentry-Alert',
            text: `
              Event-id: ${event.event_id}
              Exception-type: ${event.exception.values?.[0].type}
              Exception-value: ${event.exception.values?.[0].value}
              Request-URL: ${event.request?.url}
              `,
          }),
        }
      )
    }
    return event
  },
})
