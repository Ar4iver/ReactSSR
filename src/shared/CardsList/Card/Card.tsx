import React from 'react'
import styles from './card.scss'
import { CardUserBox } from './CardUserBox/CardUserBox.tsx'
import { CardPreview } from './CardPreview/CardPreview.tsx'
import { CardMenu } from './CardMenu/CardMenu.tsx'
import { CardControls } from './CardControls/CardControls.tsx'
import { ICardProps } from '../../../types/types.ts'

export function Card({
  title,
  avatar,
  content,
  username,
  previewImg,
  postId,
}: ICardProps) {
  return (
    <li className={styles.card}>
      <CardUserBox
        avatar={avatar}
        username={username}
        title={title}
        postId={postId}
      />
      <CardPreview previewImg={previewImg} />
      <CardMenu />
      <CardControls />
    </li>
  )
}
