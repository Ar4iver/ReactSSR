import {
  Action,
  PayloadAction,
  ThunkAction,
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
  after: null,
  loading: true,
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
    ///Редьюсер setToken обновляет состояние в Redux, устанавливая значение поля token в состоянии слайса равным значению payload из объекта действия.
    setToken(state, action: PayloadAction<SetTokenAction['payload']>) {
      state.token = action.payload
    },
    setLoading(state, action: PayloadAction<SetLoadingAction['payload']>) {
      state.loading = action.payload
    },
    //Редьюсер loadToken предназначен для загрузки токена из localStorage и обновления поля token в состоянии слайса в Redux.
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
