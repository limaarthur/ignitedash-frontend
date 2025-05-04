import { Routes, Route, Navigate } from "react-router";
import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";
import { Catalog } from "../pages/Catalog/index.tsx";
import { ProductDetails } from "../pages/Catalog/ProductDetails";
import { Auth } from "../pages/Admin/Auth";
import { CustomRouter } from "./CustomerRouter";
import history from '../core/utils/history';

export function AppRoutes() {
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/auth/*" element={<Auth />} />
        <Route path="/admin/auth" element={<Navigate to="/admin/auth/login" replace />} />
      </Routes>
    </CustomRouter>
  )
}