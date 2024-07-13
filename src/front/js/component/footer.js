import React from 'react';
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Contact Information</h5>
            <p>Email: contact@starwars.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Star Wars Street, Galaxy Far Far Away</p>
          </div>
          <div className="col-md-6 mb-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com/starwars" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/starwars" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com/company/starwars" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}