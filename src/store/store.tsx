import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth/authSlice'
import modalReducer from './reducers/modal/modalSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store
