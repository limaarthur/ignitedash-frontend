import { Header } from "../../core/components/Header";
import { ButtonLogin } from "../../core/components/ButtonLogin";

import MainImage from '../../core/assets/images/main.svg';

import { Footer } from "../../core/components/Footer";
import { hasAnyRoles  } from "../../core/utils/requests";

import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <h1>Resultado = {hasAnyRoles(["ROLE_ADMIN"]) ? 'Sim' : 'Não'}</h1>
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
            <ButtonLogin text="INICIE AGORA A SUA BUSCA" />
          </div>
          <img className={styles.mainImage} src={MainImage} alt="Girl coding" />
        </div>
      </div>
      <Footer />
    </>
  );
}
