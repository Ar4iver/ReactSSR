import React from 'react'
import styles from './cardcontrols.scss'
import { Button } from '../../../ui/Button/Button/Button.tsx'
import {
  ArrowDowmIcon,
  ArrowUpIcon,
  CommentIcon,
  SaveIcon,
  ShareIcon,
} from '../../../icons/icons.tsx'

export function CardControls() {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <Button className={styles.up}>
          <ArrowUpIcon />
        </Button>
        <span className={styles.karmaValue}>234</span>
        <Button className={styles.down}>
          <ArrowDowmIcon />
        </Button>
      </div>
      <Button className={styles.commentsButton}>
        <CommentIcon />
        <span className={styles.commentsNumber}>13</span>
      </Button>
      <div className={styles.actions}>
        <Button className={styles.saveButton}>
          <SaveIcon />
        </Button>
        <Button className={styles.shareButton}>
          <ShareIcon />
        </Button>
      </div>
    </div>
  )
}
