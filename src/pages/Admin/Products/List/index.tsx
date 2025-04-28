import { Link } from "react-router";
import { ProductFilters } from "../../../../core/components/ProductFilters";

import styles from './List.module.css';

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
    </div>
  )
}