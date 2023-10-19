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

export interface ICardProps {
  avatar: string
  previewImg: string
  username: string
  title: string
  content: string
}

export interface ICardUserProps {
  avatar: string
  username: string
  title: string
}

export interface ICardPreviewProps {
  previewImg: string
}
