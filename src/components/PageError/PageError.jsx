import React from 'react';
import styles from './PageError.module.css';
import { GoBackButton } from '../GoBackButton/GoBackButton';
export const PageError = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>☹️</div>
      <h1 className={styles.title}>Произошла ошибка!</h1>
      <span className={styles.subtitle}>К сожелению, запрашиваемая вами страница не найдена.</span>
      <GoBackButton />
    </div>
  );
};
