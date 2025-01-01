import { useState, useEffect } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://localhost:7284/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <Catalog products={products} />
    </>
  );
}

export default App;
