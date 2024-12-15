// src/pages/BookingPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingPage.css'; // Add your CSS

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Receive the data from the ServicePage
  const { service } = location.state || {}; // Get the service from the passed state
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: service?.id || '', // Pre-fill service ID
    serviceName: service?.name || '', // Pre-fill service name
    carModel: '',
    preferredTime: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit the booking data to backend
      const response = await axios.post('/api/bookings', formData);

      if (response.status === 200) {
        alert('Booking successfully created!');
        navigate('/confirmation'); // Redirect to confirmation page
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to create booking.');
    }
  };

  return (
    <div className="booking-page">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Service</label>
          <input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="form-group">
          <label>Car Model</label>
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Preferred Time</label>
          <input
            type="datetime-local"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
