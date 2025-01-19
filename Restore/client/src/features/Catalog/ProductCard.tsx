import { useNavigate } from "react-router-dom";
import { Product } from "../../models/product";
import agent from "../../api/agent";
import { useStoreContext } from "../../context/StoreContext";
import { useState } from "react";
import { currencyFormat } from "../../util/util";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/product/${product.id}`);
  };

  function handleAddItem(productId: number){
    setLoading(true)
    agent.Basket.addItem(productId)
    .then(basket => setBasket(basket))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  return (
    <div className="card shadow-sm">
      <div className="card-heading card-body d-flex align-items-center">
        <div
          className="rounded-circle bg-purple text-white d-flex align-items-center justify-content-center"
          style={{
            width: "32px",
            height: "32px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {product.name.charAt(0).toUpperCase()}
        </div>
        <p className="ms-3 mb-0 fw-bold text-primary text-truncate">
          {product.name}
        </p>
      </div>
      <img
        src={product.imageUrl}
        className="img-fluid rounded-sm"
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title text-purple">
          ${currencyFormat(product.price)}
        </h5>
        <h6 className="card-subtitle text-body-secondary">
          {product.brand} / {product.type}
        </h6>
        {/* <p className="card-text text-secondary">
          {product.description.slice(0, 50)}...
        </p> */}
      </div>
      <div className="btns card-body d-flex align-items-start flex-wrap justify-content-start gap-2">
          <button className="btn btn-outline-primary flex-shrink-0" onClick={() => handleAddItem(product.id)}>
            ADD TO CART
          </button>
          <button className="btn btn-outline-secondary flex-shrink-0" onClick={handleViewClick}>
            VIEW
          </button>
        </div>
    </div>
  );
}
