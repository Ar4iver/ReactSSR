import React from 'react'
import styles from './styles/karmaCounter.scss'
import { Button } from '../ui/Button/Button.tsx'
import { ArrowDowmIcon, ArrowUpIcon } from '../icons/icons.tsx'

export const KarmaCounter = () => {
  return (
    <div className={styles.karmaCounter}>
      <Button className={styles.up}>
        <ArrowUpIcon />
      </Button>
      <span className={styles.karmaValue}>234</span>
      <Button className={styles.down}>
        <ArrowDowmIcon />
      </Button>
    </div>
  )
}
