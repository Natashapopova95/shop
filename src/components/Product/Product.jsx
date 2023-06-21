/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import { Slider } from '../Slider/Slider';

export const Product = () => {
  const list = ['Chair', 'Beds', 'Sofa', 'Lamp'];
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    sortProperty: 'reting',
  });
  useEffect(() => {
    // fetch(
    //   `https://6474a9747de100807b1b7d1c.mockapi.io/item?${
    //     categoryId > 0 ? `category=${categoryId}` : ''
    //   }&sortBy=${sortType.sortProperty}&order=desc`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItem(arr);
    //     setIsLoading(false);
    //   });

    axios
      .get(
        `https://6474a9747de100807b1b7d1c.mockapi.io/item?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty}&order=desc`,
      )
      .then((res) => {
        setItem(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

  console.log(categoryId);

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
                    href="#Product_product__WLXqK"
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
          <Slider
            item={item}
            value={categoryId}
            onClickCategory={(i) => setCategoryId(i)}
            isLoading={isLoading}
          />
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
