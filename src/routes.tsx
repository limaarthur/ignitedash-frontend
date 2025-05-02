import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Catalog } from "./pages/Catalog";
import { ProductDetails } from "./pages/Catalog/ProductDetails";
import { Auth } from "./pages/Admin/Auth";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}