import { ReactNode } from 'react'

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
  sr_detail: IPostDataDetail
}

export interface IPost {
  data: IPostData
  avatar: string
  username: string
  title: string
  content: string
}

export interface ISinglePost {
  username: string
  onClose?: () => void
}

export interface ICardProps {
  postId: number | string
  avatar: string
  previewImg: string
  username: string
  title: string
  content: string
}

export interface ICardUserBoxProps {
  postId: string | number
  avatar: string
  username: string
  title: string
}

export interface ICardUserBoxTitle {
  title: string
  username: string
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
