import { formatPriceParts } from '../../utils/formatters';
import styles from './ProductPrice.module.css';

type ProductPriceProps = {
  price: number;
}

export function ProductPrice({ price } : ProductPriceProps) {
  const { currency, number } = formatPriceParts(price);

  return (
    <div className={styles.productPriceContaier}>
      <span className={styles.productCurrency}>{currency}</span>
      <h3 className={styles.productPrice}>{number}</h3>
    </div>
  )
}