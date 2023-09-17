import React from 'react';
import styles from './cardslist.scss';
import { Card } from './Card/Card.tsx';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
}
