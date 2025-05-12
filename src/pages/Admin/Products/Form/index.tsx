import { BaseForm } from "../../components/BaseForm";

import styles from './Form.module.css';

export function Form() {
  return (
    <form>
      <BaseForm
        title="DADOS DO PRODUTO"
      >

        <div className={styles.productFormContainer}> {/* CONTAINER SECUNDARIO AMARELO */}
          <div className={styles.inputsContainer}> {/* CONTAINER DOS INPUTS */}

            <div className={styles.input01}>
              <input 
                type="text"
                className={styles.input01}
              />
            </div>

            <div className="input02">
              <input 
                type="text"
                className={styles.input02}
              />
            </div>

            <div className="input03">
              <input 
                type="text"
                className={styles.input03}
              />
            </div>

          </div>

          <div>
            <div>
              <textarea

                placeholder="Descrição"
                className={styles.productDescriptionCard}
              />
            </div>
          </div>
        </div>
      </BaseForm>
    </form>
  )
}