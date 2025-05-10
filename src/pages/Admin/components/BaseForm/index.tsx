import styles from './BaseForm.module.css';

type BaseFormProps = {
  title: string;
  children: React.ReactNode;
}

export function BaseForm({ title, children}: BaseFormProps) {
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