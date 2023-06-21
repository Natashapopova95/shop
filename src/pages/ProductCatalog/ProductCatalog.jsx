import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import { Search } from '../../components/Search/Search';
import { CartImages } from '../../components/CartImages/CartImages';
import styles from './ProductCatalog.module.css';
import { Categories } from '../../components/Categories/Categories';
import { Pogination } from '../../components/Pagination/Pogination';

import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Skeleton from '../../components/Skeleton';
import { CardCatalog } from '../../components/CardCatalog/CardCatalog';

export const ProductCatalog = () => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  const fetchPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchTerm ? `search=${searchTerm}` : '';
    axios
      .get(
        `https://6489b0075fa58521cab00ef9.mockapi.io/value?page=${currentPage}&limit=8&${category}&order=desc&${search}`,
      )
      .then((res) => {
        setItem(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [currentPage, categoryId, searchTerm]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [currentPage, categoryId]);

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
            <CartImages item={item} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <div className={styles.catalog}>
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton />)
            : item
                .filter((obj) => obj.title.toLowerCase().includes(searchTerm))
                .map((obj) => <CardCatalog key={obj.id} {...obj} />)}
        </div>
      </div>
      <Pogination currentPage={currentPage} onChangePage={onChangePage} />
    </motion.div>
  );
};
