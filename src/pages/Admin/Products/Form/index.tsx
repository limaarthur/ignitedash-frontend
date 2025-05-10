import { useParams } from "react-router";

export function Form() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Hello form: {productId}</h1>
    </div>
  )
}