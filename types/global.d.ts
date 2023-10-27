interface Window {
  _token_: string
}

interface TokenState {
  token: string | null
  loading: boolean
}

interface RootState {
  tokenReducer: any
  token: TokenState
}

interface SetTokenAction {
  type: 'setToken' | 'token'
  payload: string
}
