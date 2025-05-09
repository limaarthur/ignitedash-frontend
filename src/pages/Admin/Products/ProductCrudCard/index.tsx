import { ProductPrice } from '../../../../core/components/ProductPrice';
import type { Product } from '../../../../core/types/products';
import { CategoryBadge } from '../CategoryBadge';

import styles from './ProductCrudCard.module.css';

type ProductCrudCardProps = {
  product: Product;
}

export function ProductCrudCard({ product }: ProductCrudCardProps) {
  return (
    <div className={styles.productCrudCardContainer}>
      <div className={styles.productCrudCardImageContainer}>
        <img className={styles.productCrudCardImg} src={product.imgUrl} alt={product.name} />
      </div>
      <div className={styles.productCrudCardContentContainer}>
        <h3 
          className={styles.productCrudCardName}>
            {product.name}
        </h3>

        <ProductPrice price={product.price}/>

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