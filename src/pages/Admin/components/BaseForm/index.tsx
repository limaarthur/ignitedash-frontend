import { useNavigate } from "react-router";

import styles from './BaseForm.module.css';

type BaseFormProps = {
  title: string;
  children: React.ReactNode;
}

export function BaseForm({ title, children}: BaseFormProps) {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('../'); //volta para a listagem
  };

  return (
    <div className={styles.adminBaseForm}>
      <h1 
        className={styles.adminFormTitle}
      >
        {title}
      </h1>
      {children}
      <div className={styles.baseFormActions}>
        <button 
          className={styles.buttonCancel}
          onClick={handleCancel}
        >
          CANCELAR
        </button>

        <button 
          className={styles.buttonSave}
        >
          SALVAR
        </button>
      </div>
    </div>
  )
}