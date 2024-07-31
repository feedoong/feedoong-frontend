import type { IncomingMessage } from 'http'

export let asyncLocalStorage: any
const isServer = typeof window === 'undefined'

if (isServer) {
  asyncLocalStorage = new AsyncLocalStorage<{
    req: IncomingMessage
  }>()
}
