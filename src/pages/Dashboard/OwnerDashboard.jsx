// src/pages/OwnerDashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OwnerDashboard.css'; // Import CSS for styling

const OwnerDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in and has the correct role
    const role = localStorage.getItem('role');
    if (role !== 'OWNER') {
      navigate('/login');
    }
  }, [navigate]);

  const handleServices = () => {
    navigate('/ManageServices'); // Navigate to services management page
  };

  const handleBookings = () => {
    navigate('/ManageBookings'); // Navigate to bookings management page
  };

  const handleEmployees = () => {
    navigate('/ManageEmployees'); // Navigate to employees management page
  };

  const handleReports = () => {
    navigate('/GenerateReports'); // Navigate to reports page
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="owner-dashboard-container">
      <div className="dashboard-header">
        <h2>Owner Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="dashboard-content">
        <div className="card" onClick={handleServices}>
          <h3>Manage Services</h3>
          <p>Add, edit, or delete car wash services.</p>
        </div>
        <div className="card" onClick={handleBookings}>
          <h3>Manage Bookings</h3>
          <p>View and manage customer bookings.</p>
        </div>
        <div className="card" onClick={handleEmployees}>
          <h3>Manage Employees</h3>
          <p>View and manage employee details and schedules.</p>
        </div>
        <div className="card" onClick={handleReports}>
          <h3>Generate Reports</h3>
          <p>Generate business performance reports.</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
