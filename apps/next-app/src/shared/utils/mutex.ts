class Mutex {
  private promise: Promise<void> | null = null
  private resolve: VoidFunction | null = null

  async lock() {
    if (!this.promise) {
      this.promise = new Promise<void>((res) => {
        this.resolve = res
      })
    }
    return this.promise
  }

  unlock() {
    if (this.resolve) {
      this.resolve()
      this.promise = null
      this.resolve = null
    }
  }

  isLocked(): boolean {
    return this.promise !== null
  }
}

export default Mutex
