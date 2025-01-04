import { Outlet } from "react-router-dom";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
