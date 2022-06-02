import { request } from './http.service'
import { RegisterUser, LoginUser } from 'types'

class UserService {
  async register(data: RegisterUser): Promise<any> {
    return request('post', '/api/auth', {
      mode: 'register',
      data: {
        socialType: 'base',
        data
      }
    })
  }

  async login(user: LoginUser): Promise<any> {
    return request('post', '/api/auth', {
      mode: 'login',
      data: {
        user,
        socialType: 'base'
      }
    })
  }
}
export default new UserService()