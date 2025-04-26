import { ProductFilters } from '../../core/components/ProductFilters';
import { ProductCard } from './components/ProductCard';
import { Header } from '../../core/components/Header'
import { Pagination } from '../../core/components/Pagination';

import styles from './Catalog.module.css';
import type { Product } from '../../core/types/products';

export function Catalog() {
  const product: Product = {
    id: 2,
     name: 'Smart TV',
     description:
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     price: 2190.0,
     imgUrl:
       'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
     date: '2020-07-14T10:00:00Z',
     categories: [
       {
         id: 1,
         name: 'Livros',
       },
       {
         id: 3,
         name: 'Computadores',
       },
     ],
  };
  
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
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
        <Pagination />
      </div>
    </>
  )
}