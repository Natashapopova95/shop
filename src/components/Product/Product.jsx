/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import { Sliders } from '../Slider/Sliders';
import { fetchProduct } from '../../redux/slices/productSlice';

export const Product = () => {
  const value = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const dispatch = useDispatch();
  const list = ['All', 'Chair', 'Beds', 'Sofa', 'Lamp'];
  const [categoryId, setCategoryId] = useState(0);

  const fetchCategories = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    dispatch(
      fetchProduct({
        category,
      }),
    );

    // try {
    //   const res = await axios.get(
    //     `https://6474a9747de100807b1b7d1c.mockapi.io/item?${
    //       categoryId > 0 ? `category=${categoryId}` : ''
    //     }&sortBy=${sortType.sortProperty}&order=desc`,
    //   );
    //   setItem(res.data);
    //   setIsLoading(false);
    // } catch (error) {
    //   setIsLoading(false);
    //   console.log('error', error);
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategories();
  }, [categoryId]);

  const onClickCategory = (i) => {
    setCategoryId(i);
  };
  return (
    <>
      <div id={styles.product}>
        <div className={styles.container}>
          <h2 className={styles.title}>Best Selling Product</h2>
          <div className={styles.categories}>
            <ul>
              <li>
                {list.map((catigoryName, i) => (
                  <a
                    href="#Product_product__hQeO1"
                    key={i}
                    onClick={() => onClickCategory(i)}
                    id={categoryId === i ? styles.active : ''}
                  >
                    {catigoryName}
                  </a>
                ))}
              </li>
            </ul>
          </div>
          <Sliders item={value} value={categoryId} onClickCategory={(i) => setCategoryId(i)} />

          <div className={styles.more_detailed}>
            <Link to="ProductCatalog">
              <a href="/">more detailed</a>
            </Link>

            <svg
              width="39"
              height="13"
              viewBox="0 0 39 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 6.40024H38M38 6.40024C38 6.40024 33.5119 3.44867 32.6 1.00024M38 6.40024C38 6.40024 34.0324 9.17362 32.6 11.8002"
                stroke="#E58411"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
