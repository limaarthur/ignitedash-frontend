import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from '../../core/utils/requests';
import type { SpringPage } from '../../core/types/spring';
import { Link } from 'react-router';
import { CardLoader } from './CardLoader';
import { ProductFilters } from '../../core/components/ProductFilters';
import { ProductCard } from './components/ProductCard';
import { Header } from '../../core/components/Header'
import { Pagination } from '../../core/components/Pagination';
import type { Product } from '../../core/types/products';

import styles from './Catalog.module.css';

export function Catalog() {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: pageNumber,
        size: 12,
      },
    };

    setIsLoading(true);
    requestBackend(params)
    .then((response) => {
      setPage(response.data);
      console.log(page);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }
    useEffect(() => {
      getProducts(0);
  }, []);

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
          {isLoading ? <CardLoader /> : (
            page?.content.map(product => {
              return (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                </div>
              )
          }))}
        </div>
      
        <Pagination 
          pageCount={page ? page.totalPages : 0} 
          range={3} 
          onChange={getProducts}
        />
      </div>
    </>
  )
}