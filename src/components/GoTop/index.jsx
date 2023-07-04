import React, { useEffect, useState } from 'react';
import { TbChevronsUp } from 'react-icons/tb';
import styles from './GoTop.module.css';

export const GoTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 500);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? styles.goTop : styles.goTopHidden} onClick={handleScrollUp}>
      <button type={'button'}>
        <TbChevronsUp className={styles.button} />
      </button>
    </div>
  );
};
