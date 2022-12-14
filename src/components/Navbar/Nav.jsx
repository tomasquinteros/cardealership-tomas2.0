import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';

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

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }
  return (
    <header className={navbar ? "active" : ""}>
      <div className="header max-content">
        <h1>Car Dealership</h1>
        <nav ref={navRef}>
          <ul>
            <li>
              <NavLink className={({ isActive }) =>isActive ? "hover active" : "hover"}
                to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "hover active" : "hover"}
                to="/products">CARS</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "hover active" : "hover"}
                to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "hover active" : "hover"}
                to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <button className="btn-nav btn-close"  onClick={showNavbar}>
                <FaTimes/>
              </button>
            </li>
          </ul>
        </nav>
        <button className="btn-nav" onClick={showNavbar}>
          <FaBars/>
        </button>
      </div>
    </header>
  );
};

export { Nav };