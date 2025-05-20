import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../../../core/utils/requests";
import type { SpringPage } from "../../../../core/types/spring";
import type { Product } from "../../../../core/types/products";
import { ProductCrudCard } from "../ProductCrudCard";
import { ProductFilters, ProductFilterData } from "../../../../core/components/ProductFilters";
import { Pagination } from "../../../../core/components/Pagination";

import styles from './List.module.css';

type ControlComponentsData = {  // dados dos componentes de controle
  activePage: number; // número da página ativa, vindo do componente de paginação
  filterData: ProductFilterData;
}

export function List() {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({ 
    //Mantém o estado dos dados de todos os componentes que fazem algum controle da listagem
      activePage: 0,
      filterData: { name: '', category: null }
    });

  const handlePageChange = (pageNumber: number) => { 
    //Atualiza o estado que o componente devolve
    setControlComponentsData({ 
      activePage: pageNumber, 
      filterData: controlComponentsData.filterData 
    });
  };

  const handleSubmitFilter = (data: ProductFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getProducts = useCallback(() => { 
    //Função para pegar todos os produtos no backend
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: controlComponentsData.activePage,
        size: 3,
        name: controlComponentsData.filterData.name,
        categoryId: controlComponentsData.filterData.category?.id
      }
    };

    requestBackend(config).then((response) => {
      // Passa o config como parametro no requestBackend
      setPage(response.data)
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getProducts(); // Chama a função
  }, [getProducts]);

  return (
    <div className={styles.productCrudContainer}>
      <div className={styles.productCrudBarContainer}>
        <Link to="#">
          <button className={styles.buttonCrudAdd}>
            ADICIONAR
          </button>
        </Link>

        <ProductFilters onSubmitFilter={handleSubmitFilter} />
      </div>

      <div className={styles.productCrudCardContainerInList}>
        {page?.content.map(product => (
          <div 
            className={styles.productCrudCardContainerContentInList}
            key={product.id}  
          >
            <ProductCrudCard
              product={product}
              onDelete={getProducts} //evento que chama a lista atualizada
            />
          </div>
        ))}

      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  )
}