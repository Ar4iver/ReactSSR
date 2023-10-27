import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: TokenState = {
  token: null,
  loading: false,
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
})

export const { setToken, setLoading } = tokenSlice.actions
export default tokenSlice.reducer
