import { useEffect, useState } from "react";
import Catalog from "../catalog/Catalog";
import { Product } from "../../models/product";
import agent from "../../api/agent";
import LoadingComponent from "../../layout/LoadingComponent";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://localhost:7284/api/Products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading products" />;

  return (
    <div>
      {/* <h3 className='text-center mt-4'> Our Products</h3> */}
      <Catalog products={products} />
    </div>
  );
}
