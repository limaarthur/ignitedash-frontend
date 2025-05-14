import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router";
import { requestBackendLogin } from '../../../../../core/utils/requests';
import { saveAuthData } from '../../../../../core/utils/storage';
import { getTokenData } from '../../../../../core/utils/auth';
import { AuthContext } from '../../../../../AuthContext';
import { ButtonLogin } from "../../../../../core/components/ButtonLogin";
import { AuthCard } from "../AuthCard";

import styles from './Login.module.css';

type CredentialsDTO = {
  username: string;
  password: string;
}

type LocationState = {
  from: string;
}

export function Login() {
  const location = useLocation();
  const from = (location.state as LocationState)?.from || '/admin';
  const { register, handleSubmit } = useForm<CredentialsDTO>();
  const [hasError, setHasError] = useState(false);
  const { setAuthContextData } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (credentialsDTO : CredentialsDTO) => {
    requestBackendLogin(credentialsDTO)
      .then((response) => {
        saveAuthData(response.data); //salva os dados no locaStorage
        setHasError(false); // fala que não teve erro no login

        setAuthContextData({ // Atualiza para Logout/Login na tela do usuario
          authenticated: true, //retorna verdadeiro
          tokenData: getTokenData(), //pega o token do usuario
        })

        navigate(from); //redireciona para tela de admin
      })

    .catch((error) => {
      setHasError(true);
      console.log('ERROR', error)
    })
    console.log(credentialsDTO);
  };
  
  return (
    <div className={styles.loginContainer}>
      <AuthCard title="login">
        {hasError && (
          <div className={styles.alertError}>
            Usuário ou senha inválidos!
          </div>
        )}

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className={styles.loginForm}
        >

          <div className={styles.loginFormEmailContent}>
            <input 
              {...register('username')}
              type="email"
              placeholder="Email"
              //name="username"
            />
          </div>

          <div className={styles.loginFormPasswordContent}>
            <input 
              {...register('password')}
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