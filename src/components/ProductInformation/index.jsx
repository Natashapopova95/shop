import React, { useState } from 'react';
import experiences from '../../assets/images/experiences.jpg';
import MaterialsMin from '../../assets/images/Materials_min1.jpg';
import MaterialsMin2 from '../../assets/images/Materials_min2.jpg';
import MaterialsMax from '../../assets/images/Materials.jpg';

import styles from './ProductInformation.module.css';
import { MoreInfoButton } from '../MoreInfoButton';

export const ProductInformation = () => {
  return (
    <div id={styles.productInformation}>
      <div className={styles.experiences}>
        <div className={styles.wrapper}>
          <div className={styles.images}>
            <img src={experiences} alt=""></img>
          </div>
          <div className={styles.info}>
            <h4 className={styles.subtitle}>experiences</h4>
            <h2 className={styles.title}>we provide you the best experience</h2>
            <p className={styles.text}>
              You don’t have to worry about the result because all of these interiors are made by
              people who are professionals in their fields with an elegant and lucurious style and
              with premium quality materials
            </p>
            <MoreInfoButton
              text={
                'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities.We provide many unique work space choices so that you can choose the workspace to your liking.'
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.Materials}>
        <div className={styles.inner}>
          <div className={`${styles.info} ${styles.materialsInfo}`}>
            <h4 className={styles.subtitle}>Materials</h4>
            <h2 className={styles.title}>Very serious materials for making furniture</h2>
            <p className={styles.text}>
              Because panto was very serious about designing furniture for our environment, using a
              very expensive and famous capital but at a relatively low price
            </p>
            <MoreInfoButton
              text={
                'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities.We provide many unique work space choices so that you can choose the workspace to your liking.'
              }
            />
          </div>
          <div className={styles.MaterialsImages}>
            <div className={styles.img}>
              <img src={MaterialsMin} alt=""></img>
              <img src={MaterialsMin2} alt=""></img>
            </div>
            <div className={styles.imgMax}>
              <img src={MaterialsMax} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
