import { NavLink } from 'react-router';
import { hasAnyRoles } from '../../../../core/utils/auth';

import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.adminNavbarContainer}>
      <ul>
        <li>
          <NavLink to="/admin/products" className={styles.adminNavbarItem}>Meus produtos</NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className={styles.adminNavbarItem}>Minhas categorias</NavLink>
        </li>
        {hasAnyRoles(['ROLE_ADMIN']) && (
          <li>
            <NavLink to="/admin/users" className={styles.adminNavbarItem}>Meus usuários</NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}