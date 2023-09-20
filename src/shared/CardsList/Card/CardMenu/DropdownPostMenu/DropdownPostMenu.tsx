import React from 'react'
import styles from './dropdownpostmenu.scss'
import { Button } from '../../../../ui/Button/Button.tsx'
import {
  CommentIcon,
  ShareIconMenu,
  HideIcon,
  SaveIconMenu,
  ReportIcon,
} from '../../../../icons/icons.tsx'

interface ImenuItemsProps {
  postId: string
}

export function DropdownPostMenu({ postId }: ImenuItemsProps) {
  return (
    <div className={styles.menuItemsList}>
      <div className={styles.menuItems}>
        <Button
          onClick={() => console.log(postId)}
          showBorder={true}
          className={styles.buttonMenu}
        >
          <CommentIcon />
          <span>Комментарии</span>
        </Button>
        <Button showBorder={true} className={styles.buttonMenu}>
          <ShareIconMenu />
          <span>Поделиться</span>
        </Button>
        <Button showBorder={true} className={styles.buttonMenu}>
          <HideIcon />
          <span>Скрыть</span>
        </Button>
        <Button showBorder={true} className={styles.buttonMenu}>
          <SaveIconMenu />
          <span>Сохранить</span>
        </Button>
        <Button className={styles.buttonMenu}>
          <ReportIcon />
          <span>Пожаловаться</span>
        </Button>
      </div>
    </div>
  )
}
