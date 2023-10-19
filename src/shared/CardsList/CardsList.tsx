import React, { useContext } from 'react'
import styles from './cardslist.scss'
import { Card } from './Card/Card.tsx'
import { postsContext } from '../context/PostsContext.tsx'
import { IPost } from '../../types/types.ts'

export function CardsList() {
  const postsData = useContext(postsContext)
  return postsData.length !== 0 ? (
    <ul className={styles.cardsList}>
      {postsData.map((post: IPost) => (
        <Card
          key={post.data.id}
          title={post.data.sr_detail.title}
          previewImg={post.data.sr_detail.header_img}
          avatar={post.data.sr_detail.icon_img}
          username={post.data.sr_detail.name}
          content={post.data.sr_detail.description}
        />
      ))}
    </ul>
  ) : (
    <h1>Авторизуйтесь</h1>
  )
}
