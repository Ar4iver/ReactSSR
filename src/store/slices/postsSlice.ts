import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ISetPostAction, PostsState } from '../../types/types'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (token: string | null) => {
    const response = await axios.get(
      'https://oauth.reddit.com/best.json?sr_detail=true',
      {
        headers: { Authorization: `bearer ${token}` },
        params: { limit: 100 },
      }
    )
    return response.data.data.children
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }, //обновление глобального состояния свойства loading в true или false
    setPosts: (state, action: PayloadAction<ISetPostAction['payload']>) => {
      state.posts = [...state.posts, ...action.payload]
      state.loading = false
    }, //обновление глобального состояния свойства items с постами и флаг загрузки этих постов.
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    }, // ошибки
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.loading = false
      })
      .addCase(fetchPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { setLoading, setPosts, setError } = postsSlice.actions

export default postsSlice.reducer
