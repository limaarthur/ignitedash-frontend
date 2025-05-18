import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { requestBackend } from '../../utils/requests';
import Select from 'react-select';
import type { Category } from '../../types/category';
import SearchIcon from '../../assets/images/search-icon.svg?react';

import styles from './ProductFilters.module.css';

export type ProductFilterData = {
  name: string;
  category: Category | null;
};

export function ProductFilters() {
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const {
    register,
    handleSubmit,
    control, // Objeto de controle do hook form
 } = useForm<ProductFilterData>();

const onSubmit = (formData: ProductFilterData) => {
  console.log('Enviou', formData);
};

useEffect(() => {
  requestBackend({ url: '/categories' }).then((response) => {  // Função pra carrega do backend quando o componente for montado
    setSelectCategories(response.data.content); // Atribui o dados da resposta do backend no setSelectCategories
  });
}, []);

  return (
    <div className={styles.productFiltersContainer}>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className={styles.productFilterForm}
      >
        <div className={styles.inputSearch}>
          <input 
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Pesquisar Produto"
            name="name"
          />
          <button className={styles.buttonSearch}>
            <SearchIcon />
          </button>
        </div>

          <Controller 
            name="category" // Nome do campo, tem q ser igual o nome do estado e do tipo Product
            control={control}
            render={({ field }) => ( // Integra o select do formulário com o campo gerenciado pelo react-hook-form
            <Select
              {...field}
              options={selectCategories} // Categorias carregadas do backend
              isClearable
              className={styles.filterSelectContainer}
              classNamePrefix={styles.productCategoriesSelect}
              getOptionLabel={(category: Category) => category.name} // Recebe o item da lista e coloca o nome da categoria
              getOptionValue={(category: Category) => String(category.id)} // Recebe o item da lista e coloca o valor da categoria
              placeholder='Categorias'
            />
          )}
        />

        <button className={styles.clearFilterButton}>
          LIMPAR FILTRO
        </button>
      </form>
    </div>  
  )
}