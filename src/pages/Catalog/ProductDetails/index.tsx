import { Link } from 'react-router';

import ArrowIcon from '../../../core/assets/images/arrow-icon.svg?react';
import ProductImage from '../../../core/assets/images/product.svg';

import { Header } from '../../../core/components/Header';

import styles from './ProductDetails.module.css';
import { ProductPrice } from '../../../core/components/ProductPrice';

export function ProductDetails() {
  return (
    <>
      <Header />
      <div className={styles.productDetailsContainer}>
        <div className={styles.cardDetailsProduct}>
          <Link to="/catalog" className={styles.productDetailsGoback}>
            <ArrowIcon className={styles.iconGoback} />
            <h1 className={styles.textGoback}>voltar</h1>
          </Link>
          <div className={styles.productDetailsInfo}>
            <div className={styles.productInfo}>
              <div className={styles.productDetailsCard}>
                <img src={ProductImage} alt="Desktop" className={styles.productDetailsImage} />
              </div>
              <div className={styles.productInfoFields}>
                <h1 className={styles.productDetailsName}>
                  Computador Desktop - Intel Core i7
                </h1>
                <ProductPrice />
              </div>
            </div>
            <div className={styles.productDescriptionCard}>
              <h1 className={styles.productDescriptionTitle}>
                Título da descrição do produto
              </h1>
              <p className={styles.producuDescriptionText}>
                Seja um mestre em multitarefas com a capacidade para exibir quatro aplicativos simultâneos na tela. 
                A tela está ficando abarrotada? Crie áreas de trabalho virtuais para obter mais espaço e trabalhar com os itens que você deseja. 
                Além disso, todas as notificações e principais configurações são reunidas em uma única tela de fácil acesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}