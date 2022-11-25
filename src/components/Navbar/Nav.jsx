import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "active" : ""}>
      <nav className="max-content">
        <h1>Car Dealership</h1>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "hover active" : "hover"
              }
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "hover active" : "hover"
              }
              to="/products"
            >
              CARS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "hover active" : "hover"
              }
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "hover active" : "hover"
              }
              to="/galery"
            >
              GALERY
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "hover active" : "hover"
              }
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Nav };
