import { MdDelete } from "react-icons/md";
import { useStoreContext } from "../../context/StoreContext";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useState } from "react";
import agent from "../../api/agent";
import BasketSummary from "./BasketSummary";
import { useNavigate } from "react-router-dom";

export default function BasketPage() {
  const { basket, setBasket, removeItem } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate(`/checkout`);
  };

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function handleRemoveItem(productId: number, quantity = 1) {
    setLoading(true);
    agent.Basket.removeItem(productId, quantity)
      .then(() => removeItem(productId, quantity))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  if (!basket) return <p className="container mt-4">Your basket is empty</p>;
  
  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {basket.basketItems.map((item, index) => (
            <tr key={item.productId}>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ height: 50, marginRight: 20 }}
                />
                <span>{item.name}</span>
              </td>
              <td>${(item.price / 100).toFixed(2)}</td>
              <td className="">
                <div className="d-flex align-items-center">
                  <button className="btn">
                    <LuMinus
                      onClick={() => handleRemoveItem(item.productId)}
                      color="darkRed"
                    />
                  </button>{" "}
                  {item.quantity}                 
                  <button className="btn">
                    <LuPlus
                      onClick={() => handleAddItem(item.productId)}
                      color="#6a0dad"
                    />
                  </button>
                </div>
              </td>
              <td>${((item.price / 100) * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn">
                  <MdDelete
                    onClick={() =>
                      handleRemoveItem(item.productId, item.quantity)
                    }
                    color="darkRed"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex flex-column w-25 justify-content-end ms-auto mb-4">
        <BasketSummary />
        <button
          className="btn btn-primary flex-shrink-0"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
