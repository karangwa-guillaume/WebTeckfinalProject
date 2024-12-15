// src/components/ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, className }) => {
  return (
    <div className={`service-card ${className}`}>
      <img src={service.image} alt={service.name} className="service-image" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button className="btn-primary">Book Now</button>
    </div>
  );
};

export default ServiceCard;
