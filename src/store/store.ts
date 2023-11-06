import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './slices/tokenSlice.ts'
import postsReducer from './slices/postsSlice.ts'
import userReducer from './slices/userSlice.ts'
import { loggerMiddleware } from '../shared/middleware/loggerMiddleware.ts'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    token: tokenReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
