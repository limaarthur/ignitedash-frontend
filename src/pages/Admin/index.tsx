import { Header } from "../../core/components/Header";
import { Navbar } from "./components/Navbar";
import { Products } from "./Products";

import styles from './Admin.module.css';

export function Admin() {
  return (
    <>
      <Header />
      <div className={styles.adminContainer}>
        <Navbar />
        <div className={styles.adminContent}>
          <Products />
        </div>
      </div>
    </>
  );
}