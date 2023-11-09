export interface IUserData {
  name?: string
  iconImg?: string
}

export interface IUserContextData {
  name?: string
  iconImg?: string
}

interface IPostDataDetail {
  id: string
  title: string
  header_img: string
  icon_img: string
  name: string
  description: string
}

interface IPostData {
  id: string
  after: null
  sr_detail: IPostDataDetail
}

export interface IPost {
  author: string
  sr_detail: any
  id: string | number
  data: IPostData
  after: string | null
  avatar: string
  username: string
  title: string
  content: string
}

export interface ISinglePost {
  username?: string
}

export interface ICardProps {
  author: string
  postId: number | string
  avatar: string
  previewImg: string
  title: string
  content: string
}

export interface ICardUserBoxProps {
  postId: string | number
  avatar: string
  author: string
  title: string
}

export interface ICardUserBoxTitle {
  postId?: string | number
  title?: string
  username?: string
}

export interface ICardPreviewProps {
  previewImg: string
}

export interface ICommentContextProps {
  value: string
  onChange: (value: string) => void
}

export interface IDropdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  dropdownRoot: string
  onOpen?: () => void
  onClose?: () => void
}

export interface Position {
  top: number
  left: number
  width?: number
  height?: number
}

export interface IDropdownContent {
  children: React.ReactNode
  dropdownRoot: string
}

export interface TokenState {
  token: string | null
  after: string | null
  loading: boolean
}

export interface LoadingState {
  loading: boolean
}

export interface RootState {
  postsReducer: PostsState
  posts: PostsState
  tokenReducer: TokenState
  userReducer: UserState
  token: TokenState
  user: UserState
  loading: LoadingState
}

export interface SetTokenAction {
  type: 'setToken' | '_token_'
  payload: string
}

export interface SetLoadingAction {
  type: string
  payload: boolean
}

export interface UserState {
  name: string
  iconImg: string
  error: null
}

export interface PostsState {
  posts: IPost[]
  after: string | null
  loading: boolean
  error: string | null
}

export interface ISetPostAction {
  payload: IPost[]
  loading: boolean
}
