import { Link } from "react-router";
import styles from "./Navbar.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.mainNav}>
        <Link className={styles.navLogoLink} to="/">IGNITEDASH.</Link>
        <div className={styles.menuContainer}>
          <ul className={styles.mainMenu}>
            <li>
              <Link to="/" className={styles.isActive}>HOME</Link>
            </li>
            <li>
              <Link to="/catalog" className={styles.isActive}>CATÁLOGO</Link>
            </li>
            <li>
              <Link to="/admin" className={styles.isActive}>ADMIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
