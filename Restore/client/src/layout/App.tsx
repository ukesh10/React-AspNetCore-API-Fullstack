import { Outlet } from "react-router-dom";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from "../context/StoreContext";
import { useEffect, useState } from "react";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId) {
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket])

  if(loading) return <LoadingComponent message="Initialising app..." />
  return (
    <div className="">
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
