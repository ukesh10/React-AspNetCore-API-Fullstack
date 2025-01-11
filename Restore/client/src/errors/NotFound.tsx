import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mt-4">
      <h3>Oops! we could not find what you are looking for</h3>
      <hr />
      <NavLink to="/products">Go back to shop</NavLink>
    </div>
  )
}
