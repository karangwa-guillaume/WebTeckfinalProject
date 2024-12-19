import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: service?.id || '',
    serviceName: service?.name || '',
    carModel: '',
    plateNumber: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/bookings', formData);
      if (response.status === 200) {
        alert('Booking successfully created!');
        navigate('/confirmation', { state: { booking: response.data } });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to create booking.');
    }
  };

  return (
    <div className="booking-page">
      
      <form onSubmit={handleSubmit} className="booking-form">
      <h1 className="page-title"> Service Booking</h1>
        <div className="form-row">
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
        </div>
        <div className="form-row">
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
            <label>Car Model</label>
            <input
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Plate Number</label>
            <input
              type="text"
              name="plateNumber"
              value={formData.plateNumber}
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
        <button type="submit" className="submit-btn">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
