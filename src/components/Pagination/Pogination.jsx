import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pogination.module.css';
export const Pogination = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      previousLabel="< "
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={4}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};
