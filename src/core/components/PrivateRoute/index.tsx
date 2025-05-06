import { Navigate, Outlet } from "react-router"

import { isAuthenticated } from "../../utils/requests";

export const PrivateRoute = () => {
  return isAuthenticated() ? ( //testa se o usuario não esta autenticado
    <Outlet /> // renderiza o componente da rota filha (caso o usuário esteja autenticado)
  ) : ( 
    <Navigate // redireciona para a tela de login
      to="/admin/auth/login" 
      replace 
      state={{ from: location}}  
    />
  )
}