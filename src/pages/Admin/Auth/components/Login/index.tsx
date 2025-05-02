import { Link } from "react-router";
import { ButtonLogin } from "../../../../../core/components/ButtonLogin";
import { AuthCard } from "../AuthCard";

import styles from './Login.module.css';

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <AuthCard title="login">
        <form className={styles.loginForm}>
          <div className={styles.loginFormEmailContent}>
            <input 
              type="email"
              placeholder="Email"
              name="username"
            />
          </div>

          <div className={styles.loginFormPasswordContent}>
            <input 
              type="password"
              placeholder="Senha"
              name="password" 
            />
          </div>


          <Link 
            to='/auth/recover' 
            className={styles.loginRecoverLink}
          >
            Esqueci a senha?
          </Link>

          <div className={styles.loginSubmit}>
            <ButtonLogin text="Logar"/>
          </div>

          <div className={styles.userRgisteredContainer}>
            <span className={styles.notRegistered}>
              Não tem cadastro?
            </span>

            <Link 
              to='/auth/register' 
              className={styles.loginLinkRegister}
            >
              CADASTRAR
            </Link>
          </div>
        </form>
      </AuthCard>
    </div>
  )
}