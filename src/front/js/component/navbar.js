import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/webLogo.png";
import "../../styles/navbar.css";


export const Navbar = ({ cart }) => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      <img src={logo} width="80" height="80" alt="Logo" />
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/CardSet">Card Set</a>
      </li>
    </ul>
  </div>
    
  
  <div className="navbar-right">
   <a href="/cart" className="cart-icon" aria-label="Shopping Cart">
     <i className="fas fa-shopping-cart"></i>
     <span className="cart-count">0</span>
  
  
  </a>
  <a href="/" className="user-icon" aria-label="User Account">
  
  <div className="dropdown">
  <button
  className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <SignInIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
              <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
            </ul>
          </div>
    
  </a> </div>
</nav>
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




// export const Navbar = ({ cart }) => {
//   return (
      

//     <nav className="navbar navbar-expand-lg pb-4 navbar-light" style={{ backgroundColor: "black" }}>
    

//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} width="100" height="100" alt="Logo" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/cardset">Sets</Link>
//             </li>
                
//            <li className="nav-item">
              
//               <Link className="nav-link text-white" to="/Checkout_process"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
//   <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
// </svg></Link>
//             </li>
//           </ul>
//           <div className="dropdown">
//             <button
//               className="btn btn-secondary dropdown-toggle"
//               type="button"
//               id="dropdownMenuButton"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <SignInIcon />
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
//               <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
   
//   );

// };
