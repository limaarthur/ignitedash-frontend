import { NavLink } from 'react-router';

import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.adminNavbarContainer}>
      <ul>
        <li>
          <NavLink to="#" className={styles.adminNavbarItem}>Meus produtos</NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.adminNavbarItem}>Minhas categorias</NavLink>
        </li>
        <li>
          <NavLink to="#" className={styles.adminNavbarItem}>Meus usuários</NavLink>
        </li>
      </ul>
    </div>
  )
}