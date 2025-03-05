import styles from "./Navbar.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.mainNav}>
        <a className={styles.navLogoLink} href="#">IGNITEDASH.</a>
        <div className={styles.menuContainer}>
          <ul className={styles.mainMenu}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">CATÁLOGO</a>
            </li>
            <li>
              <a href="#">ADMIN</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
