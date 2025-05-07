import { Navigate, Outlet } from "react-router"
import { hasAnyRoles, isAuthenticated, Role } from "../../utils/auth";

type PrivateRouteProps = {
  roles?: Role[];
};

export const PrivateRoute = ({ roles = [] }: PrivateRouteProps) => {
  if (!isAuthenticated()) { // Se o usuário não estiver autenticado, redireciona para a página de login
    return (
      <Navigate
        to="/admin/auth/login"
        replace
        state={{ from: location }}
      />
    );
  }

  if (!hasAnyRoles(roles)) { // Se o usuário não tiver os papéis necessários, redireciona para /admin/products
    return <Navigate to="/admin/products" replace />;
  }
  // Caso o usuário esteja autenticado e tenha os papéis necessários, renderiza o Outlet (componente da rota filha)
  return <Outlet />;
}