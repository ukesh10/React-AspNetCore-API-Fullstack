import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <li key={product.id}>
      {product.quantityInStock} - {product.name} - {product.price}
    </li>
  );
}
