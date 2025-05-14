import { useEffect } from "react";
import type { AxiosRequestConfig } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import type { Product } from "../../../../core/types/products";
import { BaseForm } from "../../components/BaseForm";
import { requestBackend } from "../../../../core/utils/requests";

import styles from './Form.module.css';

type UrlParams = { // tipo criado, pode ser mais de um em uma rota url
  productId: string;
};

export function Form() {
  const navigate = useNavigate();
  const { productId } = useParams<UrlParams>(); //pega o parametro da url
  const isEditing = productId !== 'create'; //se parametro da url for diferente do create
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, //permite definir o valor de algum atributo
  } = useForm<Product>();
  
  useEffect(() => {
    // função pra carrega os dados do produto no formulário de editar
    if (isEditing) {
      //se estiver na rota de editar
      requestBackend({ url: `/products/${productId}` }).then((response) => {
        //carrega o produto do id pego na rota url
        const product = response.data as Product; //atribui os dados carregados do tipo Product na const
        setValue('name', product.name); //coloca os valores no formulario
        setValue('price', product.price);
        setValue('description', product.description);
        setValue('imgUrl', product.imgUrl);
        setValue('categories', product.categories);
      });
    }
  }, [isEditing, productId, setValue]); //caso mudar o valor de algum, a função atualiza os dados

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
      imgUrl: isEditing
      ? formData.imgUrl
      : 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
      categories: isEditing ? formData.categories : [{ id: 1, name: 'teste' }],
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      navigate('/admin/products');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <BaseForm
        title="DADOS DO PRODUTO"
      >
        <div className={styles.productFormContainer}> 
          <div className={styles.inputsContainer}>
            <div>
              <input 
                {...register('name', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                placeholder="Nome do produto"
                className={`${styles.input} ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name?.message}
            </div>

            <div>
              <input 
                type="text"
                placeholder="Categorias"
                className={styles.input}
              />
            </div>

            <div>
              <input 
                {...register('price', {
                  required: 'Campo Obrigatório',
                })}
                type="number"
                placeholder="Preço do produto"
                className={`${styles.input} ${errors.name ? 'is-invalid' : ''}`}
              />
              <div className={styles.invalidFeedback}>
                {errors.price?.message}
              </div>
            </div>
          </div>

          <div>
            <div>
              <textarea
                {...register('description', {
                  required: 'Campo Obrigatório',
                })}
                className={`${styles.productDescriptionCard} ${errors.description ? 'is-invalid' : ''}`}
                placeholder="Descrição"
                name="description"
                rows={10}
              />
              <div className={styles.invalidFeedback}>
                {errors.description?.message}
              </div>
            </div>
          </div>

        </div>
      </BaseForm>
    </form>
  )
}