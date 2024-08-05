import { createSlice } from '@reduxjs/toolkit'

export const switchSlice = createSlice({
  name: 'switch',
  initialState: {
    mode: false,
    language: false,
  },
  reducers: {
    setToggle(state, action) {
      if (action.payload.mode !== undefined) {
        state.mode = action.payload.mode
      }
      if (action.payload.language !== undefined) {
        state.language = action.payload.language
      }
    },
  },
})

export const { setToggle } = switchSlice.actions