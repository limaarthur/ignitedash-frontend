import ReactPaginate from 'react-paginate';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import styles from './Pagination.module.css';

export function Pagination() {
  return (
    <ReactPaginate
      pageCount={10}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName={styles.paginationContainer}
      pageLinkClassName={styles.paginationItem}
      breakClassName={styles.paginationItem}
      previousClassName={styles.paginationPrevious}
      nextClassName={styles.paginationNext}
      previousLabel={
        <CaretLeft 
          size={22} 
          className={styles.arrowPrevious} 
        />
      }
      nextLabel={
        <CaretRight 
          size={22} 
          className={styles.arrowNext} 
        />
      }
      activeLinkClassName={styles.paginationLinkActive}
      disabledClassName={styles.arrowInactive}
    />
  );
}