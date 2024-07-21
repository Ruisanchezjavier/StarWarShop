import React from 'react';
import "../../styles/footer.css";
import logo from "../../img/logo_swcs.jpg";
export const Footer = () => {
  return (
<footer className="star-wars-footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={logo}/>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/CardSet">Card Set</a>
          
        </div>
        <div className="footer-social">
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TrinityCodeLab. All rights reserved.</p>
      </div>
    </footer>
  );
}