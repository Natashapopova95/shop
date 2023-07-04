import React, { useState } from 'react';
import styles from './Advantages.module.css';
import { MoreInfoButton } from '../MoreInfoButton';

export const Advantages = () => {
  const [luxury, setLuxury] = useState(false);
  const [many, setMany] = useState(false);

  return (
    <div id={styles.advantages}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Why Choosing Us</h2>
        <div className={styles.discription}>
          <div className={styles.colomns}>
            <div>
              <h4 className={styles.subtitle}>Luxury facilities</h4>
              <p className={styles.text}>
                The advantage of hiring a workspace with us is that givees you comfortable service
                and
              </p>
            </div>
            <MoreInfoButton
              text={
                'You can get a workspace of the highst quality at an affordable price and still'
              }
            />
          </div>
          <div className={styles.colomns}>
            <div>
              <h4 className={styles.subtitle}>Affordable Price</h4>
              <p className={styles.text}>
                You can get a workspace of the highst quality at an affordable price and still enjoy
                the facilities.
              </p>
            </div>
            <MoreInfoButton
              text={
                'You can get a workspace of the highst quality at an affordable price and still'
              }
            />
          </div>
          <div className={styles.colomns}>
            <div>
              <h4 className={styles.subtitle}>Many Choices</h4>
              <p className={styles.text}>
                We provide many unique work space choices so that you can choose the workspace to
                your liking.
              </p>
            </div>
            <MoreInfoButton
              text={
                'You can get a workspace of the highst quality at an affordable price and still'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
