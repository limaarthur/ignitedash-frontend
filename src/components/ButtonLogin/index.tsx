import { CaretRight } from "@phosphor-icons/react";

import styles from "./ButtonLogin.module.css";

export function ButtonLogin() {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonContent}>
        <h5>
          INICIE AGORA A SUA BUSCA
        </h5>
      </button>
      <div className={styles.buttonIcon}>
        <CaretRight />
      </div>
    </div>
  );
}