import { Route, Routes } from 'react-router';
import { Login } from './components/Login';
import AuthImage from '../../../core/assets/images/auth-image.svg?react';

import styles from './Auth.module.css';

export function Auth() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authBannerContainer}>
        <h1 className={styles.authBannerContainerTitle}>
          Divulgue seus produtos <br /> no Ignitedash
        </h1>
        <p className={styles.authBannerContainerSubTitle}>
          Faça parte do nosso catálogo de divulgação e <br /> aumente a venda dos seus produtos.
        </p>
        <AuthImage />
      </div>
      <div>
        <Login />
      </div>
      <div className={styles.authFormContainer}>
        <Routes>
          <Route path="/admin/auth/login" element={<Login />} />
          <Route path="/admin/auth/signup" element={<h1>Card de signup</h1>} />
          <Route path="/admin/auth/recover" element={<h1>Card de recover</h1>} />
        </Routes>
      </div>
    </div>
  )
}