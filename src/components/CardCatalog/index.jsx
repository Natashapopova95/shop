import React, { useState } from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/catrSlice';
import { StarRating } from '../StarRating';
import styles from './CardCatalog.module.css';

export const CardCatalog = ({ id, price, title, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickAdd = (e) => {
    e.stopPropagation();
    const item = {
      id,
      price,
      title,
      imageUrl,
    };
    dispatch(addItems(item));
  };

  return (
    <div id={styles.sliderCard}>
      <div className={styles.top}>
        <img className={styles.images} src={imageUrl} alt="Chair"></img>
      </div>
      <div className={styles.bottom}>
        <span>Chair</span>
        <h4 className={styles.title}>{title}</h4>
        <StarRating />
        <div className={styles.price}>
          <span>${price}</span>
          <bottom onClick={onClickAdd} className={styles.buttonAdd}>
            <AiFillPlusCircle size={60} />
          </bottom>
        </div>
      </div>
    </div>
  );
};
