import {
  Action,
  PayloadAction,
  ThunkAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import {
  RootState,
  SetLoadingAction,
  SetTokenAction,
  TokenState,
} from '../../types/types.ts'

const initialState: TokenState = {
  token: null,
  loading: false,
}

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (window._token_) {
      localStorage.setItem('token', window._token_)
      dispatch(setToken(window._token_))
    }
  }

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
