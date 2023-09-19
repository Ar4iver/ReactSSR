import React, { ReactNode, useEffect, useState } from 'react'
import styles from './dropdown.scss'

interface IDropdownProps {
  button: ReactNode
  children: ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({
  button,
  children,
  isOpen,
  onClose = NOOP,
  onOpen = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list}>{children}</div>
        </div>
      )}
    </div>
  )
}
