import { Route, Routes } from "react-router";
import { List } from "./List";
import { Form } from "./Form";

export function Products() {
  return (
    <Routes>
      <Route
        path=""
        element={<List />}
      >
      </Route>

      <Route
        path=":productId"
        element={<Form />}
      >
      </Route>
    </Routes>
  )
}