import styles from './ProductPrice.module.css';

type ProductPriceProps = {
  price: number;
}

export function ProductPrice({ price } : ProductPriceProps) {
  return (
    <div className={styles.productPriceContaier}>
      <span className={styles.productCurrency}>R$</span>
      <h3 className={styles.productPrice}>{price}</h3>
    </div>
  )
}