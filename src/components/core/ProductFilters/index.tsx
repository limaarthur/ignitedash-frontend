import SearchIcon from '../../core/assets/images/search-icon.svg';

import styles from './ProductFilters.module.css';

import Select from 'react-select';

export function ProductFilters() {
  return (
    <div className={styles.productFiltersContainer}>
      <div className={styles.inputSearch}>
        <input 
          type='text'
          placeholder='Nome do produto'
        />
        <img src={SearchIcon} alt="Imgaem de uma lupa" />
      </div>

      <Select 
        className={styles.filterSelectContainer}
        classNamePrefix={styles.productCategoriesSelect}
        placeholder='Categorias'
      />

      <button className={styles.clearFilterButton}>
        LIMPAR FILTRO
      </button>
    </div>  
  )
}