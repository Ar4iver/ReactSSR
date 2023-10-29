import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './slices/tokenSlice.ts'
import userReducer from './slices/userSlice.ts'
import { loggerMiddleware } from '../shared/middleware/loggerMiddleware.ts'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: [thunk],
})

export default store
