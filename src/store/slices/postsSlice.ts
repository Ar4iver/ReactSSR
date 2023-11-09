import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPost, PostsState } from '../../types/types'
import axios from 'axios'

const initialState: PostsState = {
  posts: [],
  loading: false,
  after: null,
  error: null,
}

//асинхронный экшн
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ token, after }: { token: string | null; after: null | string }) => {
    const response = await axios.get(
      'https://oauth.reddit.com/best.json?sr_detail=true',
      {
        headers: { Authorization: `bearer ${token}` },
        params: { limit: 3, after },
      }
    )
    return response.data.data
  }
)

//вытаскиваем пост по id
export const selectPostById = (state: any, postId: any) =>
  state.posts.posts.find((post: any) => post.id === postId)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }, //обновление глобального состояния свойства loading в true или false
    setPosts: (state, action: PayloadAction<PostsState>) => {
      // Предполагается, что action.payload уже имеет структуру { posts: [...], after: "...", ... }
      const newPosts = action.payload.posts.filter(
        (newPost: IPost) =>
          !state.posts.find((existingPost) => existingPost.id === newPost.id)
      )
      // Добавляем только уникальные новые посты
      state.posts = [...state.posts, ...newPosts]
      state.loading = false
      // Обновляем after здесь, если action.payload содержит это значение
      state.after = action.payload.after
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
      }) //Что будет в процессе чтения
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // action.payload.children для новых постов
        const newPosts = action.payload.children
          .filter(
            (newPost: IPost) =>
              !state.posts.find(
                (existingPost) => existingPost.id === newPost.id
              )
          )
          .map((child: any) => child.data) // Предполагается, что структура поста находится в child.data

        // Добавляем новые посты к существующим
        state.posts = [...state.posts, ...newPosts]

        // Сохраняем значение after для последующих запросов на подгрузку постов
        state.after = action.payload.after
        state.loading = false //false
      }) //что будет с результатом выполнения
      .addCase(fetchPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.error = action.payload
      }) //В случае ошибки
  },
})

export const { setLoading, setPosts, setError } = postsSlice.actions

export default postsSlice.reducer
