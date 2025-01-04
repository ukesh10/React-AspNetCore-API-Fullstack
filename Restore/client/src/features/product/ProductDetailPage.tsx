import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://localhost:7284/api/Products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (Loading) {
    return <div className="container">Loading...</div>;
  }

  if (!product) {
    return <div className="container">Product not found.</div>;
  }

  return (
    <div className="container mt-4">
      {/* Product Image */}
      <div className="row mt-md-4">
        <div className="col-12 mt-md-4 col-md-6 mb-3">
          <img
            src="https://images.unsplash.com/photo-1735689978278-c3400952ddda?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded-sm mt-md-5"
            alt={product.name}
          />
        </div>
        {/* Product Details */}
        <div className="col-12 col-md-6 mb-3">
        <h1 className="mb-3">{product.name}</h1>
        {/* <hr className="d-none d-md-block" /> */}
          <h2 className="text-purple mb-2">
            $ {(product.price / 100).toFixed(2)}
          </h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{product.name}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{product.description}</td>
              </tr>
              <tr>
                <th scope="row">Type</th>
                <td>{product.type}</td>
              </tr>
              <tr>
                <th scope="row">Brand</th>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <th scope="row">Quantity in stock</th>
                <td>{product.quantityInStock}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
