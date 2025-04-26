import { ProductPrice } from '../../../../core/components/ProductPrice';
import type { Product } from '../../../../core/types/products';

import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className={styles.prodctCardContainer}>
        <img className={styles.producCardtImage} src={product.imgUrl} alt={product.name} />
        <div className={styles.productInfo}>
          <h6 className={styles.productName}>
            {product.name}
          </h6>
          <ProductPrice price={product.price} />
        </div>
      </div>
    </>
  );
}