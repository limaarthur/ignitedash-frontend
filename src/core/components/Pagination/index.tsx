import ReactPaginate from 'react-paginate';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import styles from './Pagination.module.css';

type PaginationProps = {
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

export function Pagination({ pageCount, range, onChange }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={range}
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
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
    />
  );
}