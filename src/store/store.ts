import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './slices/tokenSlice.ts'

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
  devTools: true,
})

export default store
