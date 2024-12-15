// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const role = localStorage.getItem('role');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    // Clear the token and role from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');

    // Redirect to login page
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="/assets/car_logo.jpeg" alt="Car Wash Logo" className="logo" />
          <h1 className="navbar-title">Car Wash App </h1>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/payment">Make Payment</Link>

          {role === 'CUSTOMER' && <Link to="/customer-dashboard">Dashboard</Link>}
          {role === 'OWNER' && <Link to="/owner-dashboard">Dashboard</Link>}
        </div>
      </div>
      <div className="navbar-right">
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        {!token ? (
          <Link to="/login" className="login-button">Login</Link>
        ) : (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
