import { useForm } from 'react-hook-form';
import { Link } from "react-router";
import { ButtonLogin } from "../../../../../core/components/ButtonLogin";
import { AuthCard } from "../AuthCard";

import styles from './Login.module.css';

type FormData = {
  username: string
  password: string
}

export function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (formData : FormData) => {
    console.log(formData);
  };
  
  return (
    <div className={styles.loginContainer}>
      <AuthCard title="login">

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className={styles.loginForm}
        >

          <div className={styles.loginFormEmailContent}>
            <input 
              {...register("username")}
              type="email"
              placeholder="Email"
              //name="username"
            />
          </div>

          <div className={styles.loginFormPasswordContent}>
            <input 
              {...register("password")}
              type="password"
              placeholder="Senha"
              //name="password" 
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