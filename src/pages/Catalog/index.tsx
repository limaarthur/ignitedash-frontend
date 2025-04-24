import { ProductFilters } from '../../components/core/ProductFilters';
import { Header } from '../../components/Header'

import styles from './Catalog.module.css';

export function Catalog() {
  return (
    <>
      <Header />
      <div className={styles.catalogContainer}>
        <div className={styles.filtersContainer}>
          <h1 className={styles.catalogTitle}>
            Catálogo de produtos
          </h1>
          <ProductFilters />
        </div>
      </div>
    </>
  )
}