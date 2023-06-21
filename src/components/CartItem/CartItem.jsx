import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineMinusCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './CartItem.module.css';
import { addItems, minusItem, removeItems } from '../../redux/slices/catrSlice';

export const CartItem = ({ id, title, price, count, imageUrl }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItems({
        id,
      }),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Ты дейсвительно хочешь удалить товар?')) {
      dispatch(removeItems(id));
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cart__count}>
        <div className={styles.button_outline}>
          <AiOutlineMinusCircle onClick={onClickMinus} size={25} />
        </div>
        <b>{count}</b>
        <div className={styles.item__minus}>
          <MdAddCircleOutline size={27} onClick={onClickPlus} />
        </div>
      </div>
      <div className={styles.cart__price}>
        <b>{price * count} ₽</b>
      </div>
      <div className={styles.cart__item_remove}>
        <div className={styles.button_circle}>
          <AiOutlineCloseCircle size={30} onClick={onClickRemove} />
        </div>
      </div>
    </div>
  );
};
