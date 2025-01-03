import { Product } from "../../models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
