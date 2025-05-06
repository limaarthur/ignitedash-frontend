import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated, removeAuthData } from '../../utils/requests';
import { AuthContext } from '../../../AuthContext';
import { Link, useNavigate  } from "react-router";

import styles from "./Navbar.module.css";

export function Header() {
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    navigate('/');
  };

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
        <div className={styles.loginLogoutContainer}>
          {authContextData.authenticated ? (
            <>
              <span 
                className={styles.loginLogoutUsername}
              >
                {authContextData.tokenData?.username}
              </span>
              <a 
                className={styles.loginLogoutLink}
                href="#LOGOUT" 
                onClick={handleLogoutClick}
              >
                LOGOUT
              </a>
            </>
          ) : (
            <Link 
              className={styles.loginLogoutLinkLogin}
              to='/admin/auth'
            >
              LOGIN
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
