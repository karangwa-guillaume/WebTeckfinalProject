// src/pages/ServicePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css'; // Add your CSS

const ServicesPage = () => {
  const navigate = useNavigate();

  // Sample service data (can be fetched from an API)
  const services = [
    { id: 1, name: 'Exterior Wash' },
    { id: 2, name: 'Interior Cleaning' },
    { id: 3, name: 'Waxing' },
    { id: 4, name: 'Full Package' },
    { id: 5, name: 'Home Service' },

  ];

  // Handle service selection
  const handleSelectService = (service) => {
    navigate('/booking', { state: { service } }); // Pass service data to BookingPage
  };

  return (
    <div className="service-page">
      <h2>Select a Service</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <button onClick={() => handleSelectService(service)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
