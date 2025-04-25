import { ProductFilters } from '../../core/components/ProductFilters';
import { ProductCard } from './components/ProductCard';
import { Header } from '../../core/components/Header'

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
        <div className={styles.catalogProducts}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
}