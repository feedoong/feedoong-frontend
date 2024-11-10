class Mutex {
  private promise: Promise<void> | null = null
  private resolve: VoidFunction | null = null

  async lock() {
    if (!this.promise) {
      // 잠금을 설정하고, 다음 해제를 대기하도록 Promise를 생성합니다.
      this.promise = new Promise<void>((res) => {
        this.resolve = res
      })
      return Promise.resolve()
    }
    return this.promise
  }

  unlock() {
    if (this.resolve) {
      this.resolve() // 잠금 해제
      this.promise = null
      this.resolve = null
    }
  }

  isLocked() {
    return this.promise !== null
  }

  async runExclusive<T>(callback: () => Promise<T>) {
    await this.lock()
    try {
      return await callback()
    } finally {
      this.unlock()
    }
  }
}

export default Mutex
