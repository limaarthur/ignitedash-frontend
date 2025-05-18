import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../../../core/utils/requests";
import type { SpringPage } from "../../../../core/types/spring";
import type { Product } from "../../../../core/types/products";
import { ProductFilters } from "../../../../core/components/ProductFilters";
import { ProductCrudCard } from "../ProductCrudCard";
import { Pagination } from "../../../../core/components/Pagination";

import styles from './List.module.css';

export function List() {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    getProducts(0);
  }, []);

  const getProducts = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: pageNumber,
        size: 3,
      }
    };

    requestBackend(config).then((response) => {
      setPage(response.data)
      });
    };


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
            <ProductCrudCard 
              product={product}
              onDelete={() => getProducts(page.number)} //evento que chama a lista atualizada
            />
          </div>
        ))}

      </div>
      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getProducts}
      />
    </div>
  )
}