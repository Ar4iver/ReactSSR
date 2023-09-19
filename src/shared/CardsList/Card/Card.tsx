import React from 'react'
import styles from './card.scss'
import { CardUserBox } from './CardUserBox/CardUserBox.tsx'
import { CardPreview } from './CardPreview/CardPreview.tsx'
import { CardMenu } from './CardMenu/CardMenu.tsx'
import { CardControls } from './CardControls/CardControls.tsx'

export function Card() {
  return (
    <li className={styles.card}>
      <CardUserBox />
      <CardPreview />
      <CardMenu />
      <CardControls />
    </li>
  )
}
