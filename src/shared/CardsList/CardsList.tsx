import React, { useContext } from 'react'
import styles from './cardslist.scss'
import { Card } from './Card/Card.tsx'
import { postsContext } from '../context/PostsContext.tsx'
import { IPost } from '../../types/types.ts'

export function CardsList() {
  const postsData = useContext(postsContext)
  return (
    <ul className={styles.cardsList}>
      {postsData.map((post: IPost) => (
        <Card avatar={post.avatar} />
      ))}
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  )
}
