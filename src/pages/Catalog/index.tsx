import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductFilters } from '../../core/components/ProductFilters';
import { ProductCard } from './components/ProductCard';
import { Header } from '../../core/components/Header'
import { Pagination } from '../../core/components/Pagination';
import { BASE_URL } from '../../core/utils/requests';
import type { Product } from '../../core/types/products';
import styles from './Catalog.module.css';
import type { SpringPage } from '../../core/types/spring';
import type { AxiosParams } from '../../core/types/vendor/axios';
import { Link } from 'react-router';
import { CardLoader } from './CardLoader';

export function Catalog() {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoading(true);
    axios(params).then((response) => {
      setPage(response.data);
    })
    .finally(() => {
      setIsLoading(false);
    });
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
                  <Link to={'/products/1'}>
                    <ProductCard product={product} />
                  </Link>
                </div>
              )
          }))}
        </div>
      
        <Pagination />
      </div>
    </>
  )
}