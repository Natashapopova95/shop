import React from 'react';
import styles from './CatrEmpry.module.css';
import { GoBackButton } from '../GoBackButton';
export const CatrEmpry = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Корзина пуста ☹️</h1>
      <p className={styles.subtitle}>Вероятней всего,вы не заказали ещё товар.</p>
      <p className={styles.subtitle}>
        Для того чтобы заказать товар перейдите на главную страницу.
      </p>
      <GoBackButton />
    </div>
  );
};
