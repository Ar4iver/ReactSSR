import { configureStore } from '@reduxjs/toolkit'

export type someState = {
  commentText: string
}
const initialState: someState = {
  commentText: 'Я начальное состояние комментария',
}

export default function someReducer(
  state = initialState,
  action: any
): someState {
  return state
}

export const store = configureStore({
  reducer: {
    someReducer,
  },
  devTools: true,
})
