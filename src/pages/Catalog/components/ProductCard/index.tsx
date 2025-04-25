import ProductImage from '../../../../core/assets/images/product.svg';
import { ProductPrice } from '../../../../core/components/ProductPrice';

import styles from "./ProductCard.module.css";

export function ProductCard() {
  return (
    <>
      <div className={styles.prodctCardContainer}>
        <img className={styles.producCardtImage} src={ProductImage} alt="Desktop" />
        <div className={styles.productInfo}>
          <h6 className={styles.productName}>
            Computador Desktop - Intel Core i7
          </h6>
          <ProductPrice />
        </div>
      </div>
    </>
  );
}