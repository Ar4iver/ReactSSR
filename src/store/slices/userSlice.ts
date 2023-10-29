import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserState } from '../../types/types'

const initialState: UserState = {
  name: '',
  iconImg: '',
  error: null,
}

export interface SetUserActions {
  name: string
  iconImg: string
}

export interface UserErrorAction {
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SetUserActions>) {
      state.name = action.payload.name
      state.iconImg = action.payload.iconImg
    },
    setUserError(state, action: PayloadAction<UserErrorAction>) {
      state.error = action.payload.error
    },
  },
})

export const { setUser, setUserError } = userSlice.actions
export default userSlice.reducer
