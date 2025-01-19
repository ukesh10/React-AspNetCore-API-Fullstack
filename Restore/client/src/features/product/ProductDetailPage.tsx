import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";
import agent from "../../api/agent";
import NotFound from "../../errors/NotFound";
import LoadingComponent from "../../layout/LoadingComponent";
import { useStoreContext } from "../../context/StoreContext";

export default function ProductDetailPage() {
  const { basket, setBasket, removeItem } = useStoreContext();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const item = basket?.basketItems.find((i) => i.productId == product?.id);

  // useEffect(() => {
  //   axios
  //     .get(`https://localhost:7284/api/Products/${id}`)
  //     .then((res) => setProduct(res.data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [id]);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
    id &&
      agent.Catalog.details(parseInt(id))
        .then((response) => setProduct(response))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id, item]);

function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  if (parseInt(event.currentTarget.value) >= 0 ){
    setQuantity(parseInt(event.currentTarget.value));
  }
}

function handleUpdateCart() {
  if(!product) return null;
  setSubmitting(true);
  if(!item || quantity > item.quantity) {
    const updatedQuantity = item ? quantity - item.quantity : quantity;
    agent.Basket.addItem(product.id, updatedQuantity)
    .then(basket => setBasket(basket))
    .catch(error => console.log(error))
    .finally(() => setSubmitting(false))
  }
  else{
    const updatedQuantity = item.quantity - quantity;
    agent.Basket.removeItem(product.id, updatedQuantity)
    .then(() => removeItem(product.id, updatedQuantity))
    .catch(error => console.log(error))
    .finally(() => setSubmitting(false))
  }
}

  if (loading) {
    return <LoadingComponent message="Loading product" />;
  }

  if (!product) {
    return <NotFound />;
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
                <th className="border-0" scope="row">
                  Quantity in stock
                </th>
                <td className="border-0">{product.quantityInStock}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex gap-4">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Quantity in Cart"
                value={item?.quantity}
                onChange={handleInputChange}
              />
              <label htmlFor="floatingInput">Quantity in Cart</label>
            </div>
            <button disabled={item?.quantity === quantity || quantity === 0 } className="btn btn-primary px-4 fs-5 w-50" onClick={handleUpdateCart}>
              {item ? "Update Quantity" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
