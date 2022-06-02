import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  show: false,
  content: {},
  name: '',
  size: ''
}
export const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { content, show, name, size } = action.payload
      state.content = content
      state.show = show
      state.name = name
      state.size = size
    },
    closeModal: state => {
      state.content = {}
      state.show = false
      state.name = ''
      state.size = ''
    }
  }
})

export const { openModal, closeModal } = slice.actions

export default slice.reducer
