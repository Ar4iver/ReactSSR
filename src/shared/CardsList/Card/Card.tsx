import React from 'react'
import styles from './card.scss'
import { UserMeta } from './UserMeta/UserMeta.tsx'
import { PostPreview } from './PostPreview/PostPreview.tsx'
import { PostMenuAction } from './PostMenuAction/PostMenuAction.tsx'

export function Card() {
  return (
    <li className={styles.card}>
      <UserMeta />
      <PostPreview />
      <PostMenuAction />
    </li>
  )
}
