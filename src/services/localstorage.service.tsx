export const localStorageService = {
  destroy(type: string): void {
    localStorage.removeItem(type)
  },

  set(type: string, data: Record<string, any>): void {
    localStorage.setItem(type, JSON.stringify(data))
  },
  get(type: string):any {
    const data = localStorage.getItem(type)
    if (!data) return null
    const res = JSON.parse(data)
    return res
  },
  getSessionToken():any {
    const data = localStorage.getItem('user')
    if (!data) return null
    const session = JSON.parse(data)
    return session && session.token ? session.token : null
  },
  getSessionRefreshToken():any {
    const data = localStorage.getItem('user')
    if (!data) return null
    const session = JSON.parse(data)
    return session && session.refreshToken ? session.refreshToken : null
  },
  isAuth():any {
    const data = localStorage.getItem('user')
    if (!data) {
      return false
    } else {
      const session = JSON.parse(data)
      return session
    }
  }
}
