import { Link } from "react-router";
import { ProductFilters } from "../../../../core/components/ProductFilters";
import { ProductCrudCard } from "../ProductCrudCard";

import styles from './List.module.css';
import { Pagination } from "../../../../core/components/Pagination";

export function List() {
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
        <div className={styles.productCrudCardContainerContentInList}>
          <ProductCrudCard />
          <ProductCrudCard />
          <ProductCrudCard />
        </div>
      </div>
      <Pagination />
    </div>
  )
}