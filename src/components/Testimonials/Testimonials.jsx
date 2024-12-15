import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Patrick Dush',
      feedback: 'Excellent service! My car looks brand new every time.',
      image: '/assets/patrick.jpeg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Friendly staff and fast service. Highly recommend!',
      image: '/assets/jane.jpeg',
    },
    {
      id: 3,
      name: 'Guillaume Kar',
      feedback: 'Great value for money. I love their home service option.',
      image: '/assets//guillaume.jpeg',
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>"{testimonial.feedback}"</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
