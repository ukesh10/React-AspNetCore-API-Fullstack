import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mid and Right Links for the Navbar
const midLinks = [
  { title: "catalog", path: "/products" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Re-Store
        </Link>

        {/* Navbar Toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavbarOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsing Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          {/* Mid Links */}
          <ul className="navbar-nav me-auto mx-auto mb-lg-0">
            {midLinks.map((link) => (
              <li className="nav-item" key={link.title}>
                <Link
                  className="nav-link active text-white"
                  to={link.path}
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  {link.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {rightLinks.map((link) => (
              <li className="nav-item" key={link.title}>
                <Link
                  className="nav-link active text-white"
                  to={link.path}
                  aria-current="page"
                  onClick={closeNavbar}
                >
                  {link.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
