import { useStoreContext } from "../../context/StoreContext";
import { currencyFormat } from "../../util/util";

export default function BasketSummary() {
  const {basket} = useStoreContext();
  const subtotal = basket?.basketItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
  const deliveryFee = subtotal > 10000 ? 0 : 500;
    return (
        <table className="table">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{currencyFormat(subtotal)}</td>
          </tr>
          <tr>
            <td>Delivery fee*</td>
          <td>{currencyFormat(deliveryFee)}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{currencyFormat(subtotal + deliveryFee)}</td>
          </tr>
          <tr>
            <td><em>*Orders above $100 qualify for free delivery</em></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
  