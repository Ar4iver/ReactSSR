import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  SetLoadingAction,
  SetTokenAction,
  TokenState,
} from '../../types/types.ts'

const initialState: TokenState = {
  token: null,
  loading: false,
}

export const saveToken = createAsyncThunk(
  'token/saveToken',
  (token: string, { dispatch }) => {
    localStorage.setItem('token', token)
    dispatch(setToken(token))
  }
)

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<SetTokenAction['payload']>) {
      state.token = action.payload
    },
    setLoading(state, action: PayloadAction<SetLoadingAction['payload']>) {
      state.loading = action.payload
    },
    loadToken: (state) => {
      const token = localStorage.getItem('token')
      if (token) {
        state.token = token
      }
    },
  },
})

export const { setToken, setLoading, loadToken } = tokenSlice.actions
export default tokenSlice.reducer
