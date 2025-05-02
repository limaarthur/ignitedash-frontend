import { CaretRight } from "@phosphor-icons/react";

import styles from "./ButtonLogin.module.css";

type ButtonLoginProps = {
  text: string;
}

export function ButtonLogin({ text }: ButtonLoginProps) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonContent}>
        <h5>
          {text}
        </h5>
      </button>
      <div className={styles.buttonIcon}>
        <CaretRight />
      </div>
    </div>
  );
}