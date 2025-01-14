import { useNavigate } from "react-router-dom";
import { Product } from "../../models/product";
import agent from "../../api/agent";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/product/${product.id}`);
  };

  function handleAddItem(productId: number){
    agent.Basket.addItem(productId);
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
        src="https://images.unsplash.com/photo-1735689978278-c3400952ddda?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="img-fluid rounded-sm"
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title text-purple">
          ${(product.price / 100).toFixed(2)}
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
