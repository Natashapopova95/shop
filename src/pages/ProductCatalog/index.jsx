import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import { Search } from '../../components/Search/';
import cart from '../../assets/images/shoppingCart.svg';
import styles from './ProductCatalog.module.css';
import { Categories } from '../../components/Categories';

import { motion } from 'framer-motion';
import Skeleton from '../../components/Skeleton';
import { CardCatalog } from '../../components/CardCatalog';
import { fetchProduct } from '../../redux/slices/productSlice';
import { PageError } from '../../components/PageError';
import { SearchError } from '../../components/SearchError';
import { CartImages } from '../../components/CartImages';

export const ProductCatalog = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce((sum, item) => sum + item.count, 0);
  const value = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const location = useLocation();

  console.log(location, window.location);

  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchTerm ? `search=${searchTerm}` : '';

    dispatch(
      fetchProduct({
        category,
        search,
      }),
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchData();
    }

    isSearch.current = false;

    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [currentPage, categoryId, searchTerm]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(
        setFilters({
          ...params,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  console.log('cat', categoryId);
  return (
    <motion.div
      className={styles.ProductCatalog}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}>
              Panto
            </Link>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className={styles.cart_container}>
              <CartImages />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <div className={styles.catalog}>
          {status === 'error' ? (
            <PageError />
          ) : status === 'loading' ? (
            [...new Array(8)].map((_, index) => <Skeleton />)
          ) : value.length === 0 ? (
            <SearchError />
          ) : (
            value
              .filter((obj) => obj.title.toLowerCase().includes(searchTerm))
              .map((obj) => <CardCatalog key={obj.id} {...obj} />)
          )}
        </div>
      </div>
    </motion.div>
  );
};
