import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🚗',
      title: 'Eco-Friendly',
      description: 'We use water-saving techniques and eco-friendly cleaning products.',
    },
    {
      id: 2,
      icon: '⏱️',
      title: 'Fast Service',
      description: 'Quick and efficient service to save you time.',
    },
    {
      id: 3,
      icon: '💸',
      title: 'Affordable Prices',
      description: 'High-quality car wash services at competitive rates.',
    },
    {
      id: 4,
      icon: '🌟',
      title: 'Excellent Reviews',
      description: 'Trusted by hundreds of satisfied customers.',
    },
  ];

  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
