import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../core/utils/requests';
import { Link, useParams } from 'react-router';
import ArrowIcon from '../../../core/assets/images/arrow-icon.svg?react';
import { Header } from '../../../core/components/Header';
import { ProductPrice } from '../../../core/components/ProductPrice';
import type { Product } from '../../../core/types/products';

import { ProductInfoLoader } from './ProductInfoLoader';
import { ProductDetailsLoader } from './ProductDetailsLoader';

import styles from './ProductDetails.module.css';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (!productId) return;
    setIsLoading(true);
    axios.get(`${BASE_URL}/products/${productId}`)
    .then(response => {
      setProduct(response.data);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [productId]);

  return (
    <>
      <Header />
      <div className={styles.productDetailsContainer}>
        <div className={styles.cardDetailsProduct}>
          <Link to='/products' className={styles.productDetailsGoback}>
            <ArrowIcon className={styles.iconGoback} />
            <h1 className={styles.textGoback}>voltar</h1>
          </Link>

          <div className={styles.productDetailsInfo}>
            <div className={styles.productInfo}>
              {isLoading ? (
                <ProductInfoLoader />
              ) : (
                <>
                  <div className={styles.productDetailsCard}>
                    <img 
                      src={product?.imgUrl} 
                      alt={product?.name} 
                      className={styles.productDetailsImage} 
                    />
                  </div>
                  <div className={styles.productInfoFields}>
                    <h1 className={styles.productDetailsName}>
                      {product?.name}
                    </h1>
                    {product && <ProductPrice price={product.price} />}
                  </div>
                </>
              )}
            </div>

            <div className={styles.productDescriptionCard}>
              {isLoading ? (
                <ProductDetailsLoader />
              ) : (
                <>
                  <h1 className={styles.productDescriptionTitle}>
                    Descrição do produto
                  </h1>
                  <p className={styles.productDescriptionText}>
                    {product?.description}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}