import React from 'react'
import { CommentItem } from './Comment/Comment.tsx'

export interface ICommentListProps {
  comments: []
}

export const CommentList = () => {
  return (
    <ul>
      <CommentItem
        avatarImg="https://b.thumbs.redditmedia.com/V3oOhkQE_SiCz2dvI2uA7TlbcfvaIMPw2AQjtIdqMUk.png"
        username="Алексей Егоров"
        body="Какой то текст комментария"
        createdAt="1 час назад"
        group="Лига безопасности"
      />
    </ul>
  )
}
