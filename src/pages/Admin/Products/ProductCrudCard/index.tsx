import type { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../../../core/utils/requests';
import { Link } from 'react-router';
import { ProductPrice } from '../../../../core/components/ProductPrice';
import type { Product } from '../../../../core/types/products';
import { CategoryBadge } from '../CategoryBadge';

import styles from './ProductCrudCard.module.css';

type ProductCrudCardProps = {
  product: Product; // Atribui os dados do Produto na variavel
  onDelete: (productId: number) => void; // Evento que é uma função 
}

export function ProductCrudCard({ product, onDelete }: ProductCrudCardProps) {
  const handleDelete = (productId: number) => { //função para deletar o produto

    if (!window.confirm('Tem certeza que seja deletar?')) { // Solicita confimação do usuário
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete(productId); // Dispara a função onDelete para atualizar os dados 
    });
  };

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
        <Link to={`/admin/products/${product.id}`}>
          <button className={styles.productCrudCardButtonRemove}>
            EDITAR
          </button>
        </Link>
        
        <button 
          className={styles.productCrudCardButtonEdit}
          onClick={() => handleDelete(product.id)}  
        >
          EXCLUIR
        </button>
      </div>
    </div>
  )
}