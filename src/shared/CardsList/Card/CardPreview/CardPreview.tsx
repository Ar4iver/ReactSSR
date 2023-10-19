import React from 'react'
import styles from './cardpreview.scss'
import { ICardPreviewProps } from '../../../../types/types'

export function CardPreview({ previewImg }: ICardPreviewProps) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={previewImg} />
    </div>
  )
}
