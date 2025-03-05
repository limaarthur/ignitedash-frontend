import { Header } from "../../components/Header";

import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <div className={styles.homeContentText}>
            <h1 className={styles.homeTitle}>
              Conheça o melhor <br />
              catálogo de produtos
            </h1>
            <p className={styles.homeSubTitle}>
              Ajudaremos você a encontrar os melhores produtos <br />
              disponíveis no mercado
            </p>
            <button>COMPONENTELOGINBTN</button>
          </div>
          <img className={styles.mainImage} src="/images/main.svg" alt="Girl coding" />
        </div>
      </div>
    </>
  );
}
