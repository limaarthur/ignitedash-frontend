import ProductImg  from '../../../../core/assets/images/product.svg';
import { ProductPrice } from '../../../../core/components/ProductPrice';
import { CategoryBadge } from '../CategoryBadge';

import styles from './ProductCrudCard.module.css';

export function ProductCrudCard() {
  return (
    <div className={styles.productCrudCardContainer}>
      <div className={styles.productCrudCardImageContainer}>
        <img className={styles.productCrudCardImg} src={ProductImg} alt="" />
      </div>
      <div className={styles.productCrudCardContentContainer}>
        <h3 
          className={styles.productCrudCardName}>
            Computador Desktop - Intel Core i7
        </h3>
        <ProductPrice />
        <div className={styles.productCrudCategoriesContainer}>
          <CategoryBadge />
          <CategoryBadge />
        </div>
      </div>
      <div className={styles.productCrudCardButtonsContainer}>
        <button className={styles.productCrudCardButtonRemove}>
          EDITAR
        </button>
        <button className={styles.productCrudCardButtonEdit}>
          EXCLUIR
        </button>
      </div>
    </div>
  )
}