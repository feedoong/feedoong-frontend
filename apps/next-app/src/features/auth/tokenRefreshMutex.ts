import Mutex from 'shared/utils/mutex'

// 클라이언트에서만 `Mutex` 인스턴스를 생성하고, 서버에서는 `null`을 export
let tokenRefreshMutex: Mutex | null = null

if (typeof window !== 'undefined') {
  tokenRefreshMutex = new Mutex()
}

export default tokenRefreshMutex
