import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ProductFilters } from "../../../../core/components/ProductFilters";
import { ProductCrudCard } from "../ProductCrudCard";
import { Pagination } from "../../../../core/components/Pagination";
import type { SpringPage } from "../../../../core/types/spring";
import type { Product } from "../../../../core/types/products";
import type { AxiosRequestConfig } from "axios";

import styles from './List.module.css';
import { requestBackend } from "../../../../core/utils/requests";

export function List() {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: 0,
        size: 3,
      }
    };

    requestBackend(config)
      .then((response) => {
        setPage(response.data);
        console.log(response.data);
      })
  }, []);

  return (
    <div className={styles.productCrudContainer}>
      <div className={styles.productCrudBarContainer}>
        <Link to="#">
          <button className={styles.buttonCrudAdd}>
            ADICIONAR
          </button>
        </Link>

        <ProductFilters />
      </div>

      <div className={styles.productCrudCardContainerInList}>
        {page?.content.map(product => (
          <div 
            className={styles.productCrudCardContainerContentInList}
            key={product.id}  
          >
            <ProductCrudCard product={product} />
          </div>
        ))}

      </div>
      <Pagination />
    </div>
  )
}