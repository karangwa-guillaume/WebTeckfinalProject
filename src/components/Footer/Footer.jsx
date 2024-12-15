import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We provide premium car wash services tailored to your needs. Our team ensures your car gets the care it deserves.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/About-Us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> +250 123 456 7890</p>
          <p><i className="fas fa-envelope"></i> support@carwash.com</p>
          <p><i className="fas fa-map-marker-alt"></i> KK425st Car Wash , Kigali-Gikondo</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 CarWash. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
