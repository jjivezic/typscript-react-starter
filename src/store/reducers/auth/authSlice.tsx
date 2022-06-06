import { createSlice, current } from '@reduxjs/toolkit'
import { localStorageService } from 'services/localstorage.service'
import { login } from './thunk'
import { User } from 'types'
type Initial = {
  user: User,
  loading: boolean,
  errorMessage: string
}

const initialUser: User = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
const initialState:Initial = {
  user: initialUser,
  loading: false,
  errorMessage: ''
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // add your non- async reducers here
    // addUser: (state, action) => {
    //   state.loading = true
    //   state.user = action.payload
    //   console.log('reducers addUser', state, action)
    // },
  },
  extraReducers: builder => {
    // add your async reducers here
    builder.addCase(login.fulfilled, (state, action) => {
      // Immer return state in Proxies form to read curent state you need use current form( @reduxjs/toolkit)
      console.log('extraReducers success', current(state), action.payload)
      localStorageService.set('user', action.payload)
      state.user = action.payload
      state.errorMessage = ''
    })
    builder.addCase(login.rejected, (state, action) => {
      console.log('extraReducers error', action)
      state.errorMessage = action.error.message!
    })
  }
})

export default slice.reducer
