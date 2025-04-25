import ArrowIcon from '../../../core/assets/images/arrow-icon.svg?react';

import styles from './Pagination.module.css';

export function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <ArrowIcon
        className={styles.paginationPrevious}
      />
      <div className={styles.paginationItem}>1</div>
      <div className={styles.paginationItem}>2</div>
      <div className={styles.paginationItem}>3</div>
      <div className={styles.paginationItem}>...</div>
      <div className={styles.paginationItem}>10</div>
      <ArrowIcon 
        className={styles.paginationNext}
      />
    </div>
  )
}