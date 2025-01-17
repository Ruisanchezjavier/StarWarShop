import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import logo from "../../img/webLogo.png";
import "../../styles/navbar.css";


export const Navbar = () => {
  const { store, actions } = useContext(Context)

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 7);
    });
  });

  return (
    <header className={`headerMain ${scroll ? "sticky" : ""}`}>

      <nav className="navbar" >
        <div className="navbar-left">
          <Link to="/"><a className="logo">
            <img src={logo} width="150" height="90" />
          </a></Link>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
            <Link to="/">Home</Link> 
            </li>
            <li>
            <Link to="/AboutUs">About Us</Link> 
            </li>
            <li>
            <Link to="/CardSet">Card Set</Link> 
            </li>
          </ul>
        </div>


        <div className="navbar-right">
          <Link to="/Cart"><a className="cart-icon" aria-label="Shopping Cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">
              <span>{store.cartItems.length}</span>
            </span>
          </a></Link>


          <a href="/" className="user-icon" aria-label="User Account">

            <div className="btn-group dropstart">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <SignInIcon />
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                <li><Link className="dropdown-item" to="/profile">User profile</Link></li>
                </ul>

             
            </div>

          </a> </div>
      </nav>
    </header>

  );
};

const SignInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-person-circle"
    viewBox="0 0 16 16"
  >
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    <path
      fillRule="evenodd"
      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
    />
  </svg>
);
