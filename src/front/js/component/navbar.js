import React from "react";
import { Link } from "react-router-dom";
import  logo from "../../img/logo_swcs.jpg";
import "../../styles/navbar.css";


export const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg pb-4 navbar-light " style={{ backgroundColor: "black" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src={logo} width="50" height="50"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/shop-cart">Shop Cart</Link>
            </li>
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sign In
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
              <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
