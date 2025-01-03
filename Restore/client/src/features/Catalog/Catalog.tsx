import { Product } from "../../models/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
}

export default function Catalog({ products }: Props) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
