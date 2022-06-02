import { createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/user.service'
import { User } from 'types'
export const login = createAsyncThunk('auth/login', async (params:any) => {
  return await (userService.login(params)) as User
})
