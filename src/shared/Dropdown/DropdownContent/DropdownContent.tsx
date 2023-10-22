import React from 'react'
import styles from './style/DropdownContent.scss'
import ReactDOM from 'react-dom'
import { IDropdownContent } from '../../../types/types'

export function DropdownContent({ children, dropdownRoot }: IDropdownContent) {
  const node = document.querySelector(dropdownRoot)
  if (!node) return null

  return ReactDOM.createPortal(
    <>
      <div className={styles.listContainer}>
        <div className={styles.list}>{children}</div>
      </div>
    </>,
    node
  )
}
