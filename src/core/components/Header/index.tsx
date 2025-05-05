import { useEffect, useState } from 'react';
import { getTokenData, isAuthenticated, removeAuthData, TokenData } from '../../utils/requests';
import { Link, useNavigate  } from "react-router";
import styles from "./Navbar.module.css";

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

export function Header() {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
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
          {authData.authenticated ? (
            <>
              <span 
                className={styles.loginLogoutUsername}
              >
                {authData.tokenData?.username}
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
