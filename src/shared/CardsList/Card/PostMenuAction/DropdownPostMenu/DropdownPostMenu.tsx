import React from 'react'
import styles from './dropdownpostmenu.scss'
import { MenuButton } from '../../../../ui/DropdownButton/MenuButton/MenuButton.tsx'
import {
  CommentIcon,
  ShareIcon,
  HideIcon,
  SaveIcon,
  ReportIcon,
} from '../../../../icons/icons.tsx'

export function DropdownPostMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <MenuButton
          className={styles.buttonMenu}
          showBorder={true}
          icon={<CommentIcon />}
          text="Комментарии"
        />
        <MenuButton
          className={styles.buttonMenu}
          showBorder={true}
          icon={<ShareIcon />}
          text="Поделиться"
        />
        <MenuButton
          className={styles.buttonMenu}
          showBorder={true}
          icon={<HideIcon />}
          text="Скрыть"
        />
        <MenuButton
          className={styles.buttonMenu}
          showBorder={true}
          icon={<SaveIcon />}
          text="Сохранить"
        />
        <MenuButton
          className={styles.buttonMenu}
          icon={<ReportIcon />}
          text="Пожаловаться"
        />
      </div>
      <div className={styles.closeButtonMenu}>
        <MenuButton text="Закрыть" />
      </div>
    </div>
  )
}
