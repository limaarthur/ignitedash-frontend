import { useEffect, useState } from "react";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../../../core/utils/requests";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import type { Product } from "../../../../core/types/products";
import type { Category } from "../../../../core/types/category";
import Select from "react-select";
import CurrencyInput from "react-currency-input-field";
import { BaseForm } from "../../components/BaseForm";

import styles from './Form.module.css';

type UrlParams = { // tipo criado, pode ser mais de um em uma rota url
  productId: string;
};

export function Form() {
  const [selectCategories, setSelectCategories] = useState<Category[]>([])
  const navigate = useNavigate();
  const { productId } = useParams<UrlParams>(); //pega o parametro da url
  const isEditing = productId !== 'create'; //se parametro da url for diferente do create
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, //permite definir o valor de algum atributo
    control,
  } = useForm<Product>(); 

  useEffect(() => {
    requestBackend({url: '/categories'})
    .then(response => {
      setSelectCategories(response.data.content);
    })
  }, []);
  
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

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/products/${productId}` : '/products',
      data: formData,
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
                  required: '* Campo obrigatório!',
                })}
                type="text"
                placeholder="Nome do produto"
                className={`${styles.input} ${errors.name ? 'is-invalid' : ''}`}
              />
              <div className={styles.invalidFeedback}>
                {errors.name?.message}
              </div>
            </div>

            <div>
              <Controller
                name="price"
                rules={{ required: 'Campo Obrigatório' }}
                control={control}
                render={({ field }) => (
                  <CurrencyInput
                    placeholder="Preço"
                    className={`${styles.input} ${errors.name ? 'is-invalid' : ''}`}
                    disableGroupSeparators={true}
                    value={field.value}
                    onValueChange={field.onChange}
                  />
                )}
              />
              <div className={styles.invalidFeedback}>
                {errors.price?.message}
              </div>
            </div>

            <div>
              <input
                {...register('imgUrl', {
                  required: '* Campo obrigatório!',
                  pattern: {
                    value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                    message: 'Deve ser uma url válida',
                  },
                })}
                type="text"
                className={`${styles.input} ${errors.imgUrl ? 'is-invalid' : ''}`} // Mostra o campo vermelho
                placeholder="Url da imagem do produto"
                name="imgUrl"
                data-testid="imgUrl"
              />
              <div className={styles.invalidFeedback}>
                {errors.imgUrl?.message}
              </div>
            </div>

            <div>
              <Controller
                name="categories" // Nome do campo, tem q ser igual o nome do estado e do tipo Product
                rules={{ required: true }} // Regra de validação
                control={control}
                render={({ field }) => ( 
                  // Integra o select do formulário com o campo gerenciado pelo react-hook-form
                  <Select 
                    {...field}
                    placeholder="Categorias"
                    options={selectCategories}
                    isMulti
                    getOptionLabel={(category: Category) => category.name} // Recebe o item da lista e coloca o nome da categoria
                    getOptionValue={(category: Category) => String(category.id)} // Recebe o item da lista e coloca o valor da categoria
                  />
                )}
              />

              {/* Exibe a mensagem de erro se nenhuma categoria for selecionada */}
              {errors.categories && (
                <div className={styles.invalidFeedback}>
                  * Campo Obrigatório!
                </div>
                )}
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