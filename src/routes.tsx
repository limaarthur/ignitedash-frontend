import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Admin } from "./pages/Admin";
import { Catalog } from "./pages/Catalog";
import { ProductDetails } from "./pages/Catalog/ProductDetails";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}