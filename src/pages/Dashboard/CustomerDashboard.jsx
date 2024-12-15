// src/pages/CustomerDashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerDashboard.css'; // Import CSS for styling

const CustomerDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in and has the correct role
    const role = localStorage.getItem('role');
    if (role !== 'CUSTOMER') {
      navigate('/login'); // Redirect if not a customer
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    navigate('/login');
  };

  const handleBooking = () => {
    navigate('/BookingPage'); // Navigate to the booking page
  };

  const handleProfile = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  const handleHistory = () => {
    navigate('/BookingHistory'); // Navigate to the booking history page
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Customer Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard-content">
        <div className="card" onClick={handleBooking}>
          <h3>Book a Service</h3>
          <p>Schedule a car wash service conveniently.</p>
        </div>
        <div className="card" onClick={handleProfile}>
          <h3>Profile</h3>
          <p>Update your account details and preferences.</p>
        </div>
        <div className="card" onClick={handleHistory}>
          <h3>Service History</h3>
          <p>View your past service bookings and invoices.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
