import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Exterior Wash',
      description: 'Keep your car spotless with our premium exterior washing service.',
      image: '/assets/hero2.jpeg',
    },
    {
      id: 2,
      title: 'Interior Detailing',
      description: 'Thorough cleaning and detailing to make your car’s interior like new.',
      image: '/assets/interior1.jpeg',
    },
    {
      id: 3,
      title: 'Wax & Polish',
      description: 'Add shine and protect your car with our waxing and polishing service.',
      image: '/assets/wax-polish.jpeg',
    },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="btn-primary">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
