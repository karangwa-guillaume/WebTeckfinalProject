import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const serviceData = [
  {
    id: 1,
    title: 'Exterior Wash',
    description: 'Our premium exterior wash service ensures your car’s exterior shines like new. This includes a thorough wash, rinse, and dry with high-quality products to remove dirt, grime, and road salt, leaving your car spotless and protected.',
    image: '/assets/hero2.jpeg',
    price: '$25',
  },
  {
    id: 2,
    title: 'Interior Detailing',
    description: 'Transform your car’s interior with our meticulous detailing service. We clean and sanitize all surfaces, vacuum seats and carpets, and remove stains and odors. Your car’s interior will look and feel fresh and rejuvenated.',
    image: '/assets/interior1.jpeg',
    price: '$40',
  },
  {
    id: 3,
    title: 'Wax & Polish',
    description: 'Enhance your car’s shine and protect its paint with our waxing and polishing service. This process adds a protective layer to your car’s surface, shielding it from harmful UV rays and environmental contaminants, while providing a mirror-like finish.',
    image: '/assets/wax-polish.jpeg',
    price: '$30',
  },
];

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceData.find((s) => s.id === parseInt(serviceId, 10));

  if (!service) {
    return <p className="error-message">Service not found.</p>;
  }

  return (
    <div className="service-details">
      <img src={service.image} alt={service.title} />
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <p className="service-price">Price: {service.price}</p>
      <button className="back-button" onClick={() => navigate('/services')}>
        Back to Services
      </button>
    </div>
  );
};

export default ServiceDetails;
