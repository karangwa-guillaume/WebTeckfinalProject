import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesPage.css'; // Add your CSS

const ServicesPage = () => {
  const navigate = useNavigate();

  // Sample service data (can be fetched from an API)
  const services = [
    {
      id: 1,
      name: 'Exterior Wash',
      image: '/assets/hero2.jpeg',
      price: '$25',
    },
    {
      id: 2,
      name: 'Interior Cleaning',
      image: '/assets/interior1.jpeg',
      price: '$40',
    },
    {
      id: 3,
      name: 'Waxing',
      image: '/assets/wax-polish.jpeg',
      price: '$30',
    },
    {
      id: 4,
      name: 'Full Package',
      image: '/assets/full wash.jpeg',
      price: '$60',
    },
    {
      id: 5,
      name: 'Home Service',
      image: '/assets/homeWash.jpeg',
      price: '$50',
    },
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
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p className="service-price">Price: {service.price}</p>
            <button onClick={() => handleSelectService(service)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
