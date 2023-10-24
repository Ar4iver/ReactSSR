import React from 'react'
import styles from './cardcontrols.scss'
import { Button } from '../../../ui/Button/Button.tsx'
import { CommentIcon, SaveIcon, ShareIcon } from '../../../icons/icons.tsx'
import { KarmaCounter } from '../../../KarmaCounter/KarmaCounter.tsx'

export function CardControls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
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
