import { MdDelete } from "react-icons/md";
import { useStoreContext } from "../../context/StoreContext";

export default function BasketPage() {
  const { basket } = useStoreContext();

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
          {basket.basketItems.map((item) => (
            <tr key={item.productId}>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ height: 50, marginRight: 20 }}
                />{" "}
                <span>{item.name}</span>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn">
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
