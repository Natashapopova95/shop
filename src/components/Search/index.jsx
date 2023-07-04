import React, { useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.css';
import searchImg from '../../assets/images/search.svg';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export const Search = ({ setSearchTerm, searchTerm }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchTerm(str);
    }, 250),
    [],
  );

  const onClickClear = () => {
    setSearchTerm('');
    setValue('');
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Search"
        value={value}
        onChange={onChangeInput}
      />

      {value && <IoMdClose onClick={onClickClear} size={30} className={styles.close} />}
      <div className={styles.search}>
        <img src={searchImg} alt="" />
      </div>
    </div>
  );
};
