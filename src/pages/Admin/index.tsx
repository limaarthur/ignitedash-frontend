import { Route, Routes } from "react-router";
import { PrivateRoute } from "../../core/components/PrivateRoute";
import { Header } from "../../core/components/Header";
import { Navbar } from "./components/Navbar";
import { Products } from "./Products";

import styles from './Admin.module.css';

export function Admin() {
  return (
    <>
      <Header />
      <div className={styles.adminContainer}>
        <Navbar />
        <div className={styles.adminContent}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route 
                path="products"
                element={<Products />}
              />

              <Route 
                path="categories"
                element={<h1>Categories</h1>}
              />

              <Route 
                path="users"
                element={<h1>Users</h1>}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}