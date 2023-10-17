import React, { useContext } from 'react'
import styles from './header.scss'
import { SearchBlock } from './SearchBlock/SearchBlock.tsx'
import { ThreadTitle } from './ThreadTitle/ThreadTitle.tsx'
import { SortBlock } from './SortBlock/SortBlock.tsx'

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  )
}
