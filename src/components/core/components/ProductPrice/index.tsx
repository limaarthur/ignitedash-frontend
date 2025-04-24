import styles from './ProductPrice.module.css';

export function ProductPrice() {
  return (
    <div className={styles.productPriceContaier}>
      <span className={styles.productCurrency}>R$</span>
      <h3 className={styles.productPrice}>2.779,00</h3>
    </div>
  )
}